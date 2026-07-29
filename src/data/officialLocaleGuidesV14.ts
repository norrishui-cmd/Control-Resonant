import type { AddedLocale } from './officialLocales';
import {
  officialLocaleGuidesV13,
  officialLocaleGuideUi,
  type OfficialLocaleGuide,
} from './officialLocaleGuidesV13';

const steam = 'https://store.steampowered.com/app/3669870/CONTROL_Resonant/';
const official = 'https://controlgame.com/';
const combat = 'https://blog.playstation.com/2026/03/04/control-resonant-a-deep-dive-into-combat-buildcrafting-and-player-choice/';

export const expandedOfficialLocaleCodesV14 = [
  'it', 'es', 'ja', 'ko', 'pt-BR', 'zh-CN', 'es-419', 'zh-TW', 'pl', 'ru', 'tr', 'uk',
] as const satisfies readonly AddedLocale[];

export const officialLocaleGuideUiV14 = {
  ...officialLocaleGuideUi,
  ko:{home:'홈',guides:'가이드',short:'핵심 답변',sources:'공식 출처',related:'관련 가이드',updated:'2026년 7월 29일 확인',back:'전체 가이드',note:'출시 전 정보는 변경될 수 있습니다. 날짜, 플랫폼, 에디션처럼 시기에 민감한 내용은 공식 출처에서 다시 확인합니다.',verified:'확인됨',hubEyebrow:'현장 매뉴얼',hubTitle:'CONTROL Resonant 한국어 핵심 공략 센터',hubDescription:'출시일, 지원 플랫폼, PC 시스템 요구 사항, 전투 순환과 빌드 시스템을 Remedy와 공식 스토어 자료로 검증해 정리한 한국어 가이드 허브입니다.',hubIntro:'각 페이지는 하나의 질문에 직접 답하고, 확인된 사실과 아직 공개되지 않은 내용을 분리하며, 공식 출처와 관련 FAQ 및 뉴스를 연결합니다.',browse:'주제별 보기',files:'개 가이드'},
  'es-419':{home:'Inicio',guides:'Guías',short:'Respuesta breve',sources:'Fuentes oficiales',related:'Guías relacionadas',updated:'Verificado el 29 de julio de 2026',back:'Todas las guías',note:'Los datos pueden cambiar antes del lanzamiento; las fechas, plataformas y ediciones se vuelven a comprobar en fuentes oficiales.',verified:'Verificado',hubEyebrow:'Manual de campo',hubTitle:'Guías de CONTROL Resonant en español latino',hubDescription:'Guías verificadas sobre lanzamiento, plataformas, requisitos de PC, combate y builds para Latinoamérica.',hubIntro:'Cada página responde una intención concreta, separa los hechos confirmados de lo todavía no anunciado y enlaza fuentes oficiales, FAQ y noticias.',browse:'Explorar temas',files:'guías'},
  'zh-TW':{home:'首頁',guides:'攻略',short:'直接答案',sources:'官方來源',related:'相關攻略',updated:'最後核驗：2026年7月29日',back:'返回攻略中心',note:'遊戲上市前仍可能調整；日期、平台與版本等時效資訊會持續以官方來源複核。',verified:'已核驗',hubEyebrow:'行動檔案',hubTitle:'CONTROL Resonant 繁體中文攻略中心',hubDescription:'依據Remedy、Steam與PlayStation官方資料，完整整理發售日期、支援平台、PC配備需求、戰鬥循環與Build系統的繁體中文攻略中心。',hubIntro:'每頁只處理一個明確問題，區分已確認事實與未公開內容，並提供官方來源、相關FAQ及News入口。',browse:'依主題瀏覽',files:'篇攻略'},
  pl:{home:'Start',guides:'Poradniki',short:'Krótka odpowiedź',sources:'Oficjalne źródła',related:'Powiązane poradniki',updated:'Sprawdzono 29 lipca 2026',back:'Wszystkie poradniki',note:'Szczegóły mogą zmienić się przed premierą. Daty, platformy i edycje ponownie sprawdzamy w oficjalnych źródłach.',verified:'Zweryfikowano',hubEyebrow:'Podręcznik terenowy',hubTitle:'Polskie poradniki do CONTROL Resonant',hubDescription:'Zweryfikowane poradniki o premierze, platformach, wymaganiach PC, walce i buildach.',hubIntro:'Każda strona odpowiada na jedno konkretne pytanie, oddziela potwierdzone fakty od brakujących danych oraz prowadzi do źródeł, FAQ i aktualności.',browse:'Przeglądaj tematy',files:'poradniki'},
  ru:{home:'Главная',guides:'Гайды',short:'Краткий ответ',sources:'Официальные источники',related:'Связанные гайды',updated:'Проверено 29 июля 2026 года',back:'Все гайды',note:'До релиза сведения могут измениться. Даты, платформы и издания повторно проверяются по официальным источникам.',verified:'Проверено',hubEyebrow:'Полевое руководство',hubTitle:'Русские гайды по CONTROL Resonant',hubDescription:'Проверенные русские материалы о релизе, платформах, требованиях PC, боевой системе и билдах.',hubIntro:'Каждая страница отвечает на отдельный вопрос, отделяет подтвержденные факты от неизвестного и содержит официальные источники, FAQ и новости.',browse:'Темы гайдов',files:'гайда'},
  tr:{home:'Ana sayfa',guides:'Rehberler',short:'Kısa cevap',sources:'Resmî kaynaklar',related:'İlgili rehberler',updated:'29 Temmuz 2026 tarihinde doğrulandı',back:'Tüm rehberler',note:'Ayrıntılar çıkıştan önce değişebilir; tarih, platform ve sürüm bilgileri resmî kaynaklardan yeniden kontrol edilir.',verified:'Doğrulandı',hubEyebrow:'Saha kılavuzu',hubTitle:'Türkçe CONTROL Resonant rehberleri',hubDescription:'Çıkış, platformlar, PC gereksinimleri, savaş ve build sistemleri için doğrulanmış Türkçe rehberler.',hubIntro:'Her sayfa tek bir arama niyetini yanıtlar, doğrulanmış bilgilerle henüz açıklanmayanları ayırır ve resmî kaynaklar, SSS ve haberlere bağlanır.',browse:'Konulara göz at',files:'rehber'},
  uk:{home:'Головна',guides:'Гайди',short:'Коротка відповідь',sources:'Офіційні джерела',related:'Пов’язані гайди',updated:'Перевірено 29 липня 2026 року',back:'Усі гайди',note:'До релізу подробиці можуть змінитися. Дати, платформи та видання повторно перевіряються за офіційними джерелами.',verified:'Перевірено',hubEyebrow:'Польовий довідник',hubTitle:'Українські гайди по CONTROL Resonant',hubDescription:'Перевірені українські матеріали про реліз, платформи, вимоги PC, бойову систему та білди.',hubIntro:'Кожна сторінка відповідає на окреме питання, відділяє підтверджені факти від невідомого та містить офіційні джерела, FAQ і новини.',browse:'Переглянути теми',files:'гайди'},
};

