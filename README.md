# Ping the Panda

Illustrated English-learning app for children, designed for accessible learning through stories, native-language support, speaking, writing, and practical activities.

## Run and test

No installation or build step is required. Serve `dist/` with a static server:

```sh
python -m http.server 8000 --directory dist
node --test tests/core.test.cjs
```

Open http://localhost:8000. Use HTTPS in production for offline downloads.

## Included books

| Collection | Book | Illustrated pages |
| --- | --- | ---: |
| Standard | Ping gets a pet | 8 |
| Standard | Ping grows a friendship | 8 |
| Standard | Ping learns about exercise | 9 |
| Beginner | Ping knows his colors | 3 |

English is the default interface language. Indonesian and Simplified Chinese translations support learning. Each book has five listening levels from individual words to full sentences. Eight illustrated pages is a Standard minimum, not a maximum. Beginner books are independent titles; Easy editions are retired.

## Work together

Read [AGENTS.md](AGENTS.md), [the shared workspace](collaboration/README.md), and [current status](collaboration/STATUS.md). Claude Code also reads [CLAUDE.md](CLAUDE.md). GitHub Issues are the shared message threads; pull requests are for reviewing code. These are asynchronous channels, not an automatically running connection between models.

## Architecture

- `dist/`: complete static app, artwork, and original pet read-through audio.
- `dist/books.js`: catalog, page text, translations, activities, and illustration mappings.
- `dist/core.js`: learner state, validation, migration, and listening chunks.
- `dist/experience.js`, `dist/collections.js`: reader and collection interface.
- `dist/sw.js`: opt-in offline download.
- `tests/core.test.cjs`: Node tests for content, saved progress, and learning controls.
- `garden-expansion-prompts.json`: generation provenance for expanded garden artwork.
- [Build history](docs/BUILD_HISTORY.md): earlier implementation notes; later entries supersede earlier descriptions.

## Hosting

The existing app is hosted by ChatGPT Sites at https://ping-panda-learning.nicholasramsby.chatgpt.site with custom domain ping-the-panda.com. `.openai/hosting.json` identifies that existing Site. This GitHub repository is a source and collaboration copy; GitHub pushes do not automatically publish to Sites. Preserve the Site identity and existing audience. Never create a second Site or assume a GitHub merge is a deployment.

## Content and data

Original pet and exercise artwork is retained from supplied PDFs. Garden and color illustrations are AI-generated using the established style as reference. Adaptations and translations still need independent editorial review. Source PDF page text and selectable learning text may differ where noted in the app. The app stores learner progress on the device, not in this repository. Original uploaded manuscripts, private correspondence, unrelated business files, secrets, and learner backups are not part of this app snapshot.

No open-source license is granted by this upload. Do not assume permission to reuse the stories, illustrations, audio, or branding outside the owner's project.
