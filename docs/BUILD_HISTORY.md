# Ping the Panda

Buildless learning app. Serve `dist/` over HTTPS; no server-side learner data or paid APIs.

## Included

- Revised 530-word story and eight original book page illustrations.
- Word, phrase, sentence, full-scene and listening modes; device speech with missing-voice handling.
- Indonesian and Mandarin draft translations of the story and UI.
- Three writing prompts, sentence starters and local autosave.
- Separate local learner profiles, reading progress and printable report.
- Editable jobs/rewards, daily credit limits, sufficient-balance checks, transaction reversals, goals and 30-day calendar.
- Versioned JSON export/restore with validation.
- Explicit offline text/art/activity caching via service worker.

## Verification

Run `node --test tests/core.test.cjs` from this checkout. Syntax-check `dist/app.js`, `dist/core.js`, `dist/sw.js`, `dist/translations.js`.

## Known production limitations

This is a separately hosted learning edition, not a modification of the old Sintra deployment. Access remains owner-private. Copying a URL does not grant access.

Speech requires a matching device voice. No prerecorded audio is shipped and offline voice availability varies. Draft Indonesian/Mandarin copy requires native review. Original page images contain the old manuscript; the accessible reader uses the revised manuscript. Data stays in the browser, not a cloud account. Export backups before clearing browser data. Private-host authentication can require connectivity even after the learning pack has been cached.

Source and deployment are managed through Sites and `.openai/hosting.json`. Do not change the project ID when updating.

## Preliminary author review update
Five provisional repeat lengths: one word, two words, three words, meaningful phrase, full sentence. Whole-story listening is separate. Existing learner data and backup format are preserved; saved numeric levels now refer to these provisional lengths. Native translations are aligned by paragraph, not by individual word. Longer chunks receive longer repeat pauses. Full original MP3 is a separate 3:42 recording, not synchronized to the revised manuscript and not included in the offline download. Grown-up corner includes the broader curriculum themes as upcoming directions, not released lessons. All new interface copy is present in English, Indonesian and Chinese; native review is pending.

## Illustrated story garden update — 28 October 2026

Two included stories, each with scene-specific art: the eight-page pet story retains the uploaded illustrations; the four-page gardening adaptation uses newly generated illustrations based on the uploaded book style and character references. `dist/books.js` contains beginner, easy and standard learning editions with English, Indonesian and Chinese text. `dist/experience.js` supplies the book shelf, illustrated reader, independent difficulty/audio/translation controls, story-specific questions and activities. Existing family rewards remain accessible from activities.

Reading progress, personal answers and reflections are keyed by book and edition within each learner. Legacy pet progress and wallets migrate without being discarded. New translation and adapted content require independent bilingual editorial review; this is disclosed in grown-up guidance. Browser speech is device-dependent. The original pet recording is explicitly separate because it does not match the adapted text. Offline download includes both books, all art and the original recording, but cannot guarantee offline device voices. HTTPS is required for service workers; the HTTP development preview cannot run an offline download.

Validation: `node --test tests/core.test.cjs` covers legacy balances/imports, old-save migration, multi-book backup retention, translation completeness, paragraph alignment and scene image existence. Desktop browser QA covers the garden reader, difficulty and translation changes, navigation, comprehension, writing, activity reflections and reload persistence.

### New illustration assets and generation brief

Built-in image generation was used. Final project assets: `dist/assets/garden-1.webp` through `garden-4.webp` (compressed from the generated PNGs). The original pet-book page 6 and exercise-book contact sheet supplied character and style references; garden page 1 was then used for visual continuity.

Shared prompt: One square full-page children's storybook illustration, text-free. Match the reference hand-drawn ink contours, watercolor and colored-pencil paper textures, warm green/ochre/turquoise palette, detailed foreground, middle ground and background. Keep Ping a fluffy round cream-white panda with warm dark-brown patches and limbs, forehead tuft and expressive face. Brenda has purple wings with dark-violet spots. Similar detail and complexity to the uploaded illustrated books; not a flat icon, collage or 3D. No letters, captions, numbers, speech bubbles or watermark. Soft painted outer edge.

