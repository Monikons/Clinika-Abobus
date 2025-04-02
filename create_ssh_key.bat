@echo off
setlocal enabledelayedexpansion

for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set datetime=%%I
set timestamp=%datetime:~0,8%_%datetime:~8,6%

set /p key_type="Enter subname for key (example, deploy, github): "

set filename=%timestamp%_%key_type%

ssh-keygen -t ed25519 -f "%CD%\%filename%" -N ""

if not exist ".gitignore" echo. > .gitignore
findstr /C:"%filename%" .gitignore >nul || echo %filename%>> .gitignore
findstr /C:"%filename%.pub" .gitignore >nul || echo %filename%.pub>> .gitignore

exit /b
