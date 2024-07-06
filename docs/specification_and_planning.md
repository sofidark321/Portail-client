## Système de suivi de navires à Marsa Maroc

### 1. Introduction

**1.1. Contexte :**  
Ce projet vise à développer un système web pour le suivi en temps réel des navires au sein des terminaux portuaires. L'application permettra aux clients et opérateurs de suivre la position des navires qui transportent leurs marchandises, de recevoir des notifications sur les mouvements, et d'accéder à des informations détaillées concernant chaque navire et sa cargaison.

**1.2. Objectifs :**  
- Fournir un suivi en temps réel des navires transportant la marchandise des clients.
- Envoyer des notifications automatiques lors des changements de position.
- Offrir une interface utilisateur intuitive, informative et sécurisée.

### 2. Fonctionnalités

**2.1. Suivi en temps réel :**  
- Affichage des positions des navires sur une carte interactive des terminaux.
- Mise à jour automatique des positions à intervalles réguliers (toutes les minutes).

**2.2. Notifications :**  
- Notifications push et par email lors de changements significatifs de la position des navires.
- Configuration par l'utilisateur de notifications personnalisées selon les préférences. (nice to have)

**2.3. Informations sur les navires :**  
- Informations détaillées pour chaque navire : nom, type, compagnie, statut actuel (chargement/déchargement/aucun), prochaine destination.
- Historique complet des déplacements du navire au sein des terminaux.

**2.4. Interface utilisateur :**  
- Conception responsive pour un usage optimal sur divers appareils (ordinateurs, tablettes).

**2.5. Gestion des utilisateurs :**  
- Différents niveaux d'accès (client, opérateur de terminal, administrateur).
- Authentification sécurisée avec options de récupération de compte. (nice to have)

**2.6. Tableau de Bord et Statistiques :**  
- Statistiques de performance pour les opérations de chargement et de déchargement.
- Rapports personnalisables sur l'activité des navires et l'efficacité des terminaux.
- Interface riche en fonctionnalités avec des visualisations interactives des mouvements des navires et des indicateurs clés de performance.

### 3. Acteurs du projet

1. **Client** :
   Les clients qui ont des marchandises transportées par les navires. Ils utilisent l'application pour suivre le déplacement de leurs cargaisons.
    - Se connecter / Se déconnecter.
    - Visualiser la carte des terminaux.
    - Suivre le navire contenant sa cargaison.
    - Recevoir des notifications.
    - Consulter les rapports de mouvement des navires.

3. **Opérateur de Terminal** :
   Responsables de la gestion des terminaux où les navires accostent et déchargent ou chargent les marchandises. Ils utilisent l'application pour mettre à jour les positions des navires et gérer les informations de cargaison.
    - Mettre à jour la position des navires.
    - Entrer et gérer les informations de cargaison.
    - Visualiser les rapports et les statistiques.
      
4. **Administrateur du Système** :
   Gère les aspects techniques de l'application, y compris la maintenance des comptes utilisateurs, la supervision de la sécurité de l'application et la gestion des données.
     - Gérer les comptes utilisateurs.

### 4. Technologies

**4.1. Frontend :**  
- Angular version 18 : Un excellent choix pour une gestion dynamique de l'interface utilisateur grâce à son architecture robuste et ses performances.
- Angular Material et CSS Frameworks (Tailwind ou Bootstrap) : Angular Material offre des composants de design cohérents et modernes. Tailwind offre une personnalisation facile sans beaucoup de surcharge de styles prédéfinis, tandis que Bootstrap peut être préféré pour des interfaces rapidement implémentables et largement reconnues.
- Cartographie interactive : Leaflet est un excellent choix pour les fonctionnalités de base, mais pour des fonctionnalités avancées, on sera peut-être contraint à créer une carte personnalisée.

**4.2. Backend :**  
- Spring Boot 3 : Pour la construction rapide de microservices avec une grande communauté et un support étendu.
- PostgreSQL : Idéal pour les données relationnelles et géospatiales.

**4.3. Sécurité :**  
- JWT (JSON Web Tokens) : Pour la gestion des sessions et l'authentification.
- Spring Security : Pour une intégration transparente avec Spring Boot, offrant des configurations personnalisées pour l'authentification et l'autorisation.

**4.5 DevOps :**
- Docker  : Pour la conteneurisation facilitant le déploiement dans l'environnement de production.
- CI/CD Pipelines (Github actions) : Pour automatiser les tests et les déploiements de votre application. (nice to have)

### 5. Exigences Non Fonctionnelles

**5.1. Performances :**  
- Temps de réponse inférieur à 3 secondes pour les interactions utilisateur.
- Support de 500 utilisateurs connectés simultanément sans dégradation de performance.

**5.2. Sécurité :**  
- Mécanismes de défense contre les attaques XSS, CSRF et SQL Injection.
- Chiffrement des données sensibles stockées et échangées.

**5.3. Couverture des tests :**  
- Tests Unitaires : Couvrir les composants backend (Spring Boot) et frontend (Angular) pour valider la logique de base et les fonctions individuelles.
- Utilisation de frameworks de test comme JUnit pour Java et Jasmine ou Karma pour Angular.

**5.4. Scalabilité :**  
- Architecture conçue pour faciliter l'ajout de ressources et la montée en charge.

**5.5. Maintenance :**  
- Documentation technique détaillée pour faciliter les mises à jour et la résolution de problèmes.
- Code source commenté et conforme aux standards de l'industrie pour assurer une maintenance aisée.

**5.5 Traçabilité :**  
- Garder une traçabilité des actions de chaque utilisateur .

### 6. Planning prévisionnel de réalisation

| Tâches      | Détails | Date de début | Date de fin |
| ----------- | ----------- | ----------- | ----------- |
| Analyse et modélisation | <li>L’expression, le recueil et la formalisation des besoins et de l’ensemble des contraintes |  |  |
| Conception du design | <li>Elaboration des spécifications de l’architecture générale du logiciel <li>Description précise de chaque sous-ensemble d’application <li> Définition des API et des spécifications de données. |  |  |
| Création des maquettes | <li>Design des interfaces utilisateur. <li>Validation des maquettes avec les parties prenantes et ajustement selon les retours.|  |  |
| Mise en place de l’environnement de développement | <li>Technologies, Librairies, IDE |  |  |
| Développement initial | <li>Codage des fonctionnalités de base et des interfaces API. <li>Tests unitaires pour chaque module développé. |  |  |
| Développement et tests intermédiaires | <li>Implémentation des fonctionnalités avancées |  |  |
| Première présentation de l’application | <li>Qualification (s’assurer de la conformité de l’application) |  |  |
| Suite de codage, amélioration et finalisation de l’application | <li>Ajustements basés sur les retours des premiers tests. <li>Revue du code et optimisation des performances. |  |  |
| Finalisation de la solution et mise en place du guide d’utilisateur | <li>Présentation et qualification <li>Dernières révisions |  |  |

### 7. Conclusion

L'application vise à offrir une solution complète et intuitive pour le suivi des navires, augmentant l'efficacité des opérations portuaires et améliorant l'expérience des utilisateurs grâce à une accessibilité et une réactivité accrues.








