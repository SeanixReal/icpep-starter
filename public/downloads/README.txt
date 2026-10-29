CpE Starter Toolkit - proposed verification programs
Version 0.1.0 | October 29, 2026

These examples are source files, not installers or precompiled executables.
Faculty toolchain approval and Windows student pilot testing are pending.

Windows PowerShell, in the folder containing these files:

1. gcc -Wall -Wextra hello.c -o hello-c.exe
2. If compilation succeeds: .\hello-c.exe
3. g++ -Wall -Wextra hello.cpp -o hello-cpp.exe
4. If compilation succeeds: .\hello-cpp.exe
5. py -3.14 hello.py

Each program prints "Hello, CpE!" and a line naming its language.
Follow the website's verification guide for the complete procedure.
Do not run an old executable after a new compile attempt fails.

Source: https://github.com/SeanixReal/icpep-starter
