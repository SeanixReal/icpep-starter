---
title: Set up C & C++
description: Install a compiler and make sure Windows knows where to find it.
order: 3
category: setup
duration: 20–30 min
reviewed: '2026-10-29'
status: draft
sources:
  - title: Microsoft — Using GCC with MinGW in VS Code
    url: https://code.visualstudio.com/docs/cpp/config-mingw
  - title: MSYS2 — Getting started
    url: https://www.msys2.org/
  - title: MSYS2 — Updating the installation
    url: https://www.msys2.org/docs/updating/
  - title: MSYS2 — Environments
    url: https://www.msys2.org/docs/environments/
---

> **Proposed toolchain:** MSYS2 UCRT64 with GCC for an x64 Windows device. Faculty confirmation and a real-device pilot are pending. If your subject uses another compiler or IDE, check with your instructor before following this path.

An editor stores your source code. A **compiler** turns C or C++ source into an executable program. This guide prepares the compiler; you will compile both sample programs in [Run your first programs](/guides/verify/).

## Install MSYS2

Download the x64 installer from [MSYS2's official site](https://www.msys2.org/) and follow its installation prompts. This draft assumes the usual `C:\msys64` installation folder. If you choose a different location, use that location in the PATH step below.

Open **MSYS2 UCRT64** from Start. Check the terminal name carefully: MSYS, MINGW64, and UCRT64 are different environments. Package installation commands below belong in **MSYS2 UCRT64**, not PowerShell.

## Update and install the compiler

In **MSYS2 UCRT64**, update its packages:

```bash
pacman -Syu
```

Read the prompts. If the update asks to close the terminal, let it finish, close it, reopen MSYS2 UCRT64, and run the update command again. Do not interrupt an active package installation.

Then install the UCRT64 toolchain using the command in Microsoft's GCC setup guide:

```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

When asked for a package selection, Enter accepts the default selection. Review the download and space summary, then confirm if you are ready. Wait for the command prompt to return. These commands install development tools; they do not compile your class files yet.

## Add the compiler to your user PATH

**PATH** is the list of folders Windows searches for commands.

1. Search Start for **Edit environment variables for your account**.
2. Under **User variables**, select **Path**, then **Edit**.
3. Add a **new entry** containing `C:\msys64\ucrt64\bin`. Adjust it if you installed MSYS2 elsewhere.
4. Confirm the dialogs. Keep the existing entries; do not replace the whole PATH value.
5. Close all VS Code windows and old terminals. Open VS Code again and create a new PowerShell terminal.

Do not add the MSYS2 `usr\bin` folder as a substitute. This draft is using the native Windows UCRT64 tools.

## Check the commands

In the new **PowerShell** terminal, run each command separately:

```powershell
gcc --version
```

```powershell
g++ --version
```

Both should show version information. That proves the commands can be found; it does not yet prove a program compiles and runs. If either command is unrecognized, revisit the PATH entry and terminal restart before reinstalling anything.

Record the displayed versions for the pilot review. Do not assume the newest package automatically matches a course's required version. Continue to Python, then the verification guide to compile and run your first C and C++ programs.