Page briefs:
1. Grumpy Ping arrives at Brenda's welcoming vegetable garden along an earthen path. Brenda greets him beside raised beds. Curved wooden cottage doorway, bamboo fence, cabbage, tomato vines, strawberries, blue watering can and distant green hills. Expressive character acting.
2. Ping kneels with gardening gloves and carefully puts a seed in a small hole. Brenda hovers encouragingly. Blue watering can, seed bowl, seedling pots, leaves, fence, cottage and hills. Curious concentration.
3. Ping gently waters a young plant using the blue watering can. Brenda nearby; another pot has a dry drooping leaf, a third healthy plant catches dappled sunlight. Thoughtful care and patience, same detailed garden world.
4. Ping offers Popo a basket of carrots, leafy vegetables and strawberries at the garden gate. Popo has a pink flower by her ear. Brenda watches. No clothes on pandas. Apology and reconnection, a bamboo shoot at the side, lush garden, path, cottage and mountains in warm afternoon light.

## Independent collections update — 28 October 2026

Removed Easy and alternate beginner versions from the published catalog. Beginner now contains the original short manuscript **Ping knows his colors**, with three matching newly generated illustrations. Standard contains the pet and gardening books, each with its single full reading text. Collections have independent routes and shelves; translation is an optional aid within a book. Legacy beginner/easy answers are retained in backup records rather than silently marked as progress in a different book. A one-time settings migration establishes English as the default interface language while leaving story translation preferences intact.

Five numbered audio cards now explain their chunk sizes, show a live pause example and offer a listening preview. The reader adds a page selector, top previous/next buttons, keyboard arrow navigation and automatic bookmarks. Shelf cards show per-book completion and resume state.

New image assets: `dist/assets/colors-1.webp`, `colors-2.webp`, `colors-3.webp`. Built-in image generation, using the existing illustrated garden page as the style and character reference. Shared brief: square text-free watercolor/ink children's book illustration, fluffy round panda, no clothes, layered detailed setting and soft paper edges. Page 1: green grass, blue sky, red toy firetruck. Page 2: yellow sun, orange fruit, brown mud. Page 3: purple grapes, white tummy, black ears under a grape arbor. The third image was edited to make the panda's ears and patches clearly charcoal black for the color lesson while preserving the composition.

## Standard book minimum — 28 October 2026

Every Standard book must contain at least eight fully illustrated pages, with a distinct scene illustration on each page. Run `node --test tests/core.test.cjs` before publishing: the catalog check enforces the minimum, matching localized page titles, image existence and distinct image contents.

Both current Standard books now have eight pages. The full gardening narrative and all translations are preserved across eight scene-led pages, with four new illustrations for getting ready, waiting, reflection and listening. Assets `garden-5.webp` through `garden-8.webp` follow the existing garden art references; exact generation prompts are recorded in `garden-expansion-prompts.json`. Existing gardening bookmarks and completed pages migrate once from the old four-page layout to the corresponding eight-page layout, preserving answers and activities. The offline cache includes all new artwork.

## Original exercise book added

Standard now includes Ping learns about exercise: all nine original illustrated PDF pages from Ping_02.pdf, including the two landscape spreads, rendered without cropping into exercise-1.webp through exercise-9.webp. Selectable English follows the original with normalized punctuation and spelling; aligned Indonesian and Chinese translations support the existing five audio levels. Book-specific writing, comprehension and a movement journal accompany the story. The original art is unchanged.

Eight pages is a minimum, never a maximum. Backup validation now uses catalog page counts, including all nine exercise pages, and supports longer books when added to the catalog. Tests verify nine-page progress retention and a twelve-page catalog entry. Offline downloads include the exercise art.
