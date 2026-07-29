import type { AddedLocale, LocaleProfile } from './officialLocales';

export interface OfficialLocaleGuide {
  lang: AddedLocale;
  slug: string;
  englishPath: string;
  title: string;
  description: string;
  label: string;
  answer: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string; url: string }[];
}

const steam = 'https://store.steampowered.com/app/3669870/CONTROL_Resonant/';
const official = 'https://controlgame.com/';
const combat = 'https://blog.playstation.com/2026/03/04/control-resonant-a-deep-dive-into-combat-buildcrafting-and-player-choice/';
const story = 'https://blog.playstation.com/2026/06/02/control-resonant-launches-september-24-on-ps5/';

export const expandedOfficialLocaleCodes = ['it', 'es', 'ja', 'pt-BR', 'zh-CN'] as const;

export const officialLocaleGuideUi: Partial<Record<AddedLocale, {
  home:string; guides:string; short:string; sources:string; related:string;
  updated:string; back:string; note:string; verified:string;
  hubEyebrow:string; hubTitle:string; hubDescription:string; hubIntro:string;
  browse:string; files:string;
}>> = {
  it:{home:'Home',guides:'Guide',short:'Risposta breve',sources:'Fonti ufficiali',related:'Guide correlate',updated:'Verificato il 26 luglio 2026',back:'Tutte le guide',note:'I dettagli possono cambiare prima dell’uscita; le informazioni sensibili al tempo vengono ricontrollate nelle fonti ufficiali.',verified:'Verificato',hubEyebrow:'Manuale operativo',hubTitle:'Guide di Control Resonant',hubDescription:'Guide italiane verificate su uscita, piattaforme, requisiti, combattimento, build, personaggi e storia.',hubIntro:'Ogni pagina risponde a un intento preciso, distingue i fatti confermati dai dettagli ancora aperti e collega le fonti ufficiali.',browse:'Esplora gli argomenti',files:'guide'},
  es:{home:'Inicio',guides:'Guías',short:'Respuesta breve',sources:'Fuentes oficiales',related:'Guías relacionadas',updated:'Verificado el 26 de julio de 2026',back:'Todas las guías',note:'Los detalles pueden cambiar antes del lanzamiento; los datos sensibles al tiempo se revisan en fuentes oficiales.',verified:'Verificado',hubEyebrow:'Manual de campo',hubTitle:'Guías de Control Resonant',hubDescription:'Guías en español sobre lanzamiento, plataformas, requisitos, combate, builds, personajes e historia.',hubIntro:'Cada página resuelve una intención concreta, separa hechos confirmados de incógnitas y enlaza las fuentes oficiales.',browse:'Explorar temas',files:'guías'},
  ja:{home:'ホーム',guides:'攻略',short:'結論',sources:'公式情報源',related:'関連攻略',updated:'2026年7月26日確認',back:'攻略一覧へ',note:'発売前の情報は変更される可能性があります。時期に左右される内容は公式情報で再確認します。',verified:'確認済み',hubEyebrow:'フィールドマニュアル',hubTitle:'CONTROL Resonant 日本語攻略センター',hubDescription:'発売日、対応機種、PC要件、戦闘、ビルド、キャラクター、物語を公式ソース付きで扱う日本語攻略ハブです。発表済み情報と未公開内容を区別し、関連FAQとニュースにもすぐ移動できます。',hubIntro:'各ページは一つの検索意図に直接答え、確定情報と未発表事項を分け、公式ソースを明示します。',browse:'テーマから探す',files:'件'},
  'pt-BR':{home:'Início',guides:'Guias',short:'Resposta rápida',sources:'Fontes oficiais',related:'Guias relacionados',updated:'Verificado em 26 de julho de 2026',back:'Todos os guias',note:'Detalhes podem mudar antes do lançamento; informações sensíveis ao tempo são conferidas nas fontes oficiais.',verified:'Verificado',hubEyebrow:'Manual de campo',hubTitle:'Guias de Control Resonant',hubDescription:'Guias brasileiros sobre lançamento, plataformas, requisitos, combate, builds, personagens e história.',hubIntro:'Cada página responde a uma intenção específica, separa fatos confirmados de pontos em aberto e cita as fontes oficiais.',browse:'Explorar assuntos',files:'guias'},
  'zh-CN':{home:'首页',guides:'攻略',short:'直接答案',sources:'官方来源',related:'相关攻略',updated:'最后核验：2026年7月26日',back:'返回攻略中心',note:'游戏发售前仍可能调整；日期、平台和版本等时效信息会继续以官方来源复核。',verified:'已核验',hubEyebrow:'行动档案',hubTitle:'CONTROL Resonant 简体中文攻略中心',hubDescription:'覆盖发售日期、支持平台、PC配置要求、战斗与Build、角色及剧情的简体中文攻略中心，并用官方来源区分已确认事实和未公开内容，同时提供相关FAQ、News与跨语言入口。',hubIntro:'每个页面只解决一个明确问题，区分已确认事实与未公开内容，并展示可追溯的官方来源。',browse:'按主题浏览',files:'篇攻略'},
};

