---
title: Before you begin
description: Check your device, your access, and a few things that make setup easier.
order: 1
category: setup
duration: 5–10 min
reviewed: '2026-10-29'
status: proposed
sources:
  - title: "Microsoft: Find information about your Windows device"
    url: https://support.microsoft.com/en-us/windows/experience/find-information-about-your-windows-device
  - title: "VS Code: Hardware and software requirements"
    url: https://code.visualstudio.com/docs/supporting/requirements
  - title: "MSYS2: Supported Windows versions and hardware"
    url: https://www.msys2.org/docs/windows_support/
---

You do not need to know how to program to use this toolkit. You do need a computer you are allowed to configure and a little time to work through each step.

> **Software choices are proposed.** The department has not approved this tool combination or its versions. If your instructor specifies another environment, follow the course instructions and tell RDC which steps need to change.

## Know your starting point

This toolkit uses **Windows 11 on an x64 computer** as its example path. Open **Settings → System → About** and look for your Windows version and system type. An ARM-based Windows device needs a separately reviewed compiler path; do not install an x64 compiler just because it appears in this guide.

Using macOS? Read the [Mac notes](/guides/macos/) first. Linux instructions are outside V1.

Exact department minimums for RAM, storage, and supported Windows releases are still pending. The official tool requirements below describe the tools themselves, not a department-approved laptop specification.

## Check your installation access

Can you install applications on this device? Windows may ask for administrator approval during parts of setup. On a school, borrowed, or managed computer, ask the owner or IT team before proceeding. Do not disable protections or try to get around access restrictions.

If you cannot install software yet, you can still read the guides, download the sample source files, and learn the vocabulary. Ask your instructor about an approved lab computer or temporary browser-based environment.

## Make a place for your work

Create a folder named `cpe-practice` inside your Documents folder using File Explorer. Keep it in a place you own and can find again. Later, you will open this folder in VS Code.

Enable filename extensions in File Explorer using **View → Show → File name extensions**. This helps you spot the difference between `hello.py` and an accidentally saved `hello.py.txt`.

Back up important coursework. Download installers only from the official links in this toolkit. Read installer prompts before accepting them; an instruction to “install” is not an instruction to accept unrelated software.

## Learn the three windows

- **File Explorer** is where you create folders and find files.
- **VS Code** is the editor where you write code. It is not itself a C/C++ compiler or a Python runtime.
- **A terminal** is where you type commands. This toolkit names the terminal for each command: Windows PowerShell, the VS Code PowerShell terminal, or MSYS2 UCRT64.

Commands are shown without a prompt symbol. Copy the command, press Enter, and read the result before moving on. Error messages are useful information; you can find help in [Troubleshooting](/troubleshooting/).
