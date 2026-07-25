export type NewsTab = 'release' | 'guides' | 'database' | 'characters' | 'platforms' | 'faq' | 'about';

export interface NewsItem {
  slug: string;
  tab: NewsTab;
  title: string;
  description: string;
  date: string;
  sourceLabel: string;
  sourceUrl: string;
  lead: string;
  details: string[];
  takeaways: string[];
}

const remedyLaunch = 'https://www.remedygames.com/article/control-resonant-launches-worldwide-on-september-24';
const remedyGame = 'https://www.remedygames.com/games/control-2';
const steam = 'https://store.steampowered.com/app/3669870/CONTROL_Resonant/';
const psStore = 'https://www.playstation.com/en-us/games/control-resonant/';
const psCombat = 'https://blog.playstation.com/2026/03/04/control-resonant-a-deep-dive-into-combat-buildcrafting-and-player-choice/';
const psNg = 'https://blog.playstation.com/2026/04/30/control-resonant-remedy-shares-first-details-on-new-game-plus/';
const psLaunch = 'https://blog.playstation.com/2026/06/02/control-resonant-launches-september-24-on-ps5/';
const xboxHandsOn = 'https://news.xbox.com/en-us/2026/06/11/control-resonant-hands-on-melee-combat/';
const xboxPublishing = 'https://news.xbox.com/en-us/2026/05/08/control-resonant-remedy-exciting-sequel-xbox-play-anywhere-self-publishing/';
const xboxStore = 'https://www.xbox.com/en-US/games/store/control-resonant/9NJ07VWB9BVK';

