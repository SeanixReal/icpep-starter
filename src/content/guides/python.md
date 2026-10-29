---
title: Set up Python
description: Install a Python runtime and connect it to your editor.
order: 4
category: setup
duration: 10–20 min
reviewed: '2026-10-29'
status: draft
sources:
  - title: Python — Using Python on Windows
    url: https://docs.python.org/3/using/windows.html
  - title: Python — Downloads for Windows
    url: https://www.python.org/downloads/windows/
  - title: Microsoft — Python environments in VS Code
    url: https://code.visualstudio.com/docs/python/environments
---

Python runs your source files through a **runtime**, also called an interpreter. The VS Code extension helps you work with that runtime; the extension alone cannot run a Python program.

> **Proposed version:** the Python 3.14 series, installed through the official Python install manager. The department must confirm the series and exact pilot version before release. This is a candidate environment, not a claim that 3.14 is the latest Python release.

## Install the Python install manager

Open the [official Windows downloads page](https://www.python.org/downloads/windows/). Choose the **Python install manager** offered by the Python Software Foundation. Use the current official Windows instructions if the download options change.

Run the manager installer and follow its prompts. On a managed device, stop and ask IT if installation is blocked. Open a **new PowerShell terminal** after installation so new commands can be discovered.

An existing Python installation may use an older launcher. If you already have Python for a course, do not uninstall it just to match this draft. Check with your instructor first; the troubleshooting page explains how to gather the command information.

## Install the proposed runtime

In **PowerShell**, use the install manager to add the proposed series:

```powershell
py install 3.14
```

After it finishes, select that series explicitly:

```powershell
py -3.14 --version
```

You should see a version beginning with `Python 3.14`. Write down the complete result for review. Selecting a series explicitly helps prevent a different installed Python version from being used by accident.

If `py install` tries to open a file named `install`, an older launcher may be taking precedence. Consult the [Python command troubleshooting](/troubleshooting/#python-launcher) before changing your installation.

## Choose it in VS Code

Open the practice folder in VS Code and create a file named `hello.py`. With that file open, press **Ctrl+Shift+P**, choose **Python: Select Interpreter**, and select the installed Python 3.14 interpreter. If it is not listed, restart VS Code and check the official environment instructions below.

Interpreter selection affects editor features and some run actions. The verification guide still uses `py -3.14` in PowerShell so the command is unambiguous. You do not need to install extra Python packages for the sample program.

## Check what comes next

The version command checks discovery only. The real setup check is saving and running `hello.py` from your practice folder. Continue through Git/GitHub if you want to keep your work in version control, then complete the [verification procedures](/guides/verify/).
