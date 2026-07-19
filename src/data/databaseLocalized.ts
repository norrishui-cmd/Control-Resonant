export type DatabaseLocale = 'de' | 'fr';

export const databaseCopy = {
  de: {
    path:'/de/datenbank/', title:'Control Resonant Datenbank: Charaktere, Gegenstände & Gameplay', description:'Geprüfte deutsche Datenbank zu Control Resonant mit Charakteren, Aberrant, Artefakten, Editionsgegenständen, Gameplay, Gegnern und Demo-Status.', eyebrow:'FBC // Aktueller Informationsindex', heading:'Control Resonant Spieldatenbank', intro:'Ein strukturierter Überblick über alle Eigenschaften, die Remedy und offizielle Plattformen tatsächlich veröffentlicht haben. Jeder Datensatz führt zu einer ausführlichen deutschen Seite, wenn genügend eigenständige Informationen vorliegen.', reviewed:'Quellen zuletzt geprüft: 19. Juli 2026', tracked:'23 geprüfte Datensätze', prerelease:'Daten vor Veröffentlichung', record:'Eintrag', type:'Typ', state:'Nachweis', detail:'Bestätigte Information', rule:'Qualitätsregel', ruleText:'Gerüchte, Fan-Namen und unbeschriftete Trailerbilder erzeugen keine eigene Seite. Ein Charakter, Gegenstand, Gegner oder eine Fähigkeit erhält erst dann einen indexierbaren URL, wenn eine offizielle Quelle das Thema identifiziert und genügend eigenständige Informationen für eine echte Suchfrage liefert.',
    groups:[
      {title:'Charaktere',summary:'Bestätigte Personen mit klarer Rolle.',records:[
        ['Dylan Faden','Spielbarer Protagonist','Bestätigt','Einziger spielbarer Charakter; ehemaliger FBC-Gefangener und Träger von Aberrant.','/de/dylan-faden/'],
        ['Jesse Faden','Vermisste FBC-Direktorin','Bestätigt','Dylans Schwester bleibt zentral, ist diesmal aber nicht die spielbare Hauptfigur.','/de/jesse-faden/'],
        ['Zoe De Vera','FBC-Feldagentin','Bestätigt','Dylans Handlerin in Manhattan und wichtiger Teil des nahtlosen Dialogsystems.','/de/zoe-de-vera/'],
      ]},
      {title:'Ausrüstung & Gegenstände',summary:'Waffen, Artefakte, Outfits und Editionsinhalte.',records:[
        ['Aberrant','Formwandelnde Nahkampfwaffe','Bestätigt','Wechselt zwischen Primärformen, Sekundärformen und Combo-Endern.','/de/kampfsystem-und-builds/'],
        ['Artefakte','Passive Ausrüstung','Bestätigt','Aus Untapped Artifacts in The Gap gefertigt; drei Slots im ersten Lauf und vier in NG+.','/de/new-game-plus-uebernahme/'],
        ['Vorbesteller-Set','2 Outfits + 1 Artefakt','Bestätigt','Hiss Corruption Outfit, Occult Outfit und Pickpocket’s Tool Artifact.','/de/vorbesteller-boni/'],
        ['Digital-Deluxe-Set','Outfit + Artefakt + Ressourcen','Bestätigt','AWE Mission Outfit, Untapped Artifact (Wallet) und Starter Resource Bundle.','/de/digital-deluxe-inhalte/'],
      ]},
      {title:'Gameplay-Systeme',summary:'Kampf, Builds, Quests und Fortbewegung.',records:[
        ['Kampf-Momentum','Kernsystem','Bestätigt','Nahkampf füllt die Fähigkeitsressource; Fähigkeiten betäuben; Exekutionen verstärken Nahkampfschaden.','/de/kampfsystem-und-builds/'],
        ['The Gap','Build-Raum','Bestätigt','Metaphysischer Ort für Fähigkeiten, Waffenformen, Talente und Artefakte.','/de/kampfsystem-und-builds/'],
        ['Resonant-Fähigkeiten','Boss-Belohnungen','Bestätigt','Große Resonants gewähren Kampffähigkeiten, teilweise mit verzweigten Entscheidungen.','/de/kampfsystem-und-builds/'],
        ['Dylan’s Journey','Hauptkampagne','Bestätigt','Zentrale Questlinie durch handgefertigte Zonen von Manhattan.','/de/charaktere-und-story/'],
        ['World Quests','Optionale Geschichten','Bestätigt','Eigenständige Erzählungen neben Kämpfen, Herausforderungen und Entdeckungen.','/de/open-world/'],
        ['Bewegungsset','Fortbewegung','Medienvorschau','Doppeldash, Doppelsprung und kurzes Schweben waren in der 90-Minuten-Demo spielbar.','/de/medien-demo-hands-on/'],
        ['New Game Plus','Wiederspielmodus','Bestätigt','Behält Kampffortschritt, setzt Story-Fortbewegung zurück und öffnet einen vierten Artefakt-Slot.','/de/new-game-plus-uebernahme/'],
      ]},
      {title:'Bedrohungen & Gegner',summary:'Benannte Fraktionen, Beschwörungen und Bossklassen.',records:[
        ['Hiss','Korrumpierende Kraft','Bestätigt','Kehrt als eine der Kräfte zurück, die Manhattan nach dem Fall des Oldest House überrennen.','/de/charaktere-und-story/'],
        ['Mold','Invasiver Mikroorganismus','Bestätigt','Wiederkehrende paranatürliche Bedrohung mit Verbindung zu Kampf und Beschwörungen.','/de/kampfsystem-und-builds/'],
        ['Mold Turrets','Spieler-Beschwörung','Bestätigt','Greifen selbstständig an und verursachen schädliche Statuseffekte.','/de/kampfsystem-und-builds/'],
        ['Seekers','Explosive Beschwörung','Bestätigt','Telekinetische Wesen, die angreifen, geworfen und gesprengt werden können.','/de/kampfsystem-und-builds/'],
        ['Resonants','Große Bosse','Bestätigt','Story-Bosse, deren Niederlage jeweils eine besondere Kampffähigkeit verleiht.','/de/kampfsystem-und-builds/'],
      ]},
      {title:'Demo & Verfügbarkeit',summary:'Öffentlicher Zugang, Medienvorschau und Release.',records:[
        ['Öffentliche Demo / Beta','Downloadbarer Test','Nicht angekündigt','Bis 19. Juli 2026 ist keine öffentliche Demo, Beta oder offene Testphase angekündigt.','/de/demo-beta-und-playtest/'],
        ['Medien-Demo','Pressevorschau','Durchgeführt','PlayStation Blog berichtet über eine ungefähr 90-minütige Hands-on-Sitzung.','/de/medien-demo-hands-on/'],
        ['Weltweite Veröffentlichung','Release','Bestätigt','24. September 2026 für PS5, Xbox Series X|S und PC; Mac folgt später 2026.','/de/erscheinungsdatum/'],
        ['PS5 Deluxe Early Access','48 Stunden früher','Bestätigt','Der Zugang beginnt auf PS5 am 22. September 2026.','/de/editionen-und-vorbestellung/'],
      ]},
    ]
  },
  fr: {
    path:'/fr/base-de-donnees/', title:'Base de données Control Resonant : personnages, objets et gameplay', description:'Base française vérifiée de Control Resonant couvrant personnages, Aberrant, Artefacts, objets d’édition, gameplay, ennemis et statut de la démo.', eyebrow:'FBC // Index de renseignement', heading:'Base de données Control Resonant', intro:'Un index structuré de ce que Remedy et les plateformes officielles ont réellement publié. Chaque entrée mène vers une page française détaillée lorsque les informations sont assez distinctes et utiles.', reviewed:'Sources vérifiées le 19 juillet 2026', tracked:'23 entrées suivies', prerelease:'Données avant sortie', record:'Entrée', type:'Type', state:'État de preuve', detail:'Information vérifiée', rule:'Règle de qualité', ruleText:'Les rumeurs, noms inventés par les fans et images sans légende ne créent pas de page. Un personnage, objet, ennemi ou pouvoir obtient une URL indexable uniquement lorsqu’une source officielle l’identifie et fournit assez de matière pour répondre à une véritable recherche.',
    groups:[
      {title:'Personnages',summary:'Personnes confirmées avec un rôle identifié.',records:[
        ['Dylan Faden','Protagoniste jouable','Confirmé','Seul personnage jouable; ancien détenu du FBC et utilisateur d’Aberrant.','/fr/dylan-faden/'],
        ['Jesse Faden','Directrice du FBC disparue','Confirmé','La sœur de Dylan reste centrale, mais elle n’est pas la protagoniste jouable.','/fr/jesse-faden/'],
        ['Zoe De Vera','Agente de terrain du FBC','Confirmé','Référente de Dylan dans Manhattan et ancrage du système de dialogues continus.','/fr/zoe-de-vera/'],
      ]},
      {title:'Équipement & objets',summary:'Armes, Artefacts, tenues et contenus d’édition.',records:[
        ['Aberrant','Arme de mêlée métamorphe','Confirmé','Alterner entre formes principales, secondaires et finisseurs de combo.','/fr/combat-et-builds/'],
        ['Artefacts','Équipement passif','Confirmé','Fabriqués dans The Gap; trois emplacements au premier parcours, quatre en NG+.','/fr/new-game-plus-transfert/'],
        ['Bonus de précommande','2 tenues + 1 Artefact','Confirmé','Hiss Corruption Outfit, Occult Outfit et Pickpocket’s Tool Artifact.','/fr/bonus-de-precommande/'],
        ['Contenu Digital Deluxe','Tenue + Artefact + ressources','Confirmé','AWE Mission Outfit, Untapped Artifact (Wallet) et Starter Resource Bundle.','/fr/contenu-digital-deluxe/'],
      ]},
      {title:'Systèmes de gameplay',summary:'Combat, builds, quêtes et déplacement.',records:[
        ['Boucle de momentum','Combat central','Confirmé','La mêlée restaure la ressource; les pouvoirs étourdissent; les exécutions renforcent la mêlée.','/fr/combat-et-builds/'],
        ['The Gap','Espace de build','Confirmé','Lieu métaphysique pour capacités, formes d’arme, talents et Artefacts.','/fr/combat-et-builds/'],
        ['Pouvoirs Resonant','Récompenses de boss','Confirmé','Les grands Resonants donnent des capacités, parfois avec des choix divergents.','/fr/combat-et-builds/'],
        ['Dylan’s Journey','Campagne principale','Confirmé','Ligne narrative centrale à travers des zones conçues à la main dans Manhattan.','/fr/personnages-et-histoire/'],
        ['World Quests','Récits optionnels','Confirmé','Histoires autonomes avec combats, défis, découvertes et activités.','/fr/monde-ouvert/'],
        ['Mouvements','Déplacement','Aperçu presse','Double dash, double saut et courte lévitation étaient jouables pendant la session média.','/fr/demo-presse-prise-en-main/'],
        ['New Game Plus','Mode de reprise','Confirmé','Conserve la progression de combat, réinitialise le déplacement narratif et ajoute un quatrième Artefact.','/fr/new-game-plus-transfert/'],
      ]},
      {title:'Menaces & ennemis',summary:'Forces, invocations et catégories de boss nommées.',records:[
        ['Hiss','Force corruptrice','Confirmé','Revient parmi les forces qui envahissent Manhattan après la chute de l’Oldest House.','/fr/personnages-et-histoire/'],
        ['Mold','Micro-organisme invasif','Confirmé','Menace paranaturelle liée à certains combats et invocations.','/fr/combat-et-builds/'],
        ['Mold Turrets','Invocation du joueur','Confirmé','Attaquent indépendamment et appliquent des effets négatifs.','/fr/combat-et-builds/'],
        ['Seekers','Invocation volatile','Confirmé','Entités télékinétiques capables d’attaquer, d’être lancées et de détoner.','/fr/combat-et-builds/'],
        ['Resonants','Boss majeurs','Confirmé','Rencontres de l’histoire dont la victoire accorde une capacité unique.','/fr/combat-et-builds/'],
      ]},
      {title:'Démo & disponibilité',summary:'Accès public, aperçu média et lancement.',records:[
        ['Démo publique / bêta','Essai téléchargeable','Non annoncé','Aucune démo publique, bêta ou phase ouverte annoncée au 19 juillet 2026.','/fr/demo-beta-et-playtest/'],
        ['Démo média','Aperçu presse','Effectué','PlayStation Blog rapporte une session d’environ 90 minutes.','/fr/demo-presse-prise-en-main/'],
        ['Lancement mondial','Sortie','Confirmé','24 septembre 2026 sur PS5, Xbox Series X|S et PC; Mac plus tard en 2026.','/fr/date-de-sortie/'],
        ['Accès avancé Deluxe PS5','48 heures','Confirmé','L’accès PS5 commence le 22 septembre 2026.','/fr/editions-et-precommande/'],
      ]},
    ]
  }
} as const;
