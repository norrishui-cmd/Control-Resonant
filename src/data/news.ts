export type NewsTab = 'release' | 'guides' | 'characters' | 'platforms' | 'about';

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
    description: 'Remedy has confirmed New Game Plus and says the mode will contain changes and surprises rather than only stronger enemies.',
    sourceLabel: 'PlayStation Blog — first New Game Plus details', sourceUrl: psNg,
    lead: 'New Game Plus is officially part of Control Resonant’s replay plan. Remedy’s first details position it as a changed second journey, not merely the same campaign with retained statistics.',
    details: [
      'The mode is expected to give developed builds a longer life and introduce additional reasons to revisit encounters. The announcement deliberately avoids revealing every surprise, so a complete list of differences is not yet available.',
      'Carry-over rules for weapons, resources, upgrades, and collectibles still need a final matrix. It is also premature to state exactly when the option appears or whether repeated NG+ cycles are supported.',
      'Once the game launches, our guide will document the unlock condition, retained progress, new content, difficulty behavior, and any missable preparation. Until then, those fields stay marked as unknown rather than filled with genre assumptions.'
    ],
    takeaways: ['New Game Plus is confirmed', 'Remedy promises meaningful changes', 'Carry-over rules remain incomplete']
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
      'The listed interface and subtitle languages are English, French, Italian, German, Spanish from Spain, Japanese, Korean, Polish, Brazilian Portuguese, Russian, Simplified Chinese, Traditional Chinese, Ukrainian, Latin American Spanish, and Arabic.',
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
  }
];

export const tabLabels: Record<NewsTab, string> = {
  release: 'Release Date', guides: 'Guides & Systems', characters: 'Characters & Story', platforms: 'Platforms', about: 'Development & Sources'
};

export const newsForTab = (tab: NewsTab) => newsItems.filter(item => item.tab === tab);
