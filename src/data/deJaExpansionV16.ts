import type { LocalizedPage } from './localized';
import type { OfficialLocaleGuide } from './officialLocaleGuidesV13';

const steam = 'https://store.steampowered.com/app/3669870/CONTROL_Resonant/';
const combat = 'https://blog.playstation.com/2026/03/04/control-resonant-a-deep-dive-into-combat-buildcrafting-and-player-choice/';
const ngp = 'https://blog.playstation.com/2026/04/30/control-resonant-remedy-shares-first-details-on-new-game-plus/';
const handsOn = 'https://news.xbox.com/en-us/2026/06/11/control-resonant-hands-on-melee-combat/';
const story = 'https://blog.playstation.com/2026/06/02/control-resonant-launches-september-24-on-ps5/';

export const germanExpansionV16: LocalizedPage[] = [
  {
    lang:'de', slug:'kampfressource-und-exekutionen', englishPath:'/guides/combat-ability-resource-management/',
    title:'Kampfressource, Betäubung und Exekutionen erklärt',
    description:'So verbindet Control Resonant Nahkampftreffer, Combat-Ability-Ressource, Betäubungen und Exekutionen zu einer offensiven Kampfschleife.',
    label:'Kampfsystem', answer:'Nahkampftreffer füllen Dylans Combat-Ability-Ressource auf. Übernatürliche Fähigkeiten können Gegner betäuben und für Exekutionen öffnen; eine erfolgreiche Exekution erhöht anschließend vorübergehend den Nahkampfschaden.',
    sections:[
      {heading:'Die bestätigte Ressourcenschleife',paragraphs:['Remedy beschreibt eine bewusst aggressive Abfolge: Mit Aberrant im Nahkampf Druck aufbauen, dadurch die Ressource für Combat Abilities zurückgewinnen und diese Kräfte einsetzen, um Gegner zu kontrollieren oder zu betäuben. Das System belohnt aktives Handeln, statt dauerhaftes Abwarten hinter Deckung zur Standardlösung zu machen.','Exekutionen bilden den nächsten Schritt. Ein verwundbarer oder betäubter Gegner kann ausgeschaltet werden; danach steigt der Nahkampfschaden für eine begrenzte Zeit. Dieser Bonus führt zurück zu Aberrant und schließt die Schleife aus Angriff, Fähigkeit, Exekution und verstärktem Angriff.']},
      {heading:'Was das für Builds bedeutet',paragraphs:['Schnelle Formen können die Ressource durch viele Treffer konstant erneuern, während schwere Formen ein kurzes Schadensfenster nach einer Exekution stärker ausnutzen könnten. Ob Trefferzahl oder verursachter Schaden die genaue Rückgewinnung bestimmt, ist jedoch noch nicht mit Zahlen dokumentiert.','Barrage, Shield, Seekers und andere Fähigkeiten erfüllen unterschiedliche Aufgaben. Ein stabiler Build braucht deshalb nicht nur hohen Schaden, sondern auch eine verlässliche Methode, die Ressource zu erzeugen, Gegner in den richtigen Zustand zu bringen und die Exekutionsdistanz sicher zu erreichen.']},
      {heading:'Noch keine erfundenen Prozentwerte',paragraphs:['Maximalwert, Kosten, Regenerationsrate, Dauer des Exekutionsbonus und mögliche Talente sind vor Veröffentlichung nicht vollständig bekannt. Diese Seite erklärt nur den bestätigten Ablauf; konkrete Formeln und optimale Rotationen werden erst mit überprüfbaren Daten der finalen Version ergänzt.']}
    ], sources:[{label:'PlayStation Blog – Kampf und Momentum',url:combat},{label:'Xbox Wire – spielbare Kampfvorschau',url:handsOn}]
  },
  {
    lang:'de', slug:'action-rpg-ohne-loot-grind', englishPath:'/guides/action-rpg-without-loot-grind/',
    title:'Control Resonant als Action-RPG ohne bestätigten Loot-Grind',
    description:'Warum Resonant stärker auf Spezialisierung, Fähigkeiten und handgebaute Zonen setzt als auf endlose zufällige Beute.',
    label:'Spielstruktur', answer:'Control Resonant wird als Action-Adventure-RPG beziehungsweise Action-RPG beschrieben. Bestätigt sind Buildcrafting, Talente, Artefakte und verzweigte Belohnungen; ein endloser Loot-Grind mit zufällig erzeugten Waffen ist dagegen nicht angekündigt.',
    sections:[
      {heading:'Woher der RPG-Anteil kommt',paragraphs:['Dylan entwickelt Aberrant-Formen, Combat Abilities und Talente im The Gap. Manche Resonant-Bosse bieten exklusive Entscheidungen, sodass im ersten Durchlauf nicht jede Option gleichzeitig verfügbar ist. Diese Spezialisierung und die transparente Statistikansicht bilden den bestätigten RPG-Kern.','Artefakte erweitern einen Build um passive oder bedingte Effekte. Ihre Existenz beweist jedoch kein Diablo-artiges Beutesystem. Offizielle Quellen sprechen über Entscheidungen, Synergien und klar lesbare Leistung, nicht über ständig fallende Waffen mit zufälligen Qualitätsstufen.']},
      {heading:'Erkundung statt Checklistenarbeit',paragraphs:['Manhattan besteht aus unterschiedlichen, handgebauten Zonen mit Hauptkampagne, World Quests, Kämpfen, Umweltaufgaben und versteckten Entdeckungen. Remedy betont ausdrücklich, dass die Karte nicht mit monotonen Symbolen und Pflichtarbeit überfüllt werden soll.','Dieses Design schließt optionale Belohnungen, Materialien oder wiederholbare Aufgaben nicht aus. Es bedeutet lediglich, dass ein unbegrenzter Grind bislang nicht Teil des veröffentlichten Produktversprechens ist und deshalb nicht als Kaufargument vorausgesetzt werden sollte.']},
      {heading:'Was erst die finale Version zeigt',paragraphs:['Drop-Raten, Seltenheitsstufen, Herstellkosten und Endgame-Farming sind nicht vollständig dokumentiert. Vor Release lässt sich seriös erklären, wie Spezialisierung funktioniert; eine Aussage über die tatsächliche Spielzeit oder eine angebliche Loot-Meta braucht dagegen Tests der Verkaufsversion.']}
    ], sources:[{label:'PlayStation Blog – Welt und Buildcrafting',url:combat},{label:'Steam – offizielle Genre- und Spielbeschreibung',url:steam}]
  },
  {
    lang:'de', slug:'3d-platforming-und-erkundung', englishPath:'/guides/control-resonant-3d-platforming/',
    title:'3D-Platforming und vertikale Erkundung in Manhattan',
    description:'Wie Doppelsprung, Luft-Dashes, Schweben und gebrochene Gravitation die Erkundung von Control Resonant prägen.',
    label:'Erkundung', answer:'Control Resonant besitzt ausgeprägte 3D-Platforming-Passagen. Dylans Doppelsprung, zwei Luft-Dashes und kurzes Schweben verbinden vertikale Wege, Umweltaufgaben und Kämpfe in den verzerrten Manhattan-Zonen.',
    sections:[
      {heading:'Bestätigte Bewegungswerkzeuge',paragraphs:['In der spielbaren Vorschau konnte Dylan nach einem Sprung erneut abspringen, zweimal in der Luft dashen und durch Gedrückthalten der Sprungtaste kurz schweben. Diese Kombination erlaubt Korrekturen über Abgründen und macht die Flugbahn stärker steuerbar als ein einzelner Standardsprung.','Die Fähigkeiten sind nicht nur Komfort. Offizielle Beschreibungen verbinden sie mit gebrochener Gravitation, instabiler Architektur und Abschnitten, die ausdrücklich an 3D-Platformer erinnern. Welche Bewegung zuerst freigeschaltet wird, bleibt an die Story gebunden.']},
      {heading:'Erkundung und Kampf teilen dieselben Regeln',paragraphs:['Ein Luft-Dash kann eine Plattform erreichen oder einem Angriff ausweichen. Schweben verlängert die Zeit zur Orientierung, macht Dylan aber möglicherweise auch angreifbar. Gute Routen werden deshalb Positionierung, Kamera und Gegnerdruck zusammen berücksichtigen.','Große Zonen können nach neuen Traversal-Fähigkeiten erneut besucht werden. Das deutet auf progressionsabhängige Wege hin, beweist aber weder eine bestimmte Zahl von Geheimräumen noch eine vollständig frei begehbare Open World.']},
      {heading:'Noch keine vollständigen Routen',paragraphs:['Vor Veröffentlichung fehlen genaue Checkpoints, Sprungweiten, Tastenbelegung auf allen Plattformen und Positionen optionaler Belohnungen. Aus Trailern lassen sich keine verlässlichen Schrittfolgen konstruieren; konkrete Lösungen folgen erst nach Prüfung einer spielbaren Endfassung.']}
    ], sources:[{label:'Xbox Wire – Hands-on und Bewegungsfähigkeiten',url:handsOn},{label:'PlayStation Blog – handgebaute Zonen',url:combat}]
  },
  {
    lang:'de', slug:'reach-fortbewegungsfaehigkeit', englishPath:'/guides/reach-traversal-ability/',
    title:'Reach-Fähigkeit: Greifen, Heranziehen und Fortbewegung',
    description:'Was über Reach als paranatürliche Traversal-Fähigkeit bestätigt ist und welche Kampf- und Erkundungsdetails noch fehlen.',
    label:'Fähigkeiten', answer:'Reach ist eine bestätigte Fortbewegungsfähigkeit, mit der Dylan Ziele oder Punkte aus der Entfernung greifen und sich durch die Umgebung bewegen kann. Sie erweitert sowohl Navigation als auch die Kontrolle von Abständen im Kampf.',
    sections:[
      {heading:'Funktion in der Spielwelt',paragraphs:['Die gezeigten Manhattan-Zonen arbeiten mit Höhe, Lücken und verschobener Architektur. Reach bietet dafür eine gezielte Bewegungslösung, die sich von freiem Schweben oder einem kurzen Dash unterscheidet und neue Winkel für Erkundung und Rückwege schaffen kann.','Remedy behandelt Traversal-Fähigkeiten als Teil des Storyfortschritts. Sie werden in New Game Plus zurückgesetzt, obwohl viele Kampfupgrades übernommen werden. Das zeigt, dass Reach wahrscheinlich als Schlüssel für die Reihenfolge bestimmter Gebiete dient.']},
      {heading:'Nutzen im Kampf',paragraphs:['Schnelles Heranziehen oder Überbrücken von Distanz passt zur nahkampforientierten Aberrant-Schleife. Reach kann Positionen verändern, doch Reichweite, Zieltypen, Ressourcenkosten und mögliche Unverwundbarkeitsfenster wurden nicht vollständig veröffentlicht.','Die Fähigkeit sollte deshalb nicht mit einer frei nutzbaren Teleportation verwechselt werden. Ob Gegner, Objekte und markierte Anker dieselben Regeln besitzen, muss die finale Steuerung zeigen.']},
      {heading:'Grenzen der Vorschau',paragraphs:['Es gibt noch keine komplette Liste aller Reach-Anker, Upgrade-Stufen oder obligatorischen Rätsel. Ein belastbarer Walkthrough muss Startpunkt, Blickrichtung, benötigte Fähigkeit und Landezone konkret prüfen, statt Trailerbilder als fertige Route auszugeben.']}
    ], sources:[{label:'Xbox Wire – Traversal im Hands-on',url:handsOn},{label:'PlayStation Blog – New Game Plus',url:ngp}]
  },
  {
    lang:'de', slug:'shift-gravitationsfaehigkeit', englishPath:'/guides/shift-gravity-ability/',
    title:'Shift-Fähigkeit: Gravitation und Raumorientierung',
    description:'Shift verändert Dylans Orientierung in gebrochenen Räumen; bestätigte Rolle, Einsatzgrenzen und Verbindung zu Story-Fortschritt.',
    label:'Fähigkeiten', answer:'Shift ist eine Traversal-Fähigkeit, die Dylans Orientierung relativ zur Schwerkraft verändert. Sie dient dazu, verzerrte Architektur und Wege zu nutzen, die mit normalen Sprüngen nicht erreichbar wären.',
    sections:[
      {heading:'Warum Shift zur Welt passt',paragraphs:['Manhattan wird von paranatürlichen Kräften umgeformt: Straßen, Wände und Innenräume folgen nicht immer einer stabilen Vertikalen. Shift macht diese Verformung zu einer spielbaren Navigationsregel, statt sie nur als Hintergrundeffekt zu verwenden.','Die Fähigkeit ergänzt Doppelsprung, Dash, Schweben und Reach. Sie ist jedoch kein Beleg dafür, dass jede Oberfläche frei zur neuen Bodenfläche erklärt werden kann; gezeigte Einsatzpunkte und Levelregeln können den Wechsel begrenzen.']},
      {heading:'Storygebundener Fortschritt',paragraphs:['Remedy bestätigt, dass Traversal-Fähigkeiten in New Game Plus nicht dauerhaft übernommen werden, weil sie mit der Entwicklung der Geschichte verbunden sind. Shift dürfte daher bestimmte Routen erst dann öffnen, wenn der entsprechende Abschnitt erreicht wurde.','Für Sammelobjekte und World Quests bedeutet das: Ein zunächst unzugänglicher Ort kann einen späteren Rückbesuch verlangen. Vor Release ist aber weder die genaue Freischaltmission noch eine vollständige Liste solcher Barrieren bekannt.']},
      {heading:'Was nicht behauptet werden sollte',paragraphs:['Unbegrenztes Laufen an Wänden, freie Raumrotation, Kampfboni und genaue Eingaben sind nicht vollständig dokumentiert. Künftige Lösungen müssen zwischen automatisch inszenierten Raumwechseln und einer manuell ausgelösten Fähigkeit unterscheiden.']}
    ], sources:[{label:'Xbox Wire – Shift und gebrochene Gravitation',url:handsOn},{label:'PlayStation Blog – Fortschrittsregeln',url:ngp}]
  },
  {
    lang:'de', slug:'ps5-pro-gameplay-und-performance', englishPath:'/guides/ps5-pro-gameplay/',
    title:'PS5 Pro Gameplay und Performance: bestätigter Stand',
    description:'Was die auf PS5 Pro gezeigte Gameplay-Fassung bestätigt und warum daraus noch keine finalen 4K- oder 60-FPS-Modi folgen.',
    label:'PlayStation', answer:'Das erste ausführliche Gameplay von Control Resonant wurde laut Remedy auf PS5 Pro aufgenommen. Damit ist eine lauffähige Pro-Version bestätigt; konkrete Auflösungs-, Bildraten- und Raytracing-Modi sind daraus noch nicht ableitbar.',
    sections:[
      {heading:'Was offiziell gezeigt wurde',paragraphs:['Der Combat Deep Dive nennt ausdrücklich eine Gameplay-Aufnahme auf PlayStation 5 Pro. Sie demonstriert Aberrant, übernatürliche Fähigkeiten, schnelle Formwechsel und zerstörbare, paranatürlich verformte Arenen. Das Material belegt die Zielplattform, nicht jede technische Einstellung der Aufnahme.','Videos werden für Präsentationen geschnitten und komprimiert. Eine sichtbare flüssige Sequenz beweist daher weder durchgehende 60 Bilder pro Sekunde noch native 4K-Auflösung, einen bestimmten Upscaler oder identische Qualität in der gesamten Kampagne.']},
      {heading:'Standard-PS5 und PS5 Pro trennen',paragraphs:['Control Resonant erscheint auch auf der normalen PS5. Ob beide Konsolen dieselben Qualitäts- und Performance-Modi erhalten und welche Pro-Verbesserungen angeboten werden, ist noch nicht vollständig dokumentiert. Käufer sollten die Plattformseite und spätere technische Hinweise prüfen.','Auch Raytracing, VRR-Unterstützung, PSSR und Speichergröße brauchen klare Produktangaben. Eine Funktion, die technisch auf der Hardware möglich ist, ist nicht automatisch für dieses Spiel bestätigt.']},
      {heading:'Sinnvolle Kaufentscheidung',paragraphs:['Wer bereits eine PS5 besitzt, sollte nicht allein aufgrund des Trailers aufrüsten. Aussagekräftig werden erst offizielle Modustabellen oder Analysen der finalen Version mit Auflösung, Bildrate und Bildqualität in vergleichbaren Szenen.']}
    ], sources:[{label:'PlayStation Blog – Gameplay auf PS5 Pro',url:combat},{label:'Steam – PC-Anforderungen als Vergleich',url:steam}]
  },
  {
    lang:'de', slug:'build-entscheidungen-im-ersten-durchlauf', englishPath:'/guides/first-playthrough-build-locks/',
    title:'Build-Entscheidungen im ersten Durchlauf',
    description:'Warum nicht alle Fähigkeiten und Talentzweige im ersten Run verfügbar sind und wie New Game Plus die Auswahl erweitert.',
    label:'Buildcrafting', answer:'Im ersten Durchlauf kann Dylan nicht jede Fähigkeit und jede Alternative freischalten. Einige Resonant-Bosse bieten verzweigte Belohnungen; New Game Plus erweitert später Talente, Boss-Fähigkeiten und Artefaktplätze.',
    sections:[
      {heading:'Spezialisierung ist beabsichtigt',paragraphs:['Remedy beschreibt den Fortschritt als Auswahl, die einen Spielstil formt. Combat Abilities, Aberrant-Formen und Talente bilden die drei Hauptsäulen im The Gap. Wenn ein Resonant mehrere Belohnungen anbietet, ist die Entscheidung Teil des Builds und keine bloße Menüreihenfolge.','Eine allgemein verfügbare, kostenlose Komplett-Rücksetzung wurde nicht bestätigt. Spieler sollten daher nicht voraussetzen, jede Alternative vor dem Finale testen zu können. Ein klarer Schwerpunkt auf Nahkampf, Kontrolle, Verteidigung oder Beschwörung verringert das Risiko eines widersprüchlichen Setups.']},
      {heading:'Was New Game Plus verändert',paragraphs:['NG+ übernimmt große Teile des Kampf-Fortschritts, ergänzt neue Talentknoten und erlaubt verschiedene Combat Abilities aus demselben Boss-Pool. Außerdem wird ein vierter Artefaktplatz freigeschaltet, während Traversal-Kräfte wegen der Story erneut erworben werden.','Damit dient der zweite Lauf nicht nur höheren Zahlen. Er öffnet Kombinationen, die im ersten Durchgang absichtlich ausgeschlossen waren, und verändert einzelne Begegnungen sowie Bossverhalten.']},
      {heading:'Planen ohne falsche Meta',paragraphs:['Vor Release fehlen vollständige Bäume, Kosten und Balancewerte. Eine sichere Vorbereitung besteht deshalb darin, Rollen und Synergien zu verstehen, nicht einen angeblich optimalen Pfad aus unvollständigen Preview-Daten zu kopieren.']}
    ], sources:[{label:'PlayStation Blog – Build-Entscheidungen',url:combat},{label:'PlayStation Blog – New Game Plus',url:ngp}]
  },
  {
    lang:'de', slug:'mold-turret-status-build', englishPath:'/guides/mold-turret-status-build/',
    title:'Mold-Turret- und Status-Build erklärt',
    description:'Ein taktischer Build mit autonomen Mold Turrets und schädlichen Statuseffekten als Alternative zum reinen Nahkampfdruck.',
    label:'Buildcrafting', answer:'Mold Turrets sind als taktische Build-Option bestätigt. Sie greifen selbstständig an und können schädliche Statuseffekte anwenden, während Dylan mit Aberrant, Bewegung und weiteren Fähigkeiten das Schlachtfeld kontrolliert.',
    sections:[
      {heading:'Bestätigte Rolle der Turrets',paragraphs:['Der offizielle Combat Deep Dive nennt Mold Turrets ausdrücklich als Beispiel dafür, dass Resonant nicht nur schwere oder schnelle Nahkampf-Builds unterstützt. Die beschworenen Einheiten erzeugen eigenständigen Druck und verteilen negative Zustände auf Gegner.','Autonom bedeutet nicht unbegrenzt oder ohne Kosten. Anzahl, Dauer, Zielpriorität, Schaden und Ressourcenverbrauch wurden noch nicht vollständig veröffentlicht und dürfen nicht aus ähnlichen Systemen anderer Spiele übernommen werden.']},
      {heading:'Mögliche Synergien',paragraphs:['Während Turrets Gegner beschäftigen, kann Dylan Abstand kontrollieren, mit Aberrant Ressourcen aufbauen oder Betäubungen für Exekutionen vorbereiten. Seekers verfolgt ebenfalls ein Beschwörungsprinzip, doch beide Fähigkeiten sind nicht automatisch austauschbar oder gleichzeitig verfügbar.','Talente und Artefakte könnten Dauer, Statusaufbau oder Ressourcennutzung verändern. Ohne veröffentlichte Knoten und Werte bleibt die seriöse Empfehlung auf Rollen beschränkt: kontinuierlicher Druck, Kontrolle mehrerer Ziele und sichere Vorbereitung eigener Angriffe.']},
      {heading:'Kein fertiger Best-Build vor Release',paragraphs:['Widerstände, Boss-Immunitäten, Abklingzeiten und Stapelregeln entscheiden über die spätere Stärke. Die Seite dokumentiert die bestätigte taktische Richtung; ein genauer Loadout-Plan folgt erst, wenn finale Daten und reproduzierbare Tests vorliegen.']}
    ], sources:[{label:'PlayStation Blog – Mold Turrets und Status-Effekte',url:combat}]
  }
];

