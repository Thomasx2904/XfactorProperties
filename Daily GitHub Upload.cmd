@echo off
setlocal

set "APP_DIR=%~dp0"
set "GIT_EXE=C:\Users\User\AppData\Local\GitHubDesktop\app-3.5.8\resources\app\git\cmd\git.exe"
set "LOG_FILE=%APP_DIR%daily-github-upload.log"

if not exist "%GIT_EXE%" (
  echo [%date% %time%] GitHub Desktop Git was not found at %GIT_EXE%. >> "%LOG_FILE%"
  exit /b 1
)

cd /d "%APP_DIR%"

echo. >> "%LOG_FILE%"
echo [%date% %time%] Daily GitHub upload started. >> "%LOG_FILE%"

"%GIT_EXE%" add app.js index.html styles.css README.md preview-server.js ".gitignore" ".gitattributes" "Start Property X Factors.cmd" "Start Property X Factors Server.cmd" "Daily GitHub Upload.cmd" sample-import.csv >> "%LOG_FILE%" 2>&1

"%GIT_EXE%" diff --cached --quiet
if %errorlevel% equ 0 (
  echo [%date% %time%] No app changes to upload. >> "%LOG_FILE%"
  exit /b 0
)

for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set "STAMP=%%a-%%b-%%c"
for /f "tokens=1-2 delims=: " %%a in ("%time%") do set "TIME_STAMP=%%a%%b"

"%GIT_EXE%" commit -m "Daily property app update %STAMP% %TIME_STAMP%" >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
  echo [%date% %time%] Commit failed. >> "%LOG_FILE%"
  exit /b 1
)

"%GIT_EXE%" push origin main >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
  echo [%date% %time%] Push failed. Open GitHub Desktop and push manually. >> "%LOG_FILE%"
  exit /b 1
)

echo [%date% %time%] Daily GitHub upload finished successfully. >> "%LOG_FILE%"
exit /b 0
