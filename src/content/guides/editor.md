---
title: Set up VS Code
description: Give your code a home, then add the extensions you actually need.
order: 2
category: setup
duration: 10–15 min
reviewed: '2026-10-29'
status: draft
sources:
  - title: Microsoft — VS Code on Windows
    url: https://code.visualstudio.com/docs/setup/windows
  - title: Microsoft — VS Code extension marketplace
    url: https://code.visualstudio.com/docs/configure/extensions/extension-marketplace
  - title: Microsoft — Integrated terminal
    url: https://code.visualstudio.com/docs/terminal/basics
---

VS Code is the place you will edit your programs and read terminal output. The compiler and Python runtime come in the next guides; adding an extension does not install either of them.

## Install the editor

1. Open the [official VS Code download page](https://code.visualstudio.com/download).
2. Choose the Windows download that matches your device. The User Installer is a useful candidate for a personal Windows computer; managed devices may need IT support.
3. Run the installer and read the options. If offered, enable **Add to PATH** so a new terminal can find the `code` command. Keep the remaining defaults unless your course or IT team says otherwise.
4. Finish installation. Close old terminals and open VS Code from the Start menu.

The installer version used for the eventual student release must be recorded during faculty review. This draft does not claim a verified editor version.

## Open your practice folder

Choose **File → Open Folder**, then select the `cpe-practice` folder you made in the readiness guide. Only trust folders whose contents you understand. Do not mark unfamiliar downloaded projects trusted simply to remove a warning.

The Explorer panel on the left lists files in this folder. Use its **New File** action to create source files later. Save your files before running a command; the terminal reads the saved file, not an unsaved editor tab.

## Add two language extensions

Open **Extensions** from the left activity bar. Search for the exact extension identifiers and check the publisher:

| Extension | Publisher | Purpose |
| --- | --- | --- |
| `ms-vscode.cpptools` | Microsoft | C/C++ editing and debugging support |
| `ms-python.python` | Microsoft | Python editing and interpreter selection |

These are proposed choices for faculty review. You do not need Code Runner or a large extension pack to follow this toolkit. We use explicit terminal commands so you can see which program is running your code.

## Open a PowerShell terminal

Use **Terminal → New Terminal**. Check the terminal profile name. For Windows commands in this toolkit, choose **PowerShell** from the terminal dropdown. Some devices show “Windows PowerShell”; that is also suitable for these basic commands.

In the terminal, type:

```powershell
Get-Location
```

The result should be your practice folder. If it is somewhere else, open the correct folder in VS Code and create a new terminal. This avoids the most common first-run problem: running a command in the wrong directory.

You are ready for the next guide when VS Code shows your practice folder, the language extensions are installed, and you can open a PowerShell terminal there.
