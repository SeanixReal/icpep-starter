---
title: Git & GitHub
description: Keep a history of your work and learn how to share it safely.
order: 5
category: setup
duration: 15–25 min
reviewed: '2026-10-29'
status: proposed
sources:
  - title: "Git: Official Windows download"
    url: https://git-scm.com/install/windows
  - title: "Git: First-time Git setup"
    url: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
  - title: "GitHub: Set up Git"
    url: https://docs.github.com/en/get-started/git-basics/set-up-git
  - title: "GitHub: Set your commit email address"
    url: https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address
  - title: "GitHub: Add locally hosted code"
    url: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
---

**Git** records changes on your computer. **GitHub** hosts repositories online. They work together, but you can make local commits without a GitHub account or an internet connection.

Git is helpful for your coursework and for contributing to this toolkit. It is not required to compile the C/C++ examples or run Python.

## Install and identify yourself

Download Git from the [official Windows page](https://git-scm.com/install/windows). Read the installer options and use the standard command-line integration unless your course specifies otherwise. Open a new **PowerShell** terminal and run:

```powershell
git --version
```

Set the name and email used on your commits. Replace the example values before running these commands:

```powershell
git config --global user.name "Your Name"
git config --global user.email "YOUR_GITHUB_NOREPLY_ADDRESS"
```

Find your actual GitHub-provided `noreply` address in **GitHub → Settings → Emails** if you want to keep your personal email private. The placeholder above is not a working address. Global settings apply to your user account on this computer; on shared devices, ask for guidance and use repository-local settings instead.

## Make a local repository

Open your `cpe-practice` folder in VS Code. In its **PowerShell terminal**, check the folder with `Get-Location`, then run:

```powershell
git init
```

Create a file called `.gitignore` containing:

```text
*.exe
__pycache__/
.env
```

This keeps generated executables and a common secrets filename out of future commits. Ignoring a file does not remove it if it was already committed. Never add passwords, access tokens, private student records, or API keys to a repository.

## Save your first snapshot

After you have saved the verification source files in this folder, stage only those files and the ignore file:

```powershell
git add .gitignore hello.c hello.cpp hello.py
git status
git commit -m "Add first CpE programs"
```

Read `git status` before committing. Git creates a local snapshot; it has not uploaded anything.

## Optional: share on GitHub

Create a GitHub account if you want remote hosting. Create an **empty private practice repository** first; leave its README and license options unchecked when attaching this existing local repository. Copy its HTTPS repository URL from GitHub. Substitute your own URL below:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Complete the supported browser sign-in through Git's credential manager when requested. Your GitHub account password is not a Git HTTPS password. Do not paste tokens into source files or chat messages.

For this club's contribution process, see [CONTRIBUTING.md](https://github.com/SeanixReal/icpep-starter/blob/main/CONTRIBUTING.md). Never force-push to a shared branch to fix a beginner error; ask a maintainer for help.
