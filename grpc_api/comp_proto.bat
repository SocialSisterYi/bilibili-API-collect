@ echo off
rem 递归编译proto
set lang="python"
set patch=%CD%
for /r %patch% %%a in (*.proto) do (
    protoc.exe -I %patch% --%lang%_out=. %%~fa
    echo comp %%~fa ok!
)