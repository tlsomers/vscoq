---
name: Bug Report
about: Create a report to help us improve VsRocq
title: "[BUG] Brief description of the bug"
labels: bug
assignees: ""
---

**IMPORTANT: Before You Submit This Issue**

- [ ] I have searched the [existing VsRocq issues](https://github.com/rocq-prover/vsrocq/issues)
- [ ] I have reviewed the [VsRocq FAQ.md](https://github.com/rocq-prover/vsrocq/blob/main/FAQ.md) and my issue is not addressed there.

**Describe the Bug**

A clear and concise description of what the bug is.

**To Reproduce**

Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected vs. Actual Behavior**

A clear and concise description of what you expected to happen vs.
what actually happened. Include any error messages or stack traces.

If applicable, add screenshots and code to help explain your problem.

**Environment (please complete the following information):**

- **VsRocq Version:** [e.g., 2.2.5] (You can find this in the VS Code Extensions view)
- **VsRocq Language Server Version (vscoqtop):** [e.g., 2.2.5] (Run `vscoqtop -v` or check `opam list`)
- **Coq Version:** [e.g., 8.19.0] (Run `coqtop -v`)
- **Operating System:** [e.g., Ubuntu 22.04, Windows 10, macOS Sonoma]
- **VS Code / VSCodium Version:** [e.g., 1.85.1]

**Coq Log Output (if applicable)**

If the issue involves a server crash or unexpected Coq behavior, please provide logs from the "Coq Language Server" output channel in VS Code.
To get detailed logs:

1. Open your VS Code `settings.json`.
2. Add/modify the `vscoq.args` setting:
   ```json
   "vscoq.args": [
       "-bt",
       "-vscoq-d",
       "all"
   ]
   ```
3. Reproduce the bug and copy the relevant output from the "Coq Language Server" channel here.
   ```
   <LOG OUTPUT HERE>
   ```
