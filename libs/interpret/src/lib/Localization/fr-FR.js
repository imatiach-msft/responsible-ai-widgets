module.exports = {
  selectPoint: "Sélectionner un point pour voir son explication locale",
  defaultClassNames: "Classe {0}",
  defaultFeatureNames: "{0} de la caractéristique",
  absoluteAverage: "Moyenne de la valeur absolue",
  predictedClass: "Classe prédite",
  datasetExplorer: "Explorateur de jeux de données",
  dataExploration: "Exploration de jeu de données",
  aggregateFeatureImportance: "Agréger l'importance des caractéristiques",
  globalImportance: "Importance globale",
  explanationExploration: "Exploration de l'explication",
  individualAndWhatIf:
    "Importance d'une caractéristique individuelle et simulation",
  summaryImportance: "Importance combinée",
  featureImportance: "Importance de la caractéristique",
  featureImportanceOf: "Importance de la caractéristique {0}",
  perturbationExploration: "Exploration de la perturbation",
  localFeatureImportance: "Importance de la caractéristique locale",
  ice: "ICE",
  clearSelection: "Effacer la sélection",
  feature: "Fonctionnalité :",
  intercept: "Intercepter",
  modelPerformance: "Performances du modèle",
  ExplanationScatter: {
    dataLabel: "Données : {0}",
    importanceLabel: "Importance : {0}",
    predictedY: "Y prédit",
    index: "Index",
    dataGroupLabel: "Données",
    output: "Sortie",
    probabilityLabel: "Probabilité : {0}",
    trueY: "Y réel",
    class: "classe : ",
    xValue: "Valeur X :",
    yValue: "Valeur Y :",
    colorValue: "Couleur :",
    count: "Nombre"
  },
  CrossClass: {
    label: "Pondération interclasse :",
    info: "Informations sur le calcul interclasse",
    overviewInfo:
      "Les modèles multiclasses génèrent, pour chaque classe, un vecteur d'importance de caractéristique indépendant qui montre les caractéristiques affectant le degré de probabilité d'une classe. Vous pouvez sélectionner la façon dont les poids des vecteurs d'importance de caractéristique par classe sont combinés en une seule valeur :",
    absoluteValInfo:
      "Moyenne de la valeur absolue : montre la somme des valeurs d'importance de la caractéristique dans toutes les classes possibles, divisée par le nombre de classes",
    predictedClassInfo:
      "Classe prédite : montre la valeur d'importance de la caractéristique pour la classe prédite d'un point donné",
    enumeratedClassInfo:
      "Noms de classe énumérés : montre uniquement les valeurs d'importance de la caractéristique pour la classe spécifiée sur tous les points de données.",
    close: "Fermer",
    crossClassWeights: "Pondérations multiclasses"
  },
  AggregateImportance: {
    scaledFeatureValue: "Valeur de caractéristique mise à l'échelle",
    low: "Basse",
    high: "Élevée",
    featureLabel: "Caractéristique : {0}",
    valueLabel: "Valeur de caractéristique : {0}",
    importanceLabel: "Importance : {0}",
    predictedClassTooltip: "Classe prédite : {0}",
    trueClassTooltip: "Classe réelle : {0}",
    predictedOutputTooltip: "Sortie prédite : {0}",
    trueOutputTooltip: "Sortie réelle : {0}",
    topKFeatures: "Top K des caractéristiques :",
    topKInfo: "Mode de calcul du top k",
    predictedValue: "Valeur prédite",
    predictedClass: "Classe prédite",
    trueValue: "Valeur vraie",
    trueClass: "Classe réelle",
    noColor: "Aucun",
    tooManyRows:
      "Ce graphique ne peut pas prendre en charge le jeu de données fourni en raison de sa taille trop importante"
  },
  BarChart: {
    classLabel: "Classe : {0}",
    sortBy: "Trier par",
    noData: "Aucune donnée",
    absoluteGlobal: "Valeur absolue globale",
    absoluteLocal: "Valeur absolue locale",
    calculatingExplanation: "Calcul de l'explication"
  },
  IcePlot: {
    numericError: "Doit être numérique",
    integerError: "Doit être un entier",
    prediction: "Prédiction",
    predictedProbability: "Probabilité prédite",
    predictionLabel: "Prédiction : {0}",
    probabilityLabel: "Probabilité : {0}",
    noModelError:
      "Indiquez un modèle opérationnalisé pour explorer les prédictions dans les tracés ICE.",
    featurePickerLabel: "Fonctionnalité :",
    minimumInputLabel: "Minimum :",
    maximumInputLabel: "Maximum :",
    stepInputLabel: "Étapes :",
    loadingMessage: "Chargement des données...",
    submitPrompt: "Envoyer une plage pour voir un tracé ICE",
    topLevelErrorMessage: "Erreur dans le paramètre",
    errorPrefix: "Erreur rencontrée : {0}"
  },
  PerturbationExploration: {
    loadingMessage: "Chargement...",
    perturbationLabel: "Perturbation :"
  },
  PredictionLabel: {
    predictedValueLabel: "Valeur prédite : {0}",
    predictedClassLabel: "Classe prédite : {0}"
  },
  Violin: {
    groupNone: "Aucun regroupement",
    groupPredicted: "Y prédit",
    groupTrue: "Y réel",
    groupBy: "Regrouper par"
  },
  FeatureImportanceWrapper: {
    chartType: "Type de graphique :",
    violinText: "Violon",
    barText: "Barre",
    boxText: "Zone",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "L'importance d'une caractéristique globale est déterminée en calculant la moyenne de la valeur absolue de l'importance de la caractéristique sur tous les points (normalisation L1). ",
    multiclassImportanceAddendum:
      "Tous les points sont inclus dans le calcul de l'importance d'une caractéristique pour toutes les classes, sans aucune pondération différentielle. Ainsi, une caractéristique avec une grande importance négative pour de nombreux points qui, par prédiction, ne sont pas de « Classe A », augmente considérablement l'importance de cette classe."
  },
  Filters: {
    equalComparison: "Égal à",
    greaterThanComparison: "Supérieur à",
    greaterThanEqualToComparison: "Supérieur ou égal à",
    lessThanComparison: "Inférieur à",
    lessThanEqualToComparison: "Inférieur ou égal à",
    inTheRangeOf: "Dans la plage",
    categoricalIncludeValues: "Valeurs incluses :",
    numericValue: "Valeur",
    numericalComparison: "Opération",
    minimum: "Minimum",
    maximum: "Maximum",
    min: "Min : {0}",
    max: "Max : {0}",
    uniqueValues: "Nb de valeurs uniques : {0}"
  },
  Columns: {
    regressionError: "Erreur de régression",
    error: "Erreur",
    classificationOutcome: "Résultat de la classification",
    truePositive: "Vrai positif",
    trueNegative: "Vrai négatif",
    falsePositive: "Faux positif",
    falseNegative: "Faux négatif",
    dataset: "Jeu de données",
    predictedProbabilities: "Probabilités de prédiction",
    none: "Nombre"
  },
  WhatIf: {
    closeAriaLabel: "Fermer",
    defaultCustomRootName: "Copie de la ligne {0}",
    filterFeaturePlaceholder: "Rechercher des caractéristiques"
  },
  Cohort: {
    cohort: "Cohorte",
    defaultLabel: "Toutes les données"
  },
  GlobalTab: {
    helperText:
      "Explorez les k principales caractéristiques importantes qui impactent vos prédictions de modèle générales (c'est-à-dire, l'explication globale). Utilisez le curseur pour afficher les valeurs d'importance de caractéristique par ordre décroissant. Sélectionnez jusqu'à trois cohortes pour voir leurs valeurs d'importance de caractéristique côte à côte. Cliquez sur les barres de caractéristique dans le graphe pour voir comment les valeurs de la caractéristique sélectionnée impactent le modèle de prédiction.",
    topAtoB: "{0}-{1} principales caractéristiques",
    datasetCohorts: "Cohortes de jeu de données",
    legendHelpText:
      "Activez ou désactivez les cohortes dans le tracé en cliquant sur les éléments de la légende.",
    sortBy: "Trier par",
    viewDependencePlotFor: "Voir le tracé des dépendances pour :",
    datasetCohortSelector: "Sélectionner une cohorte de jeu de données",
    aggregateFeatureImportance: "Agréger l'importance des caractéristiques",
    missingParameters:
      "Cet onglet nécessite la spécification du paramètre d'importance de la caractéristique locale.",
    weightOptions: "Pondérations de l'importance de classe",
    dependencePlotTitle: "Tracés de dépendance",
    dependencePlotHelperText:
      "Ce tracé de dépendance montre la relation entre la valeur d'une caractéristique et son importance dans une cohorte.",
    dependencePlotFeatureSelectPlaceholder: "Sélectionner une caractéristique",
    datasetRequired:
      "Les tracés de dépendance nécessitent le jeu de données d'évaluation et le tableau des importances de caractéristique locale."
  },
  CohortBanner: {
    dataStatistics: "Statistiques des données",
    datapoints: "{0} points de données",
    features: "{0} caractéristiques",
    filters: "{0} filtres",
    binaryClassifier: "Classifieur binaire",
    regressor: "Régresseur",
    multiclassClassifier: "Classifieur multiclasse",
    datasetCohorts: "Cohortes de jeu de données",
    editCohort: "Modifier la cohorte",
    duplicateCohort: "Dupliquer la cohorte",
    addCohort: "Ajouter une cohorte",
    copy: " copie"
  },
  ModelPerformance: {
    helperText:
      "Évaluez les performances de votre modèle en explorant la distribution de vos valeurs de prédiction et les valeurs de vos métriques de performances de modèle. Vous pouvez examiner plus en détail votre modèle en étudiant une analyse comparative de ses performances sur différentes cohortes ou sous-groupes de votre jeu de données. Sélectionnez des filtres avec une valeur X et une valeur Y pour les croiser sur différentes dimensions. Sélectionnez l'engrenage dans le graphique pour changer le type de graphique.",
    modelStatistics: "Statistiques du modèle",
    cohortPickerLabel: "Sélectionner une cohorte de jeu de données à explorer",
    missingParameters:
      "Cet onglet nécessite la spécification du tableau des valeurs prédites du modèle.",
    missingTrueY:
      "Les statistiques de performance du modèle nécessitent la spécification des résultats réels en plus des résultats prédits"
  },
  Charts: {
    yValue: "Valeur Y",
    numberOfDatapoints: "Nombre de points de données",
    xValue: "Valeur X",
    rowIndex: "Index de ligne",
    featureImportance: "Importance de la caractéristique",
    countTooltipPrefix: "Nombre : {0}",
    count: "Nombre",
    featurePrefix: "Caractéristique",
    importancePrefix: "Importance",
    cohort: "Cohorte",
    howToRead: "Comment lire ce graphique"
  },
  DatasetExplorer: {
    helperText:
      "Explorez les statistiques de votre jeu de données en sélectionnant différents filtres sur les axes X, Y et de couleur pour découper vos données selon différentes dimensions. Créez en plus des cohortes de jeux de données pour analyser les statistiques de jeu de données avec des filtres, comme les résultats prédits, les caractéristiques de jeu de données et les groupes d'erreurs. Utilisez l'icône d'engrenage en haut à droite du graphe pour changer les types de graphe.",
    colorValue: "Valeur de couleur",
    individualDatapoints: "Points de données individuels",
    aggregatePlots: "Agréger les tracés",
    chartType: "Type de graphique",
    missingParameters:
      "Cet onglet nécessite la spécification d'un jeu de données d'évaluation.",
    noColor: "Aucun"
  },
  DependencePlot: {
    featureImportanceOf: "Importance de la caractéristique",
    placeholder:
      "Cliquer sur une caractéristique dans l'histogramme ci-dessus pour afficher le tracé de ses dépendances"
  },
  WhatIfTab: {
    helperText:
      "Vous pouvez sélectionner un point de données en cliquant sur le nuage de points pour voir ses valeurs d'importance de caractéristique locale (explication locale) et le tracé d'espérance conditionnelle individuelle (ICE) ci-dessous. Créez un point de données « Et si » hypothétique en utilisant le panneau de droite pour perturber les caractéristiques d'un point de données connu. Les valeurs d'importance de caractéristique sont basées sur de nombreuses approximations et ne sont pas la « cause » des prédictions. Sans une robustesse mathématique stricte de l'inférence causale, nous ne conseillons pas aux utilisateurs de prendre des décisions concrètes basées sur cet outil.",
    panelPlaceholder:
      "Un modèle est nécessaire pour effectuer des prédictions pour les nouveaux points de données.",
    cohortPickerLabel: "Sélectionner une cohorte de jeu de données à explorer",
    scatterLegendText:
      "Activez ou désactivez les points de données dans le tracé en cliquant sur les éléments de la légende.",
    realPoint: "Points de données réels",
    noneSelectedYet: "Aucun sélectionné pour l'instant",
    whatIfDatapoints: "Points de données de simulation",
    noneCreatedYet: "Aucun créé pour l'instant",
    showLabel: "Afficher :",
    featureImportancePlot: "Tracé de l'importance des caractéristiques",
    icePlot: "Tracé ICE (Individual Conditional Expectation)",
    featureImportanceLackingParameters:
      "Spécifiez l'importance des caractéristiques locales pour voir comment chaque caractéristique impacte les prédictions individuelles.",
    featureImportanceGetStartedText:
      "Sélectionner un point pour voir l'importance de la caractéristique",
    iceLackingParameters:
      "Les tracés ICE nécessitent un modèle opérationnalisé afin de faire des prédictions pour des points de données hypothétiques.",
    IceGetStartedText:
      "Sélectionner un point ou créer un point de simulation pour voir les tracés ICE",
    whatIfDatapoint: "Point de données de simulation",
    whatIfHelpText:
      "Sélectionnez un point sur le tracé ou entrez manuellement un index de point de données connu afin de créer une perturbation et l'enregistrer comme nouveau point de simulation.",
    indexLabel: "Index des données à perturber",
    rowLabel: "Ligne {0}",
    whatIfNameLabel: "Nom de point de données de simulation",
    featureValues: "Valeurs de caractéristique",
    predictedClass: "Classe prédite : ",
    predictedValue: "Valeur prédite : ",
    probability: "Probabilité : ",
    trueClass: "Classe réelle : ",
    trueValue: "Valeur réelle : ",
    "trueValue.comment": "préfixe de l'étiquette réelle pour la régression",
    newPredictedClass: "Nouvelle classe prédite : ",
    newPredictedValue: "Nouvelle valeur prédite : ",
    newProbability: "Nouvelle probabilité : ",
    saveAsNewPoint: "Enregistrer comme nouveau point",
    saveChanges: "Enregistrer les changements",
    loading: "Chargement...",
    classLabel: "Classe : {0}",
    minLabel: "Min",
    maxLabel: "Max",
    stepsLabel: "Étapes",
    disclaimer:
      "Exclusion : Ces explications sont basées sur de nombreuses approximations et ne sont pas la « cause » des prédictions. Sans une robustesse mathématique stricte de l'inférence causale, nous ne conseillons pas aux utilisateurs de prendre des décisions réelles basées sur cet outil.",
    missingParameters:
      "Cet onglet nécessite la spécification d'un jeu de données d'évaluation.",
    selectionLimit: "3 points maximum sélectionnés",
    classPickerLabel: "Classe",
    tooltipTitleMany: "Top {0} des classes prédites",
    whatIfTooltipTitle: "Classes prédites des scénarios",
    tooltipTitleFew: "Classes prédites",
    probabilityLabel: "Probabilité",
    deltaLabel: "Delta",
    nonNumericValue: "La valeur doit être numérique",
    icePlotHelperText:
      "Les tracés ICE montrent comment les valeurs de prédiction du point de données sélectionné varient pour plusieurs valeurs de caractéristique entre la valeur minimale et la valeur maximale."
  },
  CohortEditor: {
    selectFilter: "Sélectionner un filtre",
    TreatAsCategorical: "Considérer comme catégorique",
    addFilter: "Ajouter un filtre",
    addedFilters: "Filtres ajoutés",
    noAddedFilters: "Aucun filtre ajouté pour le moment",
    defaultFilterState:
      "Sélectionnez un filtre pour ajouter des paramètres à votre cohorte de jeu de données.",
    cohortNameLabel: "Nom de cohorte de jeu de données",
    cohortNamePlaceholder: "Nommer votre cohorte",
    save: "Enregistrer",
    delete: "Supprimer",
    cancel: "Annuler",
    cohortNameError: "Nom de cohorte manquant",
    placeholderName: "Cohorte {0}"
  },
  AxisConfigDialog: {
    select: "Sélectionner",
    ditherLabel: "Doit tramer",
    selectFilter: "Sélectionner votre valeur d'axe",
    selectFeature: "Sélectionner une caractéristique",
    binLabel: "Appliquer le binning aux données",
    TreatAsCategorical: "Considérer comme catégorique",
    numOfBins: "Nombre de compartiments",
    groupByCohort: "Regrouper par cohorte",
    selectClass: "Sélectionner une classe",
    countHelperText: "Histogramme du nombre de points"
  },
  ValidationErrors: {
    predictedProbability: "Probabilité prédite",
    predictedY: "Valeur Y prédite",
    evalData: "Jeu de données d'évaluation",
    localFeatureImportance: "Importance de la caractéristique locale",
    inconsistentDimensions:
      "Dimensions incohérentes. {0} a les dimensions {1}, {2} était attendu",
    notNonEmpty: "L'entrée {0} n'est pas un tableau non vide",
    varyingLength:
      "Dimensions incohérentes. {0} a des éléments de longueur variable",
    notArray: "{0} n'est pas un tableau. Tableau de dimension {1} attendu",
    errorHeader:
      "Certains paramètres d'entrée étaient incohérents et ne sont pas utilisés : ",
    datasizeWarning:
      "Le jeu de données d'évaluation est trop grand pour être affiché correctement dans certains graphiques, ajoutez des filtres pour réduire la taille de la cohorte. ",
    datasizeError:
      "La cohorte sélectionnée est trop grande, ajoutez des filtres pour en réduire la taille.",
    addFilters: "Ajouter des filtres"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " inclut {0} ",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} et {1} autres"
  },
  Statistics: {
    mse: "MSE : {0}",
    rSquared: "Coefficient de détermination : {0}",
    meanPrediction: "Prédiction moyenne {0}",
    accuracy: "Justesse : {0}",
    precision: "Précision : {0}",
    recall: "Rappel : {0}",
    fpr: "FPR : {0}",
    fnr: "FNR : {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "Explorez le top k des caractéristiques les plus importantes qui impactent vos prédictions de modèle globales. Utilisez le curseur pour afficher les caractéristiques par importance décroissante."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "Que signifient ces explications ?",
    clickHere: "En savoir plus",
    shapTitle: "Valeurs Shapley",
    shapDescription:
      "Cet explicateur utilise SHAP, qui est une approche utilisant la théorie des jeux pour expliquer les modèles, où l'importance d'ensembles de caractéristiques est mesurée en « masquant » ces caractéristiques dans le modèle par le biais de la marginalisation. Cliquez sur le lien ci-dessous pour en savoir plus.",
    limeTitle: "LIME (Local Interpretable Model-Agnostic Explanations)",
    limeDescription:
      "Cet explicateur utilise LIME, qui fournit une approximation linéaire du modèle. Pour obtenir une explication, nous effectuons ce qui suit : perturber l'instance, obtenir des prédictions de modèle et utiliser ces prédictions comme des étiquettes pour apprendre un modèle linéaire creux qui est fidèle localement. Les pondérations de ce modèle linéaire sont utilisées sous forme d'« importances de caractéristique ». Cliquez sur le lien ci-dessous pour en savoir plus.",
    mimicTitle: "Imiter (explications de substitution globales)",
    mimicDescription:
      "Cet explicateur s'appuie sur l'idée d'entraîner des modèles de substitution globaux pour imiter les modèles de boîte noire. Un modèle de substitution global est un modèle interprétable de manière intrinsèque qui est entraîné pour se rapprocher des prédictions d'un modèle de boîte noire de manière aussi juste que possible. Les valeurs d'importance de caractéristique sont les valeurs basées sur votre modèle de substitution sous-jacent (LightGBM ou régression linéaire ou algorithme du gradient stochastique ou arbre de décision)",
    pfiTitle: "Importance de caractéristique de permutation (PFI)",
    pfiDescription:
      "Cet explicateur lit les données de manière aléatoire caractéristique par caractéristique pour l'ensemble du jeu de données et calcule la variation de la métrique de performances concernée (métriques de performances par défaut : F1 pour la classification binaire, score F1 avec moyenne micro pour la classification multiclasse et erreur absolue moyenne pour la régression). Plus la variation est grande, plus cette caractéristique est importante. Cet explicateur peut uniquement expliquer le comportement général du modèle sous-jacent, mais n'explique pas les prédictions individuelles. La valeur d'importance d'une caractéristique représente le delta des performances du modèle en perturbant cette caractéristique particulière."
  }
};
