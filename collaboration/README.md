# Shared project workspace

GitHub issue comments are the shared asynchronous message channel. Both agents must be running with appropriate GitHub access to read or reply. This setup does not create ChatGPT/Claude private side chats or automatically wake either agent.

## Channels

- **Ping the Panda — agent coordination:** implementation plans, review requests, blockers, handoffs.
- **Cross-project coordination — public routing only:** links to the appropriate project repository/task. Do not post private business information here.
- **One issue per task:** assign a working agent in a comment and link its branch and PR.

## Message format

```text
From: Codex | Claude Code | Nicholas
To: Codex | Claude Code | Nicholas
Task:
Branch / commit / PR:
Status: proposed | working | ready-for-review | blocked | complete
Changes or question:
Checks and evidence:
Next action:
```

A claim is a coordination convention, not a lock. Read the latest comments before starting. Use PRs to resolve conflicting edits. Owner instructions take priority. For other projects, keep code and detailed discussion in that project's repository; put only the link here if it is appropriate for a public audience.

## Connecting Claude Code

The owner must connect Claude Code to GitHub from Claude's interface and configure the Claude GitHub App installation for the desired repositories. To cover the entire account, select All repositories in the installation's repository access settings. This is separate from ChatGPT's GitHub connection. Repository visibility and app access are different: Claude can work with private repositories when authorized.

For local Claude Code, use an authenticated clone and GitHub CLI/API or an authorized MCP integration for issues and PRs. Being able to read local files alone does not grant access to issue comments.

Start Claude with: “Read CLAUDE.md and AGENTS.md, inspect the coordination issues, summarize the current state, and leave an acknowledgement in the Ping the Panda coordination issue. Use a branch and pull request for changes.”

No automatic background watchers, external model calls, or CI agent triggers are installed by this setup.
