export const databaseGroups = [
  {
    id: 'characters', title: 'Characters', summary: 'Confirmed people with an identified story role.',
    records: [
      { name: 'Dylan Faden', type: 'Playable lead', status: 'Confirmed', detail: 'The sole playable character; former FBC captive and parautilitarian wielding the Aberrant.', href: '/guides/dylan-faden/' },
      { name: 'Jesse Faden', type: 'Missing FBC Director', status: 'Confirmed', detail: 'Dylan’s sister remains central to the story, but she is not the playable lead.', href: '/guides/jesse-faden/' },
      { name: 'Zoe De Vera', type: 'FBC field agent', status: 'Confirmed', detail: 'Dylan’s handler in Manhattan and the anchor of the new seamless dialogue system.', href: '/guides/zoe-de-vera/' },
    ],
  },
  {
    id: 'equipment', title: 'Equipment & Items', summary: 'Weapons, Artifacts, outfits and edition-linked items.',
    records: [
      { name: 'The Aberrant', type: 'Shapeshifting melee weapon', status: 'Confirmed', detail: 'Switches among Primary Forms, Secondary Forms and Combo Enders.', href: '/guides/aberrant-weapon-forms/' },
      { name: 'Artifacts', type: 'Passive equipment', status: 'Confirmed', detail: 'Crafted from Untapped Artifacts in the Gap; three slots on a first run and four in New Game Plus.', href: '/guides/artifacts-and-crafting/' },
      { name: 'Pre-order item set', type: '2 outfits + 1 Artifact', status: 'Confirmed', detail: 'Hiss Corruption Outfit, Occult Outfit and Pickpocket’s Tool Artifact.', href: '/guides/preorder-bonus-items/' },
      { name: 'Digital Deluxe item set', type: 'Outfit + Untapped Artifact + resources', status: 'Confirmed', detail: 'AWE Mission Outfit, Untapped Artifact (Wallet) and Starter Resource Bundle.', href: '/guides/digital-deluxe-items/' },
    ],
  },
  {
    id: 'systems', title: 'Gameplay Systems', summary: 'Verified combat, progression, quest and traversal properties.',
    records: [
      { name: 'Combat momentum loop', type: 'Core combat', status: 'Confirmed', detail: 'Melee restores ability resource; abilities stun; executions temporarily increase melee damage.', href: '/guides/combat-momentum-and-executions/' },
      { name: 'The Gap', type: 'Build space', status: 'Confirmed', detail: 'A metaphysical space used to shape abilities, weapon forms, talents and crafted Artifacts.', href: '/guides/the-gap-build-system/' },
      { name: 'Resonant abilities', type: 'Boss rewards', status: 'Confirmed', detail: 'Major Resonants grant supernatural combat abilities, sometimes with branching choices.', href: '/guides/resonants-explained/' },
      { name: 'Dylan’s Journey', type: 'Main campaign', status: 'Confirmed', detail: 'The primary narrative quest line across handcrafted Manhattan zones.', href: '/guides/world-quests-and-campaign/' },
      { name: 'World Quests', type: 'Optional narratives', status: 'Confirmed', detail: 'Self-contained stories alongside encounters, challenges, discoveries and other activities.', href: '/guides/world-quests-and-campaign/' },
      { name: 'Movement kit', type: 'Traversal', status: 'Hands-on preview', detail: 'Double dash, double jump and brief levitation were playable in a 90-minute media demo.', href: '/guides/movement-dash-double-jump-levitate/' },
      { name: 'New Game Plus', type: 'Replay mode', status: 'Confirmed', detail: 'Carries combat progression but resets story-gated traversal; adds talent options and a fourth Artifact slot.', href: '/guides/new-game-plus-carryover-table/' },
    ],
  },
  {
    id: 'threats', title: 'Threats & Enemies', summary: 'Named factions, summons and encounter classes shown by official sources.',
    records: [
      { name: 'Hiss', type: 'Corrupting force', status: 'Confirmed', detail: 'Returns as one of the forces overrunning Manhattan after the Oldest House falls.', href: '/guides/hiss-and-mold-enemies/' },
      { name: 'Mold', type: 'Invasive microorganism', status: 'Confirmed', detail: 'A returning paranatural threat with combat and summon-system connections.', href: '/guides/hiss-and-mold-enemies/' },
      { name: 'Mold Turrets', type: 'Player summon', status: 'Confirmed', detail: 'Independent tactical summons that attack and apply harmful status effects.', href: '/guides/mold-turrets/' },
      { name: 'Seekers', type: 'Volatile summon', status: 'Confirmed', detail: 'Telekinetic entities that attack, can be launched and can be detonated.', href: '/guides/seekers-summon/' },
      { name: 'Resonants', type: 'Major bosses', status: 'Confirmed', detail: 'Story-integrated boss encounters whose defeat grants a unique combat ability.', href: '/guides/resonants-explained/' },
    ],
  },
  {
    id: 'availability', title: 'Demo & Availability', summary: 'Release, playable-preview and platform state, separated to prevent confusion.',
    records: [
      { name: 'Public demo / beta', type: 'Downloadable trial', status: 'Not announced', detail: 'No public demo, beta or open playtest has been announced as of July 19, 2026.', href: '/guides/demo-beta-and-playtest-status/' },
      { name: 'Media hands-on demo', type: 'Press preview', status: 'Occurred', detail: 'PlayStation Blog reported a roughly 90-minute Summer Game Fest hands-on session.', href: '/guides/media-demo-hands-on-details/' },
      { name: 'Worldwide launch', type: 'Release', status: 'Confirmed', detail: 'September 24, 2026 on PS5, Xbox Series X|S and PC; Mac follows later in 2026.', href: '/release-date/' },
      { name: 'PS5 Deluxe early access', type: '48-hour access', status: 'Confirmed', detail: 'Digital Deluxe access begins September 22, 2026 on PlayStation 5.', href: '/guides/ps5-deluxe-early-access/' },
    ],
  },
] as const;

export const databaseRecords = databaseGroups.flatMap(group => group.records.map(record => ({ ...record, group: group.title })));