const v14Guides: OfficialLocaleGuide[] = [
  {
    lang:'ko', slug:'release-date', englishPath:'/release-date/',
    title:'CONTROL Resonant 출시일, 플랫폼과 에디션',
    description:'2026년 9월 24일 출시일, PS5·Xbox·PC·Mac 지원, 예약 구매 보상, 디지털 디럭스와 얼리 액세스를 공식 자료로 정리합니다.',
    label:'출시 정보', answer:'CONTROL Resonant는 2026년 9월 24일 PS5, Xbox Series X|S, PC로 출시됩니다. Mac판은 2026년 후반에 나오며, PS5 디지털 디럭스는 현재 48시간 얼리 액세스를 표시합니다.',
    sections:[
      {heading:'확정된 출시일과 플랫폼',paragraphs:['Remedy는 전 세계 출시일을 2026년 9월 24일로 발표했습니다. 출시 당일 지원 플랫폼은 PS5, Xbox Series X|S, Steam과 Epic Games Store를 통한 PC이며, GeForce NOW도 출시 시점의 클라우드 선택지로 안내되어 있습니다. macOS판은 Steam과 App Store를 통해 2026년 후반에 제공될 예정이지만 정확한 날짜는 아직 공개되지 않았습니다.','PS4, Xbox One, Nintendo Switch판은 발표되지 않았습니다. 소매점의 임시 등록이나 커뮤니티 추측은 개발사 또는 플랫폼 보유자의 확인이 아니므로 지원 예정 플랫폼으로 기록하지 않습니다.']},
      {heading:'에디션과 예약 구매',paragraphs:['Steam은 스탠더드와 디지털 디럭스 에디션을 표시합니다. 디럭스에는 본편, 디지털 아트북, 사운드트랙, Untapped Artifact, Starter Resource Bundle, AWE Mission Outfit이 포함됩니다. 예약 구매 보상은 Hiss Corruption Outfit과 Pickpocket’s Tool Artifact입니다.','PlayStation Store는 PS5 디지털 디럭스에 48시간 얼리 액세스를 표시합니다. 조건이 바뀌지 않는다면 9월 22일부터 플레이할 수 있다는 뜻이지만, 실제 해제 시각과 사전 다운로드 및 지역별 구성은 구매한 스토어에서 다시 확인해야 합니다.']},
      {heading:'아직 공개되지 않은 항목',paragraphs:['전 세계 공통 해제 시각, Mac판의 정확한 날짜, 실물 에디션 전체 구성은 아직 확정 자료가 없습니다. 출처 없는 카운트다운이나 판매점 추정값은 사용하지 않고 Remedy 또는 공식 스토어의 발표가 나온 뒤 업데이트합니다.']}
    ], sources:[{label:'CONTROL Resonant 공식 사이트',url:official},{label:'Steam 공식 상점',url:steam}]
  },
  {
    lang:'ko', slug:'platforms-system-requirements', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant 플랫폼과 PC 시스템 요구 사항',
    description:'PS5, Xbox Series X|S, PC, Mac, GeForce NOW 지원과 최소·권장 사양, 100GB 용량, 공개되지 않은 콘솔 성능 모드를 확인합니다.',
    label:'플랫폼', answer:'출시 플랫폼은 PS5, Xbox Series X|S, PC입니다. Steam판은 64비트 Windows 10/11, 16GB RAM, 100GB 저장 공간이 필요하며 Mac판은 2026년 후반에 출시될 예정입니다.',
    sections:[
      {heading:'콘솔, PC, Mac과 클라우드',paragraphs:['2026년 9월 24일에는 PS5, Xbox Series X|S와 PC판이 출시됩니다. PC판은 Steam과 Epic Games Store에서 판매되고 GeForce NOW 지원도 예정되어 있습니다. Mac판은 같은 날이 아니라 2026년 후반에 Steam과 App Store를 통해 별도로 나옵니다.','PS4, Xbox One, Nintendo Switch 지원은 발표되지 않았습니다. Steam Deck에도 공식 Verified 또는 Playable 등급이 아직 없으므로 Steam 판매 여부만으로 휴대기기 호환성을 보장할 수 없습니다.']},
      {heading:'공식 PC 사양',paragraphs:['최소 사양은 Intel i5-8500 또는 동급 AMD CPU, 16GB RAM, GTX 1070 또는 6GB RX 5600 XT, 100GB 여유 공간입니다. 권장 사양은 Ryzen 7 3700X 또는 동급 Intel CPU와 RTX 3070 또는 8GB RX 6700 XT를 요구합니다.','Steam은 이 두 사양에 목표 해상도, 그래픽 프리셋, 프레임률을 연결하지 않았습니다. 따라서 권장 사양만으로 4K, 60fps, 레이 트레이싱 또는 프레임 생성 성능을 약속할 수 없습니다. 같은 이름의 노트북 GPU도 데스크톱 제품과 성능이 다를 수 있습니다.']},
      {heading:'콘솔 성능 정보의 한계',paragraphs:['PS5, PS5 Pro, Series X, Series S의 품질·성능 모드 표는 아직 공개되지 않았습니다. 이 게임을 위해 하드웨어를 구매하려면 Remedy의 기술 자료와 정식 버전 성능 분석을 기다리는 편이 안전합니다.']}
    ], sources:[{label:'Steam 공식 시스템 요구 사항',url:steam},{label:'공식 사이트',url:official}]
  },
  {
    lang:'ko', slug:'combat-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant 전투, Aberrant와 빌드 시스템',
    description:'근접 자원 순환, Aberrant 무기 형태, Combat Ability, 처형, Talent, Artifact와 The Gap 빌드 구성을 공식 설명에 따라 정리합니다.',
    label:'전투 빌드', answer:'전투는 변형 근접 무기 Aberrant, 초자연 능력, The Gap에서 구성하는 빌드를 결합합니다. 근접 공격은 능력 자원을 회복하고, 능력은 적을 기절시키며, 처형은 잠시 근접 피해를 높입니다.',
    sections:[
      {heading:'전투 순환 구조',paragraphs:['Aberrant는 Primary Form, Secondary Form, Combo Ender를 선택해 속도, 범위, 역할을 조합합니다. Dylan은 여기에 세 개의 Combat Ability를 장착합니다. 근접 공격으로 자원을 채우고 능력으로 처형 기회를 만든 뒤, 처형 보너스로 다시 근접 압박을 강화하는 공격적인 순환이 핵심입니다.','Barrage는 직접적인 원거리 공격, Shield는 방어와 돌진, Seekers는 자동으로 움직이는 소환 압박을 제공합니다. Mold Turret과 상태 효과도 확인되어 빠른 근접 연계 외에 전술적인 빌드가 존재합니다.']},
      {heading:'The Gap에서 빌드 구성',paragraphs:['The Gap은 초자연 Combat Ability, Aberrant Weapon Form, Talent를 관리하는 공간이며 Artifact가 추가 수정 효과를 제공합니다. 일부 Resonant 보상에는 분기 선택이 있고 첫 플레이에서 모든 능력을 얻을 수 없으므로 전문화가 실제 진행 결정으로 작동합니다.','출시 전에는 군중 제어, 단일 대상 피해, 방어 안정성, 원거리 보완처럼 역할을 기준으로 빌드를 설명할 수 있습니다. 하지만 자원 비용, 재사용 대기시간, 최종 수치가 공개되지 않은 상태에서 최강 빌드나 티어를 단정할 근거는 없습니다.']},
      {heading:'프리뷰 자료의 범위',paragraphs:['공식 시연은 시스템과 능력의 역할을 확인해 주지만 최종 밸런스를 보장하지 않습니다. 트레일러 애니메이션으로 피해 배율이나 드롭률을 추정하지 않으며, 출시 후 게임 내 수치와 패치 버전을 기준으로 갱신합니다.']}
    ], sources:[{label:'PlayStation Blog 전투·빌드 설명',url:combat},{label:'Steam 공식 소개',url:steam}]
  },
  {
    lang:'es-419', slug:'fecha-lanzamiento', englishPath:'/release-date/',
    title:'CONTROL Resonant: fecha de lanzamiento, plataformas y ediciones',
    description:'Fecha confirmada del 24 de septiembre de 2026, PS5, Xbox, PC, Mac, reserva, Digital Deluxe y acceso anticipado explicados para Latinoamérica.',
    label:'Lanzamiento', answer:'CONTROL Resonant se lanza el 24 de septiembre de 2026 en PS5, Xbox Series X|S y PC. La versión de Mac llegará después en 2026; la Digital Deluxe de PS5 anuncia actualmente 48 horas de acceso anticipado.',
    sections:[
      {heading:'Fecha y plataformas confirmadas',paragraphs:['Remedy confirmó el estreno mundial para el 24 de septiembre de 2026. Ese día estarán disponibles las versiones de PS5, Xbox Series X|S y PC por medio de Steam y Epic Games Store; GeForce NOW figura además como alternativa de juego en la nube desde el lanzamiento. La versión para macOS llegará por Steam y App Store más adelante en 2026, todavía sin día exacto.','No existe un anuncio para PS4, Xbox One o Nintendo Switch. Una ficha provisional de una tienda o un rumor de comunidad no equivale a la confirmación del estudio, por lo que esas plataformas no se presentan como versiones previstas.']},
      {heading:'Ediciones, reserva y acceso anticipado',paragraphs:['Steam enumera una edición estándar y una Digital Deluxe. La Deluxe agrega libro de arte digital, banda sonora, el artefacto Untapped, un paquete inicial de recursos y el atuendo AWE Mission. La reserva incluye el atuendo Hiss Corruption y el artefacto Pickpocket’s Tool.','PlayStation Store promociona 48 horas de acceso anticipado para la Digital Deluxe de PS5, lo que apuntaría al 22 de septiembre si la oferta se mantiene. La hora de desbloqueo, la precarga, el precio y la composición regional deben comprobarse en la tienda usada para comprar.']},
      {heading:'Datos todavía pendientes',paragraphs:['No se ha publicado una hora global única, la fecha exacta de Mac ni una matriz completa de ediciones físicas. Actualizaremos esos campos cuando Remedy o las plataformas ofrezcan información verificable, sin usar cuentas regresivas de terceros como fuente.']}
    ], sources:[{label:'Sitio oficial de CONTROL Resonant',url:official},{label:'Steam — página oficial',url:steam}]
  },
  {
    lang:'es-419', slug:'plataformas-requisitos', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant: plataformas y requisitos de PC',
    description:'Plataformas confirmadas, requisitos mínimos y recomendados, 100 GB, Mac, GeForce NOW y límites de los datos de rendimiento disponibles.',
    label:'Plataformas', answer:'CONTROL Resonant llega primero a PS5, Xbox Series X|S y PC. Steam pide Windows 10/11 de 64 bits, 16 GB de RAM y 100 GB; la edición para Mac se publicará después durante 2026.',
    sections:[
      {heading:'Consolas, PC, Mac y nube',paragraphs:['El lanzamiento del 24 de septiembre cubre PS5, Xbox Series X|S y PC. En computadora se distribuye mediante Steam y Epic Games Store, mientras que GeForce NOW está anunciado como opción de nube. Mac por Steam y App Store queda para un momento posterior de 2026.','No se han confirmado versiones para PS4, Xbox One ni Nintendo Switch. Steam Deck tampoco tiene por ahora una clasificación oficial Verified o Playable; aparecer en Steam no garantiza por sí solo una experiencia compatible con el dispositivo.']},
      {heading:'Requisitos oficiales de PC',paragraphs:['El mínimo indica Intel i5-8500 o AMD equivalente, 16 GB de RAM, GTX 1070 o RX 5600 XT con 6 GB y 100 GB disponibles. El perfil recomendado sube a Ryzen 7 3700X o Intel equivalente y una RTX 3070 o RX 6700 XT con 8 GB.','Steam no asocia estos perfiles con resolución, calidad gráfica o cuadros por segundo. Por ello no es correcto prometer 4K, 60 fps, trazado de rayos o generación de cuadros. Las GPU de laptop con nombres parecidos también pueden rendir de manera diferente a sus equivalentes de escritorio.']},
      {heading:'Rendimiento en consolas',paragraphs:['Todavía no hay una tabla completa de modos para PS5, PS5 Pro, Series X y Series S. Conviene esperar especificaciones técnicas de Remedy y pruebas de la versión final antes de comprar hardware únicamente para este juego.']}
    ], sources:[{label:'Steam — requisitos oficiales',url:steam},{label:'Sitio oficial',url:official}]
  },
  {
    lang:'es-419', slug:'combate-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant: combate, Aberrant y sistema de builds',
    description:'Cómo funcionan el combate cercano, las formas de Aberrant, habilidades, ejecuciones, Talentos, Artefactos y la configuración en The Gap.',
    label:'Combate', answer:'El combate combina el arma cambiante Aberrant, poderes paranaturales y builds configuradas en The Gap. Los golpes cuerpo a cuerpo recuperan recurso, las habilidades aturden y las ejecuciones aumentan temporalmente el daño cercano.',
    sections:[
      {heading:'El ciclo de combate',paragraphs:['Aberrant permite elegir una Primary Form, una Secondary Form y un Combo Ender para combinar velocidad, alcance y función. Dylan añade tres Combat Abilities. El sistema favorece la presión: los golpes melee restauran recurso, los poderes preparan ejecuciones y estas fortalecen durante un tiempo el daño cuerpo a cuerpo.','Barrage ofrece ataque directo a distancia, Shield combina protección y avance, y Seekers invoca presión autónoma. Mold Turrets y los efectos de estado confirman que también existen opciones tácticas además de las cadenas rápidas de golpes.']},
      {heading:'Buildcrafting en The Gap',paragraphs:['The Gap organiza Combat Abilities sobrenaturales, formas de Aberrant y Talentos; los Artefactos agregan otros modificadores. Algunos Resonants presentan recompensas ramificadas y no todo puede obtenerse en la primera partida, de modo que la especialización es una decisión real.','Antes del lanzamiento se puede explicar una build por su objetivo: control de grupos, daño a un solo enemigo, defensa o cobertura a distancia. Sin costos, enfriamientos y cifras finales no existe fundamento para declarar una configuración como la mejor o publicar una lista de niveles fiable.']},
      {heading:'Límites de las demostraciones',paragraphs:['Las presentaciones oficiales permiten verificar la estructura y el papel de las habilidades, pero no el balance definitivo. No convertimos animaciones de tráiler en porcentajes, tiempos de recarga o tasas de aparición inventadas.']}
    ], sources:[{label:'PlayStation Blog — combate y builds',url:combat},{label:'Steam — descripción oficial',url:steam}]
  },
  {
    lang:'zh-TW', slug:'release-date', englishPath:'/release-date/',
    title:'CONTROL Resonant 發售日期、平台與版本',
    description:'依據Remedy與官方商店資料核對2026年9月24日發售日期，完整整理PS5、Xbox、PC、Mac平台、預購獎勵、數位豪華版內容、提前48小時遊玩安排與尚未公布的解鎖資訊。',
    label:'發售資訊', answer:'CONTROL Resonant 將於2026年9月24日登上PS5、Xbox Series X|S與PC。Mac版預定在2026年稍後推出；PS5數位豪華版目前標示可提前48小時遊玩。',
    sections:[
      {heading:'已確認的日期與平台',paragraphs:['Remedy已宣布遊戲在2026年9月24日全球發售，首發平台包含PS5、Xbox Series X|S，以及透過Steam與Epic Games Store推出的PC版；GeForce NOW也被列為首發雲端選項。macOS版會在2026年稍後透過Steam與App Store推出，但尚未公布確切日期。','官方目前沒有宣布PS4、Xbox One或Nintendo Switch版本。零售商預留頁面與社群傳聞並非開發商或平台方確認，因此本站不會把它們列為預定平台。']},
      {heading:'版本、預購與提前遊玩',paragraphs:['Steam列出標準版與數位豪華版。豪華版包含遊戲本體、數位美術集、原聲帶、Untapped Artifact、Starter Resource Bundle與AWE Mission Outfit；預購獎勵則有Hiss Corruption Outfit和Pickpocket’s Tool Artifact。','PlayStation Store為PS5數位豪華版標示48小時提前遊玩，若條件不變即對應9月22日。實際解鎖時刻、預載、價格與地區內容仍須以購買區域的商店頁面為準。']},
      {heading:'尚未確定的項目',paragraphs:['目前沒有統一的全球解鎖時間、Mac版精確日期，也沒有完整的實體版矩陣。本站只會在Remedy或平台方公布可驗證資訊後更新，不引用沒有來源的倒數或推測。']}
    ], sources:[{label:'CONTROL Resonant 官方網站',url:official},{label:'Steam 官方商店',url:steam}]
  },
  {
    lang:'zh-TW', slug:'platforms-system-requirements', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant 平台與PC配備需求',
    description:'整理PS5、Xbox Series X|S、PC、Mac、GeForce NOW支援，以及最低與建議配備、100GB容量及尚未公開的主機效能模式。',
    label:'平台配備', answer:'首發平台為PS5、Xbox Series X|S與PC。Steam版需要64位元Windows 10/11、16GB記憶體和100GB空間；Mac版安排在2026年稍後推出。',
    sections:[
      {heading:'主機、PC、Mac與雲端',paragraphs:['2026年9月24日首發涵蓋PS5、Xbox Series X|S與PC。PC版透過Steam及Epic Games Store發行，GeForce NOW計畫同步支援；Mac版則會在之後透過Steam與App Store推出。','PS4、Xbox One與Nintendo Switch版本尚未公布。Steam Deck也沒有官方Verified或Playable評級，僅僅在Steam販售不能證明掌機相容性。']},
      {heading:'官方PC配備',paragraphs:['最低配備為Intel i5-8500或同級AMD處理器、16GB記憶體、GTX 1070或6GB RX 5600 XT，以及100GB可用空間。建議配備為Ryzen 7 3700X或同級Intel處理器、RTX 3070或8GB RX 6700 XT。','Steam尚未替兩組配備標示目標解析度、畫質或幀率，因此不能據此保證4K、60fps、光線追蹤或幀生成表現。同名筆電GPU的效能也可能不同於桌上型版本。']},
      {heading:'主機效能仍待公布',paragraphs:['PS5、PS5 Pro、Series X與Series S的完整畫質及效能模式尚未公開。若準備為本作升級硬體，建議等待Remedy技術說明與正式版測試。','PC玩家也應同時比較顯示記憶體、GPU級別、處理器與系統記憶體，而不是只看單一零件。官方配備代表支援門檻，並不等於所有場景都有固定幀率，上市後的驅動與更新也會影響結果。']}
    ], sources:[{label:'Steam 官方系統需求',url:steam},{label:'官方網站',url:official}]
  },
  {
    lang:'zh-TW', slug:'combat-builds', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant 戰鬥、Aberrant與Build系統',
    description:'依據官方戰鬥說明，完整解釋近戰資源循環、Aberrant武器形態、Combat Ability、處決、Talent、Artifact及The Gap配裝邏輯，並標明尚未公開的數值與平衡資訊。',
    label:'戰鬥Build', answer:'戰鬥由變形近戰武器Aberrant、超自然能力與The Gap中的Build共同構成。近戰命中恢復能力資源，能力使敵人暈眩，處決則暫時提高近戰傷害。',
    sections:[
      {heading:'戰鬥循環如何運作',paragraphs:['Aberrant可選擇Primary Form、Secondary Form與Combo Ender，用來組合速度、距離及戰鬥職責；Dylan還能裝備三項Combat Ability。系統鼓勵主動進攻：近戰補充資源，能力創造處決機會，處決後再強化近戰輸出。','Barrage提供直接遠程攻擊，Shield兼顧防護與衝撞，Seekers召喚自動攻擊單位。Mold Turret和狀態效果也證明Build並非只有高速貼身一種玩法。']},
      {heading:'在The Gap建立Build',paragraphs:['The Gap負責配置超自然Combat Ability、Aberrant Weapon Form與Talent，Artifact則提供額外修正。部分Resonant Boss存在分支獎勵，而且首輪不能解鎖全部內容，因此選擇與專精是明確的系統設計。','上市前可以依群體控制、單體傷害、防禦穩定性或遠程補位討論Build，但尚未公開的資源消耗、冷卻與最終數值不足以支撐「最強Build」排名。']},
      {heading:'試玩資料的界線',paragraphs:['官方展示能確認機制和定位，卻不代表最終平衡。本站不會從預告動畫推算傷害倍率、掉落率或冷卻時間；上市後會依遊戲內數值和版本號更新。','同樣地，已展示的能力並不等於完整技能清單。新的Resonant獎勵、Talent節點與Artifact效果只有在官方公布或正式版可驗證後才會建立獨立資料頁。']}
    ], sources:[{label:'PlayStation Blog 戰鬥與Build說明',url:combat},{label:'Steam 官方介紹',url:steam}]
  },
  {
    lang:'pl', slug:'data-premiery', englishPath:'/release-date/',
    title:'CONTROL Resonant: data premiery, platformy i edycje',
    description:'Potwierdzona premiera 24 września 2026, PS5, Xbox, PC, Mac, bonusy za zamówienie i wczesny dostęp w wydaniu Digital Deluxe.',
    label:'Premiera', answer:'CONTROL Resonant ukaże się 24 września 2026 roku na PS5, Xbox Series X|S i PC. Wersja Mac ma pojawić się później w 2026 roku, a Digital Deluxe na PS5 obecnie oferuje 48 godzin wcześniejszego dostępu.',
    sections:[
      {heading:'Potwierdzona data i platformy',paragraphs:['Remedy wyznaczyło światową premierę na 24 września 2026 roku. Tego dnia gra trafi na PS5, Xbox Series X|S oraz PC przez Steam i Epic Games Store; GeForce NOW jest wymieniane jako opcja grania w chmurze od premiery. Wydanie macOS pojawi się później w 2026 roku w Steam i App Store, ale bez dokładnej daty.','Nie zapowiedziano wersji na PS4, Xbox One ani Nintendo Switch. Tymczasowa karta sprzedawcy lub pogłoska społeczności nie zastępuje potwierdzenia studia albo właściciela platformy, dlatego nie oznaczamy tych systemów jako planowanych.']},
      {heading:'Edycje i zamówienie przedpremierowe',paragraphs:['Steam pokazuje edycję standardową i Digital Deluxe. Deluxe zawiera grę, cyfrowy album grafik, ścieżkę dźwiękową, Artefakt Untapped, początkowy pakiet zasobów oraz strój AWE Mission. Za zamówienie przed premierą przewidziano strój Hiss Corruption i Artefakt Pickpocket’s Tool.','PlayStation Store reklamuje 48 godzin wcześniejszego dostępu do Digital Deluxe na PS5, co przy niezmienionych warunkach wskazuje 22 września. Godzina odblokowania, preload, cena i zawartość regionalna powinny zostać sprawdzone bezpośrednio w sklepie zakupu.']},
      {heading:'Informacje nadal nieznane',paragraphs:['Nie opublikowano jednej globalnej godziny startu, dokładnej daty wersji Mac ani pełnego zestawienia wydań pudełkowych. Pola te zaktualizujemy dopiero po komunikacie Remedy lub platformy, bez korzystania z niezweryfikowanych liczników.']}
    ], sources:[{label:'Oficjalna strona CONTROL Resonant',url:official},{label:'Oficjalna karta Steam',url:steam}]
  },
  {
    lang:'pl', slug:'platformy-wymagania', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant: platformy i wymagania PC',
    description:'Potwierdzone platformy, wymagania minimalne i zalecane, 100 GB miejsca, Mac, GeForce NOW oraz granice danych o wydajności.',
    label:'Platformy', answer:'CONTROL Resonant zadebiutuje na PS5, Xbox Series X|S i PC. Steam wymaga 64-bitowego Windows 10/11, 16 GB RAM i 100 GB miejsca; wersja Mac ukaże się później w 2026 roku.',
    sections:[
      {heading:'Konsole, PC, Mac i chmura',paragraphs:['Premiera 24 września obejmuje PS5, Xbox Series X|S i PC. Na komputerach gra będzie sprzedawana przez Steam i Epic Games Store, a GeForce NOW zapowiedziano jako opcję chmurową. Wersja Mac przez Steam i App Store pojawi się w późniejszej części 2026 roku.','Nie potwierdzono PS4, Xbox One ani Nintendo Switch. Steam Deck również nie ma oficjalnej klasyfikacji Verified lub Playable; sama obecność produktu w Steam nie gwarantuje zgodności z urządzeniem.']},
      {heading:'Oficjalne wymagania PC',paragraphs:['Minimum obejmuje Intel i5-8500 lub odpowiednik AMD, 16 GB RAM, GTX 1070 albo RX 5600 XT z 6 GB oraz 100 GB wolnego miejsca. Konfiguracja zalecana wskazuje Ryzen 7 3700X lub odpowiednik Intela, RTX 3070 albo RX 6700 XT z 8 GB.','Steam nie przypisał tym konfiguracjom rozdzielczości, jakości grafiki ani liczby klatek. Nie można więc obiecać 4K, 60 fps, ray tracingu lub generowania klatek. Mobilne układy graficzne o podobnej nazwie mogą również działać inaczej niż modele desktopowe.']},
      {heading:'Wydajność konsol',paragraphs:['Nie ma jeszcze pełnej tabeli trybów dla PS5, PS5 Pro, Series X i Series S. Przed zakupem sprzętu specjalnie dla tej gry warto poczekać na dane techniczne Remedy oraz testy wersji premierowej.']}
    ], sources:[{label:'Steam — oficjalne wymagania',url:steam},{label:'Oficjalna strona',url:official}]
  },
  {
    lang:'pl', slug:'walka-buildy', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant: walka, Aberrant i system buildów',
    description:'Działanie walki wręcz, form Aberrant, zdolności, egzekucji, Talentów, Artefaktów i konfigurowania buildów w The Gap.',
    label:'Walka', answer:'Walka łączy zmienną broń Aberrant, moce paranormalne i buildy ustawiane w The Gap. Trafienia wręcz odnawiają zasób, zdolności ogłuszają, a egzekucje czasowo wzmacniają obrażenia w zwarciu.',
    sections:[
      {heading:'Pętla walki',paragraphs:['Aberrant pozwala dobrać Primary Form, Secondary Form i Combo Ender, łącząc szybkość, zasięg i różne zadania. Dylan wyposaża ponadto trzy Combat Abilities. System nagradza nacisk: ciosy wręcz przywracają zasób, moce otwierają egzekucje, a egzekucje na pewien czas zwiększają obrażenia z bliska.','Barrage zapewnia bezpośredni atak dystansowy, Shield łączy ochronę z natarciem, a Seekers przywołuje samodzielną presję. Mold Turrets i efekty statusu potwierdzają też bardziej taktyczne konfiguracje, nie tylko szybkie kombinacje.']},
      {heading:'Buildcrafting w The Gap',paragraphs:['The Gap organizuje paranormalne Combat Abilities, formy Aberrant i Talenty, natomiast Artefakty dokładają modyfikatory. Część Resonantów oferuje rozgałęzione nagrody i nie wszystko da się zdobyć w pierwszym przejściu, więc specjalizacja jest rzeczywistą decyzją.','Przed premierą można opisywać build według funkcji: kontrola tłumu, obrażenia jednego celu, bezpieczeństwo lub wsparcie dystansowe. Bez kosztów, czasów odnowienia i końcowych liczb nie ma podstaw do wiarygodnego rankingu najlepszych konfiguracji.']},
      {heading:'Granice materiałów pokazowych',paragraphs:['Oficjalne prezentacje potwierdzają strukturę i role zdolności, lecz nie ostateczny balans. Nie zamieniamy animacji zwiastuna w wymyślone procenty, czasy odnowienia lub szanse na przedmiot.']}
    ], sources:[{label:'PlayStation Blog — walka i buildy',url:combat},{label:'Steam — oficjalny opis',url:steam}]
  },
  {
    lang:'ru', slug:'data-vyhoda', englishPath:'/release-date/',
    title:'CONTROL Resonant: дата выхода, платформы и издания',
    description:'Подтвержденная дата 24 сентября 2026 года, PS5, Xbox, PC, Mac, бонусы предзаказа, Digital Deluxe и ранний доступ.',
    label:'Релиз', answer:'CONTROL Resonant выйдет 24 сентября 2026 года на PS5, Xbox Series X|S и PC. Версия для Mac запланирована позже в 2026 году, а Digital Deluxe на PS5 сейчас обещает 48 часов раннего доступа.',
    sections:[
      {heading:'Подтвержденные дата и платформы',paragraphs:['Remedy назначила мировой релиз на 24 сентября 2026 года. В этот день игра появится на PS5, Xbox Series X|S и PC в Steam и Epic Games Store; GeForce NOW также указан как облачный вариант на старте. Версия macOS выйдет через Steam и App Store позднее в 2026 году, но точная дата пока не названа.','Версии для PS4, Xbox One и Nintendo Switch не анонсированы. Временная карточка магазина или слух сообщества не равны подтверждению разработчика либо владельца платформы, поэтому мы не называем эти системы запланированными.']},
      {heading:'Издания и предзаказ',paragraphs:['Steam перечисляет стандартное издание и Digital Deluxe. Deluxe включает игру, цифровой артбук, саундтрек, артефакт Untapped, стартовый набор ресурсов и костюм AWE Mission. За предзаказ заявлены костюм Hiss Corruption и артефакт Pickpocket’s Tool.','PlayStation Store указывает 48 часов раннего доступа для Digital Deluxe на PS5, что при неизменных условиях означает 22 сентября. Точное время запуска, предзагрузка, цена и региональный состав должны проверяться в магазине, где совершается покупка.']},
      {heading:'Что еще не объявлено',paragraphs:['Единое мировое время разблокировки, точная дата Mac и полная таблица физических изданий не опубликованы. Мы обновим эти сведения после сообщения Remedy или платформ, не используя сторонние таймеры без источника.']}
    ], sources:[{label:'Официальный сайт CONTROL Resonant',url:official},{label:'Официальная страница Steam',url:steam}]
  },
  {
    lang:'ru', slug:'platformy-trebovaniya', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant: платформы и системные требования PC',
    description:'Подтвержденные платформы, минимальные и рекомендуемые требования, 100 ГБ, Mac, GeForce NOW и границы данных о производительности.',
    label:'Платформы', answer:'На старте CONTROL Resonant поддерживает PS5, Xbox Series X|S и PC. Steam требует 64-битную Windows 10/11, 16 ГБ RAM и 100 ГБ; версия Mac выйдет позже в 2026 году.',
    sections:[
      {heading:'Консоли, PC, Mac и облако',paragraphs:['Релиз 24 сентября охватывает PS5, Xbox Series X|S и PC. Компьютерная версия продается через Steam и Epic Games Store, а GeForce NOW заявлен как облачный вариант. Mac через Steam и App Store появится позднее в 2026 году.','PS4, Xbox One и Nintendo Switch не подтверждены. У Steam Deck пока нет официальной оценки Verified или Playable; само наличие игры в Steam не гарантирует совместимость с портативным устройством.']},
      {heading:'Официальные требования PC',paragraphs:['Минимум включает Intel i5-8500 или аналог AMD, 16 ГБ RAM, GTX 1070 либо RX 5600 XT с 6 ГБ и 100 ГБ свободного места. Рекомендуется Ryzen 7 3700X или аналог Intel, RTX 3070 либо RX 6700 XT с 8 ГБ.','Steam не связал эти конфигурации с разрешением, настройками графики или частотой кадров. Поэтому нельзя обещать 4K, 60 fps, трассировку лучей или генерацию кадров. Мобильные видеокарты с похожими названиями тоже могут работать иначе, чем настольные модели.']},
      {heading:'Производительность консолей',paragraphs:['Полная таблица режимов PS5, PS5 Pro, Series X и Series S еще не опубликована. Перед покупкой оборудования специально для игры лучше дождаться технических данных Remedy и тестов финальной версии.']}
    ], sources:[{label:'Steam — официальные требования',url:steam},{label:'Официальный сайт',url:official}]
  },
  {
    lang:'ru', slug:'boy-i-bildy', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant: бой, Aberrant и система билдов',
    description:'Ближний бой, формы Aberrant, способности, добивания, Talents, Artifacts и настройка билдов в The Gap по официальным материалам.',
    label:'Боевая система', answer:'Бой объединяет изменяемое оружие Aberrant, паранормальные силы и билды из The Gap. Удары в ближнем бою восстанавливают ресурс, способности оглушают, а добивания временно усиливают урон вблизи.',
    sections:[
      {heading:'Боевой цикл',paragraphs:['Для Aberrant выбираются Primary Form, Secondary Form и Combo Ender, чтобы сочетать скорость, дальность и разные задачи. Dylan также экипирует три Combat Abilities. Игра поощряет напор: ближние удары возвращают ресурс, силы создают возможность добивания, после чего временный бонус усиливает следующую серию атак.','Barrage дает прямой дальний удар, Shield совмещает защиту с наступательным рывком, а Seekers создает автономное давление. Mold Turrets и статусные эффекты подтверждают наличие тактических вариантов помимо быстрых комбинаций.']},
      {heading:'Настройка в The Gap',paragraphs:['The Gap объединяет сверхъестественные Combat Abilities, формы Aberrant и Talents; Artifacts добавляют модификаторы. Некоторые Resonants предлагают разветвленный выбор наград, а все способности нельзя получить за первое прохождение, поэтому специализация становится настоящим решением.','До релиза билд разумно описывать по назначению: контроль группы, урон одной цели, защита или дальнее прикрытие. Без стоимости ресурсов, перезарядки и финальных чисел нет оснований объявлять лучший вариант или составлять достоверный тир-лист.']},
      {heading:'Границы превью',paragraphs:['Официальные демонстрации подтверждают устройство системы и роли способностей, но не финальный баланс. Мы не превращаем анимации трейлера в выдуманные проценты, перезарядки или шансы выпадения.']}
    ], sources:[{label:'PlayStation Blog — бой и билды',url:combat},{label:'Steam — официальное описание',url:steam}]
  },
  {
    lang:'tr', slug:'cikis-tarihi', englishPath:'/release-date/',
    title:'CONTROL Resonant çıkış tarihi, platformlar ve sürümler',
    description:'24 Eylül 2026 çıkışı, PS5, Xbox, PC, Mac, ön sipariş bonusları, Digital Deluxe ve erken erişim resmî kaynaklarla açıklanıyor.',
    label:'Çıkış', answer:'CONTROL Resonant 24 Eylül 2026 tarihinde PS5, Xbox Series X|S ve PC için çıkacak. Mac sürümü 2026 içinde daha sonra gelecek; PS5 Digital Deluxe şu anda 48 saat erken erişim sunuyor.',
    sections:[
      {heading:'Doğrulanan tarih ve platformlar',paragraphs:['Remedy dünya çapındaki çıkış tarihini 24 Eylül 2026 olarak açıkladı. O gün PS5, Xbox Series X|S ve Steam ile Epic Games Store üzerinden PC sürümleri yayımlanacak; GeForce NOW da çıkış günündeki bulut seçeneği olarak listeleniyor. macOS sürümü Steam ve App Store üzerinden 2026 içinde daha sonra gelecek, ancak kesin gün henüz verilmedi.','PS4, Xbox One ve Nintendo Switch sürümleri duyurulmadı. Bir mağazanın geçici ürün kaydı veya topluluk söylentisi, stüdyo ya da platform sahibinin onayı değildir; bu nedenle söz konusu sistemleri planlanan platformlar olarak göstermiyoruz.']},
      {heading:'Sürümler ve ön sipariş',paragraphs:['Steam standart sürüm ile Digital Deluxe sürümünü listeliyor. Deluxe; oyun, dijital sanat kitabı, müzik albümü, Untapped Artifact, başlangıç kaynak paketi ve AWE Mission kıyafetini içeriyor. Ön sipariş bonusları Hiss Corruption kıyafeti ile Pickpocket’s Tool Artifact.','PlayStation Store, PS5 Digital Deluxe için 48 saat erken erişim gösteriyor; koşullar değişmezse bu tarih 22 Eylül olur. Kesin açılış saati, ön yükleme, fiyat ve bölgesel içerik satın alınan mağazada kontrol edilmelidir.']},
      {heading:'Henüz açıklanmayanlar',paragraphs:['Tek bir küresel açılış saati, Mac sürümünün kesin tarihi ve fiziksel sürümlerin tam tablosu yayımlanmadı. Bu alanları Remedy veya platformlar doğrulanabilir bilgi sunduğunda güncelleyeceğiz; kaynaksız geri sayımları kanıt olarak kullanmıyoruz.']}
    ], sources:[{label:'CONTROL Resonant resmî sitesi',url:official},{label:'Steam resmî mağaza sayfası',url:steam}]
  },
  {
    lang:'tr', slug:'platformlar-sistem-gereksinimleri', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant platformları ve PC sistem gereksinimleri',
    description:'Onaylanan platformlar, minimum ve önerilen PC gereksinimleri, 100 GB alan, Mac, GeForce NOW ve performans bilgisinin sınırları.',
    label:'Platformlar', answer:'CONTROL Resonant çıkışta PS5, Xbox Series X|S ve PC’yi destekler. Steam 64 bit Windows 10/11, 16 GB RAM ve 100 GB alan ister; Mac sürümü 2026 içinde daha sonra çıkacaktır.',
    sections:[
      {heading:'Konsol, PC, Mac ve bulut',paragraphs:['24 Eylül çıkışı PS5, Xbox Series X|S ve PC’yi kapsıyor. Bilgisayarda Steam ve Epic Games Store dağıtımı bulunurken GeForce NOW bulut seçeneği olarak duyuruldu. Steam ve App Store üzerinden Mac sürümü 2026’nın daha sonraki bölümünde gelecek.','PS4, Xbox One veya Nintendo Switch sürümü doğrulanmadı. Steam Deck için de resmî Verified ya da Playable derecesi yok; oyunun Steam’de bulunması tek başına cihaz uyumluluğunu garanti etmez.']},
      {heading:'Resmî PC gereksinimleri',paragraphs:['Minimum yapılandırma Intel i5-8500 veya AMD eşdeğeri, 16 GB RAM, GTX 1070 ya da 6 GB RX 5600 XT ve 100 GB boş alan ister. Önerilen yapılandırma Ryzen 7 3700X veya Intel eşdeğeri ile RTX 3070 ya da 8 GB RX 6700 XT gösterir.','Steam bu yapılandırmaları çözünürlük, kalite ayarı veya kare hızıyla ilişkilendirmedi. Bu nedenle 4K, 60 fps, ışın izleme veya kare üretimi sözü verilemez. Benzer isimli dizüstü GPU’ları da masaüstü modellerinden farklı performans gösterebilir.']},
      {heading:'Konsol performansı',paragraphs:['PS5, PS5 Pro, Series X ve Series S için tam kalite ve performans modu tablosu henüz yayımlanmadı. Sırf bu oyun için donanım almadan önce Remedy’nin teknik açıklamalarını ve son sürüm testlerini beklemek daha güvenlidir.']}
    ], sources:[{label:'Steam resmî gereksinimler',url:steam},{label:'Resmî site',url:official}]
  },
  {
    lang:'tr', slug:'savas-build-sistemleri', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant savaş, Aberrant ve build sistemleri',
    description:'Yakın dövüş, Aberrant biçimleri, yetenekler, infazlar, Talents, Artifacts ve The Gap içindeki build düzeni açıklanıyor.',
    label:'Savaş', answer:'Savaş, biçim değiştiren Aberrant silahını, doğaüstü güçleri ve The Gap’te hazırlanan buildleri birleştirir. Yakın dövüş kaynağı yeniler, yetenekler sersemletir, infazlar ise yakın hasarı geçici olarak artırır.',
    sections:[
      {heading:'Savaş döngüsü',paragraphs:['Aberrant için hız, menzil ve görevleri birleştiren Primary Form, Secondary Form ve Combo Ender seçilir. Dylan ayrıca üç Combat Ability kuşanır. Sistem saldırganlığı ödüllendirir: yakın vuruşlar kaynağı doldurur, güçler infaz fırsatı açar ve infaz bonusu sonraki yakın saldırıları güçlendirir.','Barrage doğrudan menzil, Shield koruma ile saldırı hamlesi, Seekers ise bağımsız baskı sağlar. Mold Turrets ve durum etkileri hızlı komboların yanında taktiksel buildlerin de bulunduğunu doğrular.']},
      {heading:'The Gap’te build kurmak',paragraphs:['The Gap doğaüstü Combat Abilities, Aberrant biçimleri ve Talents seçeneklerini düzenler; Artifacts ek değiştiriciler sunar. Bazı Resonants dallanan ödüllere sahiptir ve ilk oynayışta her şey açılamaz, dolayısıyla uzmanlaşma gerçek bir ilerleme kararıdır.','Çıkıştan önce bir build; kalabalık kontrolü, tek hedef hasarı, savunma güvenliği veya uzak menzil desteği gibi amacına göre anlatılabilir. Kaynak maliyetleri, bekleme süreleri ve son değerler olmadan en güçlü build ya da güvenilir seviye listesi ilan edilemez.']},
      {heading:'Ön izleme sınırları',paragraphs:['Resmî demolar sistemin yapısını ve yetenek rollerini doğrular, ancak son dengeyi göstermez. Fragman animasyonlarından yüzdeler, bekleme süreleri veya eşya düşürme oranları uydurmuyoruz.']}
    ], sources:[{label:'PlayStation Blog — savaş ve buildler',url:combat},{label:'Steam resmî açıklama',url:steam}]
  },
  {
    lang:'uk', slug:'data-vyhodu', englishPath:'/release-date/',
    title:'CONTROL Resonant: дата виходу, платформи та видання',
    description:'Підтверджена дата 24 вересня 2026 року, PS5, Xbox, PC, Mac, бонуси передзамовлення, Digital Deluxe і ранній доступ.',
    label:'Реліз', answer:'CONTROL Resonant вийде 24 вересня 2026 року на PS5, Xbox Series X|S і PC. Версію Mac заплановано пізніше у 2026 році, а Digital Deluxe на PS5 зараз пропонує 48 годин раннього доступу.',
    sections:[
      {heading:'Підтверджені дата й платформи',paragraphs:['Remedy призначила світовий реліз на 24 вересня 2026 року. Цього дня гра з’явиться на PS5, Xbox Series X|S і PC через Steam та Epic Games Store; GeForce NOW також зазначено як хмарний варіант на старті. Версія macOS вийде через Steam і App Store пізніше у 2026 році, однак точної дати ще немає.','Версії для PS4, Xbox One і Nintendo Switch не анонсовано. Тимчасова картка магазину або чутка спільноти не замінює підтвердження розробника чи власника платформи, тому ми не називаємо ці системи запланованими.']},
      {heading:'Видання й передзамовлення',paragraphs:['Steam перелічує стандартне видання та Digital Deluxe. Deluxe містить гру, цифровий артбук, саундтрек, артефакт Untapped, стартовий набір ресурсів і костюм AWE Mission. За передзамовлення заявлено костюм Hiss Corruption та артефакт Pickpocket’s Tool.','PlayStation Store вказує 48 годин раннього доступу для Digital Deluxe на PS5, що за незмінних умов означає 22 вересня. Точний час запуску, попереднє завантаження, ціну й регіональний склад слід перевіряти в магазині покупки.']},
      {heading:'Що ще не оголошено',paragraphs:['Єдиного світового часу розблокування, точної дати Mac і повної таблиці фізичних видань не опубліковано. Ми оновимо ці дані після повідомлення Remedy або платформ і не використовуємо сторонні таймери без джерела.']}
    ], sources:[{label:'Офіційний сайт CONTROL Resonant',url:official},{label:'Офіційна сторінка Steam',url:steam}]
  },
  {
    lang:'uk', slug:'platformy-vymohy', englishPath:'/guides/platforms-and-performance/',
    title:'CONTROL Resonant: платформи та системні вимоги PC',
    description:'Підтверджені платформи, мінімальні й рекомендовані вимоги, 100 ГБ, Mac, GeForce NOW та межі даних про продуктивність.',
    label:'Платформи', answer:'На старті CONTROL Resonant підтримує PS5, Xbox Series X|S і PC. Steam вимагає 64-бітну Windows 10/11, 16 ГБ RAM і 100 ГБ; версія Mac вийде пізніше у 2026 році.',
    sections:[
      {heading:'Консолі, PC, Mac і хмара',paragraphs:['Реліз 24 вересня охоплює PS5, Xbox Series X|S і PC. Комп’ютерну версію продаватимуть у Steam та Epic Games Store, а GeForce NOW заявлено як хмарний варіант. Mac через Steam і App Store з’явиться пізніше у 2026 році.','PS4, Xbox One і Nintendo Switch не підтверджено. Steam Deck також не має офіційної оцінки Verified або Playable; сама наявність гри у Steam не гарантує сумісність із портативним пристроєм.']},
      {heading:'Офіційні вимоги PC',paragraphs:['Мінімум охоплює Intel i5-8500 або аналог AMD, 16 ГБ RAM, GTX 1070 чи RX 5600 XT із 6 ГБ і 100 ГБ вільного місця. Рекомендовано Ryzen 7 3700X або аналог Intel, RTX 3070 чи RX 6700 XT із 8 ГБ.','Steam не пов’язав ці конфігурації з роздільною здатністю, налаштуваннями графіки або частотою кадрів. Тому не можна обіцяти 4K, 60 fps, трасування променів чи генерацію кадрів. Мобільні відеокарти зі схожими назвами також можуть працювати інакше за настільні моделі.']},
      {heading:'Продуктивність консолей',paragraphs:['Повну таблицю режимів PS5, PS5 Pro, Series X і Series S ще не опубліковано. Перед придбанням обладнання спеціально для гри краще дочекатися технічних даних Remedy та тестів фінальної версії.']}
    ], sources:[{label:'Steam — офіційні вимоги',url:steam},{label:'Офіційний сайт',url:official}]
  },
  {
    lang:'uk', slug:'biy-i-bildy', englishPath:'/guides/combat-and-build-systems-explained/',
    title:'CONTROL Resonant: бій, Aberrant і система білдів',
    description:'Ближній бій, форми Aberrant, здібності, добивання, Talents, Artifacts і налаштування білдів у The Gap за офіційними матеріалами.',
    label:'Бойова система', answer:'Бій поєднує змінну зброю Aberrant, паранормальні сили та білди з The Gap. Удари в ближньому бою відновлюють ресурс, здібності приголомшують, а добивання тимчасово посилюють ближню шкоду.',
    sections:[
      {heading:'Бойовий цикл',paragraphs:['Для Aberrant обираються Primary Form, Secondary Form і Combo Ender, щоб поєднати швидкість, дальність і різні завдання. Dylan також споряджає три Combat Abilities. Гра заохочує натиск: ближні удари повертають ресурс, сили створюють можливість добивання, а його бонус посилює наступну серію атак.','Barrage дає прямий дальній удар, Shield поєднує захист із наступальним ривком, а Seekers створює автономний тиск. Mold Turrets і статусні ефекти підтверджують наявність тактичних варіантів крім швидких комбінацій.']},
      {heading:'Налаштування в The Gap',paragraphs:['The Gap об’єднує надприродні Combat Abilities, форми Aberrant і Talents; Artifacts додають модифікатори. Деякі Resonants пропонують розгалужений вибір нагород, а всі здібності не можна отримати за перше проходження, тому спеціалізація є справжнім рішенням.','До релізу білд доречно описувати за призначенням: контроль групи, шкода одній цілі, захист або дальня підтримка. Без вартості ресурсів, перезарядки й фінальних чисел немає підстав оголошувати найкращий варіант чи складати надійний тир-лист.']},
      {heading:'Межі прев’ю',paragraphs:['Офіційні демонстрації підтверджують структуру системи та ролі здібностей, але не фінальний баланс. Ми не перетворюємо анімації трейлера на вигадані відсотки, перезарядки або шанси випадіння.']}
    ], sources:[{label:'PlayStation Blog — бій і білди',url:combat},{label:'Steam — офіційний опис',url:steam}]
  },
];

export const officialLocaleGuidesV14: OfficialLocaleGuide[] = [
  ...officialLocaleGuidesV13,
  ...v14Guides,
];
