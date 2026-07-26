import type { LocalizedPage } from './localized.ts';

const official = 'https://www.remedygames.com/games/control-2';
const steam = 'https://store.steampowered.com/app/3669870/CONTROL_Resonant/';
const combat = 'https://blog.playstation.com/2026/03/04/control-resonant-a-deep-dive-into-combat-buildcrafting-and-player-choice/';
const movement = 'https://blog.playstation.com/2026/02/12/new-gameplay-details-on-control-resonants-supernatural-action/';
const xbox = 'https://news.xbox.com/en-us/2026/05/08/control-resonant-remedy-exciting-sequel-xbox-play-anywhere-self-publishing/';
const xboxCombat = 'https://news.xbox.com/en-us/2026/03/04/control-resonant-combat-preview/';
const playstation = 'https://www.playstation.com/en-us/games/control-resonant/';

export const localizedExpansion: LocalizedPage[] = [
  {
    lang:'de', slug:'multiplayer-kooop', englishPath:'/guides/multiplayer-and-coop/',
    title:'Hat Control Resonant Multiplayer oder Koop?', description:'Control Resonant ist als Einzelspieler-Abenteuer angekündigt. Was für Koop, Online-Funktionen und FBC: Firebreak gilt.',
    label:'Spielmodus', answer:'Control Resonant ist ein Einzelspieler-Action-RPG. Remedy und die offiziellen Store-Seiten nennen weder Koop noch kompetitiven Multiplayer. FBC: Firebreak ist ein separates Mehrspieler-Spiel und kein Modus von Resonant.',
    sections:[
      {heading:'Bestätigter Spielmodus',paragraphs:['Die offiziellen Produktbeschreibungen konzentrieren sich vollständig auf Dylans eigene Kampagne, seine Builds und die Erkundung Manhattans. Steam führt das Spiel als Singleplayer. Eine zweite spielbare Figur oder gemeinsame Kampagne wurde nicht angekündigt.','Jesse bleibt eine wichtige Figur, ist aber laut Remedy nicht spielbar. Ihre Präsenz ist deshalb kein Hinweis auf lokalen Koop oder einen Online-Partner.']},
      {heading:'Abgrenzung zu FBC: Firebreak',paragraphs:['Firebreak spielt ebenfalls im Control-Universum, ist jedoch ein eigenes kooperatives Projekt. Fortschritt, Kauf und Spielstruktur von Firebreak werden nicht automatisch mit Resonant geteilt.','Wer Resonant kauft, sollte daher von einer vollständig allein spielbaren Kampagne ausgehen. Falls später soziale Funktionen oder Bestenlisten angekündigt werden, brauchen sie eine eigene offizielle Bestätigung.']},
      {heading:'Was nicht verwechselt werden sollte',paragraphs:['Xbox Play Anywhere synchronisiert Käufe und Spielstände zwischen unterstützten Xbox-Geräten; es macht das Spiel nicht zum Multiplayer-Titel. Auch Cloud-Streaming über GeForce NOW erlaubt keinen Koop-Modus.']}
    ], sources:[{label:'Steam – Funktionen',url:steam},{label:'Remedy – offizielle Spielseite',url:official}]
  },
  {
    lang:'de', slug:'control-1-vorher-spielen', englishPath:'/guides/do-you-need-to-play-control-first/',
    title:'Muss man Control vor Control Resonant spielen?', description:'Resonant ist als eigenständiger Einstieg konzipiert, belohnt aber Vorwissen über Jesse, Dylan, das FBC, den Hiss und das Oldest House.',
    label:'Einstieg', answer:'Nein. Remedy sagt ausdrücklich, dass Control Resonant als eigenständige Erfahrung funktioniert. Control von 2019 ist dennoch sinnvoll, wenn du Dylans Vergangenheit, Jesse und die Regeln des FBC-Universums tiefer verstehen möchtest.',
    sections:[
      {heading:'Warum Neueinsteiger folgen können',paragraphs:['Resonant wechselt zu Dylan als einzigem spielbaren Protagonisten und beginnt mit einer neuen Krise in Manhattan. Seine Perspektive erlaubt es, Figuren, Fähigkeiten und Gefahren neu einzuführen, ohne den gesamten ersten Plot vorauszusetzen.','Die Entwickler vergleichen beide Spiele mit Geschwistern, die auf eigenen Beinen stehen. Das ist eine Aussage zur Zugänglichkeit, nicht die Behauptung, dass alle Verbindungen verschwinden.']},
      {heading:'Was Control zusätzlich erklärt',paragraphs:['Das erste Spiel zeigt Jesses Ernennung zur Direktorin, Dylans Gefangenschaft, die Invasion des Hiss und die Bedeutung des Oldest House. Dieses Wissen macht Namen und emotionale Konflikte verständlicher.','Für einen schnellen Einstieg reicht eine seriöse Zusammenfassung. Wer Atmosphäre, Dokumente und Nebenfiguren vollständig erleben will, profitiert stärker vom Original.']},
      {heading:'Empfohlene Reihenfolge',paragraphs:['Bei wenig Zeit kannst du direkt mit Resonant beginnen. Bei Fokus auf Lore ist Control Ultimate Edition vorab die klarste Reihenfolge; unbestätigte Theorien aus anderen Remedy-Spielen sind dagegen keine Pflichtlektüre.']}
    ], sources:[{label:'Xbox Wire – Interview mit Remedy',url:xbox},{label:'Remedy – Control Resonant',url:official}]
  },
  {
    lang:'de', slug:'artefakte-und-herstellung', englishPath:'/guides/artifacts-and-crafting/',
    title:'Artefakte und Herstellung in Control Resonant', description:'So werden Untapped Artifacts in The Gap zu ausrüstbaren Artefakten, welche Rollen bestätigt sind und welche Werte noch fehlen.',
    label:'Ausrüstung', answer:'Untapped Artifacts werden in The Gap in ausrüstbare Artefakte umgewandelt. Sie verändern Überleben, Kampf, Erkundung oder Ressourcen. Im ersten Durchlauf stehen drei Slots zur Verfügung; New Game Plus fügt einen vierten hinzu.',
    sections:[
      {heading:'Vom Fundstück zum Build-Teil',paragraphs:['Artefakte sind passive Bausteine des Builds und nicht dasselbe wie Aberrant-Waffenformen oder aktive Boss-Fähigkeiten. The Gap ist der Raum, in dem Dylan neue Optionen formt und miteinander kombiniert.','Die offiziell beschriebenen Kategorien zeigen ihre Bandbreite, liefern aber noch keine vollständige Liste aller Namen, Seltenheiten oder Prozentwerte.']},
      {heading:'Slot-Grenzen schaffen Entscheidungen',paragraphs:['Drei Plätze im ersten Spieldurchlauf zwingen zu Prioritäten. Ein Artefakt für Ressourcen kann mit einem defensiven oder erkundungsorientierten Effekt konkurrieren, selbst wenn beide nützlich sind.','New Game Plus erweitert auf vier Plätze. Das eröffnet neue Synergien, bedeutet aber nicht automatisch, dass jedes Artefakt sofort verfügbar ist.']},
      {heading:'Keine erfundene Crafting-Ökonomie',paragraphs:['Kosten, Materialien, Upgrade-Stufen und Zufallswerte sind vor Release nicht vollständig belegt. Dieser Guide behandelt nur die bestätigte Umwandlung und Ausrüstungsstruktur; Drop-Raten folgen erst nach überprüfbaren Daten.']}
    ], sources:[{label:'PlayStation Blog – Buildcrafting',url:combat}]
  },
  {
    lang:'de', slug:'talente-erklaert', englishPath:'/guides/talents/',
    title:'Talente in Control Resonant: Build-System erklärt', description:'Talente verändern Angriffe und Fähigkeiten in The Gap; exklusive Entscheidungen und New-Game-Plus-Knoten sauber eingeordnet.',
    label:'Build-System', answer:'Talente sind passive oder bedingte Modifikatoren, die Dylans Waffenformen und Fähigkeiten spezialisieren. Nicht alle Knoten lassen sich im ersten Durchlauf freischalten; New Game Plus ergänzt weitere Optionen.',
    sections:[
      {heading:'Funktion im Build',paragraphs:['Ein Talent ist nicht einfach eine neue aktive Taste. Es verändert, wie bestehende Angriffe, Status-Effekte oder Ressourcen zusammenarbeiten. Dadurch kann dasselbe Grund-Loadout unterschiedliche Rollen übernehmen.','The Gap visualisiert diese Entwicklung. Welche Wege verbunden sind und wie viele Punkte jede Stufe kostet, ist noch nicht vollständig veröffentlicht.']},
      {heading:'Exklusive Wahl statt vollständigem Baum',paragraphs:['Remedy betont Entscheidungen, die einen ersten Durchlauf prägen. Wer einen Knoten wählt, kann deshalb nicht automatisch jede Alternative daneben erwerben. Das erhöht den Wert klarer Build-Ziele.','Eine frei verfügbare Rücksetzung wurde nicht bestätigt. Guides sollten vor Release weder unbegrenztes Respec noch endgültige Meta-Pfade versprechen.']},
      {heading:'New Game Plus erweitert die Planung',paragraphs:['Zusätzliche Talentknoten und mehr Kombinationsmöglichkeiten machen den zweiten Lauf zum Ort für komplexere Synergien. Exakte Empfehlungen benötigen trotzdem finale Werte und Gegnertests.']}
    ], sources:[{label:'PlayStation Blog – Talente und The Gap',url:combat}]
  },
  {
    lang:'de', slug:'bewegung-dash-doppelsprung-levitation', englishPath:'/guides/movement-dash-double-jump-levitate/',
    title:'Bewegung: Dash, Doppelsprung und Levitation', description:'Bestätigte Fortbewegung in Control Resonant: zwei Luft-Dashes, Doppelsprung, kurze Levitation und storygebundene Freischaltung.',
    label:'Fortbewegung', answer:'Dylan kann zwei Luft-Dashes ausführen, doppelt springen und durch Gedrückthalten der Sprungtaste kurz levitieren. Diese Fähigkeiten unterstützen Kampf und 3D-Plattformpassagen; ihre Freischaltungen bleiben an die Story gebunden.',
    sections:[
      {heading:'Das bestätigte Bewegungsset',paragraphs:['Die offizielle Hands-on-Beschreibung nennt zwei Dashes, bevor Dylan wieder den Boden berührt, einen Doppelsprung und eine kurze Levitation. Die Kombination erlaubt Richtungswechsel und längere Sprünge in deformierten Stadtbereichen.','Tastenbelegung und Timing stammen aus einer Vorabversion. Sie können angepasst oder über Barrierefreiheitsoptionen neu belegt werden.']},
      {heading:'Mehr als reine Fortbewegung',paragraphs:['Dash hilft beim Ausweichen und beim aggressiven Schließen von Distanz. Vertikale Fähigkeiten unterstützen versteckte Wege, Gravitätsanomalien und Plattformsequenzen.','Welche Bewegung zuerst freigeschaltet wird, ist noch nicht offiziell als vollständige Reihenfolge dokumentiert. Deshalb gibt es keine erfundene Fundortliste.']},
      {heading:'Regel für New Game Plus',paragraphs:['Anders als Waffen-, Gesundheits- und viele Build-Upgrades werden Fortbewegungsfähigkeiten zurückgesetzt. Remedy begründet das mit ihrer Bindung an Storyfortschritt und Weltentwicklung.']}
    ], sources:[{label:'PlayStation Blog – Bewegung und Gameplay',url:movement},{label:'PlayStation Blog – Buildcrafting',url:combat}]
  },
  {
    lang:'de', slug:'gravitationsanomalien-raetsel', englishPath:'/guides/gravity-anomalies-and-puzzles/',
    title:'Gravitationsanomalien und Rätsel in Control Resonant', description:'Wie verzerrte Gravitation Erkundung, Plattforming und Kämpfe prägt – mit klarer Trennung zwischen bestätigten Mechaniken und offenen Lösungen.',
    label:'Erkundung', answer:'Gravitationsanomalien verändern Wege, Räume und Kampfarenen in Manhattan. Dylans Dash, Doppelsprung und Levitation bilden das bestätigte Werkzeugset, um diese 3D-Plattform- und Erkundungspassagen zu bewältigen.',
    sections:[
      {heading:'Die Stadt als paranatürlicher Raum',paragraphs:['Manhattan ist nicht nur Kulisse. Kosmische Kräfte verbiegen Architektur und Schwerkraft, sodass Wände, Trümmer und vertikale Flächen neue Routen bilden können. Unterschiedliche Zonen sollen eigene Regeln und Stimmungen besitzen.','Offizielle Szenen zeigen die Idee, aber noch keine vollständigen Rätsellösungen. Bildausschnitte reichen nicht aus, um Schalterfolgen oder Sammelobjektpositionen zu behaupten.']},
      {heading:'Bewegungsfähigkeiten als Schlüssel',paragraphs:['Zwei Luft-Dashes, Doppelsprung und kurze Levitation erlauben kontrollierte Korrekturen in der Luft. Storygebundene Freischaltungen können daher bestimmen, wann ein Gebiet vollständig erreichbar wird.','Das ähnelt einer Metroidvania-Logik, ist aber kein Beleg für jede mögliche Rückkehrroute oder feste Reihenfolge.']},
      {heading:'So entstehen spätere Walkthroughs',paragraphs:['Nach Release sollten einzelne Rätsel nur dann eigene URLs erhalten, wenn Startpunkt, Anforderungen, exakte Schritte und Ergebnis überprüft sind. Bis dahin bleibt diese Seite ein Mechanik-Hub statt einer Sammlung erfundener Lösungen.']}
    ], sources:[{label:'PlayStation Blog – paranatürliche Bewegung',url:movement},{label:'Xbox Wire – Zonen',url:xboxCombat}]
  },
  {
    lang:'de', slug:'manhattan-karte-und-zonen', englishPath:'/guides/manhattan-map-and-zones/',
    title:'Manhattan-Karte und bestätigte Zonen', description:'Was über Manhattan, West Incursion Zone, Evacuation Zone und das FBC Field Office bekannt ist – ohne erfundene Kartenmarker.',
    label:'Orte', answer:'Control Resonant nutzt ein verzerrtes Manhattan aus großen Zonen rund um das FBC Field Office. Namentlich bestätigt sind unter anderem West Incursion Zone und Evacuation Zone; eine vollständige Weltkarte ist noch nicht veröffentlicht.',
    sections:[
      {heading:'Bestätigte Struktur',paragraphs:['Das Field Office fungiert als zentraler Hub. Von dort führen Einsätze in eigenständige Stadtbereiche, die durch paranatürliche Ereignisse unterschiedlich verändert wurden. Die Welt ist offen angelegt, aber keine nahtlose Open World.','West Incursion Zone ist mit frühen Ereignissen und Bewegung verbunden; die Evacuation Zone wurde als offene Kampffläche mit Gegnern aus mehreren Richtungen gezeigt.']},
      {heading:'Was eine Karte noch nicht zeigen kann',paragraphs:['Offizielle Materialien nennen keine vollständige Zahl aller Zonen, Schnellreisepunkte, Übergänge oder Grenzen. Fan-Karten aus Trailern können Perspektiven verzerren und sind kein Ersatz für eine spielbare Karte.','Wir erstellen erst nach verifizierter Navigation einzelne Standortseiten mit Eingang, Route, Aktivität und Rückweg.']},
      {heading:'Sinnvolle Vorbereitung',paragraphs:['Merke dir Hub, Zonennamen und Bewegungsanforderungen, aber plane keine Sammelroute vorab. Storyfortschritt kann neue Wege öffnen und Fortbewegungsfähigkeiten sind bewusst an diesen Fortschritt gebunden.']}
    ], sources:[{label:'Xbox Wire – Manhattan und FBC-Hub',url:xboxCombat},{label:'Remedy – Spielbeschreibung',url:official}]
  },
  {
    lang:'de', slug:'weltquests-und-kampagne', englishPath:'/guides/world-quests-and-campaign/',
    title:'Weltquests, Nebenaktivitäten und Kampagne', description:'Wie die Hauptgeschichte mit World Quests, Aufträgen, versteckten Begegnungen und optionalen Entdeckungen verbunden ist.',
    label:'Aktivitäten', answer:'Neben der Hauptkampagne bietet Control Resonant World Quests, Aufträge, Sammelobjekte, Nebenstorys und versteckte Begegnungen. Einige Gespräche oder Ergebnisse können sich unterscheiden; konkrete Questlisten sind vor Release noch unvollständig.',
    sections:[
      {heading:'Mehrere Aktivitätsebenen',paragraphs:['Die großen Zonen enthalten optionale Ziele und Entdeckungen, sodass Erkundung nicht nur dem Weg zur nächsten Hauptmission dient. Bounties oder Aufträge können kampforientierte Herausforderungen ergänzen.','Offizielle New-Game-Plus-Informationen nennen World Quests, Bounties, Collectibles und Side Stories ausdrücklich als Inhalte, die erneut besucht werden können.']},
      {heading:'Warum einzelne Questseiten noch warten',paragraphs:['Ein belastbarer Walkthrough braucht Questname, Startbedingung, genaue Schritte, Zielort, Belohnung und bekannte Triggerprobleme. Diese Daten sind für den Großteil der Kampagne noch nicht veröffentlicht.','Statt Platzhalterseiten zu indexieren, führt dieser Hub nur bestätigte Aktivitätstypen. Nach verifizierter Spielversion wird jede echte Quest als eigener Spielerbedarf bewertet.']},
      {heading:'Änderungen im zweiten Durchlauf',paragraphs:['Remedy deutet variierende Gespräche und Ergebnisse an. Das rechtfertigt noch keine vollständige Entscheidungsmatrix; es zeigt aber, dass optionale Inhalte in New Game Plus mehr als reine Wiederholung sein können.']}
    ], sources:[{label:'PlayStation Blog – Buildcrafting und New Game Plus',url:combat},{label:'Xbox Wire – optionale Aktivitäten',url:xboxCombat}]
  },
  {
    lang:'de', slug:'xbox-play-anywhere', englishPath:'/guides/xbox-play-anywhere/',
    title:'Control Resonant mit Xbox Play Anywhere', description:'Ein Kauf für Xbox-Konsole und Xbox-PC, synchronisierte Spielstände, Add-ons und Erfolge – plus die Grenzen des Programms.',
    label:'Xbox', answer:'Control Resonant unterstützt Xbox Play Anywhere zum Start. Ein digitaler Kauf im Xbox-Ökosystem ermöglicht das Spielen auf Xbox Series X|S, Xbox-PC und unterstützten Handhelds mit synchronisierten Spielständen, Add-ons und Erfolgen.',
    sections:[
      {heading:'Was Play Anywhere liefert',paragraphs:['Microsoft beschreibt einen gemeinsamen digitalen Anspruch innerhalb unterstützter Xbox-Geräte. Du kannst auf der Konsole beginnen und auf einem kompatiblen PC oder Handheld mit demselben Konto weiterspielen.','Cloud-Synchronisierung betrifft Spielstände, Erfolge und laut Xbox auch Add-ons. Eine zweite Kopie zum gleichen Preis ist bei einem qualifizierten digitalen Kauf nicht nötig.']},
      {heading:'Wichtige Grenzen',paragraphs:['Play Anywhere ist nicht Cross-Play und fügt keinen Koop-Modus hinzu. Es bestätigt auch keine Übertragung zu Steam, Epic, PlayStation oder Mac. Disc-Versionen und regionale Store-Regeln müssen separat geprüft werden.','Leistung und Steuerung unterscheiden sich je Gerät. Remedy sagt, dass Handheld-Performance und Bedienung berücksichtigt werden, nennt aber noch keine vollständige Geräteliste.']},
      {heading:'Vor dem Plattformkauf',paragraphs:['Wer regelmäßig zwischen Xbox-Konsole und Windows-PC wechselt, erhält hier den klarsten Vorteil. Wer Steam Deck, GeForce NOW oder Mac bevorzugt, sollte Lizenz- und Speicherpfade dieser Plattformen separat vergleichen.']}
    ], sources:[{label:'Xbox Wire – Play Anywhere und Handhelds',url:xbox}]
  },
  {
    lang:'de', slug:'steam-deck-status', englishPath:'/guides/steam-deck-support/',
    title:'Control Resonant auf Steam Deck: aktueller Status', description:'Noch keine offizielle Deck-Einstufung: Was Handheld-Optimierung, PC-Anforderungen und die fehlende Verifizierung derzeit bedeuten.',
    label:'PC-Handheld', answer:'Eine offizielle Steam-Deck-Verifizierung ist derzeit nicht veröffentlicht. Remedy bestätigt, dass Handheld-Leistung und Steuerung berücksichtigt werden, nennt aber keine garantierten Presets, Bildraten oder Deck-Kompatibilität.',
    sections:[
      {heading:'Bestätigt und nicht bestätigt',paragraphs:['Im Xbox-Interview spricht Remedy allgemein über unterstützte Handheld-Geräte und die Anpassung von Performance und Controls. Das ist ein positives Entwicklungsziel, aber keine Valve-Einstufung „Verified“ oder „Playable“.','Auf Steam ist die maßgebliche Deck-Kennzeichnung noch nicht als finale Garantie vorhanden. Trailer-Aufnahmen oder die Unterstützung anderer Handhelds ersetzen sie nicht.']},
      {heading:'Warum die Anforderungen relevant sind',paragraphs:['Die veröffentlichte PC-Mindeststufe nennt 16 GB RAM, 100 GB Speicher und eine Desktop-GPU-Klasse um GTX 1070 beziehungsweise RX 5600 XT. Diese Angaben lassen sich nicht eins zu eins auf den Deck-Chip übertragen.','Upscaling, Shader-Kompilierung, Textgröße und Akkulaufzeit werden für die reale Nutzbarkeit ebenso wichtig wie der reine Start des Spiels.']},
      {heading:'Kaufentscheidung vor Release',paragraphs:['Wer nur auf Steam Deck spielen will, sollte auf Valves Prüfung oder belastbare Tests der finalen Version warten. GeForce NOW kann eine alternative Streaming-Route sein, benötigt aber Verbindung, Abo und eine unterstützte PC-Lizenz.']}
    ], sources:[{label:'Xbox Wire – Handheld-Optimierung',url:xbox},{label:'Steam – Systemanforderungen',url:steam}]
  },

  {
    lang:'fr', slug:'multijoueur-et-coop', englishPath:'/guides/multiplayer-and-coop/',
    title:'Control Resonant a-t-il un mode multijoueur ou coop ?', description:'Control Resonant est annoncé comme une aventure solo. Distinction avec FBC: Firebreak, le cloud et Xbox Play Anywhere.',
    label:'Mode de jeu', answer:'Control Resonant est un action-RPG solo. Remedy et les boutiques officielles n’annoncent ni coopération ni mode compétitif. FBC: Firebreak est un jeu multijoueur séparé, pas un mode de Resonant.',
    sections:[
      {heading:'Une campagne centrée sur Dylan',paragraphs:['Les descriptions officielles présentent le parcours personnel de Dylan, ses builds et l’exploration de Manhattan. Steam classe le titre en solo; aucun second personnage contrôlable ou campagne partagée n’est annoncé.','Jesse demeure importante dans l’histoire mais Remedy précise qu’elle n’est pas jouable. Sa présence ne constitue donc pas une preuve de coopération locale.']},
      {heading:'Ne pas confondre avec Firebreak',paragraphs:['FBC: Firebreak appartient au même univers mais possède son propre achat, sa propre progression et sa propre structure coopérative. Les systèmes de Firebreak ne sont pas automatiquement transférés à Resonant.','Une annonce future de fonctions sociales devrait être vérifiée séparément. En l’état, l’achat doit être considéré comme celui d’une campagne entièrement jouable seul.']},
      {heading:'Cloud et Play Anywhere',paragraphs:['Xbox Play Anywhere synchronise achat et sauvegarde entre appareils compatibles; GeForce NOW diffuse une licence PC. Aucun de ces services ne transforme un jeu solo en expérience multijoueur.']}
    ], sources:[{label:'Steam – fonctionnalités',url:steam},{label:'Remedy – page officielle',url:official}]
  },
  {
    lang:'fr', slug:'faut-il-jouer-a-control-avant', englishPath:'/guides/do-you-need-to-play-control-first/',
    title:'Faut-il jouer à Control avant Control Resonant ?', description:'Resonant fonctionne comme point d’entrée autonome, mais Control approfondit Dylan, Jesse, le FBC, le Hiss et l’Oldest House.',
    label:'Commencer la série', answer:'Non. Remedy affirme que Control Resonant fonctionne comme une expérience autonome. Jouer à Control reste utile pour comprendre la détention de Dylan, Jesse, le Hiss et les règles du Federal Bureau of Control.',
    sections:[
      {heading:'Pourquoi les nouveaux joueurs peuvent commencer ici',paragraphs:['Resonant adopte Dylan comme seul protagoniste jouable et ouvre une nouvelle crise à Manhattan. Son regard permet de réintroduire personnages, pouvoirs et menaces sans exiger la mémorisation de toute l’intrigue précédente.','Les développeurs comparent les deux jeux à des frères et sœurs capables de tenir chacun sur leurs propres jambes. Cela promet de l’accessibilité, pas l’absence de liens.']},
      {heading:'Ce que le premier jeu apporte',paragraphs:['Control montre Jesse devenant directrice, la captivité de Dylan, l’invasion du Hiss et le fonctionnement de l’Oldest House. Ces événements donnent davantage de poids aux noms et conflits émotionnels de la suite.','Un résumé fiable suffit pour aller vite. L’Ultimate Edition reste préférable pour découvrir documents, ambiance et personnages secondaires par soi-même.']},
      {heading:'Ordre conseillé',paragraphs:['Commencez directement par Resonant si le temps est limité. Pour la continuité narrative, jouez d’abord à Control; les théories non confirmées reliant chaque œuvre de Remedy ne sont pas des prérequis.']}
    ], sources:[{label:'Xbox Wire – entretien Remedy',url:xbox},{label:'Remedy – Control Resonant',url:official}]
  },
  {
    lang:'fr', slug:'artefacts-et-fabrication', englishPath:'/guides/artifacts-and-crafting/',
    title:'Artefacts et fabrication dans Control Resonant', description:'Transformation des Untapped Artifacts dans The Gap, rôles confirmés, emplacements et limites des données avant sortie.',
    label:'Équipement', answer:'Dans The Gap, Dylan transforme les Untapped Artifacts en Artefacts équipables. Ils modifient survie, combat, exploration ou ressources. Trois emplacements sont disponibles au premier parcours; New Game Plus en ajoute un quatrième.',
    sections:[
      {heading:'Un élément passif du build',paragraphs:['Les Artefacts ne sont ni des formes d’Aberrant ni des capacités actives de boss. Ils ajustent le fonctionnement du build et se combinent avec Talents, armes et pouvoirs.','Les catégories officielles indiquent leur variété sans révéler tous les noms, raretés, valeurs ou tableaux de butin.']},
      {heading:'Des choix limités par les emplacements',paragraphs:['Trois places obligent à choisir entre économie de ressources, défense, exploration ou pression offensive. Un effet utile n’entre pas forcément dans chaque composition.','New Game Plus passe à quatre emplacements et ouvre davantage de synergies. Cela ne signifie pas que tous les objets sont immédiatement obtenus.']},
      {heading:'Pas d’économie inventée',paragraphs:['Les matériaux, coûts, niveaux et éventuels jets aléatoires ne sont pas suffisamment documentés. Cette page explique la transformation et l’équipement confirmés; les taux et recettes attendront des données vérifiables.']}
    ], sources:[{label:'PlayStation Blog – création de builds',url:combat}]
  },
  {
    lang:'fr', slug:'talents-expliques', englishPath:'/guides/talents/',
    title:'Talents de Control Resonant : système de build', description:'Les Talents spécialisent attaques et pouvoirs dans The Gap, avec choix exclusifs et nouveaux nœuds en New Game Plus.',
    label:'Système de build', answer:'Les Talents sont des modificateurs passifs ou conditionnels qui spécialisent les formes d’Aberrant et les capacités de Dylan. Tous les nœuds ne sont pas accessibles au premier parcours; New Game Plus en ajoute.',
    sections:[
      {heading:'Fonction dans une configuration',paragraphs:['Un Talent n’ajoute pas simplement une touche active. Il change la manière dont attaques, statuts ou ressources interagissent, permettant à un même équipement de remplir des rôles différents.','The Gap présente cette progression, mais toutes les connexions et tous les coûts de nœuds ne sont pas encore publics.']},
      {heading:'Des décisions réellement exclusives',paragraphs:['Remedy insiste sur des choix qui définissent un premier parcours. Sélectionner une branche ne garantit donc pas l’accès à toutes ses alternatives. Une configuration doit viser une fonction claire.','Aucune réinitialisation libre et illimitée n’est confirmée. Les guides ne doivent pas promettre de respec ou de méta définitive avant test.']},
      {heading:'Extension en New Game Plus',paragraphs:['De nouveaux nœuds et combinaisons rendent le second passage plus riche. Les recommandations finales dépendront néanmoins des valeurs commerciales, des ennemis et des coûts réels.']}
    ], sources:[{label:'PlayStation Blog – Talents et The Gap',url:combat}]
  },
  {
    lang:'fr', slug:'mouvement-dash-double-saut-levitation', englishPath:'/guides/movement-dash-double-jump-levitate/',
    title:'Dash, double saut et lévitation dans Control Resonant', description:'Deux dashs aériens, double saut, courte lévitation et lien avec progression narrative, combat et plateformes 3D.',
    label:'Déplacement', answer:'Dylan peut effectuer deux dashs en l’air, un double saut et une courte lévitation en maintenant le saut. Ces pouvoirs servent au combat et aux passages de plateformes 3D; leur déblocage reste lié à l’histoire.',
    sections:[
      {heading:'Mouvements confirmés',paragraphs:['La prise en main officielle décrit deux dashs avant de retoucher le sol, un double saut et une lévitation brève. Ils permettent de corriger une trajectoire dans les secteurs déformés de Manhattan.','Les touches et timings viennent d’une version de présentation. Le remappage et l’équilibrage peuvent encore modifier leur utilisation finale.']},
      {heading:'Mobilité et combat',paragraphs:['Le dash évite une attaque ou ferme la distance, tandis que la verticalité ouvre chemins cachés, anomalies gravitationnelles et séquences de plateforme.','L’ordre complet des déblocages n’est pas publié. Aucun guide sérieux ne peut encore donner une fausse liste de lieux d’obtention.']},
      {heading:'Règle du New Game Plus',paragraphs:['Contrairement aux améliorations d’Aberrant, de santé et à plusieurs composants de build, les pouvoirs de déplacement repartent avec la progression narrative afin de préserver l’évolution du monde.']}
    ], sources:[{label:'PlayStation Blog – déplacement',url:movement},{label:'PlayStation Blog – progression',url:combat}]
  },
  {
    lang:'fr', slug:'anomalies-gravite-et-enigmes', englishPath:'/guides/gravity-anomalies-and-puzzles/',
    title:'Anomalies de gravité et énigmes de Control Resonant', description:'La gravité déforme exploration, plateformes et arènes; outils confirmés et limites avant publication des solutions.',
    label:'Exploration', answer:'Les anomalies gravitationnelles modifient chemins, espaces et combats à Manhattan. Dash, double saut et lévitation forment l’ensemble confirmé pour traverser les passages d’exploration et de plateformes 3D.',
    sections:[
      {heading:'Une ville paranaturelle',paragraphs:['Les forces cosmiques plient architecture et gravité, transformant murs et débris en routes possibles. Chaque zone doit posséder sa propre ambiance et ses propres contraintes.','Les images officielles montrent le principe mais pas toutes les solutions. Une bande-annonce ne suffit pas à déduire une séquence d’interrupteurs ou l’emplacement exact d’un collectible.']},
      {heading:'Pouvoirs servant de clés',paragraphs:['Deux dashs aériens, double saut et lévitation permettent d’ajuster précisément la trajectoire. Les déblocages liés au récit peuvent déterminer quand une zone devient entièrement accessible.','Cette logique rappelle un Metroidvania sans confirmer chaque aller-retour ou ordre de progression.']},
      {heading:'Futures pages de solution',paragraphs:['Après la sortie, une énigme ne mérite sa propre URL que si point de départ, prérequis, étapes et résultat sont vérifiés. Avant cela, ce guide reste un hub de mécanique utile.']}
    ], sources:[{label:'PlayStation Blog – mouvement surnaturel',url:movement},{label:'Xbox Wire – structure des zones',url:xboxCombat}]
  },
  {
    lang:'fr', slug:'carte-manhattan-et-zones', englishPath:'/guides/manhattan-map-and-zones/',
    title:'Carte de Manhattan et zones confirmées', description:'Manhattan, West Incursion Zone, Evacuation Zone et FBC Field Office, sans inventer de marqueurs avant la sortie.',
    label:'Lieux', answer:'Control Resonant présente un Manhattan déformé composé de grandes zones autour du FBC Field Office. West Incursion Zone et Evacuation Zone sont nommées; aucune carte mondiale complète n’est encore publiée.',
    sections:[
      {heading:'Organisation connue',paragraphs:['Le Field Office sert de hub central. Les opérations mènent vers des secteurs urbains transformés de façons différentes par les phénomènes paranaturels. La structure est ouverte sans devenir un monde continu.','West Incursion Zone apparaît liée aux premiers événements et au mouvement; Evacuation Zone est montrée comme une arène ouverte attaquée de plusieurs directions.']},
      {heading:'Limites des cartes avant sortie',paragraphs:['Les sources ne donnent ni nombre final de zones, ni tous les points de voyage, passages ou frontières. Une reconstitution à partir de plans de caméra peut fausser distances et connexions.','Les futures fiches de lieu devront préciser entrée, itinéraire, activité et retour à partir d’une version jouable vérifiée.']},
      {heading:'Préparation raisonnable',paragraphs:['Retenez le rôle du hub et les noms confirmés sans planifier une route de collectibles. La progression narrative et les pouvoirs de déplacement peuvent ouvrir de nouveaux accès.']}
    ], sources:[{label:'Xbox Wire – Manhattan et hub FBC',url:xboxCombat},{label:'Remedy – description officielle',url:official}]
  },
  {
    lang:'fr', slug:'quetes-du-monde-et-campagne', englishPath:'/guides/world-quests-and-campaign/',
    title:'Quêtes du monde, activités et campagne', description:'Campagne principale, World Quests, contrats, collectibles, rencontres cachées et contenu rejoué en New Game Plus.',
    label:'Activités', answer:'En plus de la campagne, Control Resonant propose World Quests, contrats, collectibles, histoires secondaires et rencontres cachées. Certaines conversations ou issues peuvent varier; la liste complète des quêtes n’est pas encore publiée.',
    sections:[
      {heading:'Plusieurs niveaux d’activité',paragraphs:['Les grandes zones contiennent des objectifs optionnels et des découvertes, de sorte que l’exploration ne sert pas uniquement à rejoindre la prochaine mission principale. Les contrats ajoutent des défis orientés combat.','Les informations officielles sur le New Game Plus citent explicitement World Quests, Bounties, Collectibles et Side Stories comme contenus à revisiter.']},
      {heading:'Pourquoi les walkthroughs attendent',paragraphs:['Une vraie solution exige nom, déclencheur, étapes exactes, destination, récompense et bugs connus. Ces données manquent encore pour la majorité de la campagne.','Ce hub indexe les types confirmés au lieu de publier des pages vides. Chaque quête réelle sera évaluée après accès à des preuves jouables.']},
      {heading:'Variations au second passage',paragraphs:['Remedy évoque des dialogues et résultats différents. Cela ne fournit pas encore une matrice complète de décisions, mais indique que les activités optionnelles peuvent évoluer au-delà d’une simple répétition.']}
    ], sources:[{label:'PlayStation Blog – progression',url:combat},{label:'Xbox Wire – activités optionnelles',url:xboxCombat}]
  },
  {
    lang:'fr', slug:'xbox-play-anywhere', englishPath:'/guides/xbox-play-anywhere/',
    title:'Control Resonant avec Xbox Play Anywhere', description:'Un achat pour console Xbox et PC Xbox, sauvegardes, extensions et succès synchronisés, avec les limites du programme.',
    label:'Xbox', answer:'Control Resonant prend en charge Xbox Play Anywhere dès le lancement. Un achat numérique dans l’écosystème Xbox permet de jouer sur Series X|S, PC Xbox et appareils portables compatibles avec sauvegardes, extensions et succès synchronisés.',
    sections:[
      {heading:'Ce que le programme apporte',paragraphs:['Microsoft décrit une licence numérique partagée entre appareils Xbox pris en charge. Une partie commencée sur console peut continuer sur PC ou handheld compatible avec le même compte.','La synchronisation couvre sauvegardes, succès et, selon Xbox, extensions. Une seconde copie n’est pas nécessaire pour un achat numérique éligible.']},
      {heading:'Limites importantes',paragraphs:['Play Anywhere n’est pas du cross-play et n’ajoute aucune coopération. Il ne confirme pas non plus de transfert vers Steam, Epic, PlayStation ou Mac. Les disques et règles régionales doivent être vérifiés séparément.','Performances et commandes varient selon l’appareil. Remedy tient compte des handhelds sans publier encore une liste exhaustive de modèles.']},
      {heading:'Choisir sa plateforme',paragraphs:['Le bénéfice est net pour qui alterne console Xbox et Windows. Les joueurs Steam Deck, GeForce NOW ou Mac doivent comparer séparément licence, sauvegarde et calendrier.']}
    ], sources:[{label:'Xbox Wire – Play Anywhere et appareils portables',url:xbox}]
  },
  {
    lang:'fr', slug:'steam-deck-statut', englishPath:'/guides/steam-deck-support/',
    title:'Control Resonant sur Steam Deck : statut actuel', description:'Pas encore de classement Deck officiel : optimisation handheld, exigences PC et limites de compatibilité avant sortie.',
    label:'PC portable', answer:'Aucune vérification Steam Deck officielle n’est actuellement publiée. Remedy confirme prendre en compte performances et commandes sur appareils portables, sans garantir presets, fréquence d’images ou compatibilité Deck.',
    sections:[
      {heading:'Confirmé contre supposé',paragraphs:['Dans l’entretien Xbox, Remedy parle de handhelds compatibles et de travail sur performances et contrôles. C’est un objectif de développement positif, pas une certification Valve « Verified » ou « Playable ».','La fiche Steam reste la référence pour le badge Deck. Le fonctionnement sur un autre appareil portable ne remplace pas cette évaluation.']},
      {heading:'Lecture des exigences PC',paragraphs:['La configuration minimale annonce 16 Go de RAM, 100 Go et une classe GPU de bureau autour des GTX 1070 ou RX 5600 XT. Ces références ne se convertissent pas directement vers la puce intégrée du Deck.','Upscaling, compilation des shaders, taille du texte et autonomie compteront autant que la capacité à lancer le jeu.']},
      {heading:'Décision avant lancement',paragraphs:['Si le Deck est votre seul appareil, attendez la vérification Valve ou des tests fiables de la version finale. GeForce NOW constitue une voie de streaming distincte, avec connexion, abonnement et licence PC compatibles.']}
    ], sources:[{label:'Xbox Wire – optimisation handheld',url:xbox},{label:'Steam – configuration requise',url:steam}]
  }
];
