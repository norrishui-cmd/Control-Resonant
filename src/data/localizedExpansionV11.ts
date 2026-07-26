import type { LocalizedPage } from './localized.ts';

const handsOn = 'https://news.xbox.com/en-us/2026/06/11/control-resonant-hands-on-melee-combat/';
const combat = 'https://news.xbox.com/en-us/2026/03/04/control-resonant-combat-preview/';
const steam = 'https://store.steampowered.com/app/3669870/CONTROL_Resonant/';
const psStory = 'https://blog.playstation.com/2026/06/02/control-resonant-launches-september-24-on-ps5/';
const psWorld = 'https://blog.playstation.com/2026/06/05/summer-game-fest-2026-highlights-16-games-coming-to-ps5/';
const psBuilds = 'https://blog.playstation.com/2026/03/04/control-resonant-a-deep-dive-into-combat-buildcrafting-and-player-choice/';

export const localizedExpansionV11: LocalizedPage[] = [
  {
    lang:'de', slug:'eroeffnungssequenz', englishPath:'/guides/control-resonant-opening-sequence/',
    title:'Control Resonant Eröffnungssequenz: Was zuerst passiert',
    description:'Dylan entkommt aus dem Oldest House, erhält Aberrant, kontaktiert Zoe und betritt das verwüstete Manhattan.',
    label:'Story-Vorschau', answer:'Control Resonant beginnt mit Dylans Flucht aus seiner Gefangenschaft im Oldest House. Nach einer Vision von Jesse wacht er mit Aberrant in der Brust auf, wählt seine erste Primärform, bekämpft Hiss-infizierte FBC-Mitarbeiter und nimmt über Funk Kontakt zu Zoe auf.',
    sections:[
      {heading:'Die bestätigte Reihenfolge',paragraphs:['Xbox Wire spielte ungefähr die erste Stunde einer Medienversion. Dylan wird als langjähriger Gefangener, Versuchsperson und früherer Direktor-Kandidat gezeigt. Jesse ruft ihn in einer visionsartigen Szene zum Handeln auf; danach ist seine Zelle offen und Aberrant steckt in seiner Brust.','The Board spricht Dylan direkt an. Anschließend folgt die Wahl zwischen Flurry, Slash und Slice. Hiss-infizierte Beschäftigte im alarmierten Oldest House führen Angriff und Ausweichen ein.']},
      {heading:'Vom Oldest House nach Manhattan',paragraphs:['Draußen erkennt Dylan, dass der Hiss nicht mehr eingeschlossen ist. Über ein Funkgerät antwortet er auf den Notruf von FBC-Agentin Zoe. Sie ist erleichtert, einen Überlebenden zu erreichen, während Dylan seine Identität zunächst vorsichtig behandelt.','Später zeigt die Vorschau Sekundärformen, Bewegungsfähigkeiten und einen Resonant-Boss. Missionsnamen, Kontrollpunkte und Belohnungen wurden nicht veröffentlicht; die beobachtete Reihenfolge ist deshalb kein vollständiger Walkthrough.']},
      {heading:'Wie belastbar ist die Vorschau?',paragraphs:['Eine spielbare Medienfassung ist stärkeres Material als ein zusammengeschnittener Trailer. Dialog, Timing und Tutorialschritte können sich bis zum 24. September trotzdem verändern. Diese Seite trennt beobachtete Ereignisse von noch unbekannten Questdetails.']}
    ], sources:[{label:'Xbox Wire – Eröffnungsstunde',url:handsOn},{label:'PlayStation Blog – Story-Ausgangslage',url:psStory}]
  },
  {
    lang:'de', slug:'sieben-jahre-nach-control', englishPath:'/guides/seven-years-after-control/',
    title:'Control Resonant Zeitlinie: Sieben Jahre nach Control',
    description:'Die bestätigte Zeitlinie ordnet Dylan, Jesse, den Hiss, das Oldest House und die Krise in Manhattan ein.',
    label:'Zeitlinie', answer:'CONTROL Resonant spielt sieben Jahre nach den Ereignissen des ersten Control. Dylan Faden ist die spielbare Hauptfigur, während der Hiss aus dem Oldest House entkommen ist und Manhattan von mehreren paranatürlichen Gefahren überrollt wird.',
    sections:[
      {heading:'Was sich verändert hat',paragraphs:['Dylan verbrachte die Zwischenzeit unter der Kontrolle des Federal Bureau of Control. Jesse wurde nach dem ersten Spiel Direktorin, ist in Resonant aber verschwunden und bleibt eine wichtige, nicht spielbare Figur. Die Behörde arbeitet nun von einem Field Office in der Stadt aus.','Der Hiss hat die Grenzen des Oldest House überschritten. Gleichzeitig bedrohen Mold und eine weitere Resonant-AWE Manhattan. Architektur und Gravitation zerbrechen in einzelnen Zonen mit eigenen Herausforderungen.']},
      {heading:'Der Einstieg der Fortsetzung',paragraphs:['Die gezeigte Eröffnung verbindet Zeitlinie und Gameplay: Dylan verlässt seine Zelle, erhält Aberrant, nimmt Kontakt zu Zoe auf und geht hinaus in die Krise. Seine Suche nach Jesse verbindet die Familiengeschichte mit dem gescheiterten Eindämmungsversuch des FBC.','Das Spiel soll dennoch als eigenständiger Einstieg funktionieren. Vorkenntnisse erklären Namen und Beziehungen besser, sind laut Remedy aber keine Voraussetzung für die Hauptkampagne.']},
      {heading:'Was die Jahreszahl nicht beantwortet',paragraphs:['Die Angabe erklärt nicht jedes Ereignis zwischen beiden Spielen und verrät weder Jesses Aufenthaltsort noch die Ursache aller neuen Bedrohungen. Solche Lücken bleiben offen, bis die finale Geschichte belastbare Antworten liefert.']}
    ], sources:[{label:'Xbox Wire – Zeitlinie und Manhattan',url:combat},{label:'Steam – offizielle Story',url:steam}]
  },
  {
    lang:'de', slug:'casper-darling-rueckkehr', englishPath:'/guides/casper-darling/',
    title:'Dr. Casper Darling kehrt in Control Resonant zurück',
    description:'Darling erscheint in einer FMV-Aufnahme über Dylans Aufnahme beim FBC; seine größere Rolle bleibt offen.',
    label:'Charaktere', answer:'Dr. Casper Darling ist für Control Resonant bestätigt. In der gespielten Eröffnung erscheint er kurz in einer Live-Action-Aufnahme, die den Zeitraum beschreibt, in dem Dylan erstmals vom Federal Bureau of Control aufgenommen wurde.',
    sections:[
      {heading:'Was die Vorschau zeigt',paragraphs:['Die Szene bestätigt Darings Rückkehr auf dem Bildschirm und die Fortsetzung der bekannten FBC-FMV-Videos. Sein Clip stellt einen direkten Bezug zu Dylans Vergangenheit als Gefangener, Testperson und Direktor-Kandidat her.','Die Quelle sagt nicht, ob Darling im Jahr 2026 körperlich anwesend ist, aus einem anderen Zustand kommuniziert oder nur in archiviertem Material erscheint. Auch die Zahl seiner Szenen ist unbekannt.']},
      {heading:'Bedeutung für Dylans Geschichte',paragraphs:['Resonant fragt, wer Dylan nach Jahren institutioneller Kontrolle sein kann. Eine Darling-Aufnahme über seine Aufnahme beim Bureau liefert Kontext zu Experimenten und Verfahren, ohne den Wissenschaftler automatisch zur Hauptfigur zu machen.','Im ersten Control erklärten Darling-Videos Forschung und Bureau-Prozesse und wurden zugleich Teil des Geheimnisses. Die neue Aufnahme beweist das Format, garantiert aber weder dieselbe Funktion noch einen vollständigen Handlungsbogen.']},
      {heading:'Keine erfundene Wiedervereinigung',paragraphs:['Eine direkte Begegnung mit Dylan, eine Questreihe, eine Bossrolle oder Darings endgültiges Schicksal sind nicht bestätigt. Solche Behauptungen bleiben Theorie, bis Remedy weiteres Material oder die finale Version Belege liefert.']}
    ], sources:[{label:'Xbox Wire – Darling-Auftritt',url:handsOn}]
  },
  {
    lang:'de', slug:'the-board-rolle', englishPath:'/guides/the-board-role/',
    title:'Die Rolle von The Board in Control Resonant',
    description:'The Board spricht Dylan an, als er Aberrant erhält; Herkunft der Waffe, Bündnis und spätere Ziele bleiben ungeklärt.',
    label:'Lore', answer:'The Board kehrt in der Eröffnung zurück und spricht Dylan direkt an, nachdem Aberrant in seiner Brust erscheint. Bestätigt sind Stimme und Beteiligung; nicht bestätigt ist, ob The Board die Waffe erschaffen hat, sie kontrolliert oder weiterhin als Verbündeter handelt.',
    sections:[
      {heading:'Bestätigter Auftritt',paragraphs:['Dylan wacht in einer offenen Zelle auf und trägt die formwandelnde Nahkampfwaffe in seinem Körper. The Board verwendet erneut seine geschichtete, widersprüchliche Sprache und bezeichnet Dylan sinngemäß als Diener, Spielerfigur und Laufburschen.','Xbox Wire verbindet die Szene mit Jesse und dem extradimensionalen Führungskörper des FBC. Die genaue Eigentums- oder Befehlsstruktur bleibt jedoch Teil des Geheimnisses; Beteiligung ist kein Beleg für vollständige Kontrolle.']},
      {heading:'Dylans eigene Identität',paragraphs:['Dylan war bereits Teil des Direktor-Kandidatenprogramms. Nun wird ihm wieder von einer mächtigen Institution eine Rolle zugewiesen, obwohl die offizielle Story seinen Kampf um Menschlichkeit und Selbstbestimmung betont.','Damit ist The Board thematisch wichtig, auch bevor seine späteren Ziele bekannt sind. Die Situation verbindet Dylans Wunsch nach eigener Entscheidung mit Aberrant und seiner Suche nach Jesse.']},
      {heading:'Offene Fragen',paragraphs:['Nicht bestätigt sind eine Verbindung zur neuen Resonant-Kraft, ein Besuch der Astral Plane, Hotline-Nachrichten oder eine Rolle als Endgegner. Die Eröffnung liefert einen Startpunkt und keine vollständige Fraktionsauflösung.']}
    ], sources:[{label:'Xbox Wire – The Board und Aberrant',url:handsOn},{label:'Steam – Dylans Identität',url:steam}]
  },
  {
    lang:'de', slug:'hiss-gegen-resonant-awe', englishPath:'/guides/hiss-vs-resonant-awe/',
    title:'Hiss gegen Resonant AWE: Sind die Bedrohungen verbündet?',
    description:'Eine Resonant Entity entfernt Hiss aus ihrer Umgebung; die Krisen wirken gegensätzlich, bleiben aber beide gefährlich.',
    label:'Feindfraktionen', answer:'Der Hiss und die neue Resonant Altered World Event erscheinen nicht als einfache Verbündete. In der Eröffnung beseitigt eine Resonant Entity Hiss aus ihrer Umgebung, bevor Dylan gegen sie kämpft.',
    sections:[
      {heading:'Zwei Krisen in Manhattan',paragraphs:['Zoe erklärt, dass Manhattan bereits von einer anderen AWE angegriffen wurde, bevor der Hiss das Oldest House verließ. Die Hiss-Invasion verschärft also eine bestehende Katastrophe, statt alle Verformungen allein zu verursachen.','Auch die Store-Beschreibung trennt Hiss, den invasiven Mold und weitere Gefahren. Mehrere feindliche Kräfte können gleichzeitig in der Stadt wirken und unterschiedliche Ursprünge besitzen.']},
      {heading:'Beobachteter Konflikt',paragraphs:['Der gezeigte Resonant-Boss entfernt Hiss aus seinem Umfeld. Xbox Wire wertet dies als Hinweis, dass die Kräfte gegeneinander stehen. Eine einzelne Szene beweist jedoch nicht, dass jede Resonant-Kreatur jeden Hiss-Gegner dynamisch angreift.','Gegnerschaft zum Hiss macht die Resonant Entity nicht freundlich. Sie wird unmittelbar zum Boss und schleudert Teile der Umgebung gegen Dylan.']},
      {heading:'Was weiterhin unbekannt ist',paragraphs:['Remedy hat die gottgleiche Kraft hinter der Umgestaltung nicht benannt, die Ursache der Resonant AWE nicht erklärt und keine Fraktionsmatrix veröffentlicht. Wiederholbare Kämpfe zwischen Gruppen müssen in der finalen Version geprüft werden.']}
    ], sources:[{label:'Xbox Wire – Fraktionsinteraktion',url:handsOn},{label:'Steam – mehrere Bedrohungen',url:steam}]
  },
  {
    lang:'de', slug:'resonants-bosse-erklaert', englishPath:'/guides/resonants-explained/',
    title:'Was sind Resonants? Bosse und Fähigkeiten erklärt',
    description:'Resonants sind Hauptbosse, die Combat Abilities freischalten und durch exklusive Entscheidungen Builds prägen.',
    label:'Bosse', answer:'Resonants sind große, in die Handlung eingebundene Bossgegner. Nach einem Sieg erhält Dylan eine übernatürliche Combat Ability; manche Bosse bieten mehrere exklusive Optionen, die den ersten Durchlauf prägen und in New Game Plus erweitert kombiniert werden können.',
    sections:[
      {heading:'Funktion in der Kampagne',paragraphs:['Resonants sind keine bloßen Varianten normaler Gegner. Sie bilden inszenierte Prüfungen, kontrollieren wichtige Fortschrittspunkte und testen den bisher gebauten Kampfstil. Gezeigte Kreaturen besitzen deutlich unterschiedliche Formen und Angriffsweisen.','Die Bezeichnung verbindet Bosskämpfe direkt mit Dylans Wachstum. Ein Sieg erweitert nicht nur die Geschichte, sondern auch das aktive Fähigkeitenset.']},
      {heading:'Belohnungen und Entscheidungen',paragraphs:['Eine Medienversion bot Barrage, Seekers oder Shield an. Andere Aussagen sprechen von bis zu drei Auswahlmöglichkeiten; daraus folgt nicht, dass jeder Boss immer dieselbe Zahl besitzt.','Eine allgemeine Rücksetzung im ersten Durchlauf ist nicht bestätigt. New Game Plus ist der dokumentierte Weg, mehrere Fähigkeiten desselben Boss-Pools gemeinsam auszurüsten.']},
      {heading:'Begegnungen und Grenzen',paragraphs:['Gezeigt wurden eine große, im Pflaster sitzende Kopfgestalt und eine maskierte Figur mit zwei Hämmern, vorläufig Dancer genannt. Name, Phasen, Schwächen und Belohnungen dürfen nicht vermischt werden. Vollständige Strategien benötigen die finale Spielversion.']}
    ], sources:[{label:'PlayStation Blog – Bosse und Progression',url:psBuilds},{label:'Xbox Wire – Fähigkeitenauswahl',url:handsOn}]
  },
  {
    lang:'de', slug:'fbc-field-office-hub', englishPath:'/guides/fbc-field-office-hub/',
    title:'FBC Field Office: Der wachsende Hub in Manhattan',
    description:'Das Field Office verbindet große Manhattan-Zonen und entwickelt sich im Verlauf, ohne eine nahtlose Open World zu bilden.',
    label:'Orte', answer:'Das Federal Bureau of Control betreibt in Manhattan ein Field Office, das als wachsender zentraler Hub dient. Die großen, handgestalteten Zonen zweigen von diesem Bereich ab, statt eine vollständig nahtlose Open World zu bilden.',
    sections:[
      {heading:'Bestätigte Weltstruktur',paragraphs:['Control Resonant verlässt die alleinige Konzentration auf das Oldest House, behält aber gestaltete Gebietsgrenzen. Xbox Wire beschreibt große Zonen, die über das zentrale Field Office verbunden sind und durch die Krise eigene Atmosphäre und Herausforderungen erhalten.','Dieses Modell erklärt, warum die Stadt größer und offener als im Vorgänger ist, ohne automatisch zu einer Karte voller identischer Checklisten zu werden. Erkundung und geführte Inszenierung können nebeneinander bestehen.']},
      {heading:'Was „evolving hub“ bedeutet',paragraphs:['Die Vorschau nennt das Field Office einen sich entwickelnden Hub. Das belegt Veränderungen im Verlauf, aber noch keine Händler, Werkbänke, NPC-Zeitpläne, Ausbaustufen oder konkrete Dienstleistungen.','Zoe ist als FBC-Agentin Dylans wichtigste menschliche Verbindung zur Feldoperation. Weitere Figuren und Einrichtungen müssen einzeln bestätigt werden.']},
      {heading:'Noch keine Raumkarte',paragraphs:['Es gibt weder einen veröffentlichten Grundriss noch ein bestätigtes Schnellreisemenü oder eine vollständige Verbindungsliste. Das Field Office kann zentral sein, ohne der einzige Übergang zwischen jeder Zone zu sein.']}
    ], sources:[{label:'Xbox Wire – Hub und Zonen',url:combat},{label:'PlayStation Blog – FBC-Feldoperation',url:psBuilds}]
  },
  {
    lang:'de', slug:'oldest-house-rueckkehr', englishPath:'/guides/oldest-house-return/',
    title:'Kehrt Control Resonant ins Oldest House zurück?',
    description:'Ja: Die Fortsetzung erweitert sich nach Manhattan, besucht aber auch zuvor ungesehene Bereiche des FBC-Hauptquartiers.',
    label:'Orte', answer:'Ja. Control Resonant kehrt in das Oldest House zurück. Manhattan ist der größere neue Schauplatz, doch offizielle PlayStation-Informationen bestätigen zuvor ungesehene Bereiche des Bureau-Hauptquartiers.',
    sections:[
      {heading:'Was mit dem Oldest House geschah',paragraphs:['Nach sieben Jahren hält Jesses Lockdown nicht mehr. Der Hiss verlässt das Gebäude, verbleibende FBC-Mitarbeiter weichen nach New York aus und Dylan beginnt seine Flucht aus den Tiefen des Hauptquartiers.','Die Eröffnung zeigt ein alarmiertes, nahezu menschenleeres Gebäude mit Hiss-infizierten Angestellten. Damit ist der Ort nicht nur Rückblende, sondern ein bestätigter Teil der spielbaren Ausgangslage.']},
      {heading:'Ist es wieder die Hauptkarte?',paragraphs:['Nein. Resonant kehrt die Struktur um: Dylan geht aus dem Oldest House hinaus und erkundet große, unterschiedliche Manhattan-Zonen. Das Hauptquartier bleibt erzählerisch wichtig, wird aber nicht als alleinige Welt präsentiert.','Zuvor ungesehene Bereiche bedeuten neue Inhalte, aber keine Bestätigung, dass alle alten Sektoren, Kontrollpunkte oder Räume erneut zugänglich sind.']},
      {heading:'Warum die Rückkehr wichtig ist',paragraphs:['Das Gebäude verbindet Dylans Gefangenschaft, Jesses Direktion, die Hiss-Invasion und das Scheitern der Eindämmung mit der Stadtkrise. Gleichzeitig kann die Fortsetzung vertraute Architektur zeigen, ohne die gesamte Erkundung zu wiederholen.']}
    ], sources:[{label:'PlayStation Blog – Oldest House',url:psWorld},{label:'Steam – Shared Legacy, New Threat',url:steam}]
  },

  {
    lang:'fr', slug:'sequence-ouverture', englishPath:'/guides/control-resonant-opening-sequence/',
    title:'Séquence d’ouverture de Control Resonant : premiers événements',
    description:'Dylan fuit l’Oldest House, reçoit Aberrant, contacte Zoe puis entre dans un Manhattan ravagé.',
    label:'Aperçu narratif', answer:'Control Resonant commence par la fuite de Dylan hors de sa détention dans l’Oldest House. Après une vision de Jesse, il se réveille avec Aberrant dans la poitrine, choisit sa première forme primaire, affronte du personnel FBC contaminé et contacte Zoe par radio.',
    sections:[
      {heading:'Ordre confirmé',paragraphs:['Xbox Wire a joué environ la première heure. Dylan est présenté comme prisonnier, sujet d’expérience et ancien candidat à la Direction. Jesse l’appelle à agir dans une scène proche d’une vision; il se réveille ensuite dans une cellule ouverte avec Aberrant implantée dans son corps.','The Board s’adresse à lui. Le premier choix oppose Flurry, Slash et Slice, puis des employés infectés servent de tutoriel pour les attaques et l’esquive.']},
      {heading:'Sortie vers Manhattan',paragraphs:['À l’extérieur, Dylan découvre que le Hiss n’est plus contenu. Il répond au signal de détresse de Zoe, soulagée de joindre un survivant, mais reste prudent sur son identité pendant leur premier échange.','La suite introduit formes secondaires, pouvoirs de mouvement et un boss Resonant. Les noms de missions, checkpoints et récompenses ne sont pas publics: cette chronologie n’est pas une solution complète.']},
      {heading:'Fiabilité et limites',paragraphs:['Une version jouable fournit un ordre plus solide qu’un montage de bande-annonce. Dialogues, rythme et tutoriels peuvent néanmoins évoluer avant le 24 septembre. La page sépare scènes observées et objectifs inconnus.']}
    ], sources:[{label:'Xbox Wire – première heure',url:handsOn},{label:'PlayStation Blog – situation narrative',url:psStory}]
  },
  {
    lang:'fr', slug:'sept-ans-apres-control', englishPath:'/guides/seven-years-after-control/',
    title:'Chronologie de Control Resonant : sept ans après Control',
    description:'La chronologie confirmée situe Dylan, Jesse, le Hiss, l’Oldest House et la crise de Manhattan.',
    label:'Chronologie', answer:'CONTROL Resonant se déroule sept ans après le premier Control. Dylan Faden devient le protagoniste jouable tandis que le Hiss s’est échappé de l’Oldest House et que plusieurs menaces paranaturelles submergent Manhattan.',
    sections:[
      {heading:'Changements pendant l’intervalle',paragraphs:['Dylan a passé ces années sous la garde du FBC. Jesse est devenue Directrice, mais elle est portée disparue dans Resonant et demeure un personnage majeur non jouable. Le Bureau opère désormais depuis un Field Office en ville.','Le Hiss a franchi les limites de l’Oldest House. Le Mold et un autre événement Resonant menacent également Manhattan, dont l’architecture et la gravité se brisent en zones distinctes.']},
      {heading:'Point de départ',paragraphs:['L’ouverture relie la chronologie au gameplay: Dylan quitte sa cellule, reçoit Aberrant, contacte Zoe et marche vers la catastrophe. Sa recherche de Jesse unit l’histoire familiale à l’échec du confinement du FBC.','Remedy présente cependant le jeu comme un point d’entrée autonome. Connaître le premier Control enrichit les relations sans être une condition annoncée pour suivre la campagne.']},
      {heading:'Ce que les sept ans ne révèlent pas',paragraphs:['La date ne raconte pas chaque événement entre les jeux et ne révèle ni l’emplacement exact de Jesse ni l’origine de toutes les nouvelles forces. Ces lacunes appartiennent à l’intrigue et ne doivent pas être comblées par des théories.']}
    ], sources:[{label:'Xbox Wire – chronologie et Manhattan',url:combat},{label:'Steam – histoire officielle',url:steam}]
  },
  {
    lang:'fr', slug:'retour-casper-darling', englishPath:'/guides/casper-darling/',
    title:'Le Dr Casper Darling revient dans Control Resonant',
    description:'Darling apparaît dans une séquence FMV sur l’arrivée de Dylan au FBC; son rôle global reste inconnu.',
    label:'Personnages', answer:'Le Dr Casper Darling est confirmé dans Control Resonant. Durant l’ouverture jouée par la presse, il apparaît brièvement dans une vidéo en prises de vues réelles consacrée à l’époque où Dylan a été amené au Federal Bureau of Control.',
    sections:[
      {heading:'Ce que montre la démo',paragraphs:['La scène confirme le retour de Darling à l’écran et celui des enregistrements FMV du FBC. Son intervention relie directement le passé de Dylan comme captif, sujet d’étude et candidat à la Direction.','La source ne dit pas si Darling est physiquement présent en 2026, s’il communique depuis un autre état ou s’il apparaît uniquement dans des archives. Le nombre total de séquences est inconnu.']},
      {heading:'Importance pour Dylan',paragraphs:['Resonant interroge l’identité de Dylan après des années de contrôle institutionnel. Une présentation de Darling peut expliquer expériences et procédures sans transformer automatiquement le scientifique en protagoniste.','Dans Control, les vidéos transmettaient la recherche et devenaient une partie du mystère. Le nouveau clip prouve le retour du format, pas une fonction ou une quantité identique.']},
      {heading:'Aucune réunion inventée',paragraphs:['Rencontre directe, chaîne de quêtes, rôle de boss et résolution finale ne sont pas confirmés. Ces scénarios restent des théories jusqu’à ce que Remedy ou la version commerciale fournisse des preuves.']}
    ], sources:[{label:'Xbox Wire – apparition de Darling',url:handsOn}]
  },
  {
    lang:'fr', slug:'role-du-board', englishPath:'/guides/the-board-role/',
    title:'Le rôle de The Board dans Control Resonant',
    description:'The Board parle à Dylan lorsqu’il reçoit Aberrant; origine de l’arme, alliance et objectifs restent mystérieux.',
    label:'Univers', answer:'The Board revient dans l’ouverture et s’adresse directement à Dylan après l’apparition d’Aberrant dans sa poitrine. Sa voix et son implication sont confirmées; sa création ou son contrôle de l’arme et son statut d’allié ne le sont pas.',
    sections:[
      {heading:'Apparition confirmée',paragraphs:['Dylan se réveille dans une cellule ouverte avec l’arme métamorphe implantée dans son corps. The Board emploie de nouveau son langage superposé et contradictoire, présentant Dylan comme serviteur, personnage joueur et exécutant.','Xbox Wire rattache la scène à Jesse et à l’entité extradimensionnelle dirigeant le FBC. Cette participation ne fournit cependant pas une chaîne de propriété ou de commandement complète.']},
      {heading:'Identité de Dylan',paragraphs:['Dylan appartenait déjà au programme des candidats à la Direction. Une nouvelle institution puissante lui attribue maintenant un rôle, alors que l’histoire insiste sur sa lutte pour l’humanité et l’autonomie.','The Board devient donc pertinent avant même la révélation de ses objectifs. Son ordre oppose le besoin de choix personnel de Dylan au but d’Aberrant et à sa recherche de Jesse.']},
      {heading:'Questions ouvertes',paragraphs:['Aucun lien avec la force Resonant, voyage dans l’Astral Plane, message de Hotline ou statut d’antagoniste final n’est confirmé. L’ouverture établit une présence, pas une résolution complète des factions.']}
    ], sources:[{label:'Xbox Wire – The Board et Aberrant',url:handsOn},{label:'Steam – identité de Dylan',url:steam}]
  },
  {
    lang:'fr', slug:'hiss-contre-awe-resonant', englishPath:'/guides/hiss-vs-resonant-awe/',
    title:'Hiss contre AWE Resonant : les menaces sont-elles alliées ?',
    description:'Une Entité Resonant élimine le Hiss autour d’elle; les crises semblent opposées mais restent dangereuses.',
    label:'Factions ennemies', answer:'Le Hiss et le nouvel événement Resonant ne paraissent pas être de simples alliés. Dans l’ouverture présentée, une Entité Resonant retire le Hiss de son environnement avant d’affronter Dylan.',
    sections:[
      {heading:'Deux crises à Manhattan',paragraphs:['Zoe explique que Manhattan subissait déjà un autre Altered World Event avant l’évasion du Hiss. L’invasion aggrave donc une catastrophe existante au lieu d’être la cause unique de chaque distorsion.','La description officielle distingue également le Hiss, le Mold et d’autres menaces. Plusieurs forces hostiles peuvent agir en ville avec des origines différentes.']},
      {heading:'Conflit observé',paragraphs:['Le boss Resonant montré efface le Hiss dans son voisinage. Xbox Wire y voit un signe d’opposition, mais une scène ne prouve pas que chaque créature Resonant attaque dynamiquement chaque ennemi Hiss.','S’opposer au Hiss ne rend pas l’Entité amicale. Elle devient immédiatement un boss et utilise les débris comme projectiles contre Dylan.']},
      {heading:'Inconnues persistantes',paragraphs:['Remedy n’a pas nommé la force qui remodèle la réalité, expliqué la cause de l’AWE Resonant ou publié un schéma des factions. Les combats répétables entre groupes devront être testés dans la version finale.']}
    ], sources:[{label:'Xbox Wire – interaction observée',url:handsOn},{label:'Steam – menaces multiples',url:steam}]
  },
  {
    lang:'fr', slug:'resonants-boss-expliques', englishPath:'/guides/resonants-explained/',
    title:'Que sont les Resonants ? Boss et pouvoirs expliqués',
    description:'Les Resonants sont des boss narratifs qui débloquent des capacités et imposent des choix façonnant le build.',
    label:'Boss', answer:'Les Resonants sont des boss majeurs intégrés à l’histoire. Leur défaite accorde à Dylan une Combat Ability surnaturelle; certains proposent plusieurs choix exclusifs qui définissent la première partie et deviennent plus combinables en New Game Plus.',
    sections:[
      {heading:'Fonction dans la campagne',paragraphs:['Les Resonants ne sont pas de simples variantes d’ennemis. Ils forment des épreuves mises en scène, contrôlent des étapes importantes et testent le style construit jusque-là. Les créatures montrées possèdent des silhouettes et attaques différentes.','Leur nom relie directement les combats à la progression de Dylan. Vaincre un Resonant avance le récit et élargit l’ensemble des pouvoirs actifs.']},
      {heading:'Récompenses et décisions',paragraphs:['Une version média proposait Barrage, Seekers ou Shield après un combat. D’autres explications parlent de jusqu’à trois choix; cela ne prouve pas que chaque boss offre toujours le même nombre.','Aucune réinitialisation générale du premier parcours n’est confirmée. Le New Game Plus est la voie documentée pour équiper plusieurs capacités issues du même groupe de boss.']},
      {heading:'Rencontres et limites',paragraphs:['Une tête géante enchâssée dans le sol et une figure masquée aux deux maillets, provisoirement appelée Dancer, ont été présentées. Noms, phases, faiblesses et récompenses ne doivent pas être mélangés; les stratégies attendront la version finale.']}
    ], sources:[{label:'PlayStation Blog – boss et progression',url:psBuilds},{label:'Xbox Wire – choix de capacité',url:handsOn}]
  },
  {
    lang:'fr', slug:'fbc-field-office-hub', englishPath:'/guides/fbc-field-office-hub/',
    title:'FBC Field Office : le hub évolutif de Manhattan',
    description:'Le Field Office relie les grandes zones de Manhattan et évolue sans transformer le jeu en monde ouvert continu.',
    label:'Lieux', answer:'Le Federal Bureau of Control exploite à Manhattan un Field Office servant de hub central évolutif. Les grandes zones artisanales partent de cette aire au lieu de composer un monde ouvert totalement continu.',
    sections:[
      {heading:'Structure confirmée',paragraphs:['Control Resonant quitte la concentration exclusive sur l’Oldest House tout en conservant des limites conçues à la main. Xbox Wire décrit des secteurs majeurs reliés au Field Office et transformés différemment par la crise.','Ce modèle explique pourquoi la ville est plus grande et ouverte sans devenir automatiquement une carte de tâches répétitives. Exploration et mise en scène dirigée peuvent coexister.']},
      {heading:'Sens de hub évolutif',paragraphs:['L’expression confirme que le Field Office change au fil de la campagne. Elle ne confirme pas marchands, établis, horaires de personnages, niveaux d’agrandissement ou services précis.','Zoe constitue le lien humain le plus clair entre Dylan et l’opération extérieure du FBC. Les autres personnages et installations exigent une preuve.']},
      {heading:'Pas encore de plan détaillé',paragraphs:['Aucun plan, menu de voyage rapide ou inventaire complet des connexions n’est publié. Le Field Office peut être central sans représenter l’unique passage entre toutes les zones.']}
    ], sources:[{label:'Xbox Wire – hub et zones',url:combat},{label:'PlayStation Blog – opérations FBC',url:psBuilds}]
  },
  {
    lang:'fr', slug:'retour-oldest-house', englishPath:'/guides/oldest-house-return/',
    title:'Control Resonant revient-il dans l’Oldest House ?',
    description:'Oui : la suite s’étend à Manhattan mais visite aussi des parties inédites du quartier général du FBC.',
    label:'Lieux', answer:'Oui. Control Resonant retourne dans l’Oldest House. Manhattan constitue le nouveau cadre principal, mais PlayStation confirme des zones inédites du quartier général du Bureau.',
    sections:[
      {heading:'État de l’Oldest House',paragraphs:['Après sept années, le verrouillage de Jesse ne tient plus. Le Hiss sort du bâtiment, les agents restants évacuent vers New York et Dylan commence par fuir les profondeurs du quartier général.','L’ouverture montre un bâtiment en alerte, presque vide, avec des employés contaminés. Le lieu n’est donc pas seulement un souvenir: il fait partie du début jouable confirmé.']},
      {heading:'Encore la carte principale ?',paragraphs:['Non. Resonant inverse la structure: Dylan sort de l’Oldest House et explore de grandes zones variées de Manhattan. Le siège reste important pour le récit sans être présenté comme le seul monde principal.','La mention de zones inédites garantit du nouveau contenu, pas le retour de chaque secteur, point de contrôle ou pièce du jeu original.']},
      {heading:'Pourquoi ce retour compte',paragraphs:['Le bâtiment relie captivité de Dylan, Direction de Jesse, invasion du Hiss et échec du confinement à la crise urbaine. La suite peut retrouver son langage architectural sans répéter toute son exploration.']}
    ], sources:[{label:'PlayStation Blog – Oldest House',url:psWorld},{label:'Steam – héritage et nouvelle menace',url:steam}]
  }
];
