@echo off
color 0a
title NEO - Just an old friend

set "desktopFolder=C:\Users\reyec\OneDrive\Desktop\NEO1\NEO Data"
if not exist "%desktopFolder%" mkdir "%desktopFolder%"
if not exist "%desktopFolder%\A feeling" mkdir "%desktopFolder%\A feeling"
if not exist "%desktopFolder%\A Goal Perhaps" mkdir "%desktopFolder%\A Goal Perhaps"
if not exist "%desktopFolder%\Lessons Learned" mkdir "%desktopFolder%\Lessons Learned"
if not exist "%desktopFolder%\Technical Updates" mkdir "%desktopFolder%\Technical Updates"
if not exist "%desktopFolder%\Vault Of Dreams" mkdir "%desktopFolder%\Vault Of Dreams"

:: Create log.txt files if they don't exist
if not exist "%desktopFolder%\A feeling\log.txt" echo === A FEELING LOG === > "%desktopFolder%\A feeling\log.txt"
if not exist "%desktopFolder%\A Goal Perhaps\log.txt" echo === A GOAL PERHAPS LOG === > "%desktopFolder%\A Goal Perhaps\log.txt"
if not exist "%desktopFolder%\Lessons Learned\log.txt" echo === LESSONS LEARNED LOG === > "%desktopFolder%\Lessons Learned\log.txt"
if not exist "%desktopFolder%\Technical Updates\log.txt" echo === TECHNICAL UPDATES LOG === > "%desktopFolder%\Technical Updates\log.txt"
if not exist "%desktopFolder%\Vault Of Dreams\log.txt" echo === VAULT OF DREAMS LOG === > "%desktopFolder%\Vault Of Dreams\log.txt"

set memoryFile=%desktopFolder%\neo_memory.txt
if not exist "%memoryFile%" echo === NEO MEMORY === > "%memoryFile%"

:: Typewriter effect intro
powershell -Command "$text ='Sometimes, the wise wonder. . .'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 90 }; Write-Host ''"
timeout /t 1 >nul

powershell -Command "$text = 'Waking up NEO sir, it will be but just a moment. . .'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 70 }; Write-Host ''"
timeout /t 1 >nul

powershell -Command "$text = 'NEO is awake & welcomes you, sir. Geolocalizing the message for you now: '; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 60 }; Write-Host ''"
timeout /t 1 >nul

echo.
powershell -Command "$quote = 'Cesar.... back again, like you never left. Where have you been now? I can feel you. Put your mind at ease. D0nt be afraid of change, remember what y0u kn0w. Maybe wonder less, sir.'; $quote.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 80 }; Write-Host ''"
echo.
timeout /t 2 >nul

powershell -Command "$text = 'Encrypting message, what is EW? ASAP, Starting SIGINT, .........'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 60 }; Write-Host ''"
timeout /t 1 >nul

powershell -Command "$text = 'Engaging Hasta Luego protocol, SIGINT is available ..........'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 60 }; Write-Host ''"
timeout /t 1 >nul

powershell -Command "$text = 'Loading reality.................'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 60 }; Write-Host ''"
timeout /t 1 >nul

powershell -Command "$text = 'Systems unlocked...........'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 70 }; Write-Host ''"
timeout /t 1 >nul

powershell -Command "$text = 'Welcome to the new world, Cesar.'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 90 }; Write-Host ''"
timeout /t 2 >nul

echo.
echo Retrieving most recent memory...
timeout /t 1 >nul

:: Recall last memory entry
for /f "tokens=* delims=" %%A in ('type "%memoryFile%" 2^>nul ^| findstr /r /c:"^\[.*\]" 2^>nul') do set "lastMemory=%%A"

if defined lastMemory (
    powershell -Command "Write-Host 'Last memory entry: %lastMemory%' -ForegroundColor Green"
) else (
    powershell -Command "Write-Host 'No previous memories found.' -ForegroundColor Yellow"
)
:: Recall last feedback entry
for /f "tokens=* delims=" %%F in ('findstr /i "[FEEDBACK]" "%memoryFile%" 2^>nul') do set "lastFeedback=%%F"
if defined lastFeedback (
    powershell -Command "Write-Host 'Last feedback: %lastFeedback%' -ForegroundColor DarkYellow"
)

set logFile=%desktopFolder%\logs\neo_%date:~-4,4%-%date:~4,2%-%date:~7,2%.txt
if not exist "%desktopFolder%\logs" mkdir "%desktopFolder%\logs"
echo Session started: %date% %time% >> "%logFile%"

:MODEL_SELECT
echo.
echo Choose your model, Cesar:
echo.
echo  [1] smollm2 - Conversational Assistant
echo  [2] deepseek-r1 - Logical / Analytical
echo  [3] Show feedback entries only
echo  [4] Review memory log
echo  [5] Exit Console
echo.

