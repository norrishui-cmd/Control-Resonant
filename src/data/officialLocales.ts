export const allLocaleCodes = [
  'en', 'fr', 'it', 'de', 'es', 'ja', 'ko', 'pt-BR', 'zh-CN', 'es-419',
  'zh-TW', 'pl', 'ru', 'tr', 'uk',
] as const;

export type Locale = (typeof allLocaleCodes)[number];
export type AddedLocale = Exclude<Locale, 'en' | 'de' | 'fr'>;

export interface LocaleProfile {
  code: AddedLocale;
  path: string;
  name: string;
  nativeName: string;
  htmlLang: string;
  fullAudio: boolean;
  title: string;
  description: string;
  label: string;
  intro: string;
  answer: string;
  guides: string;
  supportTitle: string;
  supportDescription: string;
  shortLabel: string;
  interfaceText: string;
  audioText: string;
  platformText: string;
  sourceNote: string;
  nav: {
    home: string; release: string; guides: string; database: string;
    characters: string; platforms: string; faq: string; language: string;
  };
}

export const addedLocales: LocaleProfile[] = [
  {
    code:'it', path:'it', name:'Italian', nativeName:'Italiano', htmlLang:'it', fullAudio:true,
    title:'Guida italiana di Control Resonant',
    description:'Guida italiana non ufficiale a Control Resonant con data di uscita, piattaforme, lingue, doppiaggio, sottotitoli e informazioni verificate.',
    label:'Guida italiana non ufficiale', intro:'Il punto di partenza in italiano per l’action RPG di Remedy, con fatti verificati, fonti ufficiali e limiti chiaramente indicati prima dell’uscita.',
    answer:'Control Resonant uscirà il 24 settembre 2026 su PS5, Xbox Series X|S e PC. Steam conferma interfaccia, doppiaggio completo e sottotitoli in italiano.',
    guides:'Guide in italiano', supportTitle:'Lingua italiana in Control Resonant: doppiaggio e sottotitoli', supportDescription:'Supporto ufficiale dell’italiano in Control Resonant: interfaccia, audio completo, sottotitoli e differenze tra le piattaforme.',
    shortLabel:'Risposta breve', interfaceText:'La matrice ufficiale di Steam indica l’italiano per interfaccia e sottotitoli. Menu, testi di sistema e dialoghi sottotitolati risultano quindi localizzati, anche se termini e nomi propri potranno essere verificati solo nella versione finale.',
    audioText:'Steam contrassegna anche l’audio completo in italiano. Questo distingue l’italiano dalle lingue limitate a testo e sottotitoli; la disponibilità dei pacchetti vocali su console può comunque dipendere dalla regione dello store.',
    platformText:'La tabella Steam documenta la versione PC. Su PS5 e Xbox è prudente controllare la pagina regionale del prodotto e le opzioni di download, perché dimensioni e pacchetti linguistici possono variare.',
    sourceNote:'Le informazioni linguistiche derivano dalla matrice ufficiale di Steam e vengono ricontrollate prima del lancio.',
    nav:{home:'Home',release:'Uscita',guides:'Guide',database:'Database',characters:'Personaggi',platforms:'Piattaforme',faq:'FAQ',language:'Lingua'}
  },
  {
    code:'es', path:'es', name:'Spanish (Spain)', nativeName:'Español (España)', htmlLang:'es', fullAudio:true,
    title:'Guía de Control Resonant en español',
    description:'Guía española no oficial de Control Resonant con fecha de lanzamiento, plataformas, idioma, doblaje, subtítulos y datos oficiales verificados.',
    label:'Guía española no oficial', intro:'El punto de entrada en español de España para el RPG de acción de Remedy, con datos comprobados, fuentes oficiales y límites claros antes del lanzamiento.',
    answer:'Control Resonant se publicará el 24 de septiembre de 2026 para PS5, Xbox Series X|S y PC. Steam confirma interfaz, voces completas y subtítulos en español de España.',
    guides:'Guías en español', supportTitle:'Idioma español en Control Resonant: doblaje y subtítulos', supportDescription:'Compatibilidad oficial de Control Resonant con español de España: interfaz, doblaje completo, subtítulos y posibles diferencias regionales.',
    shortLabel:'Respuesta breve', interfaceText:'La tabla oficial de Steam marca el español de España para la interfaz y los subtítulos. Esto cubre menús, textos del sistema y diálogos subtitulados; la terminología definitiva se comprobará cuando esté disponible la versión final.',
    audioText:'Steam también marca doblaje completo en español de España. No debe confundirse con el español latinoamericano, que aparece como una opción de texto y subtítulos sin audio completo.',
    platformText:'Steam describe la edición para PC. En PS5 y Xbox conviene revisar la ficha regional y los paquetes descargables, ya que la distribución de voces puede cambiar según el país o la tienda.',
    sourceNote:'La matriz oficial de Steam es la referencia principal y se revisará de nuevo antes del estreno.',
    nav:{home:'Inicio',release:'Lanzamiento',guides:'Guías',database:'Base de datos',characters:'Personajes',platforms:'Plataformas',faq:'FAQ',language:'Idioma'}
  },
  {
    code:'ja', path:'ja', name:'Japanese', nativeName:'日本語', htmlLang:'ja', fullAudio:true,
    title:'CONTROL Resonant 日本語攻略ガイド',
    description:'CONTROL Resonantの非公式日本語ガイド。発売日、対応機種、日本語音声、字幕、ゲームシステム、公式発表済み情報を出典付きでわかりやすく整理します。',
    label:'非公式日本語フィールドガイド', intro:'RemedyのアクションRPGについて、公式ソースで確認できる事実と未発表情報を分けて整理する日本語版の入口です。',
    answer:'CONTROL Resonantは2026年9月24日にPS5、Xbox Series X|S、PC向けに発売予定です。Steamでは日本語のインターフェイス、フル音声、字幕が確認されています。',
    guides:'日本語ガイド', supportTitle:'CONTROL Resonantの日本語対応：音声・字幕・UI', supportDescription:'CONTROL Resonantの日本語対応状況を公式Steam表に基づいて確認。日本語UI、フル音声、字幕、機種ごとの注意点を解説します。',
    shortLabel:'結論', interfaceText:'Steamの公式言語表では、日本語のインターフェイスと字幕に対応しています。メニューやシステム表示、字幕付き会話が日本語化される予定ですが、固有名詞や用語の最終表記は製品版で確認する必要があります。',
    audioText:'日本語はフル音声にも対応すると記載されています。テキストのみの対応言語とは異なり、日本語吹き替えでストーリーを楽しめる予定です。ただし、追加音声データの取得方法は各ストアの仕様に従います。',
    platformText:'Steamの表はPC版を直接説明するものです。PlayStation Storeの日本向け商品ページでも日本版が案内されていますが、PS5やXboxでは購入前に地域別の商品情報とダウンロード言語を確認してください。',
    sourceNote:'言語情報はSteamおよび地域別PlayStation Storeの公式表示を基準にしています。',
    nav:{home:'ホーム',release:'発売日',guides:'攻略',database:'データベース',characters:'キャラクター',platforms:'対応機種',faq:'FAQ',language:'言語'}
  },
  {
    code:'ko', path:'ko', name:'Korean', nativeName:'한국어', htmlLang:'ko', fullAudio:false,
    title:'CONTROL Resonant 한국어 가이드',
    description:'CONTROL Resonant 비공식 한국어 가이드입니다. 출시일, 플랫폼, 한국어 인터페이스와 자막, 공식 확인 정보를 정리합니다.',
    label:'비공식 한국어 필드 가이드', intro:'Remedy의 액션 RPG에 관한 공식 자료를 바탕으로 확정 정보와 미공개 사항을 구분해 제공하는 한국어 시작 페이지입니다.',
    answer:'CONTROL Resonant는 2026년 9월 24일 PS5, Xbox Series X|S, PC로 출시됩니다. Steam은 한국어 인터페이스와 자막을 지원한다고 표시하지만 한국어 전체 음성은 표시하지 않습니다.',
    guides:'한국어 가이드', supportTitle:'CONTROL Resonant 한국어 지원: 자막과 음성 여부', supportDescription:'CONTROL Resonant의 공식 한국어 지원 범위입니다. 한국어 UI와 자막, 미지원으로 표시된 전체 음성, 플랫폼별 확인 방법을 설명합니다.',
    shortLabel:'짧은 답변', interfaceText:'Steam 공식 언어 표에서 한국어는 인터페이스와 자막 지원으로 표시됩니다. 메뉴, 시스템 텍스트, 대화 자막은 한국어로 이용할 수 있을 예정이며 최종 번역 용어는 출시 버전에서 확인해야 합니다.',
    audioText:'한국어 전체 음성 항목에는 체크 표시가 없습니다. 따라서 현재 공식 정보만으로는 한국어 더빙을 기대해서는 안 되며, 영어 등 지원 음성과 한국어 자막을 조합하는 방식이 기본입니다.',
    platformText:'Steam 표는 PC 버전을 기준으로 합니다. PS5와 Xbox에서는 지역별 스토어가 제공하는 언어 팩과 상품 설명을 구매 전에 확인해야 합니다.',
    sourceNote:'언어 범위는 Steam 공식 언어 표를 기준으로 하며 출시 전 변경 여부를 다시 확인합니다.',
    nav:{home:'홈',release:'출시일',guides:'가이드',database:'데이터베이스',characters:'캐릭터',platforms:'플랫폼',faq:'FAQ',language:'언어'}
  },
  {
    code:'pt-BR', path:'pt-br', name:'Portuguese (Brazil)', nativeName:'Português (Brasil)', htmlLang:'pt-BR', fullAudio:true,
    title:'Guia brasileiro de Control Resonant',
    description:'Guia não oficial de Control Resonant em português do Brasil com lançamento, plataformas, dublagem, legendas e informações oficiais verificadas.',
    label:'Guia brasileiro não oficial', intro:'O ponto de partida em português do Brasil para o RPG de ação da Remedy, separando fatos confirmados de detalhes ainda não divulgados.',
    answer:'Control Resonant será lançado em 24 de setembro de 2026 para PS5, Xbox Series X|S e PC. A Steam confirma interface, áudio completo e legendas em português do Brasil.',
    guides:'Guias em português', supportTitle:'Português do Brasil em Control Resonant: dublagem e legendas', supportDescription:'Suporte oficial ao português brasileiro em Control Resonant: interface, dublagem completa, legendas e diferenças possíveis entre plataformas.',
    shortLabel:'Resposta rápida', interfaceText:'A matriz oficial da Steam marca português do Brasil para interface e legendas. Menus, textos de sistema e diálogos legendados devem estar localizados, embora nomes próprios e termos finais só possam ser conferidos no jogo lançado.',
    audioText:'A Steam também marca áudio completo em português do Brasil, indicando dublagem integral. É uma cobertura diferente da oferecida a idiomas que aparecem apenas com interface e legendas.',
    platformText:'A tabela da Steam descreve diretamente a versão de PC. No PS5 e no Xbox, verifique a loja regional e os pacotes de idioma antes de comprar, pois a entrega dos arquivos de voz pode variar.',
    sourceNote:'A cobertura de idioma segue a matriz oficial da Steam e será revisada novamente perto do lançamento.',
    nav:{home:'Início',release:'Lançamento',guides:'Guias',database:'Banco de dados',characters:'Personagens',platforms:'Plataformas',faq:'FAQ',language:'Idioma'}
  },
  {
    code:'zh-CN', path:'zh-cn', name:'Simplified Chinese', nativeName:'简体中文', htmlLang:'zh-CN', fullAudio:true,
    title:'CONTROL Resonant 简体中文攻略',
    description:'CONTROL Resonant 非官方简体中文攻略站，整理发售日期、支持平台、简体中文配音与字幕、玩法系统，以及经过官方来源核验的最新游戏信息。',
    label:'非官方简体中文攻略', intro:'面向简体中文玩家的 CONTROL Resonant 资料入口，严格区分官方已确认内容、媒体试玩信息和发售前尚未公布的细节。',
    answer:'CONTROL Resonant 将于 2026 年 9 月 24 日登陆 PS5、Xbox Series X|S 和 PC。Steam 官方页面确认支持简体中文界面、完整配音和字幕。',
    guides:'简体中文攻略', supportTitle:'CONTROL Resonant 简体中文支持：配音、字幕与界面', supportDescription:'根据 Steam 官方语言表核对 CONTROL Resonant 的简体中文界面、完整中文配音、中文字幕，以及 PS5、Xbox 和 PC 区域版本的注意事项。',
    shortLabel:'直接答案', interfaceText:'Steam 官方语言矩阵已为简体中文的界面和字幕打勾，因此菜单、系统文字和对话字幕计划提供完整的简体中文本地化。专有名词和最终译名仍应以正式发售版本为准。',
    audioText:'简体中文同时被标记为“完整音频”，意味着官方当前计划提供中文配音。这一点与仅支持界面和字幕的繁体中文不同，购买时不要把两种中文版本的语音支持混为一谈。',
    platformText:'Steam 的语言表直接对应 PC 版。PS5 与 Xbox 的语言包可能受账号地区和商店版本影响，主机玩家应在购买前核对本地区产品页面和下载选项。',
    sourceNote:'语言支持以 Steam 官方矩阵为主要依据，并参考 PlayStation 亚洲区商品页。',
    nav:{home:'首页',release:'发售日期',guides:'攻略',database:'资料库',characters:'角色',platforms:'平台',faq:'常见问题',language:'语言'}
  },
  {
    code:'es-419', path:'es-419', name:'Spanish (Latin America)', nativeName:'Español (Latinoamérica)', htmlLang:'es-419', fullAudio:false,
    title:'Guía latinoamericana de Control Resonant',
    description:'Guía no oficial de Control Resonant en español latinoamericano con lanzamiento, plataformas, subtítulos y alcance de la localización oficial.',
    label:'Guía latinoamericana no oficial', intro:'La entrada en español latinoamericano al RPG de acción de Remedy, con información verificada y límites claros sobre lo que todavía no se ha anunciado.',
    answer:'Control Resonant llegará el 24 de septiembre de 2026 a PS5, Xbox Series X|S y PC. Steam confirma interfaz y subtítulos en español latinoamericano, pero no marca doblaje completo.',
    guides:'Guías en español latino', supportTitle:'Español latino en Control Resonant: subtítulos y doblaje', supportDescription:'Soporte oficial del español latinoamericano en Control Resonant: interfaz, subtítulos, ausencia actual de doblaje completo y notas regionales.',
    shortLabel:'Respuesta rápida', interfaceText:'La tabla oficial de Steam incluye español latinoamericano para interfaz y subtítulos. Los menús, textos del sistema y diálogos subtitulados tendrán localización regional, aunque la terminología final debe comprobarse en la versión publicada.',
    audioText:'El campo de audio completo no está marcado para español latinoamericano. El doblaje completo sí aparece para español de España, por lo que son dos opciones distintas y no deben presentarse como si tuvieran la misma cobertura.',
    platformText:'La matriz de Steam corresponde a PC. En PS5 y Xbox, la disponibilidad puede depender de la región de la cuenta y del paquete descargado; revisa la ficha local antes de comprar.',
    sourceNote:'Usamos la matriz oficial de Steam y volveremos a revisar cualquier cambio antes del estreno.',
    nav:{home:'Inicio',release:'Lanzamiento',guides:'Guías',database:'Base de datos',characters:'Personajes',platforms:'Plataformas',faq:'FAQ',language:'Idioma'}
  },
  {
    code:'zh-TW', path:'zh-tw', name:'Traditional Chinese', nativeName:'繁體中文', htmlLang:'zh-TW', fullAudio:false,
    title:'CONTROL Resonant 繁體中文攻略',
    description:'CONTROL Resonant 非官方繁體中文攻略，整理推出日期、支援平台、繁體中文介面與字幕、玩法系統，以及經官方來源核實的最新遊戲資料。',
    label:'非官方繁體中文攻略', intro:'為繁體中文玩家整理 CONTROL Resonant 的官方已確認資訊，並清楚標示尚未公布或可能在推出前改動的內容。',
    answer:'CONTROL Resonant 預定於 2026 年 9 月 24 日推出 PS5、Xbox Series X|S 與 PC 版本。Steam 確認支援繁體中文介面和字幕，但未標示完整中文語音。',
    guides:'繁體中文攻略', supportTitle:'CONTROL Resonant 繁體中文支援：字幕與語音', supportDescription:'依據 Steam 官方語言表核對 CONTROL Resonant 的繁體中文介面、對話字幕、目前未提供完整配音，以及 PS5、Xbox 與 PC 區域版本注意事項。',
    shortLabel:'直接答案', interfaceText:'Steam 官方語言矩陣已標示繁體中文介面和字幕，代表選單、系統文字及對話字幕計劃提供繁體中文。遊戲內專有名詞與最終翻譯仍應以正式版本為準。',
    audioText:'繁體中文的「完整音訊」欄位目前沒有勾選。簡體中文則列有完整音訊，因此兩種中文的語音支援不同，不應把簡體中文配音誤寫成繁體中文也有獨立配音。',
    platformText:'Steam 表格直接描述 PC 版。PS5 與 Xbox 的可下載語言可能受帳號地區和商品版本影響，購買前應查看當地商店頁面的語言說明。',
    sourceNote:'語言資料以 Steam 官方矩陣為主要依據，並會在推出前再次核對。',
    nav:{home:'首頁',release:'推出日期',guides:'攻略',database:'資料庫',characters:'角色',platforms:'平台',faq:'常見問題',language:'語言'}
  },
  {
    code:'pl', path:'pl', name:'Polish', nativeName:'Polski', htmlLang:'pl', fullAudio:false,
    title:'Polski poradnik do Control Resonant',
    description:'Nieoficjalny polski poradnik do Control Resonant: data premiery, platformy, polski interfejs, napisy i zweryfikowane informacje oficjalne.',
    label:'Nieoficjalny polski przewodnik', intro:'Polski punkt startowy do RPG akcji studia Remedy, który oddziela potwierdzone fakty od informacji nadal nieujawnionych przed premierą.',
    answer:'Control Resonant ukaże się 24 września 2026 roku na PS5, Xbox Series X|S i PC. Steam potwierdza polski interfejs oraz napisy, ale nie oznacza pełnego polskiego dubbingu.',
    guides:'Poradniki po polsku', supportTitle:'Język polski w Control Resonant: napisy i dubbing', supportDescription:'Oficjalne wsparcie języka polskiego w Control Resonant: interfejs, napisy, brak oznaczenia pełnego dubbingu i różnice platformowe.',
    shortLabel:'Krótka odpowiedź', interfaceText:'Oficjalna tabela Steam zaznacza język polski dla interfejsu i napisów. Menu, teksty systemowe oraz dialogi z napisami mają więc otrzymać lokalizację, choć ostateczne nazwy terminów sprawdzimy dopiero w wydanej grze.',
    audioText:'Pole pełnego dźwięku nie jest zaznaczone dla języka polskiego. Obecne dane nie potwierdzają polskiego dubbingu; należy oczekiwać obsługiwanej ścieżki głosowej połączonej z polskimi napisami.',
    platformText:'Tabela Steam dotyczy bezpośrednio PC. Na PS5 i Xbox pakiety językowe mogą zależeć od regionu sklepu, dlatego przed zakupem warto sprawdzić lokalną kartę produktu.',
    sourceNote:'Zakres językowy opieramy na oficjalnej tabeli Steam i sprawdzimy go ponownie przed premierą.',
    nav:{home:'Start',release:'Premiera',guides:'Poradniki',database:'Baza danych',characters:'Postacie',platforms:'Platformy',faq:'FAQ',language:'Język'}
  },
  {
    code:'ru', path:'ru', name:'Russian', nativeName:'Русский', htmlLang:'ru', fullAudio:false,
    title:'Русский гайд по CONTROL Resonant',
    description:'Неофициальный русский гайд по CONTROL Resonant: дата выхода, платформы, русский интерфейс, субтитры и проверенные официальные сведения.',
    label:'Неофициальный русский справочник', intro:'Русскоязычная отправная точка по экшен-RPG Remedy с четким разделением подтвержденных фактов и пока не объявленных деталей.',
    answer:'CONTROL Resonant выйдет 24 сентября 2026 года на PS5, Xbox Series X|S и PC. Steam подтверждает русский интерфейс и субтитры, но не указывает полный русский дубляж.',
    guides:'Гайды на русском', supportTitle:'Русский язык в CONTROL Resonant: субтитры и озвучка', supportDescription:'Официальная поддержка русского языка в CONTROL Resonant: интерфейс, субтитры, отсутствие отметки полной озвучки и различия платформ.',
    shortLabel:'Краткий ответ', interfaceText:'В официальной таблице Steam русский язык отмечен для интерфейса и субтитров. Меню, системные тексты и субтитры диалогов должны быть локализованы, а окончательную терминологию можно будет проверить после релиза.',
    audioText:'В графе полного аудио для русского языка отметки нет. Поэтому текущие официальные данные не подтверждают русский дубляж; доступная голосовая дорожка будет сочетаться с русскими субтитрами.',
    platformText:'Таблица Steam напрямую описывает PC-версию. На PS5 и Xbox состав языковых пакетов может зависеть от региона магазина и учетной записи, поэтому проверьте локальную карточку товара.',
    sourceNote:'Основной источник — официальная языковая матрица Steam, которую мы перепроверим перед релизом.',
    nav:{home:'Главная',release:'Дата выхода',guides:'Гайды',database:'База данных',characters:'Персонажи',platforms:'Платформы',faq:'FAQ',language:'Язык'}
  },
  {
    code:'tr', path:'tr', name:'Turkish', nativeName:'Türkçe', htmlLang:'tr', fullAudio:false,
    title:'Türkçe Control Resonant rehberi',
    description:'Control Resonant için resmî olmayan Türkçe rehber: çıkış tarihi, platformlar, Türkçe arayüz, altyazılar ve doğrulanmış bilgiler.',
    label:'Resmî olmayan Türkçe saha rehberi', intro:'Remedy’nin aksiyon RPG’si için doğrulanmış resmî bilgileri, henüz açıklanmamış ayrıntılardan ayıran Türkçe başlangıç sayfası.',
    answer:'Control Resonant 24 Eylül 2026 tarihinde PS5, Xbox Series X|S ve PC için çıkacak. Steam Türkçe arayüz ve altyazı desteğini işaretliyor, ancak tam Türkçe seslendirme göstermiyor.',
    guides:'Türkçe rehberler', supportTitle:'Control Resonant Türkçe desteği: altyazı ve seslendirme', supportDescription:'Control Resonant için resmî Türkçe dil desteği: arayüz, altyazılar, tam seslendirme durumu ve platformlara göre dikkat edilmesi gerekenler.',
    shortLabel:'Kısa cevap', interfaceText:'Steam’in resmî dil tablosunda Türkçe arayüz ve altyazı desteği bulunuyor. Menülerin, sistem metinlerinin ve diyalog altyazılarının Türkçeleştirilmesi planlanıyor; nihai terimler çıkış sürümünde doğrulanacak.',
    audioText:'Türkçe için tam seslendirme kutusu işaretli değil. Bu nedenle mevcut resmî bilgilere göre Türkçe dublaj vaat edilmemiştir; desteklenen bir ses dili Türkçe altyazıyla kullanılacaktır.',
    platformText:'Steam tablosu doğrudan PC sürümünü açıklar. PS5 ve Xbox dil paketleri mağaza bölgesine göre değişebileceğinden satın almadan önce yerel ürün sayfasını kontrol edin.',
    sourceNote:'Dil kapsamı Steam’in resmî tablosuna dayanır ve çıkıştan önce yeniden kontrol edilir.',
    nav:{home:'Ana sayfa',release:'Çıkış',guides:'Rehberler',database:'Veritabanı',characters:'Karakterler',platforms:'Platformlar',faq:'SSS',language:'Dil'}
  },
  {
    code:'uk', path:'uk', name:'Ukrainian', nativeName:'Українська', htmlLang:'uk', fullAudio:false,
    title:'Український гайд по CONTROL Resonant',
    description:'Неофіційний український гайд по CONTROL Resonant: дата виходу, платформи, український інтерфейс, озвучення, субтитри та офіційні дані.',
    label:'Неофіційний український довідник', intro:'Україномовна стартова сторінка про екшен-RPG Remedy, де підтверджені факти відокремлено від ще не оголошених подробиць.',
    answer:'CONTROL Resonant вийде 24 вересня 2026 року на PS5, Xbox Series X|S і PC. Steam підтверджує український інтерфейс і субтитри, але зараз не позначає повне українське озвучення.',
    guides:'Гайди українською', supportTitle:'Українська мова в CONTROL Resonant: субтитри й озвучення', supportDescription:'Офіційна підтримка української мови в CONTROL Resonant: інтерфейс, субтитри, поточний статус повного озвучення та відмінності платформ.',
    shortLabel:'Коротка відповідь', interfaceText:'В офіційній таблиці Steam українська мова позначена для інтерфейсу та субтитрів. Меню, системні тексти й субтитри діалогів мають бути локалізовані; остаточні терміни перевіримо у релізній версії.',
    audioText:'У поточній таблиці Steam для української немає позначки повного аудіо. Отже, офіційно підтверджено текстову локалізацію й субтитри, але не український дубляж; доступну звукову доріжку можна буде поєднати з українськими субтитрами.',
    platformText:'Таблиця Steam безпосередньо описує PC-версію. На PS5 та Xbox перед купівлею перевірте локальну сторінку продукту й доступні мовні пакети.',
    sourceNote:'Мовні дані взято з офіційної матриці Steam і буде перевірено ще раз перед виходом гри.',
    nav:{home:'Головна',release:'Дата виходу',guides:'Гайди',database:'База даних',characters:'Персонажі',platforms:'Платформи',faq:'FAQ',language:'Мова'}
  },
];

