# Current project status

Updated: 2026-10-29. Last Sites source snapshot: 0ad243af57410267bd3ac72560aa5b31aa1ed74a.

## Implemented

- Four books: pet (8), gardening (8), exercise (9), colors (3).
- Distinct Standard/Beginner collections and default English interface.
- Indonesian/Chinese translation aids and five progressive listening settings.
- Reader navigation, saved bookmarks, writing, activity reflection, and device-local learner profiles.
- Catalog-based page limits preserve all nine exercise pages and allow longer future books.
- Offline asset cache and original pet read-through audio.
- Seventeen automated checks passed on the last implementation; rerun before changes are merged.

## Hosting and domain

ChatGPT Sites project: appgprj_6adf75975d548191b6493e8620fdcd3d.
Original address: https://ping-panda-learning.nicholasramsby.chatgpt.site
Custom domain: ping-the-panda.com, registered at GoDaddy.
Last observed on 2026-10-29: DNS had only the required A records (162.159.143.30 and 172.66.3.26), SSL active, hosting integration still active_redeploying/pending. Recheck current status before declaring the custom domain fully live. Preserve existing private access unless Nicholas requests a change.

## Known limitations / next checks

- Independent bilingual editorial review is still needed.
- Device speech and offline voice availability vary; no custom speech backend is configured.
- Original printed story text may differ from adapted selectable pet text; exercise transcription normalizes punctuation/spelling.
- GitHub is not yet an automatic deployment source for the live Site.
- Claude's GitHub authorization and first acknowledgement are not yet verified.

## Suggested first handoff

Claude Code: read the coordination issue, confirm repository access, review the app and tests, and propose a bounded improvement in an issue before making overlapping edits. Codex: check Claude's latest comments at the start of the next project session. Neither agent should claim autonomous continuous monitoring.