export const officialLocaleGuidesV13: OfficialLocaleGuide[] = [
  {
    lang:'it', slug:'data-uscita', englishPath:'/release-date/',
    title:'Control Resonant: data di uscita, piattaforme ed edizioni',
    description:'Control Resonant esce il 24 settembre 2026: data confermata, piattaforme, accesso anticipato, edizioni e dettagli ancora aperti.',
    label:'Uscita', answer:'Control Resonant uscirà il 24 settembre 2026 su PS5, Xbox Series X|S e PC. La versione Mac è prevista più avanti nel 2026; il PlayStation Store indica 48 ore di accesso anticipato per la Digital Deluxe su PS5.',
    sections:[
      {heading:'Data e piattaforme confermate',paragraphs:['Remedy ha annunciato un lancio mondiale il 24 settembre 2026. Al day one sono previste le versioni PS5, Xbox Series X|S e PC tramite Steam ed Epic Games Store; GeForce NOW è indicato come opzione cloud. La versione macOS arriverà più avanti nel 2026, ma non ha ancora un giorno preciso.','PS4, Xbox One e Nintendo Switch non sono tra le piattaforme annunciate. Le pagine dei rivenditori non sostituiscono una conferma di Remedy o del gestore dello store, quindi non le usiamo per aggiungere sistemi non ufficiali.']},
      {heading:'Edizioni e preordine',paragraphs:['Steam elenca edizione standard e Digital Deluxe. La Deluxe include gioco base, artbook digitale, colonna sonora, Artefatto Untapped, pacchetto risorse iniziale e costume AWE Mission. Il preordine include il costume Hiss Corruption e l’Artefatto Pickpocket’s Tool.','Su PS5 la Digital Deluxe è pubblicizzata con 48 ore di accesso anticipato, quindi dal 22 settembre se l’offerta non cambia. Orari di sblocco, preload e bonus regionali vanno comunque controllati nello store usato per l’acquisto.']},
      {heading:'Cosa non è ancora definitivo',paragraphs:['Non sono stati comunicati un orario globale unico, il giorno esatto della versione Mac o un quadro completo delle edizioni fisiche. Queste informazioni verranno aggiunte solo dopo una comunicazione ufficiale, evitando countdown non verificati.']}
    ], sources:[{label:'Sito ufficiale CONTROL Resonant',url:official},{label:'Steam — pagina ufficiale',url:steam}]
  },
  {
    lang:'it', slug:'piattaforme-requisiti', englishPath:'/guides/platforms-and-performance/',
    title:'Control Resonant: piattaforme e requisiti PC',
    description:'Piattaforme confermate, requisiti minimi e consigliati, spazio richiesto, Mac, cloud e limiti delle informazioni sulle prestazioni.',
    label:'Piattaforme', answer:'Al lancio Control Resonant supporta PS5, Xbox Series X|S e PC. Steam richiede Windows 10/11 a 64 bit, 16 GB di RAM e 100 GB; la versione Mac arriverà più tardi nel 2026.',
    sections:[
      {heading:'Console, PC, Mac e cloud',paragraphs:['Le piattaforme confermate per il 24 settembre sono PS5, Xbox Series X|S e PC. Il PC viene distribuito tramite Steam ed Epic Games Store; GeForce NOW è previsto al lancio. La versione Mac tramite Steam e App Store segue più avanti nel 2026.','Non risultano annunciate versioni PS4, Xbox One o Nintendo Switch. Anche il supporto Steam Deck non è ancora classificato ufficialmente, quindi non va confuso con il semplice fatto che il gioco sia disponibile su Steam.']},
      {heading:'Requisiti PC ufficiali',paragraphs:['Il minimo indica Intel i5-8500 o equivalente AMD, 16 GB di RAM, GTX 1070 oppure RX 5600 XT con 6 GB e 100 GB liberi. Il profilo consigliato indica Ryzen 7 3700X o equivalente Intel, RTX 3070 oppure RX 6700 XT con 8 GB.','Steam non collega ancora questi profili a risoluzione, preset o frame rate. Per questo la configurazione consigliata non prova automaticamente 4K, 60 fps, ray tracing o frame generation. Le GPU mobile con nomi simili possono inoltre offrire prestazioni diverse.']},
      {heading:'Prestazioni su console',paragraphs:['Le modalità grafiche definitive di PS5, PS5 Pro, Series X e Series S non sono state pubblicate in una matrice completa. Prima di acquistare hardware conviene attendere indicazioni tecniche di Remedy e test della versione finale.']}
    ], sources:[{label:'Steam — requisiti ufficiali',url:steam},{label:'Sito ufficiale CONTROL Resonant',url:official}]
  },
  {
    lang:'it', slug:'combattimento-build', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'Control Resonant: combattimento, Aberrant e build',
    description:'Come funzionano combattimento corpo a corpo, forme di Aberrant, abilità, esecuzioni, Talenti, Artefatti e sistema The Gap.',
    label:'Combattimento', answer:'Il combattimento è orientato al corpo a corpo e combina Aberrant, abilità paranaturali e build create nel Gap. I colpi in mischia ricaricano la risorsa, le abilità stordiscono e le esecuzioni aumentano temporaneamente i danni melee.',
    sections:[
      {heading:'Il ciclo di combattimento',paragraphs:['Aberrant cambia tra forme primarie, forme secondarie e Combo Ender. Le forme coprono velocità, portata e ruoli diversi; Dylan le combina con tre abilità di combattimento. Il sistema premia la pressione: i colpi melee recuperano risorsa, le abilità aprono gli avversari alle esecuzioni e le esecuzioni potenziano temporaneamente la mischia.','Questa struttura non rende ogni build identica. Barrage offre distanza, Shield unisce protezione e slancio offensivo, mentre Seekers crea pressione autonoma. Mold Turrets e status effect mostrano anche un percorso più tattico.']},
      {heading:'Buildcrafting nel Gap',paragraphs:['Il Gap è lo spazio in cui si organizzano abilità soprannaturali, forme di Aberrant e Talenti. Gli Artefatti aggiungono altri modificatori. Alcuni Resonant presentano scelte ramificate e Remedy ha chiarito che non tutto può essere sbloccato nella prima partita.','Una buona build pre-release va descritta per funzione, non con numeri inventati: controllo dei gruppi, danno su bersaglio singolo, sicurezza o copertura a distanza. Costi, cooldown e valori finali serviranno dopo il lancio per stabilire una vera gerarchia.']},
      {heading:'Limiti delle anteprime',paragraphs:['Le dimostrazioni confermano meccaniche e ruoli, non la bilanciatura definitiva. Non pubblichiamo tier list, percentuali o presunti setup finali finché non possono essere verificati nel gioco distribuito.']}
    ], sources:[{label:'PlayStation Blog — combat e buildcrafting',url:combat},{label:'Steam — descrizione ufficiale',url:steam}]
  },
  {
    lang:'it', slug:'personaggi-storia', englishPath:'/guides/characters-and-story/',
    title:'Control Resonant: personaggi e storia senza spoiler',
    description:'Dylan Faden, Jesse, Zoe De Vera, FBC e Manhattan: premessa narrativa verificata e domande ancora aperte, senza spoiler non ufficiali.',
    label:'Storia', answer:'Dylan Faden è il protagonista giocabile. Sette anni dopo Control esce dall’Oldest House in una Manhattan deformata da una crisi paranaturale, cercando Jesse e affrontando Hiss, Mold e una nuova minaccia cosmica.',
    sections:[
      {heading:'Dylan al centro',paragraphs:['Il primo Control raccontava Dylan come prigioniero e soggetto di esperimenti del Federal Bureau of Control. Resonant lo rende protagonista e collega la progressione dei poteri al tentativo di ricostruire identità e umanità. Aberrant e le capacità paranaturali sono quindi strumenti di gioco e parte del suo conflitto personale.','Jesse resta Direttrice dell’FBC e costituisce una motivazione centrale, ma Remedy presenta Resonant come un’avventura comprensibile anche per chi non ha giocato il capitolo precedente. I veterani riconosceranno legami e conseguenze aggiuntive.']},
      {heading:'Zoe e la Manhattan alterata',paragraphs:['Zoe De Vera è un’agente sul campo dell’FBC e funge da referente per Dylan. La loro relazione, basata su fiducia e responsabilità, accompagna l’esplorazione grazie a dialoghi che possono continuare senza interrompere il movimento.','Manhattan è divisa in zone realizzate a mano, con missione principale, World Quest, incontri, sfide ambientali e segreti. Non è presentata come una mappa da svuotare di icone, ma come un ambiente più aperto e guidato dalla scoperta.']},
      {heading:'Spoiler e punti sconosciuti',paragraphs:['Il ruolo preciso di Jesse, l’identità della forza cosmica e l’esito dei rapporti tra i personaggi non sono stati spiegati. Manteniamo separate le informazioni promozionali da leak e teorie della community.']}
    ], sources:[{label:'PlayStation Blog — storia e data',url:story},{label:'Sito ufficiale CONTROL Resonant',url:official}]
  },

  {
    lang:'es', slug:'fecha-lanzamiento', englishPath:'/release-date/',
    title:'Control Resonant: fecha de lanzamiento, plataformas y ediciones',
    description:'Control Resonant sale el 24 de septiembre de 2026: fecha confirmada, plataformas, acceso anticipado, ediciones y datos pendientes.',
    label:'Lanzamiento', answer:'Control Resonant se publicará el 24 de septiembre de 2026 en PS5, Xbox Series X|S y PC. La versión para Mac llegará más adelante en 2026 y la Digital Deluxe de PS5 anuncia 48 horas de acceso anticipado.',
    sections:[
      {heading:'Fecha y plataformas confirmadas',paragraphs:['Remedy ha fijado el lanzamiento mundial para el 24 de septiembre de 2026. Ese día estarán disponibles PS5, Xbox Series X|S y PC mediante Steam y Epic Games Store; GeForce NOW figura como opción de juego en la nube. La edición de macOS llegará después durante 2026, sin día concreto.','PS4, Xbox One y Nintendo Switch no han sido anunciadas. Una ficha de comercio o un rumor no equivale a una confirmación del estudio, por lo que esas plataformas no se presentan como previstas.']},
      {heading:'Ediciones y reserva',paragraphs:['Steam ofrece edición estándar y Digital Deluxe. La Deluxe incluye juego, libro de arte digital, banda sonora, el artefacto Untapped, un paquete inicial de recursos y el traje AWE Mission. La reserva añade el traje Hiss Corruption y el artefacto Pickpocket’s Tool.','PlayStation anuncia 48 horas de acceso anticipado para la Digital Deluxe de PS5, lo que apunta al 22 de septiembre si no cambia la oferta. El horario de apertura, la precarga y los contenidos regionales deben comprobarse en la tienda de compra.']},
      {heading:'Información aún abierta',paragraphs:['Todavía no hay una hora mundial única, una fecha exacta para Mac ni un catálogo completo de ediciones físicas. Actualizaremos esos campos cuando Remedy o las plataformas publiquen datos verificables.']}
    ], sources:[{label:'Web oficial de CONTROL Resonant',url:official},{label:'Steam — página oficial',url:steam}]
  },
  {
    lang:'es', slug:'plataformas-requisitos', englishPath:'/guides/platforms-and-performance/',
    title:'Control Resonant: plataformas y requisitos de PC',
    description:'Plataformas confirmadas, requisitos mínimos y recomendados, 100 GB, versión Mac, nube y límites de los datos de rendimiento.',
    label:'Plataformas', answer:'Control Resonant llega a PS5, Xbox Series X|S y PC. Steam exige Windows 10/11 de 64 bits, 16 GB de RAM y 100 GB; la edición para Mac se publicará más tarde en 2026.',
    sections:[
      {heading:'Consolas, PC, Mac y nube',paragraphs:['El estreno del 24 de septiembre cubre PS5, Xbox Series X|S y PC. En ordenador se distribuye por Steam y Epic Games Store, mientras GeForce NOW se ha anunciado para el lanzamiento. Mac mediante Steam y App Store queda para más adelante en 2026.','No hay versión confirmada para PS4, Xbox One ni Nintendo Switch. Steam Deck tampoco tiene todavía una clasificación oficial de compatibilidad; estar en Steam no garantiza por sí solo una experiencia verificada en el dispositivo.']},
      {heading:'Requisitos oficiales',paragraphs:['El mínimo indica Intel i5-8500 o equivalente AMD, 16 GB de RAM, GTX 1070 o RX 5600 XT de 6 GB y 100 GB libres. El recomendado sube a Ryzen 7 3700X o equivalente Intel y RTX 3070 o RX 6700 XT de 8 GB.','Steam no asocia estas configuraciones con resolución, calidad o imágenes por segundo. Por ello no se puede prometer 4K, 60 fps, trazado de rayos ni generación de fotogramas. Las GPU de portátil con nombres parecidos también pueden rendir de forma diferente.']},
      {heading:'Rendimiento de consola',paragraphs:['No existe aún una tabla completa de modos para PS5, PS5 Pro, Series X y Series S. Conviene esperar información técnica de Remedy y análisis de la versión final antes de comprar hardware específicamente para el juego.']}
    ], sources:[{label:'Steam — requisitos oficiales',url:steam},{label:'Web oficial',url:official}]
  },
  {
    lang:'es', slug:'combate-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'Control Resonant: combate, Aberrant y sistema de builds',
    description:'Funcionamiento del combate cuerpo a cuerpo, formas de Aberrant, habilidades, ejecuciones, Talentos, Artefactos y The Gap.',
    label:'Combate', answer:'El combate combina el arma cambiante Aberrant, poderes paranaturales y builds configuradas en The Gap. Los golpes cuerpo a cuerpo recuperan recurso, las habilidades aturden y las ejecuciones aumentan temporalmente el daño melee.',
    sections:[
      {heading:'El bucle de combate',paragraphs:['Aberrant se configura con forma primaria, forma secundaria y Combo Ender. Cada elección cubre velocidad, alcance o una función distinta, y Dylan añade tres habilidades de combate. La agresividad alimenta el sistema: la melee recarga recurso, los poderes abren ejecuciones y estas mejoran durante un tiempo el daño cercano.','Barrage aporta alcance directo, Shield une defensa y embestida, y Seekers invoca presión independiente. Los Mold Turrets y los estados alterados muestran que también hay builds tácticas, no solo cadenas de golpes rápidos.']},
      {heading:'Construcción en The Gap',paragraphs:['The Gap reúne habilidades sobrenaturales, formas de Aberrant y Talentos; los Artefactos añaden modificadores. Algunos Resonants ofrecen elecciones ramificadas y no todo puede obtenerse en la primera partida, de modo que la especialización forma parte del diseño.','Antes del lanzamiento tiene sentido describir una build por objetivo: control de grupos, daño a un enemigo, defensa o cobertura a distancia. Sin costes, tiempos de recarga y cifras finales no existe una clasificación fiable de mejores configuraciones.']},
      {heading:'Límites de las demos',paragraphs:['Las presentaciones permiten verificar estructuras y funciones, pero no la versión final del equilibrio. No convertimos animaciones de tráiler en porcentajes ni publicamos una falsa meta antes de poder probar el juego comercial.']}
    ], sources:[{label:'PlayStation Blog — combate y builds',url:combat},{label:'Steam — descripción oficial',url:steam}]
  },
  {
    lang:'es', slug:'personajes-historia', englishPath:'/guides/characters-and-story/',
    title:'Control Resonant: personajes e historia sin spoilers',
    description:'Dylan Faden, Jesse, Zoe De Vera, el FBC y Manhattan: premisa confirmada y preguntas abiertas sin rumores presentados como hechos.',
    label:'Historia', answer:'Dylan Faden es el protagonista. Siete años después de Control sale del Oldest House hacia una Manhattan deformada, busca a Jesse y combate al Hiss, el Mold y una nueva amenaza cósmica.',
    sections:[
      {heading:'Dylan como protagonista',paragraphs:['En Control, Dylan fue prisionero y sujeto de pruebas del Federal Bureau of Control. Resonant lo convierte en personaje jugable y vincula sus poderes con la reconstrucción de su identidad y humanidad. Aberrant y sus capacidades no son solo herramientas de combate, sino parte del conflicto personal.','Jesse sigue siendo Directora del FBC y una motivación esencial para Dylan. Aun así, Remedy presenta la secuela como un punto de entrada que puede entender un jugador nuevo, mientras quienes conocen el primer juego reconocerán consecuencias adicionales.']},
      {heading:'Zoe y Manhattan',paragraphs:['Zoe De Vera es agente de campo del FBC y enlace de Dylan. La confianza y la responsabilidad sostienen su relación, apoyada por un sistema de conversaciones continuas durante la exploración.','La ciudad está formada por zonas diseñadas a mano con campaña, World Quests, encuentros, retos ambientales y secretos. Remedy no busca una lista interminable de iconos, sino una estructura abierta que premie descubrir actividades.']},
      {heading:'Lo que sigue oculto',paragraphs:['No se ha explicado el papel exacto de Jesse, la identidad de la fuerza cósmica ni el desenlace de las relaciones. Esta guía excluye filtraciones y teorías que no estén respaldadas por material oficial.']}
    ], sources:[{label:'PlayStation Blog — historia y lanzamiento',url:story},{label:'Web oficial',url:official}]
  },

  {
    lang:'ja', slug:'release-date', englishPath:'/release-date/',
    title:'CONTROL Resonant 発売日・対応機種・エディション',
    description:'2026年9月24日の発売日、PS5・Xbox・PC・Mac対応、予約特典、デラックス版、早期アクセスを公式情報で整理し、未発表の解禁時刻や地域差も明確に区別します。',
    label:'発売情報', answer:'CONTROL Resonantは2026年9月24日にPS5、Xbox Series X|S、PC向けに発売予定です。Mac版は2026年後半、PS5のDigital Deluxe Editionは48時間の先行アクセスを案内しています。',
    sections:[
      {heading:'確定している発売日と対応機種',paragraphs:['Remedyは世界発売日を2026年9月24日と発表しました。同日にPS5、Xbox Series X|S、SteamとEpic Games StoreのPC版が予定され、GeForce NOWにも対応予定です。Mac版はSteamとApp Storeで2026年後半に発売されますが、具体的な日付は未発表です。','PS4、Xbox One、Nintendo Switch版は公式発表されていません。小売店の仮ページや噂だけを根拠に対応機種へ追加せず、Remedyまたは各プラットフォームの発表を基準にします。']},
      {heading:'エディションと予約特典',paragraphs:['Steamでは通常版とDigital Deluxe Editionを確認できます。Deluxeにはゲーム本編、デジタルアートブック、サウンドトラック、Untapped Artifact、Starter Resource Bundle、AWE Mission Outfitが含まれます。予約特典はHiss Corruption OutfitとPickpocket’s Tool Artifactです。','PlayStation StoreはPS5 Deluxe版に48時間の先行アクセスを表示しており、変更がなければ9月22日からとなります。解禁時刻、プリロード、地域別内容は購入するストアで再確認が必要です。']},
      {heading:'まだ確定していない情報',paragraphs:['全地域共通の解禁時刻、Mac版の正確な日付、パッケージ版の全容は未発表です。根拠のないカウントダウンを使わず、公式更新後に追記します。']}
    ], sources:[{label:'CONTROL Resonant 公式サイト',url:official},{label:'Steam 公式ストア',url:steam}]
  },
  {
    lang:'ja', slug:'platforms-system-requirements', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant 対応機種・PC必要スペック',
    description:'PS5、Xbox Series X|S、PC、Mac、GeForce NOWの対応状況と、最低・推奨PCスペック、100GB容量、未発表のコンソール動作モードを公式資料から解説します。',
    label:'対応機種', answer:'発売時の対応機種はPS5、Xbox Series X|S、PCです。Steam版は64bit版Windows 10/11、メモリ16GB、空き容量100GBが必要で、Mac版は2026年後半に予定されています。',
    sections:[
      {heading:'発売時のプラットフォーム',paragraphs:['2026年9月24日にPS5、Xbox Series X|S、PC版が発売予定です。PCはSteamとEpic Games Storeで配信され、GeForce NOWも発売時対応と案内されています。Mac版はSteamとApp Storeで後日登場します。','PS4、Xbox One、Nintendo Switch版は確認されていません。Steam Deckについても公式のVerifiedまたはPlayable判定はまだなく、Steamで販売されることだけでは互換性を保証できません。']},
      {heading:'最低・推奨スペック',paragraphs:['最低構成はIntel i5-8500またはAMD同等CPU、16GB RAM、GTX 1070またはRX 5600 XTの6GB、100GBの空き容量です。推奨はRyzen 7 3700XまたはIntel同等CPU、RTX 3070またはRX 6700 XTの8GBです。','Steamは解像度、画質設定、フレームレートの目標を示していません。推奨構成だけで4K、60fps、レイトレーシングを保証すると解釈しないでください。ノートPC向けGPUは同名のデスクトップ版と性能が異なる場合があります。']},
      {heading:'コンソールの動作モード',paragraphs:['PS5、PS5 Pro、Series X、Series Sの画質・パフォーマンスモード一覧はまだ公開されていません。ハード購入前にはRemedyの技術情報と製品版検証を待つのが安全です。']}
    ], sources:[{label:'Steam 公式システム要件',url:steam},{label:'公式サイト',url:official}]
  },
  {
    lang:'ja', slug:'combat-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant 戦闘・Aberrant・ビルド解説',
    description:'近接戦闘、変形武器Aberrant、Combat Ability、処刑、Talent、Artifact、The Gapでのビルド構築を解説。',
    label:'戦闘', answer:'戦闘はAberrantの武器形態、超常能力、The Gapのビルドを組み合わせます。近接攻撃で能力リソースを回復し、能力で敵をスタンさせ、処刑で近接ダメージを一時強化する流れです。',
    sections:[
      {heading:'戦闘の基本ループ',paragraphs:['AberrantはPrimary Form、Secondary Form、Combo Enderを個別に選び、速度、間合い、役割を組み合わせます。Dylanはさらに3つのCombat Abilityを装備します。近接攻撃がリソースを生み、能力が処刑の機会を作り、処刑後は近接火力が上がるため、積極的な接近戦が循環します。','Barrageは遠距離攻撃、Shieldは防御と突進、Seekersは自動攻撃する召喚です。Mold Turretや状態異常を使う戦術型も示されており、近接一辺倒のシステムではありません。']},
      {heading:'The Gapでのビルド構築',paragraphs:['The Gapでは超常Combat Ability、AberrantのWeapon Form、Talentを整理し、Artifactで効果を追加します。一部のResonantは分岐報酬を持ち、1周目だけでは全要素を取得できないため、選択と特化が重要です。','発売前は集団制御、単体火力、防御、遠距離補完といった目的でビルドを比較できます。ただし最終的な消費量、クールダウン、数値がない段階で「最強」を断定することはできません。']},
      {heading:'先行情報の限界',paragraphs:['公式デモは仕組みと役割を確認できますが、製品版のバランス表ではありません。映像から未公開の倍率や確率を推測せず、発売後にゲーム内数値とバージョンを記録します。']}
    ], sources:[{label:'PlayStation Blog 戦闘・ビルド解説',url:combat},{label:'Steam 公式説明',url:steam}]
  },
  {
    lang:'ja', slug:'characters-story', englishPath:'/guides/characters-and-story/',
    title:'CONTROL Resonant キャラクター・物語まとめ',
    description:'Dylan Faden、Jesse、Zoe De Vera、FBC、変貌したマンハッタンの公式設定をネタバレ控えめに整理し、未公開の核心やコミュニティ理論と確定情報を分けます。',
    label:'ストーリー', answer:'主人公はDylan Fadenです。前作から7年後、Oldest Houseを出て異常化したマンハッタンへ向かい、Jesseを探しながらHiss、Mold、新たな宇宙的脅威と戦います。',
    sections:[
      {heading:'Dylanが主人公になる意味',paragraphs:['前作のDylanはFBCに拘束され、実験対象として扱われた人物でした。本作では操作キャラクターとなり、力を伸ばす過程と、自分の人間性やアイデンティティを取り戻す物語が結びつきます。Aberrantと超常能力は戦闘手段であると同時に、彼の内面を表す要素です。','JesseはFBCのDirectorであり、Dylanの旅の重要な目的です。一方でRemedyは新規プレイヤーも理解できる独立した入口として説明しており、前作経験者は追加のつながりを読み取れる構成です。']},
      {heading:'Zoeとマンハッタン',paragraphs:['Zoe De VeraはFBCの現場エージェントで、長く隔離されていたDylanを支える担当者です。信頼と責任を軸にした関係は、探索を止めずに会話が進むSeamless Dialogueによって描かれます。','マンハッタンは手作業で設計された複数ゾーンに分かれ、Dylan’s Journey、World Quest、戦闘、環境チャレンジ、隠し要素が配置されます。大量のアイコン消化ではなく、発見を重視する設計です。']},
      {heading:'未公開の核心',paragraphs:['Jesseの正確な状況、新たな宇宙的存在の正体、人物関係の結末は明かされていません。リークやコミュニティ理論を確定設定として扱いません。']}
    ], sources:[{label:'PlayStation Blog ストーリー紹介',url:story},{label:'公式サイト',url:official}]
  },

  {
    lang:'pt-BR', slug:'data-lancamento', englishPath:'/release-date/',
    title:'Control Resonant: data de lançamento, plataformas e edições',
    description:'Control Resonant chega em 24 de setembro de 2026: data, plataformas, acesso antecipado, edições e informações ainda pendentes.',
    label:'Lançamento', answer:'Control Resonant será lançado em 24 de setembro de 2026 para PS5, Xbox Series X|S e PC. A versão de Mac chega depois em 2026, e a Digital Deluxe de PS5 anuncia 48 horas de acesso antecipado.',
    sections:[
      {heading:'Data e plataformas confirmadas',paragraphs:['A Remedy marcou o lançamento mundial para 24 de setembro de 2026. PS5, Xbox Series X|S e PC via Steam e Epic Games Store chegam nessa data, com GeForce NOW anunciado como opção na nuvem. A edição de macOS será lançada depois em 2026, sem dia exato.','PS4, Xbox One e Nintendo Switch não foram anunciados. Páginas provisórias de lojas e rumores não substituem uma confirmação do estúdio ou da plataforma, portanto não são tratados como versões planejadas.']},
      {heading:'Edições e pré-venda',paragraphs:['A Steam lista edição padrão e Digital Deluxe. A Deluxe inclui jogo, artbook digital, trilha sonora, Artefato Untapped, pacote inicial de recursos e traje AWE Mission. A pré-venda oferece o traje Hiss Corruption e o Artefato Pickpocket’s Tool.','No PS5, a Digital Deluxe anuncia 48 horas de acesso antecipado, apontando para 22 de setembro se a oferta não mudar. Horário de desbloqueio, preload e conteúdos regionais precisam ser conferidos na loja em que a compra for feita.']},
      {heading:'O que continua em aberto',paragraphs:['Ainda não há um horário mundial único, data exata para Mac ou quadro completo de versões físicas. Esses itens só entram no guia depois de uma fonte oficial verificável.']}
    ], sources:[{label:'Site oficial de CONTROL Resonant',url:official},{label:'Steam — página oficial',url:steam}]
  },
  {
    lang:'pt-BR', slug:'plataformas-requisitos', englishPath:'/guides/platforms-and-performance/',
    title:'Control Resonant: plataformas e requisitos de PC',
    description:'Plataformas confirmadas, requisitos mínimos e recomendados, 100 GB, versão Mac, nuvem e limites dos dados de desempenho.',
    label:'Plataformas', answer:'No lançamento, Control Resonant terá versões para PS5, Xbox Series X|S e PC. A Steam exige Windows 10/11 de 64 bits, 16 GB de RAM e 100 GB; Mac chega mais tarde em 2026.',
    sections:[
      {heading:'Console, PC, Mac e nuvem',paragraphs:['O lançamento de 24 de setembro inclui PS5, Xbox Series X|S e PC. No computador, o jogo será vendido pela Steam e Epic Games Store, e GeForce NOW está previsto para o mesmo dia. A edição de Mac via Steam e App Store chega posteriormente em 2026.','Não há anúncio para PS4, Xbox One ou Nintendo Switch. O Steam Deck também não recebeu classificação oficial de compatibilidade; estar à venda na Steam não significa automaticamente que o portátil foi verificado.']},
      {heading:'Requisitos oficiais',paragraphs:['O mínimo informa Intel i5-8500 ou AMD equivalente, 16 GB de RAM, GTX 1070 ou RX 5600 XT com 6 GB e 100 GB livres. O recomendado indica Ryzen 7 3700X ou Intel equivalente e RTX 3070 ou RX 6700 XT com 8 GB.','A Steam não associa as configurações a resolução, qualidade ou taxa de quadros. Portanto, não é correto prometer 4K, 60 fps, ray tracing ou frame generation. GPUs de notebook com nomes parecidos também podem entregar desempenho diferente.']},
      {heading:'Desempenho nos consoles',paragraphs:['Ainda não existe uma tabela completa de modos para PS5, PS5 Pro, Series X e Series S. Antes de comprar hardware para o jogo, vale aguardar os dados técnicos da Remedy e testes da versão final.']}
    ], sources:[{label:'Steam — requisitos oficiais',url:steam},{label:'Site oficial',url:official}]
  },
  {
    lang:'pt-BR', slug:'combate-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'Control Resonant: combate, Aberrant e builds',
    description:'Como funcionam combate corpo a corpo, formas da Aberrant, habilidades, execuções, Talentos, Artefatos e The Gap.',
    label:'Combate', answer:'O combate combina a arma mutável Aberrant, poderes paranaturais e builds montadas no Gap. Golpes corpo a corpo recuperam recurso, habilidades atordoam e execuções aumentam temporariamente o dano melee.',
    sections:[
      {heading:'Ciclo do combate',paragraphs:['A Aberrant usa uma forma primária, uma secundária e um Combo Ender. Cada escolha cobre velocidade, alcance ou função diferente, enquanto Dylan equipa três Combat Abilities. A agressão alimenta o ciclo: ataques melee restauram recurso, poderes abrem execuções e elas fortalecem o dano próximo por um período.','Barrage oferece alcance, Shield mistura proteção e avanço ofensivo, e Seekers invoca pressão automática. Mold Turrets e efeitos de status também mostram um caminho tático, além das sequências de golpes.']},
      {heading:'Buildcrafting no Gap',paragraphs:['O Gap organiza habilidades sobrenaturais, formas da Aberrant e Talentos; Artefatos acrescentam modificadores. Alguns Resonants oferecem escolhas ramificadas, e nem tudo pode ser liberado na primeira campanha, fazendo da especialização uma decisão real.','Antes do lançamento, uma build deve ser explicada por objetivo: controle de grupo, dano em alvo único, defesa ou cobertura de distância. Sem custos, recargas e números finais, não existe ranking confiável de melhores configurações.']},
      {heading:'Limites das prévias',paragraphs:['Demonstrações confirmam estruturas e papéis, mas não o equilíbrio final. Não transformamos animações em porcentagens nem publicamos uma meta inventada antes de testar a versão comercial.']}
    ], sources:[{label:'PlayStation Blog — combate e builds',url:combat},{label:'Steam — descrição oficial',url:steam}]
  },
  {
    lang:'pt-BR', slug:'personagens-historia', englishPath:'/guides/characters-and-story/',
    title:'Control Resonant: personagens e história sem spoilers',
    description:'Dylan Faden, Jesse, Zoe De Vera, FBC e Manhattan: premissa confirmada, relações e perguntas ainda sem resposta.',
    label:'História', answer:'Dylan Faden é o protagonista jogável. Sete anos após Control, ele sai da Oldest House para uma Manhattan distorcida, procura Jesse e enfrenta Hiss, Mold e uma nova ameaça cósmica.',
    sections:[
      {heading:'Dylan no centro',paragraphs:['No primeiro Control, Dylan era prisioneiro e objeto de testes do Federal Bureau of Control. Resonant o transforma em protagonista e liga o crescimento dos poderes à reconstrução da identidade e da humanidade. A Aberrant e as capacidades paranaturais são armas e também parte do conflito pessoal.','Jesse continua Diretora do FBC e é uma motivação central. Mesmo assim, a Remedy descreve o jogo como uma entrada compreensível para novos jogadores, enquanto quem conhece o original percebe conexões e consequências extras.']},
      {heading:'Zoe e Manhattan',paragraphs:['Zoe De Vera é agente de campo do FBC e contato de Dylan. A relação baseada em confiança e responsabilidade aparece durante a exploração por meio de diálogos contínuos, sem obrigar o jogador a parar.','Manhattan é dividida em zonas feitas à mão, com campanha, World Quests, combates, desafios ambientais e descobertas ocultas. O objetivo declarado não é limpar uma lista de ícones, mas explorar e encontrar atividades naturalmente.']},
      {heading:'O que permanece secreto',paragraphs:['A situação exata de Jesse, a identidade da força cósmica e o destino das relações não foram revelados. Vazamentos e teorias da comunidade ficam separados dos fatos oficiais.']}
    ], sources:[{label:'PlayStation Blog — história e lançamento',url:story},{label:'Site oficial',url:official}]
  },

  {
    lang:'zh-CN', slug:'release-date', englishPath:'/release-date/',
    title:'CONTROL Resonant 发售日期、平台与版本',
    description:'基于官方来源核对2026年9月24日发售日期、PS5/Xbox/PC/Mac平台、预购奖励、数字豪华版和提前游玩安排，并标注尚未公开的解锁时间。',
    label:'发售信息', answer:'CONTROL Resonant 将于2026年9月24日登陆PS5、Xbox Series X|S和PC。Mac版计划在2026年稍晚推出；PS5数字豪华版目前标注可提前48小时游玩。',
    sections:[
      {heading:'已经确认的日期与平台',paragraphs:['Remedy已宣布游戏将在2026年9月24日全球发售，首发平台包括PS5、Xbox Series X|S，以及通过Steam和Epic Games Store发行的PC版；GeForce NOW也计划在首发时提供云端游玩。Mac版将通过Steam和App Store在2026年稍晚推出，但尚无具体日期。','官方目前没有公布PS4、Xbox One或Nintendo Switch版本。零售商占位页面和社区传言不等于开发商确认，因此本站不会把未公布的平台列为计划版本。']},
      {heading:'版本与预购内容',paragraphs:['Steam列出标准版和数字豪华版。豪华版包含游戏本体、数字画册、原声带、Untapped Artifact、Starter Resource Bundle和AWE Mission Outfit；预购奖励包含Hiss Corruption Outfit及Pickpocket’s Tool Artifact。','PlayStation商店为PS5数字豪华版标注48小时提前游玩，如规则不变则对应9月22日。具体解锁时间、预载和地区内容仍需以购买地区的商店页面为准。']},
      {heading:'尚未确定的项目',paragraphs:['目前没有统一的全球解锁时刻、Mac版准确日期，也没有完整的实体版本矩阵。我们只会在Remedy或平台方公开可核验信息后更新，不引用无来源倒计时。']}
    ], sources:[{label:'CONTROL Resonant 官方网站',url:official},{label:'Steam 官方商店',url:steam}]
  },
  {
    lang:'zh-CN', slug:'platforms-system-requirements', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant 平台与PC配置要求',
    description:'汇总PS5、Xbox Series X|S、PC、Mac、GeForce NOW支持情况，以及最低/推荐配置、100GB容量和目前仍未公开的主机性能模式。',
    label:'平台配置', answer:'首发平台为PS5、Xbox Series X|S和PC。Steam版需要64位Windows 10/11、16GB内存和100GB空间；Mac版安排在2026年稍晚推出。',
    sections:[
      {heading:'主机、PC、Mac与云游戏',paragraphs:['2026年9月24日首发覆盖PS5、Xbox Series X|S和PC。PC版通过Steam与Epic Games Store发行，GeForce NOW计划同步支持；Mac版会在之后通过Steam及App Store推出。','PS4、Xbox One和Nintendo Switch版本尚未公布。Steam Deck也没有官方Verified或Playable评级，仅仅登陆Steam并不能证明掌机兼容性。']},
      {heading:'官方PC配置',paragraphs:['最低配置为Intel i5-8500或同级AMD处理器、16GB内存、GTX 1070或6GB RX 5600 XT，以及100GB可用空间。推荐配置为Ryzen 7 3700X或同级Intel处理器、RTX 3070或8GB RX 6700 XT。','Steam尚未为两档配置标明目标分辨率、画质或帧率，因此不能据此保证4K、60fps、光线追踪或帧生成表现。同名笔记本GPU也可能明显弱于桌面型号。']},
      {heading:'主机性能仍待公布',paragraphs:['PS5、PS5 Pro、Series X与Series S的完整画质/性能模式尚未公开。若准备为本作升级硬件，建议等待Remedy技术说明及正式版测试。','PC玩家也应优先比较显存、GPU等级、处理器和内存，而不是只看其中一个部件。配置表代表官方支持门槛，并不等于所有场景都能维持固定帧率；发售后的驱动、补丁和实际测试仍会影响结论。']}
    ], sources:[{label:'Steam 官方系统需求',url:steam},{label:'官方网站',url:official}]
  },
  {
    lang:'zh-CN', slug:'combat-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant 战斗、Aberrant与Build系统',
    description:'解释近战资源循环、Aberrant武器形态、Combat Ability、处决、Talent、Artifact及The Gap配装逻辑，并区分已确认机制与未公开数值。',
    label:'战斗Build', answer:'战斗由变形近战武器Aberrant、超自然能力和The Gap中的Build共同组成。近战命中恢复能力资源，能力使敌人眩晕，处决则暂时提高近战伤害。',
    sections:[
      {heading:'战斗循环如何运作',paragraphs:['Aberrant可分别选择Primary Form、Secondary Form和Combo Ender，用来组合速度、距离与战斗职责；Dylan还能同时装备三项Combat Ability。系统鼓励主动进攻：近战补充资源，能力创造处决机会，处决后再强化近战输出。','Barrage提供直接远程攻击，Shield兼顾防护与冲撞，Seekers召唤自动攻击单位。Mold Turret和状态效果也证明Build并非只有高速贴身一种玩法。']},
      {heading:'在The Gap构建Build',paragraphs:['The Gap负责配置超自然Combat Ability、Aberrant Weapon Form和Talent，Artifact则提供额外修正。部分Resonant Boss存在分支奖励，而且首周目不能解锁全部内容，因此选择与专精是明确的系统设计。','发售前可以按群体控制、单体伤害、防御稳定性或远程补位讨论Build，但尚未公布的资源消耗、冷却与最终数值不足以支撑“最强Build”排名。']},
      {heading:'试玩资料的边界',paragraphs:['官方演示能够确认机制和定位，却不代表最终平衡。本站不会从预告动画推算倍率、掉率或冷却时间；发售后会以游戏内数值和版本号更新。']}
    ], sources:[{label:'PlayStation Blog 战斗与Build说明',url:combat},{label:'Steam 官方介绍',url:steam}]
  },
  {
    lang:'zh-CN', slug:'characters-story', englishPath:'/guides/characters-and-story/',
    title:'CONTROL Resonant 角色与剧情：无剧透梳理',
    description:'基于官方资料介绍Dylan Faden、Jesse、Zoe De Vera、FBC和异变曼哈顿，并标注尚未公开的剧情核心，避免把泄露内容或玩家理论写成事实。',
    label:'角色剧情', answer:'Dylan Faden是本作可操作主角。前作七年后，他离开Oldest House进入发生超自然危机的曼哈顿，在寻找Jesse的同时面对Hiss、Mold及新的宇宙级威胁。',
    sections:[
      {heading:'Dylan为何成为主角',paragraphs:['在初代Control中，Dylan长期被Federal Bureau of Control关押并作为实验对象。Resonant让玩家直接操作他，把能力成长与重新建立身份、人性联系起来；Aberrant和超自然能力既是战斗工具，也是个人冲突的一部分。','Jesse仍是FBC Director，也是Dylan行动的重要原因。不过Remedy将本作描述为新玩家也能理解的独立入口，玩过前作的人则能识别更多背景与后果。']},
      {heading:'Zoe与异变曼哈顿',paragraphs:['Zoe De Vera是FBC外勤特工和Dylan的联络人。两人的关系围绕信任、责任与依靠他人展开，Seamless Dialogue系统让对话可在探索过程中自然继续。','曼哈顿由多个手工设计区域组成，包含主线Dylan’s Journey、World Quest、战斗、环境挑战和隐藏发现。设计目标不是清空满屏地图图标，而是鼓励玩家主动探索。']},
      {heading:'仍被保密的剧情',paragraphs:['Jesse当前的确切处境、新宇宙实体的身份，以及人物关系最终走向都未公开。本站不会把泄露内容或社区理论写成官方事实。']}
    ], sources:[{label:'PlayStation Blog 剧情与发售说明',url:story},{label:'官方网站',url:official}]
  },
];

export const hasExpandedOfficialGuides = (code: string) =>
  expandedOfficialLocaleCodes.includes(code as (typeof expandedOfficialLocaleCodes)[number]);

export const guidePathForProfile = (profile: LocaleProfile, englishPath: string) => {
  const match = officialLocaleGuidesV13.find(page => page.lang === profile.code && page.englishPath === englishPath);
  return match ? `/${profile.path}/${match.slug}/` : `/${profile.path}/`;
};
