@echo off
cd /d "%~dp0"
set "NODE_EXE=node"
where node >nul 2>nul
if not %ERRORLEVEL%==0 (
  set "NODE_EXE=C:\Users\User\AppData\Local\OpenAI\Codex\bin\node.exe"
)
if not exist "%NODE_EXE%" if not "%NODE_EXE%"=="node" (
  echo Could not find Node.js. Please open the app from Codex or install Node.js.
  pause
  exit /b 1
)
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -like '*preview-server.js*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }" >nul 2>nul
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-NetTCPConnection -LocalPort 4173 -ErrorAction SilentlyContinue | Where-Object { $_.OwningProcess -gt 0 } | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force }" >nul 2>nul
start "Property X Factors server" /min "%NODE_EXE%" preview-server.js
powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 1" >nul 2>nul
start "" "http://127.0.0.1:4173/index.html"
