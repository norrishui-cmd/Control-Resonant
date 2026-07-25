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
      { name: 'Flurry', type: 'Primary Aberrant Form', status: 'Hands-on preview', detail: 'Fast, close-range twin daggers with a boosted critical chance.', href: '/guides/flurry-aberrant-form/' },
      { name: 'Slash', type: 'Primary Aberrant Form', status: 'Hands-on preview', detail: 'Wide-swiping scythe attacks designed to pressure groups.', href: '/guides/slash-aberrant-form/' },
      { name: 'Slice', type: 'Primary Aberrant Form', status: 'Hands-on preview', detail: 'High single-target axe damage with a bonus when attacking from behind.', href: '/guides/slice-aberrant-form/' },
      { name: 'Crush', type: 'Secondary Aberrant Form', status: 'Hands-on preview', detail: 'A huge, slow mallet used for heavy smashing attacks.', href: '/guides/crush-aberrant-form/' },
      { name: 'Drill', type: 'Secondary Aberrant Form', status: 'Hands-on preview', detail: 'A directed weapon form built around sustained damage.', href: '/guides/drill-aberrant-form/' },
      { name: 'Extend', type: 'Secondary Aberrant Form', status: 'Hands-on preview', detail: 'A whip-like chain staff that adds reach to a melee loadout.', href: '/guides/extend-aberrant-form/' },
      { name: 'Combo Enders', type: 'Third Aberrant slot', status: 'Confirmed', detail: 'A separate form pool that supplies special finishing moves after attack chains.', href: '/guides/aberrant-combo-ender-system/' },
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
      { name: 'Barrage', type: 'Combat Ability', status: 'Hands-on preview', detail: 'Pulls rocks from the ground and launches them at range.', href: '/guides/barrage-combat-ability/' },
      { name: 'Shield', type: 'Combat Ability', status: 'Hands-on preview', detail: 'Raises floating rocks defensively and rams enemies during an offensive dash.', href: '/guides/shield-combat-ability/' },
      { name: 'Three ability slots', type: 'Loadout capacity', status: 'Hands-on preview', detail: 'Dylan can eventually equip three supernatural Combat Abilities at once.', href: '/guides/three-combat-ability-slots/' },
      { name: 'Boss ability choices', type: 'Progression decision', status: 'Confirmed', detail: 'Some Resonants present exclusive first-run powers; New Game Plus widens the combinations.', href: '/guides/resonant-boss-ability-choices/' },
      { name: 'Dylan’s Journey', type: 'Main campaign', status: 'Confirmed', detail: 'The primary narrative quest line across handcrafted Manhattan zones.', href: '/guides/world-quests-and-campaign/' },
      { name: 'World Quests', type: 'Optional narratives', status: 'Confirmed', detail: 'Self-contained stories alongside encounters, challenges, discoveries and other activities.', href: '/guides/world-quests-and-campaign/' },
      { name: 'Movement kit', type: 'Traversal', status: 'Hands-on preview', detail: 'Double dash, double jump and brief levitation were playable in a 90-minute media demo.', href: '/guides/movement-dash-double-jump-levitate/' },
      { name: 'Reach', type: 'Traversal Ability', status: 'Confirmed', detail: 'Helps Dylan navigate spaces that no longer obey ordinary physics.', href: '/guides/reach-traversal-ability/' },
      { name: 'Shift', type: 'Gravity traversal', status: 'Confirmed', detail: 'Redirects momentum and movement inside Gravity Anomalies.', href: '/guides/shift-gravity-ability/' },
      { name: 'Movement consoles', type: 'Traversal unlocks', status: 'Hands-on preview', detail: 'Console-like objects introduce dash, double jump and levitation through tutorials.', href: '/guides/movement-ability-consoles/' },
      { name: '3D platforming', type: 'Traversal gameplay', status: 'Hands-on preview', detail: 'Dedicated challenges combine aerial movement with gravity-shifted surfaces.', href: '/guides/control-resonant-3d-platforming/' },
      { name: 'Seamless dialogue', type: 'Narrative system', status: 'Confirmed', detail: 'Conversations can unfold during exploration instead of always stopping movement.', href: '/guides/seamless-dialogue-system/' },
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
      { name: 'First Resonant Entity', type: 'Previewed boss', status: 'Hands-on preview', detail: 'A giant partial head embedded in pavement that attacks with telekinetic debris.', href: '/guides/first-resonant-entity-boss/' },
      { name: 'Hiss–Resonant conflict', type: 'Faction interaction', status: 'Hands-on preview', detail: 'The opening Resonant Entity is observed removing Hiss from its surroundings.', href: '/guides/hiss-vs-resonant-awe/' },
    ],
  },
  {
    id: 'locations', title: 'Locations & World', summary: 'Named areas and world-structure elements supported by official previews.',
    records: [
      { name: 'West Incursion Zone', type: 'Early Manhattan zone', status: 'Confirmed', detail: 'An early area with a Resonant hunt, shifting architecture and Gravity Anomalies.', href: '/guides/west-incursion-zone/' },
      { name: 'Evacuation Zone', type: 'Open combat area', status: 'Hands-on preview', detail: 'A later-build arena where melee and ranged enemies attack from several directions.', href: '/guides/evacuation-zone/' },
      { name: 'FBC field office', type: 'Evolving central hub', status: 'Official preview', detail: 'The Bureau hub connects Manhattan’s major handcrafted zones.', href: '/guides/fbc-field-office-hub/' },
    ],
  },
  {
    id: 'returning-figures', title: 'Returning Figures & Entities', summary: 'Returning presences identified in official story material or playable previews.',
    records: [
      { name: 'Dr. Casper Darling', type: 'Returning FBC scientist', status: 'Hands-on preview', detail: 'Appears in an FMV clip discussing Dylan’s arrival at the Bureau.', href: '/guides/casper-darling/' },
      { name: 'The Board', type: 'Extradimensional authority', status: 'Hands-on preview', detail: 'Addresses Dylan during the opening when he receives the Aberrant.', href: '/guides/the-board-role/' },
      { name: 'Opening escape', type: 'Campaign opening', status: 'Hands-on preview', detail: 'Dylan leaves confinement, receives the Aberrant, contacts Zoe and enters Manhattan.', href: '/guides/control-resonant-opening-sequence/' },
    ],
  },
  {
    id: 'availability', title: 'Demo & Availability', summary: 'Release, playable-preview and platform state, separated to prevent confusion.',
    records: [
      { name: 'Public demo / beta', type: 'Downloadable trial', status: 'Not announced', detail: 'No public demo, beta or open playtest has been announced as of July 25, 2026.', href: '/guides/demo-beta-and-playtest-status/' },
      { name: 'Media hands-on demo', type: 'Press preview', status: 'Occurred', detail: 'PlayStation Blog reported a roughly 90-minute Summer Game Fest hands-on session.', href: '/guides/media-demo-hands-on-details/' },
      { name: 'Worldwide launch', type: 'Release', status: 'Confirmed', detail: 'September 24, 2026 on PS5, Xbox Series X|S and PC; Mac follows later in 2026.', href: '/release-date/' },
      { name: 'PS5 Deluxe early access', type: '48-hour access', status: 'Confirmed', detail: 'Digital Deluxe access begins September 22, 2026 on PlayStation 5.', href: '/guides/ps5-deluxe-early-access/' },
    ],
  },
] as const;

export const databaseRecords = databaseGroups.flatMap(group => group.records.map(record => ({ ...record, group: group.title })));