export const japaneseExpansionV16: OfficialLocaleGuide[] = [
  {
    lang:'ja', slug:'new-game-plus', englishPath:'/guides/new-game-plus/',
    title:'CONTROL Resonant ニューゲームプラス：引き継ぎ要素',
    description:'CONTROL ResonantのニューゲームプラスでAberrant強化、体力、能力、Talent、Artifactをどう引き継ぐか、移動能力のリセットと2周目の新規要素を公式情報に基づいて整理します。',
    label:'ゲームモード', answer:'ニューゲームプラスではAberrant強化、体力、Combat Abilityリソース、能力、Talent、Artifactを引き継ぎます。物語に結びつく移動能力はリセットされ、進行に合わせて再取得します。',
    sections:[
      {heading:'引き継がれる成長要素',paragraphs:['公式説明では、Aberrantのアップグレード、Dylanの体力、Combat Ability用リソース、解放済みの超自然能力、Talent、Artifactが次の周回へ持ち越されます。完成した戦闘ビルドを序盤から活用できることが、このモードの基本的な価値です。','一方、移動能力はエリア進行や物語の構造に深く関係するためリセットされます。これは戦闘成長が失われるという意味ではなく、探索ルートを本編の順序に合わせるための明確な例外です。']},
      {heading:'2周目だけの拡張',paragraphs:['ニューゲームプラスでは新しいTalentノードが追加され、同じボスの報酬プールから複数のCombat Abilityを組み合わせられるようになります。Artifactスロットも3枠から4枠へ増え、初回では作れなかった構成を試せます。','一部の遭遇やボス行動にも変化があり、World Quest、Bounty、Collectible、Side Storyを別の会話や結果とともに再体験できると説明されています。単なる数値の引き継ぎだけではありません。']},
      {heading:'まだ不明な点',paragraphs:['解放メニューの正確な手順、複数回の周回が可能か、難易度がどう変化するかは最終版で確認する必要があります。未公開の条件を推測せず、公式仕様と実機データがそろった段階で更新します。']}
    ], sources:[{label:'PlayStation Blog — New Game Plus詳細',url:ngp}]
  },
  {
    lang:'ja', slug:'aberrant-weapon-forms', englishPath:'/guides/aberrant-weapon-forms/',
    title:'Aberrant武器フォーム完全ガイド',
    description:'Primary Form、Secondary Form、Combo Enderの役割と、Flurry、Slash、Sliceなど確認済みフォームを区別して解説します。',
    label:'武器システム', answer:'AberrantはDylanの変形近接武器です。ビルドではPrimary Form、Secondary Form、Combo Enderを一つずつ選び、速度、射程、単体火力、範囲制圧を組み合わせます。',
    sections:[
      {heading:'三つの装備レイヤー',paragraphs:['Primary Formは通常コンボの中心、Secondary Formは重い攻撃やチャージ攻撃、Combo Enderは連係の締めを担当します。三つの枠は同じ武器の見た目違いではなく、操作のリズムと役割を組み立てるビルド要素です。','公式ハンズオンでは、Flurryは高速の二刀、Slashは広い範囲を薙ぐ鎌、Sliceは単体への大ダメージと背後攻撃ボーナスを持つ斧として説明されています。名称と役割を入れ替えないことが重要です。']},
      {heading:'フォーム切り替えと戦闘ループ',paragraphs:['Aberrantの攻撃はCombat Abilityリソースを回復します。フォームで接近戦を継続し、能力で敵をスタンさせ、処刑後の近接ダメージ強化を次のコンボに戻すことで、攻撃的な循環が成立します。','CrushやDrillなど別のフォームも確認されていますが、すべての解放条件、最終ダメージ、アップグレード費用は公開されていません。映像だけで倍率や最強順位を作ることはできません。']},
      {heading:'ビルドを選ぶ基準',paragraphs:['速さだけでなく、敵の数、距離、隙の大きさ、装備するCombat Abilityとの相性で選びます。初回プレイではすべてを同時に解放できないため、明確な役割を持つ三枠を組むことが安全です。']}
    ], sources:[{label:'PlayStation Blog — 戦闘とビルド',url:combat},{label:'Xbox Wire — Aberrantフォーム',url:handsOn}]
  },
  {
    lang:'ja', slug:'movement-dash-double-jump-levitate', englishPath:'/guides/movement-dash-double-jump-levitate/',
    title:'ダッシュ、二段ジャンプ、浮遊の移動システム',
    description:'CONTROL Resonantで使える空中ダッシュ2回、二段ジャンプ、短時間浮遊を使った3D探索と戦闘、物語進行やニューゲームプラスとの関係を公式情報から解説します。',
    label:'探索', answer:'Dylanは二段ジャンプ、着地までに2回使える空中ダッシュ、ジャンプ長押しによる短時間の浮遊を利用できます。これらは探索、3Dプラットフォーム、戦闘の回避に共通して使われます。',
    sections:[
      {heading:'確認済みの移動手段',paragraphs:['公式ハンズオンでは、ジャンプ後の追加ジャンプ、二度の空中ダッシュ、短い浮遊が実際の移動に使われました。崩れた建物や重力異常の中で軌道を修正し、通常のジャンプだけでは届かない足場へ進むための基本セットです。','操作は戦闘から分離されていません。ダッシュで攻撃を避けながら距離を詰め、浮遊中に周囲を確認し、Aberrantの射程へ戻るなど、同じ能力が位置取りと探索の両方を支えます。']},
      {heading:'ストーリー進行との関係',paragraphs:['移動能力は物語の進行に結びついています。そのためニューゲームプラスでもリセットされ、対応する場面で再取得します。以前のエリアへ戻る導線があっても、最初からすべての高所へ行けるとは限りません。','この仕組みはメトロイドヴァニア的な再探索を示しますが、全エリアの順序やファストトラベル仕様を確定するものではありません。マップの完全な接続関係はまだ公開されていません。']},
      {heading:'発売前に断定できないこと',paragraphs:['正確な入力、無敵時間、移動距離、スタミナ制限、各能力の取得場所は最終版で確認が必要です。トレーラーのカットをつないだだけのルートは攻略として扱いません。']}
    ], sources:[{label:'Xbox Wire — 移動能力ハンズオン',url:handsOn},{label:'PlayStation Blog — 進行ルール',url:ngp}]
  },
  {
    lang:'ja', slug:'is-control-resonant-open-world', englishPath:'/guides/is-control-resonant-open-world/',
    title:'CONTROL Resonantはオープンワールド？',
    description:'手作りのマンハッタン各区域、FBC Field Office、World Questと、一般的なマップ埋め型オープンワールドとの違いを整理します。',
    label:'世界構造', answer:'一般的なチェックリスト型オープンワールドとは説明されていません。マンハッタンは複数の広い手作り区域で構成され、探索、メインストーリー、World Quest、隠し要素が自然に配置されます。',
    sections:[
      {heading:'公式が説明するマンハッタン',paragraphs:['各区域には独自の雰囲気、戦闘、Lore、秘密があり、FBCのField Officeが活動の中心になります。前作のOldest Houseより規模と開放感は増しますが、一枚の巨大な無境界マップであるとは発表されていません。','Remedyは、地図を見ただけで大量のアイコンに圧倒される設計を避け、面白い活動を厳選する方針を明言しています。目的はマップを機械的に消化することではなく、自分の判断で探索することです。']},
      {heading:'クエストと再探索',paragraphs:['物語はDylan’s Journeyというメインキャンペーンと、独立した物語を持つWorld Questに分かれます。さらに戦闘、環境チャレンジ、隠された発見、Altered Itemなどの任意要素が区域内に組み込まれます。','移動能力が物語に合わせて解放されるため、後から戻ることで新しい道が見つかる可能性があります。ただし区域数、ファストトラベル、全マップの広さはまだ完全には公開されていません。']},
      {heading:'最も正確な呼び方',paragraphs:['現時点では「探索自由度の高い、手作り区域型のアクションRPG」が安全です。Steam上のユーザータグだけで、一般的なオープンワールド作品と同じ構造だと断定しません。']}
    ], sources:[{label:'PlayStation Blog — 世界設計',url:combat},{label:'Steam — 公式ゲーム説明',url:steam}]
  },
  {
    lang:'ja', slug:'dylan-faden', englishPath:'/guides/dylan-faden/',
    title:'Dylan Faden：主人公と能力の背景',
    description:'CONTROL Resonantで唯一の操作主人公として確認されているDylan Fadenについて、FBCでの拘束、Aberrant、Jesse探索と人間性のテーマを公式情報から整理します。',
    label:'キャラクター', answer:'Dylan FadenはCONTROL Resonantで発表されている唯一の操作主人公です。FBCに長年拘束された彼はOldest Houseを脱出し、Aberrantと新たな能力を使いながらJesseを探します。',
    sections:[
      {heading:'被験者から主人公へ',paragraphs:['DylanはFederal Bureau of Controlに拘束され、被験者でありDirector候補でもありました。本作の冒頭ではOldest Houseの奥から脱出し、Hissが封鎖を越えてマンハッタンへ広がった現実に直面します。','彼の目的は単に敵を倒すことではありません。公式説明は、過去の体験を理解し、自分のアイデンティティを再構築し、人間性を保つ戦いとしてDylanの成長を描いています。']},
      {heading:'Aberrantと超自然能力',paragraphs:['胸に現れる変形近接武器Aberrantは複数のフォームへ変化します。DylanはさらにCombat Ability、Talent、Artifactを組み合わせ、The Gapで自分の戦い方を専門化します。','能力が強くなるほど、誰の意志で力を使うのかという物語上の問題も重くなります。The BoardやFBCとの関係は確認されていますが、最終的な忠誠や結末は公開されていません。']},
      {heading:'JesseとZoeとの関係',paragraphs:['行方不明の姉Jesseを探すことが大きな動機です。FBC現場エージェントZoe De VeraはハンドラーとしてDylanを支え、信頼と責任を学ぶ二人の関係が感情面の中心になります。']}
    ], sources:[{label:'Steam — Dylanと物語の公式説明',url:steam},{label:'PlayStation Blog — ZoeとDylan',url:combat}]
  },
  {
    lang:'ja', slug:'jesse-faden', englishPath:'/guides/jesse-faden/',
    title:'Jesse Fadenの役割：行方不明のFBC Director',
    description:'CONTROL ResonantでJesse Fadenが物語の中心でありながら操作キャラクターとして確認されていない理由、FBC Directorとしての立場とDylanの探索目的をネタバレなしで解説します。',
    label:'キャラクター', answer:'Jesse FadenはFBC Directorであり、Dylanが探している姉です。物語上の中心人物ですが、現在発表されている操作主人公はDylanのみで、Jesseのプレイアブル区間は確認されていません。',
    sections:[
      {heading:'前作から続く立場',paragraphs:['Jesseは前作でOldest Houseへ入り、Hissの脅威に対抗してFBC Directorとなりました。しかし7年後、その封鎖は維持できず、危機はマンハッタンへ流出しています。Resonantは、Jesseが中へ入った物語に対してDylanが外へ出る物語として構成されます。','公式の冒頭説明では、Jesseの幻影が拘束中のDylanへ行動を促します。これは彼女が重要である証拠ですが、現在の居場所、状態、行動の全容を明かすものではありません。']},
      {heading:'操作可能か',paragraphs:['RemedyはDylanを本作の唯一の操作主人公として紹介しています。したがって、Jesseが登場することや映像に映ることを、操作パートやキャラクター切り替えの確認として扱うことはできません。','協力プレイも発表されていません。Jesseの物語的重要性と、ゲームプレイ上の操作可能性は分けて判断する必要があります。']},
      {heading:'ネタバレと推測の境界',paragraphs:['行方不明になった理由、敵に拘束されているか、最終局面で何をするかは未公開です。発売前のリークやコミュニティ理論を公式設定として掲載しません。']}
    ], sources:[{label:'Steam — Shared Legacy, New Threat',url:steam},{label:'Xbox Wire — 冒頭ハンズオン',url:handsOn}]
  },
  {
    lang:'ja', slug:'zoe-de-vera', englishPath:'/guides/zoe-de-vera/',
    title:'Zoe De Vera：FBC現場エージェントとDylanのハンドラー',
    description:'CONTROL ResonantのZoe De Veraについて、確認済みのFBCハンドラー役、シームレス会話、Dylanとの信頼関係と、未確認のプレイアブル・同行要素を区別します。',
    label:'キャラクター', answer:'Zoe De VeraはFBCの現場エージェントで、Dylanのハンドラーです。マンハッタンの危機を外側で生き延びた彼女は、長く孤立していたDylanの主要な連絡相手になります。',
    sections:[
      {heading:'確認されている役割',paragraphs:['公式Combat Deep Diveでは、ZoeはDylanを導くFBC field agentとして紹介されています。二人の関係は信頼、責任、他者を頼ることを学ぶ過程を中心にし、本作の感情的な軸になると説明されています。','冒頭のハンズオンでは、Oldest Houseを出たDylanが無線の救難信号に応答し、Zoeと接触します。彼女は生存者を見つけたことに安堵しますが、Dylanは自分の正体について慎重な態度を取ります。']},
      {heading:'シームレス会話',paragraphs:['会話は探索中に自然に続くシステムが導入され、情報を聞くたびに操作を止める必要を減らします。これによりZoeはミッション説明だけでなく、区域の状況やDylanとの関係を継続的に伝えられます。','ただし無線で会話することは、Zoeがすべてのミッションに物理的に同行する証拠ではありません。戦闘支援、装備、拠点サービスの詳細もまだ完全には公開されていません。']},
      {heading:'プレイアブルや協力プレイではない',paragraphs:['Zoeが第二の操作キャラクター、ローカル協力相手、オンライン協力枠になるという発表はありません。物語上のパートナーとマルチプレイヤー機能を混同しないことが重要です。']}
    ], sources:[{label:'PlayStation Blog — Zoeの公式紹介',url:combat},{label:'Xbox Wire — 冒頭の無線会話',url:handsOn}]
  },
  {
    lang:'ja', slug:'world-quests-and-campaign', englishPath:'/guides/world-quests-and-campaign/',
    title:'World Quest、メインキャンペーン、任意活動',
    description:'Dylan’s Journey、World Quest、Bounty、Collectible、Side Story、隠し要素の違いと、発売前に公開されていない範囲を整理します。',
    label:'クエスト', answer:'物語はメインキャンペーンのDylan’s Journeyと、独立した物語を持つWorld Questが中心です。各区域には戦闘、環境チャレンジ、隠し発見、Bounty、Collectible、Side Storyなどの任意活動も配置されます。',
    sections:[
      {heading:'二つの主要クエスト種別',paragraphs:['Dylan’s Journeyは本編の進行を担い、World Questはマンハッタンの人物や異常現象を扱う自己完結型の物語です。公式説明は、World Questを単なる繰り返し依頼ではなく、独立したナラティブコンテンツとして区別しています。','区域には通常戦闘だけでなく環境課題、秘密、Altered Itemなども自然に組み込まれます。大量のマップアイコンを順番に消すことより、自分で発見することが設計目標です。']},
      {heading:'ニューゲームプラスでの再訪',paragraphs:['NG+の公式情報では、World Quest、Bounty、Collectible、Side Storyを再び遊べることが確認されています。一部の会話や結果が変化し、敵配置やボス行動にも違いが加わる可能性があります。','これはすべてのクエストに分岐エンディングがあるという意味ではありません。変化する対象、条件、報酬は個別に確認する必要があります。']},
      {heading:'個別攻略ページの品質基準',paragraphs:['正式なクエスト攻略には開始場所、前提条件、正確な手順、目的地、報酬、既知の不具合が必要です。発売前は架空のミッション名や推測ルートを量産せず、確認できたクエストだけを独立URLにします。']}
    ], sources:[{label:'PlayStation Blog — クエストと世界設計',url:combat},{label:'PlayStation Blog — NG+再訪要素',url:ngp}]
  }
];
