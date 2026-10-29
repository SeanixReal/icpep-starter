---
title: Run your first programs
description: Compile C and C++, run Python, and check the actual output.
order: 6
category: setup
duration: 15–20 min
reviewed: '2026-10-29'
status: draft
sources:
  - title: Microsoft — Build and run C++ with GCC
    url: https://code.visualstudio.com/docs/cpp/config-mingw
  - title: GCC — Options controlling the output
    url: https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html
  - title: Python — Using the interpreter
    url: https://docs.python.org/3/tutorial/interpreter.html
  - title: Microsoft — PowerShell command precedence
    url: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_command_precedence
---

A version number is a useful start. Now check that you can turn a saved source file into visible output. These procedures are proposed and need a Windows student pilot before the toolkit can claim independent setup success.

Use **PowerShell** inside your `cpe-practice` folder. All commands below use that same folder. You can type the examples or [download the sample source files](/downloads/). Save each file with its exact name and extension.

## Compile and run C

Create `hello.c`:

```c
#include <stdio.h>

int main(void) {
    printf("Hello, CpE!\n");
    printf("C setup works.\n");
    return 0;
}
```

Compile it. Do not run the next command unless compilation succeeds without errors:

```powershell
gcc -Wall -Wextra hello.c -o hello-c.exe
```

Then run the executable:

```powershell
.\hello-c.exe
```

Expected output:

```text
Hello, CpE!
C setup works.
```

The `gcc` command compiles C. The `-o` option names the output file. In PowerShell, `.\` tells the terminal to run a program from the current folder.

## Compile and run C++

Create `hello.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, CpE!\n";
    std::cout << "C++ setup works.\n";
    return 0;
}
```

Compile with `g++`, then run the new executable only if compilation succeeds:

```powershell
g++ -Wall -Wextra hello.cpp -o hello-cpp.exe
```

```powershell
.\hello-cpp.exe
```

Expected output:

```text
Hello, CpE!
C++ setup works.
```

If compilation fails, do not count an executable left over from an older attempt as a success. Fix the first compiler error, save the file, and compile again.

## Run Python

Create `hello.py`:

```python
print("Hello, CpE!")
print("Python setup works.")
```

Run it using the proposed Python series:

```powershell
py -3.14 hello.py
```

Expected output:

```text
Hello, CpE!
Python setup works.
```

Python runs the saved source file directly through its interpreter; there is no separate `.exe` compilation step in this example.

## Record what actually happened

You have completed the proposed checks when all three examples produce their matching output from your saved files. A checkmark in this website does not run these tests for you.

For a pilot session, RDC should record your device type, Windows version, tool versions, the exact step attempted, and whether you needed help. Do not publish participants' names, student IDs, or screenshots containing private information. Pilot recording templates live in the repository's `docs/pilot-testing.md`.

Stuck? Start with [Troubleshooting](/troubleshooting/). When asking for help, include the exact command, the first error message, and the terminal name. A precise error report is a useful first programming skill.
