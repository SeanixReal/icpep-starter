---
title: A note for Mac users
description: Understand what changes on a Mac before following Windows instructions.
order: 7
category: reference
duration: 10 min read
reviewed: '2026-10-29'
status: draft
sources:
  - title: Apple — Install command line developer tools
    url: https://developer.apple.com/documentation/xcode/installing-the-command-line-tools
  - title: Microsoft — VS Code on macOS
    url: https://code.visualstudio.com/docs/setup/mac
  - title: Python — Using Python on a Mac
    url: https://docs.python.org/3/using/mac.html
  - title: Git — Installing Git
    url: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
---

The main setup path uses Windows PowerShell, MSYS2, and Windows executable names. Those details do not transfer directly to macOS. These notes are a starting point for review, not a fully pilot-tested Mac setup guide.

## Choose Mac downloads

Use the [official VS Code macOS instructions](https://code.visualstudio.com/docs/setup/mac). Choose a download that matches Apple silicon or Intel, or the Universal build when offered. The Microsoft C/C++ and Python extensions still provide editor features; runtimes and compilers are separate.

Do not install MSYS2 or add a Windows folder such as `C:\msys64\ucrt64\bin` on a Mac.

## Understand the compiler difference

Apple's Command Line Tools include Clang, a different compiler from the GCC candidate in the Windows path. In **macOS Terminal**, Apple's documented installation entry point is:

```bash
xcode-select --install
```

Read the system prompts. This may require permission, storage, and a compatible macOS version. If the tools are already installed, check the available compiler with `clang --version` and `clang++ --version`.

After installation, a proposed equivalent check is:

```bash
clang -Wall -Wextra hello.c -o hello-c
./hello-c
clang++ -Wall -Wextra hello.cpp -o hello-cpp
./hello-cpp
```

Run each command separately and stop if a compile command fails. The sample source files are the same, but the commands and executable names differ. Faculty must confirm that this environment is suitable for your course.

## Use a separate Python runtime

Follow the [Python project's Mac instructions](https://docs.python.org/3/using/mac.html) to install an appropriate runtime. Do not remove or replace Python components supplied by Apple or Xcode. On a Mac, the command is usually `python3`, not the Windows `py` launcher.

Check which interpreter is selected, then run the saved sample:

```bash
python3 --version
python3 hello.py
```

These commands do not guarantee the interpreter is the department's chosen version. Select the matching interpreter in VS Code and record its version for review.

## Ask for a platform review

Git basics and the learning roadmap apply across platforms. Installation details still need separate review on the specific macOS version and chip type. Tell RDC which device you use and where a guide becomes unclear. Never run a PowerShell command on macOS simply because it looks similar.