export const addedLocaleByCode = Object.fromEntries(addedLocales.map(locale => [locale.code, locale])) as Record<AddedLocale, LocaleProfile>;
export const addedLocaleByPath = Object.fromEntries(addedLocales.map(locale => [locale.path, locale])) as Record<string, LocaleProfile>;

export const officialLanguageMatrix = [
  { code:'en', name:'English', interface:true, audio:true, subtitles:true },
  { code:'fr', name:'French', interface:true, audio:true, subtitles:true },
  { code:'it', name:'Italian', interface:true, audio:true, subtitles:true },
  { code:'de', name:'German', interface:true, audio:true, subtitles:true },
  { code:'es', name:'Spanish - Spain', interface:true, audio:true, subtitles:true },
  { code:'ja', name:'Japanese', interface:true, audio:true, subtitles:true },
  { code:'ko', name:'Korean', interface:true, audio:false, subtitles:true },
  { code:'pt-BR', name:'Portuguese - Brazil', interface:true, audio:true, subtitles:true },
  { code:'zh-CN', name:'Simplified Chinese', interface:true, audio:true, subtitles:true },
  { code:'es-419', name:'Spanish - Latin America', interface:true, audio:false, subtitles:true },
  { code:'zh-TW', name:'Traditional Chinese', interface:true, audio:false, subtitles:true },
  { code:'pl', name:'Polish', interface:true, audio:false, subtitles:true },
  { code:'ru', name:'Russian', interface:true, audio:false, subtitles:true },
  { code:'tr', name:'Turkish', interface:true, audio:false, subtitles:true },
  { code:'uk', name:'Ukrainian', interface:true, audio:false, subtitles:true },
] as const;

export const localePathForCode = (code: Locale) => {
  if (code === 'en') return '';
  if (code === 'de' || code === 'fr') return code;
  return addedLocaleByCode[code as AddedLocale].path;
};
