
const crypto = require('crypto');

/**
 * Generate HMAC-SHA256 signature
 * @param {string} key     The key string to use for the HMAC-SHA256 hash
 * @param {string} message The message string to hash
 * @returns {string} The HMAC-SHA256 signature as a hex string
 */
function hmacSha256(key, message) {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(message);
    return hmac.digest('hex');
}

/**
 * Get Bilibili web ticket
 * @param {string} csrf    CSRF token, can be empty or null
 * @returns {Promise<any>} Promise of the ticket response in JSON format
 */
async function getBiliTicket(csrf) {
    const ts = Math.floor(Date.now() / 1000);
    const hexSign = hmacSha256('XgwSnGZ1p', `ts${ts}`);
    const url = 'https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket';
    const params = new URLSearchParams({
        key_id: 'ec02',
        hexsign: hexSign,
        'context[ts]': ts,
        csrf: csrf || ''
    });
    const response = await fetch(`${url}?${params.toString()}`, {
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0'
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

(async () => {
    try {
        const ticketResponse = await getBiliTicket(''); // use empty CSRF here
        console.log(ticketResponse);
    } catch (e) {
        console.error('Failed to get BiliTicket:', e);
    }
})();
