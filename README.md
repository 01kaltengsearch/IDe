# WebForge IDE MVP

Starter IDE desktop Windows: Electron + React + TypeScript + Monaco Editor, file explorer, editor, sandboxed static HTML preview, and Ollama chat.

## Run on Windows
1. Install Node.js LTS (Node 20/22): https://nodejs.org/
2. Extract this ZIP and open the folder in PowerShell.
3. Run:
   ```powershell
   npm install
   npm run electron:dev
   ```

## Enable local AI
1. Install Ollama: https://ollama.com/download
2. In PowerShell run:
   ```powershell
   ollama pull qwen2.5-coder:7b
   ```
3. Start WebForge, choose `Ollama` in the AI provider dropdown and set model name to `qwen2.5-coder:7b`.
   If the machine cannot handle a 7B model, choose a smaller model compatible with your RAM.

## Build Windows installer
```powershell
npm run build
```
The installer should appear in `release` if packaging succeeds.

## MVP limitations
- Demo mode does not call an AI model; Ollama mode uses Ollama's local `/api/chat` endpoint.
- AI answers are chat suggestions, not an autonomous agent yet. It does not write model output to disk automatically.
- Project file writes are limited to files inside the selected project. New files should currently be created using Windows Explorer, then click Refresh.
- Static preview is available for the demo. Framework apps (Vite/Next/React) should run their dev server separately; embedded URL preview will be added later.
- No terminal commands are executed by AI. Review code before using it.
- Keep secrets and API keys out of prompts.

## Install without Node.js on your Windows PC
The installed desktop app bundles Electron/Node runtime, so the end-user computer does **not** need Node.js. A Windows installer (`.exe`) must first be built once.

### Build the installer in GitHub Actions (no local Node.js required)
1. Create a GitHub repository and upload/push this project, including `.github/workflows/build-windows.yml`.
2. On GitHub, open **Actions** → **Build Windows Installer** → **Run workflow**.
3. After the workflow finishes, open its run page and download the `WebForge-IDE-Windows-Installer` artifact.
4. Extract the artifact ZIP and run `WebForge-IDE-Setup-0.1.0-x64.exe` on Windows.

Node.js is used only on GitHub's build runner, not on your PC. The app's optional Ollama integration still requires Ollama and a downloaded model separately; the IDE installer does not bundle an AI model.
