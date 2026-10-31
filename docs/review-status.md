# Technical review status

**Status: proposed implementation.** Recorded October 29, 2026. No faculty-approved tool matrix or student pilot evidence has been supplied. Repository checks do not change these statuses.

| Decision | Proposed candidate | Approval / device status |
| --- | --- | --- |
| Main platform | Windows 11, x64 | Pending department confirmation and device tests |
| C/C++ toolchain | MSYS2 UCRT64 GCC | Pending faculty confirmation; exact version unrecorded |
| Python runtime | Python 3.14 series through official install manager | Pending faculty confirmation; exact patch unrecorded |
| Editor | VS Code | Exact tested release pending |
| Extensions | Microsoft C/C++ and Python | IDs proposed; tested versions pending |
| Device minimums | Refer to official tool requirements | Department minimums pending |
| macOS | Brief notes using Apple tools and official Python | Pending separate review; no success rate claimed |
| Linux | Outside proposed V1 scope | Confirm during faculty review |
| Hosting | [Vercel toolkit](https://icpep-starter.vercel.app); manual Pages alternative | Owner-requested Vercel deployment verified October 31, 2026; reviewed student release pending |
| Feedback | Public GitHub issues | No external student-data form configured |

## Before calling the toolkit technically reviewed

- [ ] Obtain explicit department/faculty recommendation and record reviewer, date, exact versions, and any limitations in a separate approved record.
- [ ] Walk through a clean Windows installation using only the guide, with administrator and managed-device limitations noted.
- [ ] Verify both C and C++ compile and run, and Python produces the expected output.
- [ ] Check the Python install-manager path and older-launcher conflicts on actual devices.
- [ ] Check extension publishers and any new installer prompts.
- [ ] Confirm official sources still match all commands, UI labels, and requirements.
- [ ] Run a beginner pilot and revise unclear steps; see [pilot-testing.md](pilot-testing.md).
- [ ] Recheck keyboard use, narrow layouts, contrast, links, downloads, print output, and storage-disabled behavior.
- [ ] Record the approved hosting URL, HTTPS behavior, permissions, release date, and maintainer access.
- [ ] Review public copy before labeling recommendations approved or removing `noindex`.

No box above should be checked merely because code was generated or a build passed.
