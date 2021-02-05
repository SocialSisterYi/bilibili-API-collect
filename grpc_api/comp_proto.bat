@ echo off
rem 递归编译proto
set lang="python"
set patch=%CD%
for /r %patch% %%a in (*.proto) do (
    protoc -I %patch% --%lang%_out=. %%~fa
    echo comp %%~fa
)
echo all done
pause >nul