export const newsItems: NewsItem[] = [
  {
    slug: 'control-resonant-release-date-september-24-2026', tab: 'release', date: '2026-06-02',
    title: 'Control Resonant Release Date Confirmed for September 24, 2026',
    description: 'Remedy has set September 24, 2026 as the worldwide launch date for Control Resonant on PS5, Xbox Series X|S, and PC.',
    sourceLabel: 'Remedy Entertainment — worldwide launch announcement', sourceUrl: remedyLaunch,
    lead: 'Control Resonant now has a firm worldwide release date: September 24, 2026. Remedy’s dated announcement replaces the earlier broad 2026 window and identifies the principal launch platforms.',
    details: [
      'The game is scheduled to arrive on PlayStation 5, Xbox Series X|S, and PC through Steam and the Epic Games Store. Remedy is developing and self-publishing the sequel, making its own announcement the primary reference for the date.',
      'A confirmed calendar date does not yet establish every regional unlock hour or preload window. Those operational details can differ by storefront and time zone, so countdowns should not be treated as a substitute for the final store listing.',
      'The date is the anchor for our release coverage. If Remedy changes the schedule, this article and the release hub will be revised together, with the original announcement retained as the evidence trail.'
    ],
    takeaways: ['Worldwide date: September 24, 2026', 'Launch systems: PS5, Xbox Series X|S, and PC', 'Regional unlock hours remain to be finalized']
  },
  {
    slug: 'ps5-deluxe-48-hour-early-access-september-22', tab: 'release', date: '2026-06-02',
    title: 'PS5 Digital Deluxe Edition Lists 48-Hour Early Access',
    description: 'The PlayStation listing gives Control Resonant Digital Deluxe buyers 48 hours of advance access, pointing to September 22 on PS5.',
    sourceLabel: 'PlayStation — Control Resonant product page', sourceUrl: psStore,
    lead: 'PlayStation’s Digital Deluxe offer includes 48-hour advance access. With the standard launch set for September 24, that benefit points to September 22, 2026 for eligible PS5 purchases.',
    details: [
      'This is an edition benefit rather than a universal change to the release date. Standard Edition owners still follow the normal launch schedule, and buyers on other storefronts should check the exact wording attached to their own edition.',
      'Advance access also should not be confused with a public demo or a subscription trial. It is tied to the listed digital package and remains subject to the store’s regional terms, account requirements, and displayed unlock time.',
      'Players considering the upgrade should weigh the two-day window against the complete bundle contents and local price. Digital supply is not limited, so waiting for technical coverage remains a valid option.'
    ],
    takeaways: ['PS5 Deluxe benefit: 48 hours early', 'Expected access date: September 22, 2026', 'This does not move the standard launch date']
  },
  {
    slug: 'control-resonant-mac-version-later-2026', tab: 'release', date: '2026-06-02',
    title: 'Control Resonant Mac Version Is Planned for Later in 2026',
    description: 'Remedy says the Mac edition will follow the console and Windows launch later in 2026, but has not announced a specific date or hardware list.',
    sourceLabel: 'Remedy Entertainment — platform schedule', sourceUrl: remedyLaunch,
    lead: 'Mac players are included in Remedy’s release plan, but not in the September 24 launch group. The studio currently describes the macOS edition as arriving later in 2026.',
    details: [
      'The announcement mentions Steam and the Mac App Store for the later release. It does not yet provide an exact day, supported Apple silicon generations, memory requirement, or expected performance profile.',
      'That distinction matters for purchase planning. A Windows Steam listing does not automatically prove that every license or save feature will transfer to the future Mac build, even when both editions appear on Steam.',
      'Until Remedy publishes Mac specifications, model-by-model compatibility claims would be speculation. We will treat the date and hardware requirements as separate updates rather than filling the gap with estimates.'
    ],
    takeaways: ['Mac release window: later in 2026', 'Steam and Mac App Store are named', 'Exact date and supported Macs are not yet listed']
  },
  {
    slug: 'geforce-now-support-confirmed-for-launch', tab: 'release', date: '2026-06-02',
    title: 'GeForce NOW Support Announced for Control Resonant at Launch',
    description: 'Remedy includes GeForce NOW in the launch plan, giving supported PC owners a cloud-streaming route on September 24.',
    sourceLabel: 'Remedy Entertainment — worldwide launch announcement', sourceUrl: remedyLaunch,
    lead: 'Control Resonant is planned for GeForce NOW on launch day. The cloud option sits alongside the native PS5, Xbox Series X|S, Steam, and Epic releases rather than replacing them.',
    details: [
      'GeForce NOW normally streams a supported copy connected through an eligible PC storefront. It is not a separate free edition, and access depends on Nvidia’s service availability, account tier, network quality, and the owned store license.',
      'The announcement is useful for players whose local hardware falls below the published PC requirements. It does not, however, guarantee identical latency, image quality, or every feature available on a native installation.',
      'We will verify which storefront connections are enabled and whether the game appears in the service library when the launch catalog is live. Those details are operational rather than assumptions to make from the announcement alone.'
    ],
    takeaways: ['GeForce NOW is planned for September 24', 'A supported owned PC copy is still required', 'Service tiers and regional availability apply']
  },
  {
    slug: 'standard-deluxe-editions-and-preorder-bonuses-listed', tab: 'release', date: '2026-06-02',
    title: 'Standard and Digital Deluxe Editions Detail Launch Choices',
    description: 'Official store listings distinguish the base game from a Digital Deluxe package with extra digital items and PS5 advance access.',
    sourceLabel: 'PlayStation — editions and preorder listing', sourceUrl: psStore,
    lead: 'Control Resonant’s launch offers are divided between a Standard Edition and a Digital Deluxe Edition. The store listing is the safest place to compare the package attached to a specific platform and region.',
    details: [
      'The Deluxe listing includes the base game, digital extras, and the highlighted PS5 48-hour advance-access benefit. Preorder items are shown separately, so buyers should not assume that every bonus is part of every post-launch Deluxe purchase.',
      'Prices, taxes, refund rules, and availability can vary by account region. Third-party key listings may also use different names or activation territories, which is why a converted foreign price is not a reliable local buying guide.',
      'The useful decision is whether the documented extras justify the regional price difference. The core campaign remains the Standard Edition reference, and digital stock does not require an early purchase.'
    ],
    takeaways: ['Standard includes the base game', 'Digital Deluxe adds listed digital extras', 'Check the regional store before paying']
  },

  {
    slug: 'control-resonant-shifts-to-melee-action-rpg-combat', tab: 'guides', date: '2026-03-04',
    title: 'Control Resonant Reframes the Series as a Melee-Led Action RPG',
    description: 'Remedy’s combat deep dive confirms that Resonant is built around close-range action, weapon-form switching, powers, and character builds.',
    sourceLabel: 'PlayStation Blog — combat and buildcrafting deep dive', sourceUrl: psCombat,
    lead: 'Control Resonant is not simply repeating the first game’s third-person shooting loop. Remedy describes the sequel as a melee-led action RPG centered on Dylan Faden’s new weapon and customizable powers.',
    details: [
      'The change moves spacing, dodging, combo decisions, and weapon-form selection closer to the center of combat. Paranatural abilities remain important, but they are designed to work with close-range attacks rather than sit beside a conventional firearm system.',
      'For guide coverage, that means launch advice must be based on tested timing, enemy reactions, and build interactions. A list of attacks copied from a trailer cannot establish the best combo or strongest setup.',
      'Our pre-release guides therefore explain confirmed systems without pretending to rank them. Damage tables, frame data, and endgame recommendations will be added only after the retail version can be checked.'
    ],
    takeaways: ['Combat is melee-led', 'Buildcrafting is a core progression layer', 'Final rankings require release-version testing']
  },
  {
    slug: 'aberrant-shape-shifting-weapon-forms-explained', tab: 'guides', date: '2026-03-04',
    title: 'Aberrant’s Shape-Shifting Forms Define Dylan’s Weapon Kit',
    description: 'The official combat reveal introduces Aberrant as a transforming melee weapon whose forms cover different ranges and tactical roles.',
    sourceLabel: 'PlayStation Blog — official Aberrant reveal', sourceUrl: psCombat,
    lead: 'Dylan’s signature weapon is Aberrant, a paranatural object able to change melee form. Its identity is built around switching tools for the encounter rather than carrying a conventional inventory of unrelated weapons.',
    details: [
      'Official material presents the forms as having distinct reach, speed, and combat purpose. That makes form choice a tactical response to enemy placement and openings, not merely a cosmetic animation change.',
      'The full acquisition order, upgrade costs, and final move lists have not been published. Pre-release footage can demonstrate a function, but it cannot confirm the retail balance or every unlock requirement.',
      'Our weapon guides will separate the permanent mechanics from version-sensitive numbers. After launch, each form page can document inputs, strengths, limitations, upgrade paths, and practical matchups with a stated game version.'
    ],
    takeaways: ['Aberrant transforms between melee forms', 'Forms serve different tactical roles', 'Unlock paths and final balance remain pending']
  },
  {
    slug: 'instinct-powers-expand-dylan-paranatural-abilities', tab: 'guides', date: '2026-03-04',
    title: 'Instinct Powers Expand Dylan Faden’s Paranatural Toolkit',
    description: 'Remedy calls Dylan’s ability set Instinct, linking supernatural powers with movement, defense, and Aberrant attacks.',
    sourceLabel: 'PlayStation Blog — combat and player choice', sourceUrl: psCombat,
    lead: 'Dylan’s supernatural abilities are grouped under Instinct. The system gives Resonant a power layer that can be combined with Aberrant attacks and movement instead of limiting combat to weapon strings.',
    details: [
      'The official presentation emphasizes choice and interaction. A power can change how Dylan approaches space, groups of enemies, or a defensive problem, while the equipped weapon form determines how he follows through at close range.',
      'Not every ability name, upgrade branch, cooldown, or resource rule is final in public documentation. Those missing values matter when comparing builds, so pre-release descriptions should not be turned into unsupported tier lists.',
      'At launch, our ability pages will record the exact effect, input, cost, unlock condition, and useful combinations. Until then, the confirmed takeaway is the relationship between Instinct, movement, and melee combat.'
    ],
    takeaways: ['Instinct is Dylan’s power system', 'Powers combine with melee and movement', 'Detailed ability values await final testing']
  },
  {
    slug: 'the-gap-build-system-supports-player-choice', tab: 'guides', date: '2026-03-04',
    title: 'The Gap Build System Is Designed Around Player Choice',
    description: 'The official deep dive introduces The Gap as the space where players assemble and tune Dylan’s build around preferred weapons and powers.',
    sourceLabel: 'PlayStation Blog — The Gap buildcrafting reveal', sourceUrl: psCombat,
    lead: 'The Gap is the organizing space for Control Resonant’s buildcrafting. Remedy uses it to connect unlocked options, modifiers, and powers into deliberate playstyles rather than a single fixed progression line.',
    details: [
      'The presentation suggests that placement and synergy matter, giving players reasons to specialize in crowd control, direct damage, mobility, or survivability. It is a system to experiment with, not just a menu of passive percentage increases.',
      'The complete economy and respec rules are still important unknowns. Without knowing costs and availability, no pre-launch article can responsibly tell players that a particular route is mandatory or permanently missable.',
      'Our build pages will eventually state prerequisites and tested outcomes for every recommendation. For now, the news is that buildcrafting is a named, central system and a major point of difference from the first Control.'
    ],
    takeaways: ['The Gap is the buildcrafting hub', 'Multiple playstyle directions are supported', 'Costs and respec rules need final confirmation']
  },
  {
    slug: 'new-game-plus-promises-more-than-a-repeat-playthrough', tab: 'guides', date: '2026-04-30',
    title: 'New Game Plus Promises Changes Beyond a Repeat Campaign',
    description: 'Remedy has detailed New Game Plus carry-over, new talent nodes, a fourth Artifact slot, changed encounters, and expanded build combinations.',
    sourceLabel: 'PlayStation Blog — first New Game Plus details', sourceUrl: psNg,
    lead: 'New Game Plus is officially part of Control Resonant’s replay plan. Remedy’s details position it as a changed second journey with retained combat progression, expanded builds, and harder encounters.',
    details: [
      'Aberrant upgrades, health improvements, Combat Ability resource upgrades, supernatural Combat Abilities, talents, and Artifacts carry into the new run. Traversal abilities do not carry over because they remain tied to story progression and how the world opens.',
      'The second run adds new talent nodes, permits multiple Combat Abilities from the same boss, and unlocks a fourth Artifact slot beyond the first playthrough’s maximum of three. Remedy also says encounters shift and some bosses can show new behaviors.',
      'World Quests, bounties, collectibles, side-story outcomes, and conversations give players additional reasons to revisit Manhattan. The exact unlock moment and support for repeated NG+ cycles still require final-version verification.'
    ],
    takeaways: ['Most combat progression carries over', 'Traversal abilities reset with story progression', 'A fourth Artifact slot and new build options unlock']
  },

  {
    slug: 'dylan-faden-confirmed-as-sole-playable-protagonist', tab: 'characters', date: '2026-06-02',
    title: 'Dylan Faden Is the Sole Playable Protagonist of Resonant',
    description: 'Remedy places Dylan Faden at the center of the sequel and identifies him as the sole playable character for this story.',
    sourceLabel: 'PlayStation Blog — Dylan and Jesse story briefing', sourceUrl: psLaunch,
    lead: 'Control Resonant reverses the sibling perspective of the first game. Dylan Faden is the announced playable protagonist, carrying the new campaign while searching for his missing sister, Jesse.',
    details: [
      'Dylan’s history with the FBC, the Hiss, and years of isolation makes him more than a substitute player model. Remedy ties his unstable powers and relationship with Aberrant directly to the sequel’s emotional and mechanical direction.',
      'Calling him the sole playable protagonist also sets a clear boundary around speculation. Jesse remains important, but no character-switching campaign or playable co-op partner has been announced.',
      'The character guide will remain spoiler-light before launch. It records only official background needed to understand Dylan’s role and avoids presenting trailer interpretation as a full biography.'
    ],
    takeaways: ['Dylan is the sole announced playable character', 'His search for Jesse drives the story', 'No character-switching system is confirmed']
  },
  {
    slug: 'jesse-faden-missing-but-central-to-resonant-story', tab: 'characters', date: '2026-06-02',
    title: 'Jesse Faden Is Missing but Central to Control Resonant',
    description: 'Jesse remains a central figure in the sequel even though Remedy has shifted playability to Dylan and kept her new journey secret.',
    sourceLabel: 'PlayStation Blog — Remedy on the Faden siblings', sourceUrl: psLaunch,
    lead: 'Jesse Faden’s absence is part of Control Resonant’s starting mystery. Dylan enters the Manhattan crisis with finding his sister among his central motivations.',
    details: [
      'The structure echoes the first Control from the other sibling’s perspective: Jesse once searched for Dylan, while the sequel sends Dylan after Jesse. Remedy says the games form linked sibling stories without requiring identical protagonists.',
      'Jesse’s exact location, condition, and actions are intentionally unrevealed. Her narrative importance should not be converted into a claim that she is playable or that a specific twist has been confirmed.',
      'We will update her page only with official material or clearly labeled information from the released game. That approach protects readers who want the premise without late-story spoilers.'
    ],
    takeaways: ['Jesse is missing at the story’s outset', 'She remains central but is not confirmed playable', 'Her exact situation is deliberately secret']
  },
  {
    slug: 'zoe-de-vera-introduced-as-dylans-fbc-handler', tab: 'characters', date: '2026-03-04',
    title: 'Zoe De Vera Introduced as Dylan’s FBC Handler',
    description: 'Remedy introduces FBC field agent Zoe De Vera as Dylan’s handler and an emotional anchor for his journey through Manhattan.',
    sourceLabel: 'PlayStation Blog — Zoe De Vera introduction', sourceUrl: psCombat,
    lead: 'Zoe De Vera is a confirmed Federal Bureau of Control field agent and Dylan Faden’s handler. Remedy frames their developing trust as an important human connection in the sequel.',
    details: [
      'Zoe has experience with the paranatural crisis outside the Oldest House, while Dylan has spent years isolated within it. That contrast gives their partnership both an operational purpose and a character dimension.',
      'The game includes seamless dialogue that can continue during exploration, making a handler relationship useful without proving that Zoe physically accompanies Dylan through every encounter.',
      'No co-op role or second playable campaign has been announced for her. Her full FBC history, combat involvement, and relationship with Jesse remain story details to discover rather than facts to invent before release.'
    ],
    takeaways: ['Zoe is an FBC field agent', 'She acts as Dylan’s handler', 'She is not announced as playable or a co-op partner']
  },
  {
    slug: 'manhattan-becomes-the-new-paranatural-crisis-zone', tab: 'characters', date: '2026-06-02',
    title: 'Manhattan Becomes the New Paranatural Crisis Zone',
    description: 'Control Resonant expands the story beyond the Oldest House into a distorted Manhattan shaped by a growing paranatural emergency.',
    sourceLabel: 'PlayStation Blog — launch and story reveal', sourceUrl: psLaunch,
    lead: 'The sequel moves its principal crisis into Manhattan. Remedy’s official description presents a city transformed by paranatural forces, giving Dylan a larger and more connected space to investigate.',
    details: [
      'The setting broadens the series without erasing its controlled, reality-bending spaces. Urban locations can still change, hide routes, and support the environmental storytelling associated with Control.',
      'A larger connected environment is not proof of a conventional open-world checklist. The studio continues to emphasize authored missions, exploration, powers, and spatial progression rather than defining the game as an unrestricted city simulation.',
      'Location guides will be built from the final map, with clear distinctions between districts, mission areas, optional routes, and fast travel. Trailer geography alone is not enough to estimate scale.'
    ],
    takeaways: ['Manhattan is the main crisis setting', 'The world is larger and more connected', 'A conventional open-world structure is not confirmed']
  },
  {
    slug: 'control-resonant-designed-as-standalone-entry-point', tab: 'characters', date: '2026-06-02',
    title: 'Control Resonant Is Designed as a Standalone Entry Point',
    description: 'New players can begin with Dylan’s story without completing the first Control, while returning players retain added context.',
    sourceLabel: 'PlayStation Blog — standalone story confirmation', sourceUrl: psLaunch,
    lead: 'Remedy describes Control Resonant as an independent story and a new entry point. Knowledge of the first game adds context, but it is not presented as a prerequisite for following Dylan’s main objective.',
    details: [
      'The sequel still belongs to the same world and sibling arc. Returning players will recognize Jesse, the FBC, the Oldest House, and Dylan’s history, while newcomers are introduced through the new crisis and protagonist.',
      'Standalone does not mean disconnected. It means the essential premise should be communicated inside Resonant rather than requiring players to study external lore before the opening mission.',
      'Our story coverage follows the same principle: a concise background guide explains the important earlier events, while deeper lore pages remain optional and clearly labeled for spoilers.'
    ],
    takeaways: ['Playing the first Control is not required', 'Returning players receive additional context', 'The stories remain connected through the Faden siblings']
  },

  {
    slug: 'official-pc-system-requirements-list-16gb-ram-100gb', tab: 'platforms', date: '2026-07-18',
    title: 'Official PC Requirements List 16 GB RAM and 100 GB Storage',
    description: 'Steam now lists minimum and recommended hardware for Control Resonant, including 16 GB RAM, 100 GB storage, and defined GPU tiers.',
    sourceLabel: 'Steam — official PC system requirements', sourceUrl: steam,
    lead: 'Control Resonant’s Steam page now provides official minimum and recommended PC specifications. Both tiers list 16 GB of memory and 100 GB of available storage on 64-bit Windows 10 or 11.',
    details: [
      'The minimum tier names an Intel Core i5-8500 or AMD equivalent with a GTX 1070 or RX 5600 XT carrying 6 GB of VRAM. The recommended tier moves to a Ryzen 7 3700X or Intel equivalent and an RTX 3070 or RX 6700 XT with 8 GB.',
      'Steam does not attach a clear resolution, frame-rate, graphics preset, ray-tracing setting, or upscaling mode to those tiers. They should therefore be read as official hardware classes, not as a promise of 4K or 60 fps.',
      'Notebook GPUs and borderline VRAM configurations need particular caution. Final benchmarks will be necessary before recommending an expensive upgrade for one target setting.'
    ],
    takeaways: ['16 GB RAM and 100 GB storage in both tiers', 'Minimum GPU class: GTX 1070 / RX 5600 XT', 'Recommended GPU class: RTX 3070 / RX 6700 XT']
  },
  {
    slug: 'ps5-version-confirms-single-player-and-deluxe-benefits', tab: 'platforms', date: '2026-06-02',
    title: 'PS5 Listing Confirms Single-Player Release and Deluxe Benefits',
    description: 'The official PlayStation product page identifies Control Resonant as a PS5 title and documents its Digital Deluxe launch offer.',
    sourceLabel: 'PlayStation — official Control Resonant listing', sourceUrl: psStore,
    lead: 'Control Resonant’s PlayStation listing establishes a native PS5 release and presents the game as a single-player experience. It also carries the clearest platform-specific explanation of the Digital Deluxe advance-access benefit.',
    details: [
      'No PS4 edition appears in the announced platform set. Cloud streaming or Remote Play should not be confused with a separately supported last-generation build.',
      'The product page is also the regional source for price, purchase terms, and any platform feature labels. Those fields are more reliable than retailer placeholders because they are tied to the actual PlayStation product.',
      'Final resolution modes, frame-rate targets, download size, preload timing, and detailed accessibility options still require separate confirmation. A platform listing proves availability, not every performance characteristic.'
    ],
    takeaways: ['Native PS5 version confirmed', 'The game is listed as single-player', 'No PS4 edition is announced']
  },
  {
    slug: 'xbox-series-x-s-and-play-anywhere-support', tab: 'platforms', date: '2026-07-18',
    title: 'Xbox Series X|S Release Includes Xbox Play Anywhere Support',
    description: 'Control Resonant is confirmed for Series X|S, and the Xbox product information identifies Play Anywhere across eligible Microsoft platforms.',
    sourceLabel: 'Remedy Entertainment — official platform page', sourceUrl: remedyGame,
    lead: 'Xbox Series X and Series S are both in the September 24 launch lineup. Xbox product information also identifies Play Anywhere, a useful entitlement for eligible purchases in Microsoft’s ecosystem.',
    details: [
      'Play Anywhere generally connects an eligible digital Xbox purchase with the Microsoft Store PC version and supports the associated ecosystem features. It does not grant a Steam, Epic, or PlayStation copy.',
      'The label also should not be confused with Game Pass. No subscription launch is confirmed merely because the game supports Xbox’s cross-device purchase program.',
      'Performance targets for Series X and Series S remain a separate question. Support for both consoles is confirmed, but final modes and visual differences need official technical details or launch testing.'
    ],
    takeaways: ['Series X and Series S launch September 24', 'Play Anywhere is identified', 'Game Pass inclusion is not announced']
  },
  {
    slug: 'steam-lists-controller-and-family-sharing-features', tab: 'platforms', date: '2026-07-18',
    title: 'Steam Lists Full Controller Support and Family Sharing',
    description: 'Control Resonant’s Steam feature list includes full controller support and Steam Family Sharing, alongside its single-player classification.',
    sourceLabel: 'Steam — official feature list', sourceUrl: steam,
    lead: 'The Steam listing identifies full controller support and Family Sharing for Control Resonant. These are concrete PC-store features, although their practical behavior still follows Valve’s platform rules.',
    details: [
      'Full controller support indicates that the game is intended to be operated with a controller through the normal play flow. It does not by itself publish every supported device, button-prompt set, remapping option, or haptic feature.',
      'Family Sharing eligibility lets qualifying Steam Family members access a shareable copy under Valve’s current account, region, and simultaneous-use rules. It is not a second permanent license and does not create cross-buy on another store.',
      'Deluxe extras and future DLC can have their own sharing behavior. Those entitlements should be tested after release instead of assumed from the base-game feature badge.'
    ],
    takeaways: ['Full controller support is listed', 'Steam Family Sharing is listed', 'Store rules still govern simultaneous use and DLC']
  },
  {
    slug: 'control-resonant-supports-15-interface-subtitle-languages', tab: 'platforms', date: '2026-07-18',
    title: 'Control Resonant Lists 15 Interface and Subtitle Languages',
    description: 'Steam’s official language matrix lists 15 interface and subtitle languages, with complete audio available in nine of them.',
    sourceLabel: 'Steam — official language support matrix', sourceUrl: steam,
    lead: 'Control Resonant’s Steam page lists interface and subtitles in 15 languages. Nine of those languages are currently marked for full audio, giving players a clearer picture of localization before launch.',
    details: [
      'The listed interface and subtitle languages are English, French, Italian, German, Spanish from Spain, Japanese, Korean, Polish, Brazilian Portuguese, Russian, Simplified Chinese, Traditional Chinese, Ukrainian, Latin American Spanish, and Turkish.',
      'Full audio is marked for English, French, Italian, German, Spanish from Spain, Japanese, Brazilian Portuguese, Simplified Chinese, and Ukrainian. The remaining listed languages currently rely on text support rather than complete dubbing.',
      'Steam documents the PC edition. Console language downloads and regional store packages can differ, so the relevant local PlayStation or Xbox listing remains the final check for a console purchase.'
    ],
    takeaways: ['15 interface and subtitle languages', 'Nine languages have full audio listed', 'Console-region packages may differ from Steam']
  },

  {
    slug: 'remedy-self-publishes-control-resonant', tab: 'about', date: '2026-06-02',
    title: 'Remedy Is Self-Publishing Control Resonant',
    description: 'Control Resonant is being developed and self-published by Remedy Entertainment, giving the studio direct control over the sequel’s launch communication.',
    sourceLabel: 'Remedy Entertainment — launch announcement', sourceUrl: remedyLaunch,
    lead: 'Remedy Entertainment is both the developer and publisher of Control Resonant. That makes the studio’s own game page and announcements the primary record for the release schedule and product positioning.',
    details: [
      'Self-publishing matters to information tracking because platform pages and retailer listings can update at different speeds. When a date or central feature conflicts, a dated Remedy statement carries the strongest weight unless the studio later corrects it.',
      'It does not mean every operational detail will appear on Remedy’s site first. Download sizes, regional prices, accessibility labels, and unlock times may still be documented by PlayStation, Xbox, Steam, or Epic.',
      'Our source policy therefore uses Remedy for the central announcement and first-party stores for platform-specific facts. Secondary previews can add observation, but they are labeled separately from confirmed product data.'
    ],
    takeaways: ['Remedy is developer and publisher', 'Studio announcements anchor release facts', 'Platform stores remain important for regional details']
  },
  {
    slug: 'control-2-officially-titled-control-resonant', tab: 'about', date: '2026-06-02',
    title: 'The Control 2 Project Is Officially Titled Control Resonant',
    description: 'Remedy’s sequel is marketed as Control Resonant, while “Control 2” remains a useful earlier project name and search alias.',
    sourceLabel: 'Remedy Entertainment — official game page', sourceUrl: remedyGame,
    lead: 'The sequel once discussed as Control 2 now carries the release title Control Resonant. Both names refer to the same Remedy project, but the official title should lead current coverage and metadata.',
    details: [
      'Keeping the earlier name as an alternate reference helps players connect old announcements, wishlists, and searches to the finished product identity. It should not create a duplicate set of pages competing for the same intent.',
      'The new title also signals that Remedy is defining the game as more than a numbered repeat. Its Dylan-led story, Manhattan setting, melee focus, and build systems establish a distinct direction within the series.',
      'Our canonical pages use Control Resonant while mentioning Control 2 only where it clarifies continuity. That protects the site from splitting essentially identical information across two URL families.'
    ],
    takeaways: ['Official release title: Control Resonant', 'Control 2 is an earlier alias', 'Both names should resolve to one content architecture']
  },
  {
    slug: 'official-combat-deep-dive-expands-prelaunch-record', tab: 'about', date: '2026-03-04',
    title: 'Official Combat Deep Dive Expands the Pre-Launch Record',
    description: 'Remedy’s PlayStation Blog breakdown provides the main first-party source for Aberrant, Instinct, The Gap, and player-choice claims.',
    sourceLabel: 'PlayStation Blog — official combat deep dive', sourceUrl: psCombat,
    lead: 'The March combat deep dive is the most concentrated official explanation of how Control Resonant plays. It moves several systems from trailer interpretation into attributable first-party information.',
    details: [
      'The article connects Aberrant’s transforming forms, Dylan’s Instinct powers, The Gap build system, and the broader move toward a melee action RPG. Those relationships can now be stated with more confidence than details visible only for a moment in footage.',
      'A deep dive still is not a final manual. Interface layouts, balance values, unlock costs, and some terminology can change before release, so exact guide steps need retail verification.',
      'For readers, the practical benefit is traceability. Every system article on this site links back to the official explanation and marks the boundary between the studio’s claims and our future testing.'
    ],
    takeaways: ['Primary source for core combat systems', 'Confirms relationships between weapons, powers, and builds', 'Final values remain version-sensitive']
  },
  {
    slug: 'new-game-plus-reveal-confirms-post-campaign-plan', tab: 'about', date: '2026-04-30',
    title: 'New Game Plus Reveal Confirms a Post-Campaign Plan',
    description: 'Remedy’s dedicated New Game Plus update establishes replay content before launch while deliberately withholding its surprises.',
    sourceLabel: 'PlayStation Blog — New Game Plus reveal', sourceUrl: psNg,
    lead: 'A dedicated official update confirms that Remedy is planning for play beyond the first campaign completion. New Game Plus is part of the announced product rather than an inferred post-launch wish.',
    details: [
      'The studio describes the mode as more than a repeat, suggesting altered content and reasons to return with a developed character. It does not provide a complete spoiler list, which is appropriate for a mode built partly around discovery.',
      'The announcement also creates a clean editorial boundary. We can confirm that the mode exists and that changes are intended, while leaving item carry-over, unlock timing, and repeated-cycle behavior open.',
      'When the final game is available, the news record will remain as the dated announcement, while the evergreen guide will carry tested instructions. Separating those page intents avoids turning a historical update into an outdated walkthrough.'
    ],
    takeaways: ['Post-campaign replay mode is official', 'Changed content is promised', 'Detailed instructions belong in the launch guide']
  },
  {
    slug: 'official-source-policy-for-prelaunch-control-resonant-news', tab: 'about', date: '2026-07-19',
    title: 'How This Site Verifies Pre-Launch Control Resonant News',
    description: 'Our news desk prioritizes Remedy and first-party storefront evidence, records publication dates, and keeps unknown details out of indexable pages.',
    sourceLabel: 'Remedy Entertainment — official Control Resonant page', sourceUrl: remedyGame,
    lead: 'Control Resonant is still pre-release, which makes source discipline part of useful coverage. This site treats Remedy statements and first-party platform listings as the foundation for confirmed news.',
    details: [
      'A dated announcement can establish a release date, named platform, or described system. It cannot automatically prove an unlisted frame rate, complete accessibility menu, hidden character, or final balance value. Those gaps remain explicit.',
      'News pages preserve what changed and when; evergreen guides provide the current player answer. If a later official update supersedes an earlier statement, the guide is corrected and the news article gains an update note rather than silently rewriting history.',
      'We do not generate pages for rumors without useful evidence, and we do not multiply one announcement into near-identical keyword variants. Each URL must have a distinct question, direct answer, source link, and relevant path back to its topic hub.'
    ],
    takeaways: ['First-party evidence leads', 'Unknowns remain clearly marked', 'News history and evergreen guidance have separate intents']
  },

  {
    slug: 'flurry-slash-slice-primary-aberrant-forms', tab: 'database', date: '2026-06-11',
    title: 'Flurry, Slash, and Slice Identified as Primary Aberrant Forms',
    description: 'An official Xbox hands-on identifies the three opening primary-form choices for Aberrant and explains the tactical role of each one.',
    sourceLabel: 'Xbox Wire — official Control Resonant hands-on', sourceUrl: xboxHandsOn,
    lead: 'The opening build decision presents three named primary Aberrant forms: Flurry, Slash, and Slice. The official Xbox hands-on gives each form a distinct attack profile rather than treating them as cosmetic variants.',
    details: [
      'Flurry becomes fast close-range twin daggers with an increased critical chance. Slash uses broad scythe swings to pressure groups. Slice takes the form of a high single-target damage axe that gains bonus damage when attacking from behind.',
      'The initial choice is mutually exclusive at that moment, but the preview states that the other weapons can be unlocked later. This makes the opening decision a first specialization step rather than a permanent loss of two complete weapon families.',
      'These names and roles are suitable for the database because a first-party preview directly tested them. Final damage numbers, upgrade trees, animation timing, and best-form rankings still require the launch build and should not be inferred from the preview alone.'
    ],
    takeaways: ['Flurry favors speed and critical hits', 'Slash covers groups with wide attacks', 'Slice emphasizes single-target and back damage']
  },
  {
    slug: 'crush-drill-extend-secondary-aberrant-forms', tab: 'database', date: '2026-06-11',
    title: 'Crush, Drill, and Extend Confirmed as Secondary Weapon Choices',
    description: 'Xbox’s hands-on preview names three secondary Aberrant choices: a heavy mallet, sustained drill, and ranged chain-staff form.',
    sourceLabel: 'Xbox Wire — official Control Resonant hands-on', sourceUrl: xboxHandsOn,
    lead: 'Control Resonant separates primary and secondary Aberrant decisions. The tested opening section offered Crush, Drill, and Extend as the second pool of forms, giving the player a different tactical layer from the first light-attack choice.',
    details: [
      'Crush is described as a large, slow smashing mallet. Drill applies directed sustained damage. Extend becomes a whip-like chain staff that adds reach, giving a short-range primary form a way to cover distance without replacing the entire build.',
      'The preview later explains that primary, secondary, and combo-finisher pools can be mixed. That structure means a named form should be catalogued with its attack slot and function; listing every form as a standalone full weapon would misrepresent the system.',
      'The report confirms the names and broad purposes, but not complete inputs, stamina or resource costs, unlock conditions, or upgrade nodes. Those database fields remain release-version work rather than speculation based on a short media session.'
    ],
    takeaways: ['Crush is a slow heavy mallet', 'Drill applies sustained directed damage', 'Extend supplies whip-like range']
  },
  {
    slug: 'dash-double-jump-levitation-movement-unlocks', tab: 'database', date: '2026-06-11',
    title: 'Dash, Double Jump, and Levitation Appear as Movement Unlocks',
    description: 'The official Xbox preview documents three movement abilities and the platforming challenges used to introduce them in Dylan’s opening route.',
    sourceLabel: 'Xbox Wire — official Control Resonant hands-on', sourceUrl: xboxHandsOn,
    lead: 'Dash, double jump, and levitation are now supported by first-hand platform-holder reporting. The preview encountered these powers while following Jesse’s impression through a pocket dimension connected to unusual game-console-like objects.',
    details: [
      'Each movement ability was followed by a platforming challenge that taught its use before the next unlock. The sequence culminated in Dylan combining movement across larger gaps on the way to the first Resonant Entity encounter.',
      'The account also describes Control Resonant as having a meaningful 3D-platforming component. Movement is therefore not only combat mobility: it supports rooftop traversal, pocket-dimension navigation, environmental puzzles, and story-controlled access to Manhattan.',
      'New Game Plus information separately states that traversal abilities do not carry over because they are linked to story progression. The database records the confirmed powers and their design role without inventing exact input windows, upgrade costs, or every location they unlock.'
    ],
    takeaways: ['Dash, double jump, and levitation are confirmed', 'Movement unlocks have tutorial challenges', 'Traversal powers reset in New Game Plus']
  },
  {
    slug: 'barrage-seekers-shield-resonant-ability-choices', tab: 'database', date: '2026-06-11',
    title: 'Barrage, Seekers, and Shield Named as Resonant Ability Choices',
    description: 'A first-party hands-on identifies three supernatural ability options earned after an early Resonant Entity boss encounter.',
    sourceLabel: 'Xbox Wire — official Control Resonant hands-on', sourceUrl: xboxHandsOn,
    lead: 'The first reported Resonant ability choice includes Barrage, Seekers, and Shield. Each option changes Dylan’s combat toolkit in a different way and supports Remedy’s claim that boss rewards create meaningful specialization.',
    details: [
      'Barrage pulls rocks from the ground and launches them at range. Seekers summons an automatically firing construct that can also be thrown as an explosive. Shield raises floating rocks defensively and can be turned into offense by dashing into enemies.',
      'The preview says Dylan can eventually equip three abilities, while the broader build includes primary, secondary, and finisher attacks. New Game Plus later expands the rules by allowing multiple different Combat Abilities associated with the same boss.',
      'These descriptions come from a tested media build, not a guessed reading of footage. The full boss list, alternative reward branches, resource costs, cooldown behavior, and final balance remain outside the confirmed database until the retail version can be checked.'
    ],
    takeaways: ['Barrage is a ranged rock attack', 'Seekers combines a summon with an explosive throw', 'Shield supports defense and offensive dashing']
  },
  {
    slug: 'dr-casper-darling-return-fmv-confirmed', tab: 'database', date: '2026-06-11',
    title: 'Dr. Casper Darling’s Return Is Confirmed Through an FMV Clip',
    description: 'Xbox’s hands-on preview reports a brief Dr. Casper Darling video appearance and confirms that live-action FBC segments return.',
    sourceLabel: 'Xbox Wire — official Control Resonant hands-on', sourceUrl: xboxHandsOn,
    lead: 'Dr. Casper Darling is now a confirmed returning character. The Xbox Wire preview saw him in a short full-motion-video segment near the end of the session, discussing the period when Dylan was first taken by the FBC.',
    details: [
      'The appearance establishes two useful database facts: Darling remains part of the sequel’s record, and the live-action presentation style associated with the first Control returns. It does not prove how much screen time he receives or whether he appears in present-day events.',
      'The clip concerns Dylan’s earlier relationship with the Bureau, which fits the sequel’s effort to explain his confinement and identity without requiring every player to remember the original game. It may function as an archival or instructional recording rather than a physical encounter.',
      'Because the preview identifies the character directly, a database entry is justified. Story theories about his location, survival, allegiance, or role in Jesse’s disappearance remain unsupported and should not be presented as confirmed character biography.'
    ],
    takeaways: ['Casper Darling returns in an FMV segment', 'The clip discusses Dylan’s FBC history', 'His wider story role remains undisclosed']
  },

  {
    slug: 'new-game-plus-carryover-list-officially-detailed', tab: 'faq', date: '2026-04-30',
    title: 'Official New Game Plus Carry-Over List Answers a Major FAQ',
    description: 'Remedy confirms exactly which combat progression carries into New Game Plus and why traversal abilities reset.',
    sourceLabel: 'PlayStation Blog — Remedy details New Game Plus', sourceUrl: psNg,
    lead: 'The most common New Game Plus question now has a specific official answer. Aberrant upgrades, health improvements, Combat Ability resource upgrades, supernatural Combat Abilities, talents, and Artifacts persist into the new run.',
    details: [
      'Traversal abilities are the stated exception. Remedy ties those powers to story progression and the way the world unfolds, so they must be reacquired rather than used to bypass the intended opening route and gated exploration.',
      'The second playthrough also expands build choice. New talent nodes appear, multiple different Combat Abilities from the same boss can be equipped, and a fourth Artifact slot opens beyond the three available during the first run.',
      'The FAQ and evergreen carry-over table now separate confirmed categories from remaining operational questions. The final unlock prompt, save-slot behavior, and support for multiple consecutive NG+ cycles still need retail verification, but the progression matrix itself is no longer unknown.'
    ],
    takeaways: ['Combat progression largely carries over', 'Traversal abilities reset', 'New talent and Artifact options expand the second run']
  },
  {
    slug: 'three-artifact-slots-fourth-in-new-game-plus', tab: 'faq', date: '2026-04-30',
    title: 'Artifact Slot Count Confirmed for First Run and New Game Plus',
    description: 'Players can equip up to three Artifacts during the first playthrough, while New Game Plus unlocks a fourth slot.',
    sourceLabel: 'PlayStation Blog — official Artifact and New Game Plus details', sourceUrl: psNg,
    lead: 'Control Resonant allows up to three equipped Artifacts during the first campaign. New Game Plus adds a fourth slot, creating more room to combine passive modifiers, conditions, and trade-offs.',
    details: [
      'Artifacts can affect survivability, combat output, exploration, or the resource economy. Remedy emphasizes situational tuning instead of describing every Artifact as an unconditional stat increase, so the best set will depend on the chosen weapon forms and supernatural abilities.',
      'The crafting loop begins with untapped Artifacts found in the world. Players craft them into usable Artifacts inside The Gap, connecting exploration rewards with the buildcrafting space rather than placing the whole system in a conventional equipment shop.',
      'The official explanation answers slot-count and crafting-location questions but does not publish every Artifact name, rarity, recipe, or modifier range. Database expansion should wait for identified items with distinct verified effects rather than generate speculative item pages.'
    ],
    takeaways: ['Three Artifact slots in the first run', 'A fourth slot unlocks in New Game Plus', 'Untapped Artifacts are crafted in The Gap']
  },
  {
    slug: 'xbox-play-anywhere-entitlement-and-save-details', tab: 'faq', date: '2026-05-08',
    title: 'Xbox Play Anywhere Details Clarify Cross-Device Access',
    description: 'Xbox confirms eligible players can move between console, PC, and supported handhelds with saves, add-ons, and achievements.',
    sourceLabel: 'Xbox Wire — Remedy and Xbox Play Anywhere interview', sourceUrl: xboxPublishing,
    lead: 'Control Resonant supports Xbox Play Anywhere at launch. Xbox says eligible digital purchases can be played across Xbox console, Xbox on PC, and supported gaming handhelds at no additional cost within the Microsoft ecosystem.',
    details: [
      'The program is designed to carry saves, game add-ons, and achievements between supported devices. That makes it a cross-device entitlement and continuity feature, not merely a controller badge or a promise that separate progress files can be imported manually.',
      'Play Anywhere does not grant Steam, Epic Games Store, PlayStation, or Mac App Store licenses. It also does not mean the game is included with Game Pass; the Xbox store lists the feature separately from any subscription availability.',
      'The official product page confirms Series X|S and PC play. Exact handheld performance will still depend on device hardware and the final build, even though Remedy says portable screens and controls were considered during development.'
    ],
    takeaways: ['Eligible Xbox digital purchase covers console and Microsoft PC', 'Saves, add-ons, and achievements can follow', 'It is not Game Pass or cross-buy with other stores']
  },
  {
    slug: 'xbox-standard-deluxe-us-price-and-addons', tab: 'faq', date: '2026-07-25',
    title: 'Xbox Store Lists $59.99 Standard and $69.99 Deluxe Editions',
    description: 'The US Xbox listing supplies a concrete regional price comparison and names the add-ons included with Digital Deluxe.',
    sourceLabel: 'Xbox Store — official US edition comparison', sourceUrl: xboxStore,
    lead: 'On the US Xbox store, Control Resonant Standard is listed at $59.99 and Digital Deluxe at $69.99. These figures answer the US Xbox price question but should not be converted into a universal worldwide price.',
    details: [
      'The Standard listing includes the base game and the preorder bonus while the offer is active. The Digital Deluxe comparison adds the AWE Mission Outfit, original soundtrack and digital artbook, Starter Resource Bundle, and Untapped Artifact (Wallet).',
      'The preorder bonus is listed separately and contains the Hiss Corruption Outfit and Pickpocket’s Tool Artifact. Separating preorder content from permanent Deluxe add-ons prevents buyers from assuming the same bonus remains included after the preorder period ends.',
      'Taxes, currency, promotions, and regional availability can change the amount shown to another account. The FAQ therefore cites the exact US Xbox listing and directs players to their own first-party store before purchase rather than presenting $59.99 as a global price.'
    ],
    takeaways: ['US Xbox Standard price: $59.99', 'US Xbox Digital Deluxe price: $69.99', 'Regional stores and preorder timing control the final offer']
  },
  {
    slug: 'steam-language-matrix-confirms-15-text-nine-audio', tab: 'faq', date: '2026-07-25',
    title: 'Steam Confirms 15 Text Languages and Nine Full-Audio Options',
    description: 'The official Steam matrix resolves language-support questions and distinguishes text localization from complete dubbing.',
    sourceLabel: 'Steam — official Control Resonant language matrix', sourceUrl: steam,
    lead: 'Steam lists 15 languages with interface and subtitle support. Nine of those languages also carry the full-audio mark: English, French, Italian, German, Spanish from Spain, Japanese, Brazilian Portuguese, Simplified Chinese, and Ukrainian.',
    details: [
      'Korean, Latin American Spanish, Traditional Chinese, Polish, Russian, and Turkish currently have interface and subtitle support without full audio. Turkish is the fifteenth text language; Arabic is not part of the current Steam matrix.',
      'This distinction matters for users searching whether a language is “supported.” A localized interface and subtitles answer a different accessibility and purchasing question from a complete voice track, so the FAQ records both columns rather than reducing the result to yes or no.',
      'The Steam matrix applies directly to the PC listing. Console language availability can depend on the regional product and downloadable packs, so PS5 and Xbox buyers should verify their own store page even when the language is present on Steam.'
    ],
    takeaways: ['15 interface and subtitle languages', 'Nine include complete voice acting', 'Turkish is supported for text, not full audio']
  }
];

export const tabLabels: Record<NewsTab, string> = {
  release: 'Release Date', guides: 'Guides & Systems', database: 'Game Database', characters: 'Characters & Story', platforms: 'Platforms', faq: 'FAQ Updates', about: 'Development & Sources'
};

export const newsForTab = (tab: NewsTab) => newsItems.filter(item => item.tab === tab);