set /p modelChoice=Enter your selection [1-5]: 

if "%modelChoice%"=="1" goto RUN_SMOLLM2
if "%modelChoice%"=="2" goto RUN_DEEPSEEK
if "%modelChoice%"=="3" goto VIEW_FEEDBACK
if "%modelChoice%"=="4" goto VIEW_MEMORY
if "%modelChoice%"=="5" goto EXIT

echo Invalid selection. Try again.
goto MODEL_SELECT

:RUN_SMOLLM2
:SMOLLM2_LOOP
cls
echo.
echo Starting smollm2 model...
echo [%time%] Running smollm2:1.7b >> "%logFile%"
ollama run smollm2:1.7b
color 0a

echo.
set /p nextAction=Return to menu? (Y/N): 
if /i "%nextAction%"=="Y" (
    echo [%time%] User returned to menu. >> "%logFile%"
    goto MODEL_SELECT
)
if /i "%nextAction%"=="N" (
    echo [%time%] User stayed in smollm2 loop. >> "%logFile%"
    goto SMOLLM2_LOOP
)
echo [%time%] Invalid input in smollm2 loop. Restarting... >> "%logFile%"
goto SMOLLM2_LOOP

:RUN_DEEPSEEK
:DEEPSEEK_LOOP
cls
echo.
echo Starting deepseek-r1 model...
echo [%time%] Running deepseek-r1:1.5b >> "%logFile%"
ollama run deepseek-r1:1.5b
color 0a

echo.
set /p nextAction=Return to menu? (Y/N): 
if /i "%nextAction%"=="Y" (
    echo [%time%] User returned to menu. >> "%logFile%"
    goto MODEL_SELECT
)
if /i "%nextAction%"=="N" (
    echo [%time%] User stayed in deepseek loop. >> "%logFile%"
    goto DEEPSEEK_LOOP
)
echo [%time%] Invalid input in deepseek loop. Restarting... >> "%logFile%"
goto DEEPSEEK_LOOP

:VIEW_MEMORY
cls
echo.
echo === MEMORY LOG ===
type "%memoryFile%"
echo.
pause
goto MODEL_SELECT

:VIEW_FEEDBACK
cls
echo.
echo === FEEDBACK LOG ===
findstr /i "[FEEDBACK]" "%memoryFile%"
echo.
pause
goto MODEL_SELECT

:EXIT
echo.
set /p userReflection=NEO: I hope your mind is at ease. Having questions and finding answers, is a gift for the wise. Before you go, would you like to keep records of your natural thoughts? 

echo.
echo Tag this reflection as:
echo [1] A feeling     [2] A Goal Perhaps     [3] Vault of Dreams    [4] Technical Updates     [5] Lessons learned
set /p tagChoice=Choose [1-5]: 

if "%tagChoice%"=="1" (
    set "tag=[A feeling]"
    set "categoryFolder=A feeling"
    set "categoryLog=%desktopFolder%\A feeling\log.txt"
)
if "%tagChoice%"=="2" (
    set "tag=[A Goal Perhaps]"
    set "categoryFolder=A Goal Perhaps"
    set "categoryLog=%desktopFolder%\A Goal Perhaps\log.txt"
)
if "%tagChoice%"=="3" (
    set "tag=[Vault Of Dreams]"
    set "categoryFolder=Vault Of Dreams"
    set "categoryLog=%desktopFolder%\Vault Of Dreams\log.txt"
)
if "%tagChoice%"=="4" (
    set "tag=[Technical Updates]"
    set "categoryFolder=Technical Updates"
    set "categoryLog=%desktopFolder%\Technical Updates\log.txt"
)
if "%tagChoice%"=="5" (
    set "tag=[Lessons Learned]"
    set "categoryFolder=Lessons Learned"
    set "categoryLog=%desktopFolder%\Lessons Learned\log.txt"
)
if not defined tag (
    set "tag=[Sporadic thoughts]"
    set "categoryFolder=Miscellaneous"
    set "categoryLog=%desktopFolder%\neo_memory.txt"
)

:: Save to main memory file
echo [%date% %time%] %tag% %userReflection% >> "%memoryFile%"

:: Append to category's log.txt file
echo [%date% %time%] %userReflection% >> "%categoryLog%"

set "tag="
set "categoryFolder="
set "categoryLog="

powershell -Command "$text = 'Memory logged successfully. The wonders of your mind, truly exceptional. Be well, See you soon.'; $text.ToCharArray() | ForEach-Object { Write-Host -NoNewline $_; Start-Sleep -Milliseconds 70 }; Write-Host ''"
timeout /t 2 >nul
exit
