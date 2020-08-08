module.exports = {
  selectPoint: "ローカルの説明を表示する点を選択します",
  defaultClassNames: "クラス {0}",
  defaultFeatureNames: "機能 {0}",
  absoluteAverage: "絶対値の平均",
  predictedClass: "予測クラス",
  datasetExplorer: "データセット エクスプローラー",
  dataExploration: "データセットの探索",
  aggregateFeatureImportance: "特徴量の重要度の集計",
  globalImportance: "グローバルの重要度",
  explanationExploration: "説明の探索",
  individualAndWhatIf: "個々の特徴量の重要度と What-If",
  summaryImportance: "概要の重要度",
  featureImportance: "特徴量の重要度",
  featureImportanceOf: "{0} の特徴量の重要度",
  perturbationExploration: "補正の探索",
  localFeatureImportance: "ローカル特徴量の重要度",
  ice: "ICE",
  clearSelection: "選択範囲のクリア",
  feature: "機能:",
  intercept: "切片",
  modelPerformance: "モデルのパフォーマンス",
  ExplanationScatter: {
    dataLabel: "データ: {0}",
    importanceLabel: "重要度: {0}",
    predictedY: "予測 Y",
    index: "インデックス",
    dataGroupLabel: "データ",
    output: "出力",
    probabilityLabel: "確率: {0}",
    trueY: "True Y",
    class: "クラス:",
    xValue: "X 値:",
    yValue: "Y 値:",
    colorValue: "色:",
    count: "カウント"
  },
  CrossClass: {
    label: "クロスクラスの重み付け:",
    info: "クラス間の計算に関する情報",
    overviewInfo:
      "マルチクラス モデルにより、クラスごとに独立した特徴量の重要度ベクターが生成されます。各クラスの特徴量の重要度ベクターは、クラスの可能性を高めたか低くした機能を示しています。クラスごとの特徴量の重要度ベクターの重みを 1 つの値に集計する方法を選択できます。",
    absoluteValInfo:
      "絶対値の平均: 指定できるすべてのクラスにおける機能の重要性の合計をクラスの数で割ったものを表示します。",
    predictedClassInfo:
      "予測クラス: 指定した点の予測クラスについて特徴量の重要度の値を表示します",
    enumeratedClassInfo:
      "列挙クラス名: 指定されたクラスの特徴量の重要度の値のみをすべてのデータ ポイントに表示します。",
    close: "閉じる",
    crossClassWeights: "クロス クラスの重み"
  },
  AggregateImportance: {
    scaledFeatureValue: "スケーリングされた機能の値",
    low: "安値",
    high: "高値",
    featureLabel: "機能: {0}",
    valueLabel: "機能の値: {0}",
    importanceLabel: "重要度: {0}",
    predictedClassTooltip: "予測クラス: {0}",
    trueClassTooltip: "真のクラス: {0}",
    predictedOutputTooltip: "予測出力: {0}",
    trueOutputTooltip: "真の出力: {0}",
    topKFeatures: "上位の K 個の機能:",
    topKInfo: "上位 k 個を計算する方法",
    predictedValue: "予測された値",
    predictedClass: "予測クラス",
    trueValue: "真の値",
    trueClass: "真のクラス",
    noColor: "なし",
    tooManyRows:
      "指定されたデータセットは、このグラフでサポートできるサイズを超えています"
  },
  BarChart: {
    classLabel: "クラス: {0}",
    sortBy: "並べ替え",
    noData: "データなし",
    absoluteGlobal: "絶対グローバル",
    absoluteLocal: "絶対ローカル",
    calculatingExplanation: "説明を計算しています"
  },
  IcePlot: {
    numericError: "数値を指定する必要があります",
    integerError: "整数にする必要があります",
    prediction: "予測",
    predictedProbability: "予測確率",
    predictionLabel: "予測: {0}",
    probabilityLabel: "確率: {0}",
    noModelError:
      "ICE プロットで予測を調べるには、操作可能なモデルを指定してください。",
    featurePickerLabel: "機能:",
    minimumInputLabel: "最小:",
    maximumInputLabel: "最大:",
    stepInputLabel: "ステップ:",
    loadingMessage: "データを読み込んでいます...",
    submitPrompt: "ICE プロットを表示するには範囲を送信します",
    topLevelErrorMessage: "パラメーターでエラーが発生しました",
    errorPrefix: "エラーが発生しました: {0}"
  },
  PerturbationExploration: {
    loadingMessage: "読み込んでいます...",
    perturbationLabel: "摂動:"
  },
  PredictionLabel: {
    predictedValueLabel: "予測値: {0}",
    predictedClassLabel: "予測クラス: {0}"
  },
  Violin: {
    groupNone: "グループ化なし",
    groupPredicted: "予測 Y",
    groupTrue: "True Y",
    groupBy: "グループ化"
  },
  FeatureImportanceWrapper: {
    chartType: "グラフの種類:",
    violinText: "バイオリン",
    barText: "横棒",
    boxText: "ボックス",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "すべての点の特徴量の重要度の絶対値を平均化 (L1 正規化) して、グローバル特徴量の重要度を計算します。",
    multiclassImportanceAddendum:
      "すべてのクラスについて機能の重要度を計算するときにすべての点が含まれます。差分の重み付けは使用されません。したがって、'クラス A' ではないと予測される多くの点に対して大きな負の重要度をもつ機能は、その機能の 'クラス A' の重要度を大幅に増加させます。"
  },
  Filters: {
    equalComparison: "次の値に等しい",
    greaterThanComparison: "次の値より大きい",
    greaterThanEqualToComparison: "次の値より大きいか等しい",
    lessThanComparison: "次の値より小さい",
    lessThanEqualToComparison: "次の値より小さいか等しい",
    inTheRangeOf: "次の範囲",
    categoricalIncludeValues: "含める値:",
    numericValue: "値",
    numericalComparison: "操作",
    minimum: "最小値",
    maximum: "最大値",
    min: "最小: {0}",
    max: "最大: {0}",
    uniqueValues: "一意の値の数: {0}"
  },
  Columns: {
    regressionError: "回帰エラー",
    error: "エラー",
    classificationOutcome: "分類の結果",
    truePositive: "真陽性",
    trueNegative: "真陰性",
    falsePositive: "偽陽性",
    falseNegative: "偽陰性",
    dataset: "データセット",
    predictedProbabilities: "予測確率",
    none: "カウント"
  },
  WhatIf: {
    closeAriaLabel: "閉じる",
    defaultCustomRootName: "行 {0} のコピー",
    filterFeaturePlaceholder: "特徴量を検索してください"
  },
  Cohort: {
    cohort: "コーホート",
    defaultLabel: "すべてのデータ"
  },
  GlobalTab: {
    helperText:
      "モデル全体の予測に影響を与える上位 k 個の重要な特徴量を探索します (グローバル説明としても知られます)。スライダーを使用して、特徴量の重要度の値を降順で表示します。最大 3 個のコーホートを選択して、特徴量の重要度を左右に並べて表示します。グラフ内のいずれかの特徴量バーをクリックすると、選択した特徴量の値がモデル予測に与える影響が表示されます。",
    topAtoB: "上位 {0} から {1} の特徴量",
    datasetCohorts: "データセットのコーホート",
    legendHelpText:
      "凡例項目をクリックして、プロットのコーホートのオンとオフを切り替えます。",
    sortBy: "並べ替え",
    viewDependencePlotFor: "従属プロットの表示:",
    datasetCohortSelector: "データセットのコーホートを選択",
    aggregateFeatureImportance: "特徴量の重要度の集計",
    missingParameters:
      "このタブでは、ローカル特徴量の重要度パラメーターを指定する必要があります。",
    weightOptions: "クラスの重要度の重み",
    dependencePlotTitle: "従属プロット",
    dependencePlotHelperText:
      "この従属プロットは、コーホートでの特徴量の値と対応する特徴量の重要度の関係を示しています。",
    dependencePlotFeatureSelectPlaceholder: "特徴量を選択してください",
    datasetRequired:
      "従属プロットには、評価データセットとローカルの特徴量の重要度配列が必要です。"
  },
  CohortBanner: {
    dataStatistics: "データの統計情報",
    datapoints: "{0} 個のデータポイント",
    features: "{0} 個の特徴量",
    filters: "{0} 個のフィルター",
    binaryClassifier: "2 項分類子",
    regressor: "リグレッサー",
    multiclassClassifier: "マルチクラスの分類子",
    datasetCohorts: "データセットのコーホート",
    editCohort: "コーホートの編集",
    duplicateCohort: "コーホートの複製",
    addCohort: "コーホートの追加",
    copy: " コピー"
  },
  ModelPerformance: {
    helperText:
      "モデルのパフォーマンスを評価するには、得られた予測値とご使用のモデルのパフォーマンス メトリックの値の分布を調べます。データセットのさまざまなコーホートまたはサブグループにおけるパフォーマンスの比較分析を確認して、モデルを詳しく調べることができます。さまざまなディメンションを横断するよう、y 値と x 値に沿ったフィルターを選択します。グラフの種類を変更するには、グラフの歯車を選択します。",
    modelStatistics: "モデルの統計情報",
    cohortPickerLabel: "探索するデータセットのコーホートの選択",
    missingParameters:
      "このタブでは、モデルから予測される値の配列を指定する必要があります。",
    missingTrueY:
      "モデル パフォーマンス統計では、予測された結果に加えて、実際の結果を提供する必要があります"
  },
  Charts: {
    yValue: "Y 値",
    numberOfDatapoints: "データポイントの数",
    xValue: "X 値",
    rowIndex: "行インデックス",
    featureImportance: "特徴量の重要度",
    countTooltipPrefix: "個数: {0}",
    count: "カウント",
    featurePrefix: "特徴量",
    importancePrefix: "重要度",
    cohort: "コーホート",
    howToRead: "このグラフの読み取り方法"
  },
  DatasetExplorer: {
    helperText:
      "X 軸、Y 軸、および色軸に沿ってさまざまなフィルターを選択してデータセットの統計を探索し、異なるディメンションに沿ってデータをスライスします。上のデータセット コーホートを作成して、予測結果、データセットの特徴量、エラー グループなどのフィルターを使用してデータセット統計を分析します。グラフの種類を変更するには、グラフの右上隅にある歯車のアイコンを使用してください。",
    colorValue: "色の値",
    individualDatapoints: "個々のデータポイント",
    aggregatePlots: "集計プロット",
    chartType: "グラフの種類",
    missingParameters:
      "このタブでは、評価データセットを指定する必要があります。",
    noColor: "なし"
  },
  DependencePlot: {
    featureImportanceOf: "特徴量の重要度:",
    placeholder:
      "上の横棒グラフの特徴量をクリックして、その従属プロットを表示してください"
  },
  WhatIfTab: {
    helperText:
      '散布図をクリックしてデータポイントを選択することで、その局所的な特徴量の重要度の値 (局所的な説明) と以下の個別条件付き期待値 (ICE) プロットを表示することができます。右側のパネルを使用して仮定の what-if データポイントを作成し、既知のデータポイントの特徴量に摂動を与えてください。特徴量の重要度の値は多数の近似値に基づいており、予測の "原因" ではありません。因果推論の厳密な数学的堅牢性がなければ、このツールに基づいて実際の決定を行うことはお勧めしません。',
    panelPlaceholder:
      "新しいデータ ポイントの予測を行うには、モデルが必要です。",
    cohortPickerLabel: "探索するデータセットのコーホートの選択",
    scatterLegendText:
      "凡例項目をクリックして、プロットのデータポイントのオンとオフを切り替えます。",
    realPoint: "実際のデータポイント",
    noneSelectedYet: "まだ何も選択されていません",
    whatIfDatapoints: "What-If データポイント",
    noneCreatedYet: "まだ何も作成されていません",
    showLabel: "表示:",
    featureImportancePlot: "特徴量の重要度プロット",
    icePlot: "個別条件付き期待値 (ICE) プロット",
    featureImportanceLackingParameters:
      "それぞれの特徴量が個々の予測に与える影響を確認するため、ローカルの特徴量の重要度を指定してください。",
    featureImportanceGetStartedText:
      "特徴量の重要度を表示するポイントを選択してください",
    iceLackingParameters:
      "ICE プロットには、仮定のデータ ポイントを予測するための運用可能なモデルが必要です。",
    IceGetStartedText:
      "ICE プロットを表示するには、ポイントを選択するか、What-If ポイントを作成してください",
    whatIfDatapoint: "What-If データポイント",
    whatIfHelpText:
      "プロット上のポイントを選択するか、摂動する既知のデータポイント インデックスを手動で入力して、新しい What-If ポイントとして保存します。",
    indexLabel: "摂動するデータ インデックス",
    rowLabel: "行 {0}",
    whatIfNameLabel: "What-If データポイント名",
    featureValues: "特徴量の値",
    predictedClass: "予測クラス: ",
    predictedValue: "予測された値: ",
    probability: "確率: ",
    trueClass: "真のクラス: ",
    trueValue: "真の値: ",
    "trueValue.comment": "回帰の実際のラベルにプレフィックスを付ける",
    newPredictedClass: "新しい予測クラス: ",
    newPredictedValue: "新しい予測値: ",
    newProbability: "新しい確率: ",
    saveAsNewPoint: "新しいポイントとして保存",
    saveChanges: "変更の保存",
    loading: "読み込み中...",
    classLabel: "クラス: {0}",
    minLabel: "最小",
    maxLabel: "最大",
    stepsLabel: "ステップ",
    disclaimer:
      '免責事項: これらは多くの概算に基づいた説明であり、予測の "原因" ではありません。因果推論の厳密な数学的頑健性がない場合、このツールに基づいて実際の意思決定を行わないようユーザーにお勧めします。',
    missingParameters:
      "このタブでは、評価データセットを指定する必要があります。",
    selectionLimit: "最大数である 3 つのポイントが選択済みです",
    classPickerLabel: "クラス",
    tooltipTitleMany: "上位 {0} 件の予測クラス",
    whatIfTooltipTitle: "What-If 予測クラス",
    tooltipTitleFew: "予測クラス",
    probabilityLabel: "確率",
    deltaLabel: "差分",
    nonNumericValue: "値は数値でなければなりません",
    icePlotHelperText:
      "ICE プロットは、選択したデータ ポイントの予測値が、最小値と最大値の間のある範囲の特徴量の値に沿って変化する様子を示しています。"
  },
  CohortEditor: {
    selectFilter: "フィルターを選択してください",
    TreatAsCategorical: "カテゴリとして扱う",
    addFilter: "フィルターの追加",
    addedFilters: "追加されたフィルター",
    noAddedFilters: "まだフィルターは追加されていません",
    defaultFilterState:
      "データセットのコーホートにパラメーターを追加するには、フィルターを選択してください。",
    cohortNameLabel: "データセットのコーホート名",
    cohortNamePlaceholder: "コーホートの名前を指定してください",
    save: "保存",
    delete: "削除",
    cancel: "キャンセル",
    cohortNameError: "コーホート名がありません",
    placeholderName: "コーホート {0}"
  },
  AxisConfigDialog: {
    select: "選択",
    ditherLabel: "ディザーが必要",
    selectFilter: "軸の値の選択",
    selectFeature: "特徴量の選択",
    binLabel: "データにビン分割を適用する",
    TreatAsCategorical: "カテゴリとして扱う",
    numOfBins: "ビンの数",
    groupByCohort: "コーホートでグループ化",
    selectClass: "クラスの選択",
    countHelperText: "ポイント数のヒストグラム"
  },
  ValidationErrors: {
    predictedProbability: "予測確率",
    predictedY: "予測 Y",
    evalData: "評価データセット",
    localFeatureImportance: "ローカル特徴量の重要度",
    inconsistentDimensions:
      "ディメンションが矛盾しています。{0} のディメンションは {1} ですが、必要なのは {2} です",
    notNonEmpty: "{0} 入力は、空でない配列ではありません",
    varyingLength:
      "ディメンションが矛盾しています。{0} には、長さの異なる要素があります",
    notArray: "{0} は配列ではありません。ディメンション {1} の配列が必要です",
    errorHeader: "一部の入力パラメーターは、矛盾しているため、使用されません: ",
    datasizeWarning:
      "評価データセットが大きすぎて、一部のグラフで効果的に表示できません。フィルターを追加して、コーホートのサイズを小さくしてください。",
    datasizeError:
      "選択したコーホートが大きすぎます。フィルターを追加して、コーホートのサイズを小さくしてください。",
    addFilters: "フィルターの追加"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " {0} を含む",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} およびその他の {1} 人"
  },
  Statistics: {
    mse: "MSE: {0}",
    rSquared: "R-2 乗: {0}",
    meanPrediction: "平均予測 {0}",
    accuracy: "正確性: {0}",
    precision: "精度: {0}",
    recall: "リコール: {0}",
    fpr: "FPR: {0}",
    fnr: "FNR: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "モデル全体の予測に影響を与える上位 k の特徴量の重要度を探索します。スライダーを使用して、特徴量の重要度を降順で表示します。"
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "これらの説明の詳細",
    clickHere: "詳細情報",
    shapTitle: "Shapley 値",
    shapDescription:
      "この解説では、説明しているモデルへのゲーム論的アプローチである SHAP を使用しており、特徴セットの重要度は、モデルからマージナライゼイションによってそれらの特徴を「隠す」ことで測定されます。詳細については、下のリンクをクリックしてください。",
    limeTitle: "LIME (ローカルの解釈可能なモデルにとらわれない説明)",
    limeDescription:
      "この解説では、モデルの線形近似を提供する LIME を使用します。説明するために、次の操作を行います: インスタンスに摂動を与え、モデル予測を取得し、これらの予測をラベルとして使用して、局所的に正確な疎線形モデルを学習します。この線形モデルの重みは '特徴量の重要度' として使用されます。詳細については、下のリンクをクリックしてください。",
    mimicTitle: "Mimic (グローバル サロゲートの説明)",
    mimicDescription:
      "この解説は、ブラックボックス モデルの模倣のためにグローバル サロゲート モデルをトレーニングするという概念に基づいています。グローバル サロゲート モデルは、ブラックボックス モデルの予測を可能な限り正確に近似するようにトレーニングされた、本質的に解釈可能なモデルです。特徴量の重要度の値は、基になるサロゲート モデル (LightGBM、線形回帰、確率的勾配降下法、またはデシジョン ツリー) のモデルベースの特徴量の重要度の値です",
    pfiTitle: "順列の特徴量の重要度 (PFI)",
    pfiDescription:
      "この解説では、データセット全体に対して一度に 1 つの特徴量でデータをランダムにシャッフルし、重要なパフォーマンス メトリックがどのくらい変化するかを算出します (既定のパフォーマンス メトリック: バイナリ分類の F1、マルチクラス分類のミクロ平均を含む F1 スコア、および回帰の平均絶対誤差)。変化が大きいほど、その特徴量は重要になります。この解説で説明できるのは、基になるモデルの全体的な動作のみで、個々の予測については説明していません。特徴量の重要度の値は、特定の特徴量に摂動を与えることで、モデルのパフォーマンスのデルタを表します。"
  }
};
