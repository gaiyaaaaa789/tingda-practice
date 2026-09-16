(() => {
  "use strict";
  const KEY = {
    custom: "tingda.customMaterials.v1",
    prefs: "tingda.materialPrefs.v1",
    history: "tingda.history.v1",
    settings: "tingda.settings.v1",
    theme: "tingda.theme.v1"
  };
  const DEFAULT_SETTINGS = {
    ignorePunctuation: true,
    allowBackspace: true,
    keySound: true,
    autoFinishAudio: true,
    autoComparison: true,
    hideSource: true,
    autoNext: true,
    autoFocus: false,
    fontSize: 24,
    duration: 5,
    countdown: true,
    speechRate: 0.8,
    repeat: 1,
    voice: "",
    useAttachedAudio: false
  };
  const DEFAULT_MATERIALS = [
    {
      id: "jx-kanda-001", type: "kanda", title: "立案登记服务规范", category: "诉讼服务", difficulty: "基础",
      description: "江西法院一站式诉讼服务大厅工作规范训练稿", tags: ["江西法院", "立案登记", "诉讼服务"], builtIn: true,
      text: `全省法院应当严格落实立案登记制要求，对符合法律规定条件的起诉、自诉和申请，做到有案必立、有诉必理。诉讼服务中心应当公开立案条件、办理流程、收费标准和监督渠道，为当事人提供明确、便捷、高效的司法服务。\n接待群众时，工作人员应当认真倾听诉求，一次告知需要补正的材料，不得使用模糊表述反复退回。能够当场办理的事项应当及时办理；不能当场办理的，应当说明原因和办理期限，并做好释法明理工作。\n材料收转应当逐项清点、登记编号，电子材料与纸质材料同步归档，确保来源清楚、流转有序、全程留痕。`
    },
    {
      id: "jx-kanda-002", type: "kanda", title: "民事案件庭审记录（模拟）", category: "庭审笔录", difficulty: "进阶",
      description: "民事案件庭前核对与法庭调查阶段模拟笔录", tags: ["江西法院", "民事", "庭审", "书记员"], builtIn: true,
      text: `审判长：现在核对当事人及其他诉讼参加人的身份。原告及其委托诉讼代理人是否到庭？\n原告：到庭。\n审判长：被告及其委托诉讼代理人是否到庭？\n被告：到庭。\n审判长：双方当事人对对方出庭人员的身份和代理权限有无异议？\n原告：没有异议。\n被告：没有异议。\n审判长：经审查，双方当事人及诉讼代理人身份符合法律规定，可以参加本案诉讼。现在宣布开庭。江西省某基层人民法院依照《中华人民共和国民事诉讼法》的规定，公开审理原告与被告合同纠纷一案。\n审判长：本案由审判员、人民陪审员组成合议庭，由书记员担任法庭记录。当事人认为合议庭组成人员、书记员与本案有利害关系或者其他关系，可能影响公正审理的，有权申请回避。双方当事人是否申请回避？\n原告：不申请。\n被告：不申请。`
    },
    {
      id: "jx-kanda-003", type: "kanda", title: "执行案件流程节点记录", category: "执行工作", difficulty: "进阶",
      description: "执行立案、网络查控和财产处置节点录入训练", tags: ["江西法院", "执行", "流程节点", "赣鄱执行"], builtIn: true,
      text: `执行案件立案后，承办人员应当及时查阅卷宗材料，核对申请执行标的、被执行人身份信息及可供执行财产线索。通过网络执行查控系统发起的查询，应当记录发起时间、反馈单位、查询结果和后续处理意见。\n发现银行存款、网络资金、不动产、车辆、证券等财产的，应当依法采取查封、扣押、冻结等控制措施，并制作相应法律文书。财产控制期限届满前，承办人员应当根据案件情况及时办理续行控制或者解除控制手续。\n拟处置财产的，应当依法确定参考价，组织拍卖、变卖或者采取其他处置方式。执行款到账后，应当按照规定及时核算、分配和发放，不得截留、挪用或者无故拖延。`
    },
    {
      id: "jx-kanda-004", type: "kanda", title: "诉讼服务窗口接待用语", category: "窗口服务", difficulty: "基础",
      description: "诉讼服务中心接待、咨询与材料收转规范用语", tags: ["江西法院", "文明服务", "窗口", "接待用语"], builtIn: true,
      text: `您好，请问您需要办理什么事项？\n请出示您的有效身份证件和相关材料，我为您核对。\n您提交的材料已经收悉，我们会当场清点并出具收件凭证，请您妥善保管。\n这份材料还需要补充相关内容，我已将补正事项写在清单上，您按照清单准备即可。\n您咨询的事项涉及具体案件办理情况，我可以帮助您联系承办法官或者相关业务部门。\n请您稍候，我正在为您查询办理进度。\n感谢您的理解与配合，请携带好个人物品，从右侧出口离开。\n如您对诉讼服务有意见建议，可以通过意见簿、监督电话或者线上服务平台反映。`
    },
    {
      id: "jx-tingda-001", type: "tingda", title: "庭审纪律告知（听打）", category: "庭审笔录", difficulty: "基础",
      description: "模拟庭审开始前书记员宣读的法庭纪律", tags: ["江西法院", "听打", "庭审纪律", "基础"], builtIn: true,
      text: `现在宣读法庭纪律。诉讼参与人及旁听人员应当服从法庭指挥，遵守法庭秩序，尊重司法礼仪。开庭期间，请将手机调至静音或者关闭状态，不得随意走动，不得接打电话，不得录音、录像、摄影或者以其他方式传播庭审活动。\n旁听人员不得进入审判活动区，不得发言、提问，不得鼓掌、喧哗或者实施其他扰乱法庭秩序的行为。未经审判长许可，不得进入审判区，不得随意退庭。\n诉讼参与人发言时应当语言文明、表达清晰，围绕案件争议焦点陈述意见。对对方当事人及诉讼参与人，应当互相尊重，不得进行人身攻击，不得使用侮辱、威胁性语言。\n对违反法庭纪律的人员，审判长可以依法予以警告、训诫，责令退出法庭或者予以罚款、拘留；构成犯罪的，依法追究刑事责任。`
    },
    {
      id: "jx-tingda-002", type: "tingda", title: "民事庭审询问记录（听打）", category: "庭审笔录", difficulty: "进阶",
      description: "围绕合同履行事实开展法庭调查的模拟听打稿", tags: ["江西法院", "听打", "民事", "法庭调查"], builtIn: true,
      text: `审判长问：原告，请说明你方与被告签订合同的时间、地点以及合同的主要内容。\n原告答：双方于二零二四年三月十八日在南昌签订设备采购合同，约定原告向被告供应一批办公设备，总价款为人民币三十六万元，被告应当在收货后三十日内付清全部款项。\n审判长问：原告，你方是否已经按照合同约定完成交付？\n原告答：已经完成。原告于二零二四年四月二日将全部设备送至被告指定地点，被告工作人员当场签收，并出具了收货确认单。\n审判长问：被告，对原告陈述的合同签订及履行情况有无异议？\n被告答：对合同签订时间没有异议，但原告交付的部分设备存在质量问题，我方向原告提出过维修要求，问题尚未解决，因此暂未支付剩余货款。\n审判长问：原告，对被告提出的质量异议有何意见？\n原告答：设备交付时已经双方验收，被告未在合同约定的异议期内提出书面质量异议，原告不认可其拒付理由。`
    },
    {
      id: "jx-tingda-003", type: "tingda", title: "执行和解工作记录（听打）", category: "执行工作", difficulty: "进阶",
      description: "执行法官组织双方协商分期履行的模拟记录", tags: ["江西法院", "听打", "执行", "和解"], builtIn: true,
      text: `执行法官：今天组织双方当事人就本案履行方案进行协商。申请执行人，请先说明你方能够接受的最低履行方案。\n申请执行人：被执行人应当在三个月内一次性支付全部剩余款项。如果确有困难，可以先支付百分之五十，其余部分在六个月内付清。\n执行法官：被执行人，请结合自身经营和收入情况，说明具体履行计划。\n被执行人：目前经营资金周转困难，希望分八个月履行。我可以在本月月底前先支付十万元，之后每月支付八万元，最后一个月将剩余款项全部付清。\n执行法官：申请执行人，对上述分期方案是否同意？\n申请执行人：如果被执行人能够提供一名有履行能力的保证人，并对第一期付款作出明确承诺，我方可以同意分期履行。\n执行法官：双方意见已记录在案，请核对和解内容，明确每期付款时间、金额以及逾期履行的法律后果。`
    },
    {
      id: "jx-tingda-004", type: "tingda", title: "12368热线接听记录（听打）", category: "诉讼服务", difficulty: "基础",
      description: "诉讼服务热线咨询案件进度与联系法官的模拟记录", tags: ["江西法院", "听打", "12368", "诉讼服务"], builtIn: true,
      text: `您好，这里是江西法院12368诉讼服务热线，请问有什么可以帮您？\n来电人表示，他是一起买卖合同纠纷案件的原告，想查询案件目前由哪位法官承办，以及下一步预计什么时候开庭。\n坐席人员核对来电人姓名、身份证号码和案件编号后答复：经系统查询，该案已经立案并移送民事审判庭办理，目前处于庭前送达阶段。承办部门正在向被告送达起诉状副本、应诉通知书和举证通知书。\n坐席人员告知来电人：案件确定开庭时间后，法院会依法送达开庭传票；请保持电话畅通，也可以通过人民法院在线服务平台查看案件流程信息。\n来电人询问是否可以提供承办法官的联系电话。坐席人员答复：可以告知办公电话，但涉及案件实体处理的问题，建议在法官接待时间或者通过诉讼服务中心预约沟通。来电人对答复表示满意。`
    }
  ];

  const $ = (id) => document.getElementById(id);
  const els = {
    body: document.body, materialList: $("materialList"), materialSearch: $("materialSearch"), libraryFilter: $("libraryFilter"),
    newMaterialButton: $("newMaterialButton"), importMaterialsButton: $("importMaterialsButton"), exportMaterialsButton: $("exportMaterialsButton"),
    resetLibraryButton: $("resetLibraryButton"), openLibraryButton: $("openLibraryButton"), closeLibraryButton: $("closeLibraryButton"), mobileBackdrop: $("mobileBackdrop"),
    modeBadge: $("modeBadge"), materialCategory: $("materialCategory"), materialDifficulty: $("materialDifficulty"), materialTitle: $("materialTitle"),
    materialDescription: $("materialDescription"), favoriteButton: $("favoriteButton"), copyMaterialButton: $("copyMaterialButton"), editMaterialButton: $("editMaterialButton"),
    durationOptions: $("durationOptions"), countdownToggle: $("countdownToggle"), clockLabel: $("clockLabel"), clockDisplay: $("clockDisplay"), clockState: $("clockState"),
    speedMetric: $("speedMetric"), netSpeedMetric: $("netSpeedMetric"), accuracyMetric: $("accuracyMetric"), progressMetric: $("progressMetric"),
    startButton: $("startButton"), pauseButton: $("pauseButton"), resetButton: $("resetButton"), speedTrackFill: $("speedTrackFill"), speedMarker: $("speedMarker"),
    statusDot: $("statusDot"), stageStatus: $("stageStatus"), inputHint: $("inputHint"), fontDecreaseButton: $("fontDecreaseButton"), fontIncreaseButton: $("fontIncreaseButton"),
    focusButton: $("focusButton"), sourceText: $("sourceText"), typingHighlight: $("typingHighlight"), peekSourceButton: $("peekSourceButton"), comparisonPanel: $("comparisonPanel"),
    comparisonSummary: $("comparisonSummary"), comparisonLines: $("comparisonLines"), typingInput: $("typingInput"), typingInputLabel: $("typingInputLabel"),
    inputStats: $("inputStats"), speechSegmentLabel: $("speechSegmentLabel"), speechPreview: $("speechPreview"), speechPrevButton: $("speechPrevButton"),
    speechPlayButton: $("speechPlayButton"), speechNextButton: $("speechNextButton"), speechRateSelect: $("speechRateSelect"), voiceSelect: $("voiceSelect"),
    repeatSelect: $("repeatSelect"), audioAttachment: $("audioAttachment"), audioFileName: $("audioFileName"), useAudioButton: $("useAudioButton"), audioPlayer: $("audioPlayer"),
    themeButton: $("themeButton"), helpButton: $("helpButton"), settingsButton: $("settingsButton"), materialDialog: $("materialDialog"), materialForm: $("materialForm"),
    materialDialogTitle: $("materialDialogTitle"), editingMaterialId: $("editingMaterialId"), materialTitleInput: $("materialTitleInput"), materialTypeInput: $("materialTypeInput"),
    materialCategoryInput: $("materialCategoryInput"), materialDifficultyInput: $("materialDifficultyInput"), materialTagsInput: $("materialTagsInput"), materialTextInput: $("materialTextInput"),
    materialCharacterCount: $("materialCharacterCount"), materialAudioInput: $("materialAudioInput"), chooseAudioButton: $("chooseAudioButton"), audioUploadTitle: $("audioUploadTitle"),
    removeAudioButton: $("removeAudioButton"), deleteMaterialButton: $("deleteMaterialButton"), settingsDialog: $("settingsDialog"), settingsForm: $("settingsForm"),
    ignorePunctuationToggle: $("ignorePunctuationToggle"), allowBackspaceToggle: $("allowBackspaceToggle"), keySoundToggle: $("keySoundToggle"),
    autoComparisonToggle: $("autoComparisonToggle"), hideSourceToggle: $("hideSourceToggle"), autoNextToggle: $("autoNextToggle"), autoFinishAudioToggle: $("autoFinishAudioToggle"),
    fontSizeRange: $("fontSizeRange"), fontSizeOutput: $("fontSizeOutput"), autoFocusToggle: $("autoFocusToggle"), restoreSettingsButton: $("restoreSettingsButton"),
    helpDialog: $("helpDialog"), resultDialog: $("resultDialog"), resultGrade: $("resultGrade"), resultTitle: $("resultTitle"), resultSubtitle: $("resultSubtitle"),
    resultSpeed: $("resultSpeed"), resultNetSpeed: $("resultNetSpeed"), resultAccuracy: $("resultAccuracy"), resultDuration: $("resultDuration"),
    resultCorrectChars: $("resultCorrectChars"), resultBackspaces: $("resultBackspaces"), resultChart: $("resultChart"), resultAdvice: $("resultAdvice"),
    reviewMistakesButton: $("reviewMistakesButton"), resultComparison: $("resultComparison"), resultComparisonSummary: $("resultComparisonSummary"),
    resultComparisonContent: $("resultComparisonContent"), retryButton: $("retryButton"), confirmDialog: $("confirmDialog"), confirmTitle: $("confirmTitle"),
    confirmMessage: $("confirmMessage"), confirmCancelButton: $("confirmCancelButton"), confirmActionButton: $("confirmActionButton"),
    materialImportInput: $("materialImportInput"), toastRegion: $("toastRegion"), practiceView: $("practiceView"), dashboardView: $("dashboardView"),
    historyChart: $("historyChart"), historyChartEmpty: $("historyChartEmpty"), historyTableBody: $("historyTableBody"), historyEmptyState: $("historyEmptyState"),
    historyFilterSelect: $("historyFilterSelect"), totalPracticeTime: $("totalPracticeTime"), totalSessionText: $("totalSessionText"),
    averageSpeed: $("averageSpeed"), averageAccuracy: $("averageAccuracy"), bestNetSpeed: $("bestNetSpeed"), bestSessionTitle: $("bestSessionTitle"),
    weeklyGoalRing: $("weeklyGoalRing"), weeklyMinutes: $("weeklyMinutes"), weeklySessions: $("weeklySessions"), clearHistoryButton: $("clearHistoryButton")
  };
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { toast("本地存储空间不足。", "error"); } };
  const settings = { ...DEFAULT_SETTINGS, ...read(KEY.settings, {}) };
  const prefs = read(KEY.prefs, {});
  let custom = read(KEY.custom, []);
  let history = read(KEY.history, []);
  let materials = mergeMaterials();
  let selectedId = prefs.lastSelected || materials[0].id;
  let currentView = "practice";
  let filter = "all";
  let query = "";
  let practice = makePractice();
  let timer = null;
  let composing = false;
  let lastRaw = "";
  let lastInputType = "";
  let audioUrl = null;
  let pendingAudio = null;
  let removeAudio = false;
  let speechSegments = [];
  let speechIndex = 0;
  let speechRepeat = 0;
  let speechToken = 0;
  let confirmResolve = null;
  let audioContext = null;
  let alignmentCache = null;

  function mergeMaterials() {
    const builtIns = DEFAULT_MATERIALS.map((item) => ({ ...item, favorite: Boolean(prefs[item.id]?.favorite) }));
    const customs = custom.filter((item) => item && item.id && item.title && item.text).map((item) => ({ ...item, builtIn: false, favorite: Boolean(item.favorite || prefs[item.id]?.favorite) }));
    return [...builtIns, ...customs];
  }
  function current() { return materials.find((item) => item.id === selectedId) || materials[0]; }
  function makePractice() { return { status: "idle", runningSince: 0, activeMs: 0, keystrokes: 0, errors: 0, backspaces: 0, pauses: 0, samples: [], lastSampleSecond: -1, startedAt: 0, finishedAt: 0, reason: "", recorded: false }; }
  function uid(prefix) { return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`; }
  function countChars(value) { return Array.from(String(value || "").replace(/\s/g, "")).length; }
  function escapeHtml(value) { return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function saveMaterials() { write(KEY.custom, custom); write(KEY.prefs, prefs); }
  function saveSettings() { write(KEY.settings, settings); }
  function toast(message, type = "") { const node = document.createElement("div"); node.className = `toast${type ? ` is-${type}` : ""}`; node.textContent = message; els.toastRegion.appendChild(node); setTimeout(() => node.remove(), 2800); }
  function applyTheme(theme) { document.documentElement.dataset.theme = theme; localStorage.setItem(KEY.theme, theme); }
  function applySettings() {
    els.countdownToggle.checked = settings.countdown; els.ignorePunctuationToggle.checked = settings.ignorePunctuation;
    els.allowBackspaceToggle.checked = settings.allowBackspace; els.keySoundToggle.checked = settings.keySound;
    els.autoComparisonToggle.checked = settings.autoComparison; els.hideSourceToggle.checked = settings.hideSource;
    els.autoNextToggle.checked = settings.autoNext; els.autoFinishAudioToggle.checked = settings.autoFinishAudio;
    els.fontSizeRange.value = settings.fontSize; els.fontSizeOutput.textContent = `${settings.fontSize} px`; els.autoFocusToggle.checked = settings.autoFocus;
    els.speechRateSelect.value = String(settings.speechRate); els.repeatSelect.value = String(settings.repeat);
    document.documentElement.style.setProperty("--source-font-size", `${settings.fontSize}px`);
    [...els.durationOptions.querySelectorAll("button")].forEach((button) => button.classList.toggle("is-active", Number(button.dataset.duration) === Number(settings.duration)));
  }
  function canIgnorePunctuation() { return current()?.type === "tingda" && settings.ignorePunctuation; }
  function canonical(value) { let text = String(value || "").replace(/\r\n?/g, "\n"); if (canIgnorePunctuation()) text = text.replace(/[\s，。！？；：、“”‘’（）《》〈〉【】〔〕,.!?;:'"()[\]{}<>…—–\-·]/gu, ""); return Array.from(text); }
  function targetChars() { return canonical(current().text); }
  function elapsed() { return practice.status === "running" ? practice.activeMs + Date.now() - practice.runningSince : practice.activeMs; }
  function clock(ms) { const n = Math.max(0, Math.floor(ms)); return `${String(Math.floor(n / 60000)).padStart(2, "0")}:${String(Math.floor(n / 1000) % 60).padStart(2, "0")}.${Math.floor(n % 1000 / 100)}`; }
  function shortDuration(seconds) { const n = Math.max(0, Math.round(seconds || 0)); return `${String(Math.floor(n / 60)).padStart(2, "0")}:${String(n % 60).padStart(2, "0")}`; }
  function formatTime(ts) { const d = new Date(ts); const p = (value) => String(value).padStart(2, "0"); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`; }

  function renderList() {
    const q = query.trim().toLowerCase();
    const list = materials.filter((item) => {
      if (filter === "favorite" && !item.favorite) return false;
      if ((filter === "kanda" || filter === "tingda") && item.type !== filter) return false;
      if (!q) return true;
      return [item.title, item.category, item.difficulty, item.description, item.text, ...(item.tags || [])].join(" ").toLowerCase().includes(q);
    });
    els.materialList.replaceChildren();
    if (!list.length) { els.materialList.innerHTML = '<div class="material-empty"><strong>没有找到素材</strong><p>尝试更换筛选条件。</p></div>'; return; }
    list.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button"; button.className = `material-item${item.id === selectedId ? " is-active" : ""}`; button.dataset.id = item.id; button.dataset.type = item.type;
      button.innerHTML = `<span class="material-type-mark">${item.type === "kanda" ? "看" : "听"}</span><span class="material-item-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml((item.tags || []).slice(0, 2).join(" / ") || item.category || "自定义")} · ${countChars(item.text)} 字</small></span><span class="material-item-side">${item.favorite ? '<i class="favorite-mark">★</i>' : ""}<span>${item.builtIn ? "默认" : "自定义"}</span></span>`;
      els.materialList.appendChild(button);
    });
  }
  function renderDetails() {
    const item = current(); if (!item) return;
    const kanda = item.type === "kanda";
    els.body.classList.toggle("is-kanda", kanda); els.body.classList.toggle("is-tingda", !kanda);
    els.modeBadge.textContent = kanda ? "看打" : "听打"; els.materialCategory.textContent = item.category || "自定义素材";
    els.materialDifficulty.textContent = item.difficulty || "进阶"; els.materialTitle.textContent = item.title;
    els.materialDescription.textContent = item.description || `${countChars(item.text)} 字`;
    els.favoriteButton.style.color = item.favorite ? "var(--gold)" : "";
    els.typingInputLabel.textContent = kanda ? "看打录入 · 标点、空格、换行均计入成绩" : "听打录入 · 根据语音完成记录";
    els.typingInput.placeholder = kanda ? "按下开始，然后严格录入原文，标点也会计分……" : "按下开始，然后根据语音录入……";
    document.querySelectorAll(".mode-switch [data-mode]").forEach((button) => button.classList.toggle("is-active", button.dataset.mode === item.type));
    renderSource(); updateUI();
  }
  function selectMaterial(id) {
    const item = materials.find((entry) => entry.id === id); if (!item) return;
    if (practice.status === "running" || practice.status === "paused") { toast("请先结束或重置当前练习。", "error"); return; }
    selectedId = item.id; prefs.lastSelected = id; saveMaterials(); resetPractice(false); renderList(); renderDetails(); prepareAudio(); updateSpeech(); closeLibrary();
  }
  function switchMode(mode) { const item = materials.find((entry) => entry.type === mode); if (item) selectMaterial(item.id); }
  function alignChars(target, typed) {
    const cacheKey = target.join("\u0001") + "\u0002" + typed.join("\u0001");
    if (alignmentCache?.key === cacheKey) return alignmentCache.value;
    const n = target.length;
    const m = typed.length;
    const dp = new Array(n + 1);
    const trace = new Array(n + 1);
    for (let i = 0; i <= n; i += 1) {
      dp[i] = new Int32Array(m + 1);
      trace[i] = new Uint8Array(m + 1);
      dp[i][0] = i;
      trace[i][0] = 3;
    }
    for (let j = 0; j <= m; j += 1) {
      dp[0][j] = j;
      trace[0][j] = 2;
    }
    for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= m; j += 1) {
        const same = target[i - 1] === typed[j - 1];
        let best = dp[i - 1][j - 1] + (same ? 0 : 1);
        let op = same ? 0 : 1;
        const insertCost = dp[i][j - 1] + 1;
        const deleteCost = dp[i - 1][j] + 1;
        if (!same && (insertCost < best || (insertCost === best && m > n))) {
          best = insertCost;
          op = 2;
        }
        if (!same && (deleteCost < best || (deleteCost === best && n > m && op !== 2))) {
          best = deleteCost;
          op = 3;
        }
        dp[i][j] = best;
        trace[i][j] = op;
      }
    }
    const operations = [];
    let i = n;
    let j = m;
    while (i > 0 || j > 0) {
      const op = trace[i][j];
      if (op === 0) {
        operations.push({ type: "match", targetIndex: i - 1, typedIndex: j - 1, targetChar: target[i - 1], typedChar: typed[j - 1] });
        i -= 1;
        j -= 1;
      } else if (op === 1) {
        operations.push({ type: "substitute", targetIndex: i - 1, typedIndex: j - 1, targetChar: target[i - 1], typedChar: typed[j - 1] });
        i -= 1;
        j -= 1;
      } else if (op === 2) {
        operations.push({ type: "insert", targetIndex: i, typedIndex: j - 1, targetChar: "", typedChar: typed[j - 1] });
        j -= 1;
      } else {
        operations.push({ type: "delete", targetIndex: i - 1, typedIndex: j, targetChar: target[i - 1], typedChar: "" });
        i -= 1;
      }
    }
    operations.reverse();
    let matches = 0;
    let substitutions = 0;
    let insertions = 0;
    let deletions = 0;
    operations.forEach((operation) => {
      if (operation.type === "match") matches += 1;
      else if (operation.type === "substitute") substitutions += 1;
      else if (operation.type === "insert") insertions += 1;
      else deletions += 1;
    });
    const errorCount = substitutions + insertions + deletions;
    const value = { operations, matches, substitutions, insertions, deletions, errorCount, totalUnits: matches + errorCount };
    alignmentCache = { key: cacheKey, value };
    return value;
  }

  function renderSource() {
    const item = current();
    if (!item) return;
    const target = targetChars();
    const typed = canonical(els.typingInput.value);
    const review = practice.status === "finished";
    const alignment = review ? alignChars(target, typed) : null;
    const states = new Array(target.length).fill("pending");
    const insertions = Array.from({ length: target.length + 1 }, () => []);
    if (alignment) {
      alignment.operations.forEach((operation) => {
        if (operation.type === "insert") insertions[operation.targetIndex].push(operation.typedChar);
        else states[operation.targetIndex] = operation;
      });
    }
    const fragment = document.createDocumentFragment();
    let index = 0;
    const appendInsertions = (at) => insertions[at].forEach((char) => {
      const span = document.createElement("span");
      span.className = "char-cell is-error is-insertion";
      span.textContent = "＋" + char;
      fragment.appendChild(span);
    });
    Array.from(String(item.text).replace(/\r\n?/g, "\n")).forEach((char) => {
      if (char === "\n") {
        if (review) appendInsertions(index);
        fragment.appendChild(document.createElement("br"));
        if (!canIgnorePunctuation()) index += 1;
        return;
      }
      if (!canonical(char).length) {
        if (review) appendInsertions(index);
        const excluded = document.createElement("span");
        excluded.className = "char-cell is-excluded";
        excluded.textContent = char;
        fragment.appendChild(excluded);
        return;
      }
      if (review) appendInsertions(index);
      const span = document.createElement("span");
      span.className = "char-cell";
      span.textContent = char;
      span.dataset.index = String(index);
      if (review) {
        const state = states[index];
        if (state?.type === "match") span.classList.add("is-correct");
        else if (state?.type === "substitute") { span.classList.add("is-error", "has-wrong-typed"); span.dataset.typed = state.typedChar; }
        else if (state?.type === "delete") { span.classList.add("is-error", "has-wrong-typed"); span.dataset.typed = "缺"; }
        else span.classList.add("is-error");
      }
      fragment.appendChild(span);
      index += 1;
    });
    if (review) appendInsertions(index);
    els.sourceText.replaceChildren(fragment);
    els.body.classList.toggle("is-reviewing", review);
    updateInputHighlight();
  }

  function stats() {
    const target = targetChars();
    const typed = canonical(els.typingInput.value);
    const alignment = alignChars(target, typed);
    practice.errors = alignment.errorCount;
    const ms = Math.max(0, elapsed());
    const minutes = ms / 60000;
    const accuracy = alignment.totalUnits ? alignment.matches / alignment.totalUnits * 100 : 100;
    return {
      target,
      typed,
      alignment,
      correct: alignment.matches,
      currentErrors: alignment.errorCount,
      insertions: alignment.insertions,
      deletions: alignment.deletions,
      substitutions: alignment.substitutions,
      ms,
      speed: minutes ? typed.length / minutes : 0,
      net: minutes ? alignment.matches / minutes : 0,
      accuracy,
      progress: target.length ? Math.min(100, typed.length / target.length * 100) : 0
    };
  }

  function recordSample(s) { if (practice.status !== "running") return; const second = Math.floor(s.ms / 1000); if (second <= practice.lastSampleSecond) return; practice.lastSampleSecond = second; practice.samples.push({ second, speed: Math.round(s.speed), netSpeed: Math.round(s.net), accuracy: Math.round(s.accuracy * 10) / 10 }); }
  function updateUI(s = stats()) {
    const total = settings.countdown && settings.duration > 0 ? settings.duration * 60000 : 0; const remain = total ? Math.max(0, total - s.ms) : 0;
    const active = practice.status === "running" || practice.status === "paused";
    els.clockLabel.textContent = total ? "剩余时间" : "已用时间"; els.clockDisplay.textContent = clock(total ? remain : s.ms);
    els.clockState.textContent = practice.status === "idle" ? "准备就绪" : practice.status === "running" ? "计时中" : practice.status === "paused" ? "已暂停" : "练习结束";
    els.speedMetric.textContent = String(Math.round(s.speed)); els.netSpeedMetric.textContent = active ? "--" : String(Math.round(s.net));
    els.accuracyMetric.textContent = active ? "--" : String(Math.round(s.accuracy * 10) / 10); els.progressMetric.textContent = String(Math.round(s.progress));
    const scale = Math.min(100, Math.max(0, s.speed / 1.6)); els.speedTrackFill.style.width = `${scale}%`; els.speedMarker.style.left = `${scale}%`; els.speedMarker.textContent = String(Math.round(s.speed));
    els.inputStats.textContent = `${s.typed.length} 字 · ${practice.backspaces} 次退格`;
    els.statusDot.className = `status-dot${practice.status === "running" ? " is-running" : practice.status === "paused" ? " is-paused" : practice.status === "finished" ? " is-finished" : ""}`;
    els.stageStatus.textContent = practice.status === "idle" ? "按“开始练习”自动计时" : practice.status === "running" ? "正在计时，练习中不显示对错" : practice.status === "paused" ? "计时与朗读均已暂停" : "本场练习已经结算";
    els.inputHint.textContent = practice.status === "idle" ? "输入第一个字后开始记录" : practice.status === "running" ? "Ctrl + Enter 交卷" : practice.status === "paused" ? "按 Esc 或按钮继续" : "可重置后再练一次";
    const label = els.startButton.querySelector("span"); if (label) label.textContent = practice.status === "idle" ? "开始练习" : practice.status === "running" ? "交卷结算" : practice.status === "paused" ? "继续练习" : "重新开始";
    els.pauseButton.disabled = practice.status === "idle" || practice.status === "finished"; els.resetButton.disabled = practice.status === "idle"; els.typingInput.disabled = practice.status === "finished";
    els.body.classList.toggle("is-reviewing", practice.status === "finished");
  }
  function beep() { if (!settings.keySound) return; try { audioContext ||= new (window.AudioContext || window.webkitAudioContext)(); const osc = audioContext.createOscillator(); const gain = audioContext.createGain(); osc.frequency.value = 620; gain.gain.setValueAtTime(0.0001, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(0.012, audioContext.currentTime + 0.004); gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.04); osc.connect(gain); gain.connect(audioContext.destination); osc.start(); osc.stop(audioContext.currentTime + 0.045); } catch {} }
  function startPractice() {
    if (practice.status === "finished") resetPractice(false);
    if (practice.status === "running") return;
    if (practice.status === "idle") { practice.status = "running"; practice.startedAt = Date.now(); practice.runningSince = Date.now(); practice.lastSampleSecond = -1; }
    else { practice.status = "running"; practice.runningSince = Date.now(); }
    if (!timer) timer = setInterval(updateClock, 100); els.typingInput.disabled = false; updateUI(); updateSpeech(); setTimeout(() => els.typingInput.focus(), 30); if (current().type === "tingda") setTimeout(startSpeech, 350);
  }
  function pausePractice() {
    if (practice.status === "running") { practice.activeMs += Date.now() - practice.runningSince; practice.runningSince = 0; practice.status = "paused"; practice.pauses += 1; stopSpeech(); updateUI(); updateSpeech(); }
    else if (practice.status === "paused") startPractice();
  }
  function resetPractice(keepInput = false) {
    stopSpeech(); if (timer) clearInterval(timer); timer = null; practice = makePractice(); if (!keepInput) { els.typingInput.value = ""; lastRaw = ""; } els.typingInput.disabled = false; els.comparisonPanel.hidden = true; els.comparisonLines.replaceChildren(); els.body.classList.remove("is-peeking", "is-reviewing"); speechIndex = 0; speechRepeat = 0; renderSource(); updateUI(); updateSpeech();
  }
  function updateClock() { const s = stats(); recordSample(s); updateUI(s); if (settings.countdown && settings.duration > 0 && s.ms >= settings.duration * 60000) finishPractice("countdown"); }
  function canonicalWithMap(value) {
    const raw = Array.from(String(value || "").replace(/\r\n?/g, "\n"));
    const chars = [];
    const rawIndices = [];
    raw.forEach((char, index) => {
      if (!canonical(char).length) return;
      chars.push(char);
      rawIndices.push(index);
    });
    return { raw, chars, rawIndices };
  }

  function syncInputHighlight() {
    if (!els.typingHighlight || !els.typingInput) return;
    els.typingHighlight.scrollTop = els.typingInput.scrollTop;
    els.typingHighlight.scrollLeft = els.typingInput.scrollLeft;
  }

  function updateInputHighlight() {
    const layer = els.typingHighlight;
    if (!layer) return;
    layer.replaceChildren();
    if (practice.status !== "finished") return;
    const typedMap = canonicalWithMap(els.typingInput.value);
    const alignment = alignChars(targetChars(), typedMap.chars);
    const states = new Map();
    const missingAt = Array.from({ length: typedMap.raw.length + 1 }, () => []);
    alignment.operations.forEach((operation) => {
      if (operation.type === "insert") {
        const rawIndex = typedMap.rawIndices[operation.typedIndex];
        if (rawIndex !== undefined) states.set(rawIndex, "insert");
      } else if (operation.type === "substitute") {
        const rawIndex = typedMap.rawIndices[operation.typedIndex];
        if (rawIndex !== undefined) states.set(rawIndex, "error");
      } else if (operation.type === "match") {
        const rawIndex = typedMap.rawIndices[operation.typedIndex];
        if (rawIndex !== undefined) states.set(rawIndex, "match");
      } else {
        const rawIndex = typedMap.rawIndices[operation.typedIndex] ?? typedMap.raw.length;
        missingAt[rawIndex].push(operation.targetChar);
      }
    });
    const fragment = document.createDocumentFragment();
    const appendMissing = (at) => missingAt[at].forEach((char) => {
      const marker = document.createElement("span");
      marker.className = "input-missing";
      marker.dataset.mark = "缺:" + char;
      marker.textContent = "\u200b";
      fragment.appendChild(marker);
    });
    typedMap.raw.forEach((char, index) => {
      appendMissing(index);
      const span = document.createElement("span");
      const state = states.get(index);
      span.className = state === "error" ? "input-char input-error" : state === "insert" ? "input-char input-insert" : "input-char";
      span.textContent = char;
      fragment.appendChild(span);
    });
    appendMissing(typedMap.raw.length);
    const tail = document.createElement("span");
    tail.textContent = "\u200b";
    fragment.appendChild(tail);
    layer.replaceChildren(fragment);
    syncInputHighlight();
  }

  function collapseAutoPairs(previousRaw, inputType) {
    const input = els.typingInput;
    let value = input.value;
    if (value === previousRaw || inputType === "insertFromPaste" || inputType === "insertFromDrop") return value;
    let prefix = 0;
    while (prefix < value.length && prefix < previousRaw.length && value[prefix] === previousRaw[prefix]) prefix += 1;
    let suffix = 0;
    while (suffix < value.length - prefix && suffix < previousRaw.length - prefix && value[value.length - 1 - suffix] === previousRaw[previousRaw.length - 1 - suffix]) suffix += 1;
    const inserted = value.slice(prefix, value.length - suffix);
    const removed = previousRaw.slice(prefix, previousRaw.length - suffix);
    if (removed || !inserted) return value;
    const pairs = [["《", "》"], ["“", "”"], ["‘", "’"], ["（", "）"], ["【", "】"], ["〈", "〉"], ["〔", "〕"], ["「", "」"], ["『", "』"], ["｛", "｝"], ["[", "]"], ["{", "}"]];
    for (const [open, close] of pairs) {
      const pair = open + close;
      const at = inserted.indexOf(pair);
      if (at >= 0) {
        const removeAt = prefix + at + 1;
        value = value.slice(0, removeAt) + value.slice(removeAt + 1);
        const caret = Math.max(prefix + at + 1, (input.selectionStart || value.length + 1) - 1);
        input.value = value;
        input.setSelectionRange(caret, caret);
        return value;
      }
    }
    return value;
  }

  function processInput(event) {
    if (event?.inputType) lastInputType = event.inputType;
    if (composing || practice.status === "finished") return;
    const raw = collapseAutoPairs(lastRaw, lastInputType);
    if (!settings.allowBackspace && raw.length < lastRaw.length) { els.typingInput.value = lastRaw; return; }
    if (practice.status === "idle" && raw.length) startPractice();
    const previous = canonical(lastRaw);
    const next = canonical(raw);
    let changed = false;
    if (next.length < previous.length) practice.backspaces += previous.length - next.length;
    else if (next.length > previous.length) { practice.keystrokes += next.length - previous.length; changed = true; }
    else if (raw !== lastRaw && raw) { practice.keystrokes += 1; changed = true; }
    if (changed || next.length < previous.length) beep();
    lastRaw = raw;
    const target = targetChars();
    const alignment = alignChars(target, next);
    practice.errors = alignment.errorCount;
    renderSource();
    updateUI();
    const isComplete = target.length && next.length === target.length && alignment.errorCount === 0;
    if (isComplete) setTimeout(() => {
      if (practice.status === "running" && canonical(els.typingInput.value).length === target.length) finishPractice("completed");
    }, 280);
  }

  function comparisonHtml(target, typed) {
    const operations = alignChars(target, typed).operations;
    const errorIndexes = [];
    operations.forEach((operation, index) => { if (operation.type !== "match") errorIndexes.push(index); });
    if (!errorIndexes.length) return '<div class="comparison-row"><span>校勘</span><div>逐字一致，没有发现错漏。</div></div>';
    const clusters = [];
    errorIndexes.forEach((index) => {
      const last = clusters.at(-1);
      if (!last || index - last.at(-1) > 5) clusters.push([index]);
      else last.push(index);
    });
    return clusters.slice(0, 10).map((cluster) => {
      const start = Math.max(0, cluster[0] - 6);
      const end = Math.min(operations.length, cluster.at(-1) + 7);
      const slice = operations.slice(start, end);
      const targetParts = [];
      const typedParts = [];
      slice.forEach((operation) => {
        if (operation.type === "match") {
          targetParts.push(escapeHtml(operation.targetChar));
          typedParts.push(escapeHtml(operation.typedChar));
        } else if (operation.type === "substitute") {
          targetParts.push("<mark>" + escapeHtml(operation.targetChar) + "</mark>");
          typedParts.push("<mark>" + escapeHtml(operation.typedChar) + "</mark>");
        } else if (operation.type === "delete") {
          targetParts.push("<mark>" + escapeHtml(operation.targetChar) + "</mark>");
          typedParts.push('<mark>缺</mark>');
        } else {
          targetParts.push('<span class="alignment-gap">空</span>');
          typedParts.push("<ins>插入 " + escapeHtml(operation.typedChar) + "</ins>");
        }
      });
      const first = operations[cluster[0]];
      const label = first.type === "insert" ? "插入位置" : "第 " + (first.targetIndex + 1) + " 字";
      return '<div class="comparison-row"><span>' + label + '</span><div>标准：' + targetParts.join("") + ' <ins>录入：' + typedParts.join("") + '</ins></div></div>';
    }).join("");
  }

  function grade(s) { if (s.accuracy >= 99 && s.net >= 80) return { mark: "优", title: "熟练录入", text: "速度和准确率均达到优秀水平。" }; if (s.accuracy >= 97 && s.net >= 55) return { mark: "良", title: "稳定完成", text: "节奏稳定，继续巩固易错字。" }; if (s.accuracy >= 92 && s.net >= 35) return { mark: "中", title: "基础扎实", text: "保持准确，逐步提高连续录入速度。" }; return { mark: "练", title: "完成训练", text: "先保证准确，再逐步减少停顿和退格。" }; }

  function finishPractice(reason = "manual") {
    if (practice.status === "idle" || practice.status === "finished") return;
    if (practice.status === "running") practice.activeMs += Date.now() - practice.runningSince;
    practice.runningSince = 0; practice.status = "finished"; practice.finishedAt = Date.now(); practice.reason = reason; stopSpeech(); if (timer) clearInterval(timer); timer = null;
    const s = stats(); recordSample(s); els.comparisonSummary.textContent = s.errors ? `智能对齐发现 ${s.errors} 处差异（插入 ${s.insertions} · 缺失 ${s.deletions} · 替换 ${s.substitutions}）` : "逐字一致"; els.comparisonLines.innerHTML = comparisonHtml(s.target, s.typed);
    els.comparisonPanel.hidden = !settings.autoComparison; if (current().type === "tingda") { els.body.classList.add("is-peeking"); els.peekSourceButton.textContent = "收回原文"; }
    saveHistory(s); renderSource(); updateUI(s); showResult(s);
  }
  function saveHistory(s) {
    if (practice.recorded) return; practice.recorded = true; if (!s.keystrokes && !s.typed.length) return;
    const result = grade(s); history.unshift({ id: uid("record"), timestamp: Date.now(), materialId: current().id, materialTitle: current().title, mode: current().type, durationSeconds: Math.max(1, Math.round(s.ms / 1000)), speed: Math.round(s.speed * 10) / 10, netSpeed: Math.round(s.net * 10) / 10, accuracy: Math.round(s.accuracy * 10) / 10, correctChars: s.correct, typedChars: s.typed.length, backspaces: practice.backspaces, errors: s.errors, grade: result.mark });
    history = history.slice(0, 500); write(KEY.history, history); renderDashboard();
  }
  function drawChart(canvas, data, height) {
    const rect = canvas.getBoundingClientRect(); const width = Math.max(180, rect.width || 400); const ratio = Math.min(2, devicePixelRatio || 1); canvas.width = width * ratio; canvas.height = height * ratio; const ctx = canvas.getContext("2d"); ctx.setTransform(ratio, 0, 0, ratio, 0, 0); ctx.clearRect(0, 0, width, height); if (!data.length) return;
    const css = getComputedStyle(document.documentElement); const green = css.getPropertyValue("--celadon").trim(); const gold = css.getPropertyValue("--gold").trim(); const line = css.getPropertyValue("--line").trim(); const pad = 12; const h = height - pad * 2; const maxSpeed = Math.max(20, ...data.map((item) => item.netSpeed || item.speed || 0)) * 1.15;
    ctx.strokeStyle = line; ctx.lineWidth = 1; [0, .5, 1].forEach((r) => { ctx.beginPath(); ctx.moveTo(pad, pad + h * r); ctx.lineTo(width - pad, pad + h * r); ctx.stroke(); });
    const x = (i) => pad + (data.length < 2 ? (width - pad * 2) / 2 : i / (data.length - 1) * (width - pad * 2)); const ySpeed = (v) => pad + h - Math.min(maxSpeed, v) / maxSpeed * h; const yAcc = (v) => pad + h - Math.min(100, Math.max(0, v)) / 100 * h;
    [[green, "netSpeed", ySpeed], [gold, "accuracy", yAcc]].forEach(([color, key, y]) => { ctx.beginPath(); data.forEach((item, i) => { const px = x(i); const py = y(item[key] || 0); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.stroke(); });
  }
  function showResult(s) {
    const result = grade(s); els.resultGrade.textContent = result.mark; els.resultTitle.textContent = result.title; els.resultSubtitle.textContent = result.text;
    els.resultSpeed.textContent = String(Math.round(s.speed)); els.resultNetSpeed.textContent = String(Math.round(s.net)); els.resultAccuracy.textContent = String(Math.round(s.accuracy * 10) / 10); els.resultDuration.textContent = shortDuration(s.ms / 1000); els.resultCorrectChars.textContent = String(s.correct); els.resultBackspaces.textContent = String(practice.backspaces);
    els.resultAdvice.textContent = s.accuracy >= 98 ? "准确率较稳定，下一步可提高连续输入速度。" : s.accuracy >= 94 ? "节奏较稳定，建议针对本次差异做短句重复练习。" : "当前应先保证准确，再看速度。";
    els.resultComparisonSummary.textContent = s.errors ? `智能对齐发现 ${s.errors} 处差异（插入 ${s.insertions} · 缺失 ${s.deletions} · 替换 ${s.substitutions}）` : "逐字一致"; els.resultComparisonContent.innerHTML = comparisonHtml(s.target, s.typed); els.resultComparison.hidden = !settings.autoComparison; els.reviewMistakesButton.textContent = settings.autoComparison ? "收起错字校勘" : "查看错字校勘";
    if (!els.resultDialog.open) els.resultDialog.showModal(); requestAnimationFrame(() => drawChart(els.resultChart, practice.samples.length ? practice.samples : [{ netSpeed: Math.round(s.net), accuracy: s.accuracy }], 128));
  }
  function renderHistory() {
    const mode = els.historyFilterSelect.value; const rows = history.filter((item) => mode === "all" || item.mode === mode);
    els.historyTableBody.innerHTML = rows.slice(0, 100).map((item) => `<tr><td>${formatTime(item.timestamp)}</td><td>${escapeHtml(item.materialTitle)}</td><td>${item.mode === "kanda" ? "看打" : "听打"}</td><td>${shortDuration(item.durationSeconds)}</td><td class="speed-value">${item.speed}</td><td class="speed-value">${item.netSpeed}</td><td class="accuracy-value">${item.accuracy}%</td><td><button class="table-delete" data-delete="${item.id}">删除</button></td></tr>`).join("");
    els.historyEmptyState.hidden = rows.length > 0;
  }
  function startOfWeek() { const now = new Date(); const day = now.getDay() || 7; const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day + 1); date.setHours(0, 0, 0, 0); return date.getTime(); }
  function renderDashboard() {
    const seconds = history.reduce((sum, item) => sum + Number(item.durationSeconds || 0), 0); const avgSpeed = history.length ? history.reduce((sum, item) => sum + Number(item.speed || 0), 0) / history.length : 0; const avgAcc = history.length ? history.reduce((sum, item) => sum + Number(item.accuracy || 0), 0) / history.length : 0; const best = history.reduce((a, b) => !a || b.netSpeed > a.netSpeed ? b : a, null);
    els.totalPracticeTime.innerHTML = `${Math.round(seconds / 60)}<small>分钟</small>`; els.totalSessionText.textContent = history.length ? `共完成 ${history.length} 次有效练习` : "还没有完成练习"; els.averageSpeed.innerHTML = `${Math.round(avgSpeed)}<small>字/分</small>`; els.averageAccuracy.innerHTML = `${Math.round(avgAcc * 10) / 10}<small>%</small>`; els.bestNetSpeed.innerHTML = `${Math.round(best?.netSpeed || 0)}<small>字/分</small>`; els.bestSessionTitle.textContent = best?.materialTitle || "等待首条成绩";
    const week = history.filter((item) => item.timestamp >= startOfWeek()); const minutes = Math.round(week.reduce((sum, item) => sum + Number(item.durationSeconds || 0), 0) / 60); els.weeklyMinutes.textContent = String(minutes); els.weeklySessions.textContent = `${week.length} 次`; els.weeklyGoalRing.style.setProperty("--goal-progress", `${Math.min(100, minutes / 120 * 100)}%`); renderHistory(); if (currentView === "dashboard") requestAnimationFrame(() => drawChart(els.historyChart, history.slice(0, 14).reverse(), 220));
  }

  function splitSegments(text) { const normalized = String(text || "").replace(/\r\n?/g, "\n").trim(); if (!normalized) return []; return (normalized.match(/[^。！？!?；;\n]+[。！？!?；;]?|\n/g) || [normalized]).map((item) => item.trim()).filter(Boolean); }
  function updateSpeech() {
    speechSegments = splitSegments(current().text); speechIndex = Math.min(speechIndex, Math.max(0, speechSegments.length - 1));
    els.speechSegmentLabel.textContent = speechSegments.length ? `第 ${speechIndex + 1} / ${speechSegments.length} 句` : "第 1 / 1 句";
    els.speechPreview.textContent = practice.status === "running" && !els.body.classList.contains("is-peeking") ? "语音播放中，请根据听觉录入。" : (speechSegments[speechIndex] || "当前素材没有可朗读内容。");
    els.audioAttachment.hidden = !current().audio?.name; els.audioFileName.textContent = current().audio?.name || "录音文件"; els.useAudioButton.textContent = settings.useAttachedAudio ? "改用语音合成" : "使用录音";
  }
  function stopSpeech() { speechToken += 1; if ("speechSynthesis" in window) speechSynthesis.cancel(); if (!els.audioPlayer.paused) els.audioPlayer.pause(); }
  function speakCurrent(restart = true) {
    if (current().type !== "tingda" || !speechSegments.length) return;
    if (!("speechSynthesis" in window)) { toast("当前浏览器不支持语音合成。", "error"); return; }
    if (restart) { speechRepeat = 0; stopSpeech(); } const token = speechToken; const text = speechSegments[speechIndex] || ""; const utterance = new SpeechSynthesisUtterance(text); const voices = speechSynthesis.getVoices(); const voice = voices.find((item) => item.name === settings.voice) || voices.find((item) => /^zh|Chinese|Mandarin|普通话|中文/iu.test(`${item.lang} ${item.name}`)); if (voice) utterance.voice = voice; utterance.lang = voice?.lang || "zh-CN"; utterance.rate = Number(settings.speechRate) || .8;
    utterance.onend = () => { if (token !== speechToken || practice.status !== "running") return; speechRepeat += 1; if (speechRepeat < Number(settings.repeat)) { speakCurrent(false); return; } if (settings.autoNext && speechIndex < speechSegments.length - 1) { speechIndex += 1; speechRepeat = 0; updateSpeech(); setTimeout(() => speakCurrent(false), 250); return; } if (settings.autoFinishAudio) setTimeout(() => finishPractice("audio-ended"), 450); };
    speechSynthesis.speak(utterance);
  }
  function startSpeech() { if (current().type !== "tingda" || practice.status !== "running") return; if (settings.useAttachedAudio && current().audio?.name && audioUrl) { els.audioPlayer.playbackRate = Math.min(1.25, Math.max(.6, settings.speechRate)); els.audioPlayer.play().catch(() => toast("录音无法播放。", "error")); } else speakCurrent(true); }
  function speechPause() { if (settings.useAttachedAudio && current().audio?.name) { els.audioPlayer.paused ? els.audioPlayer.play() : els.audioPlayer.pause(); return; } if (speechSynthesis.paused) speechSynthesis.resume(); else if (speechSynthesis.speaking) speechSynthesis.pause(); else if (practice.status === "running") speakCurrent(true); }
  function moveSpeech(delta) { if (!speechSegments.length) return; speechIndex = Math.max(0, Math.min(speechSegments.length - 1, speechIndex + delta)); speechRepeat = 0; updateSpeech(); if (practice.status === "running") startSpeech(); }
  function voicesReady() { const voices = speechSynthesis.getVoices(); const chinese = voices.filter((item) => /^zh|Chinese|Mandarin|普通话|中文/iu.test(`${item.lang} ${item.name}`)); const list = chinese.length ? chinese : voices; els.voiceSelect.innerHTML = '<option value="">自动选择中文语音</option>'; list.forEach((voice) => { const option = document.createElement("option"); option.value = voice.name; option.textContent = `${voice.name} · ${voice.lang}`; option.selected = voice.name === settings.voice; els.voiceSelect.appendChild(option); }); }
  function openDb() { return new Promise((resolve) => { if (!("indexedDB" in window)) return resolve(null); const request = indexedDB.open("tingda-audio-store", 1); request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains("audio")) request.result.createObjectStore("audio"); }; request.onsuccess = () => resolve(request.result); request.onerror = () => resolve(null); }); }
  async function putAudio(id, file) { const db = await openDb(); if (!db) return false; return new Promise((resolve) => { const tx = db.transaction("audio", "readwrite"); tx.objectStore("audio").put(file, id); tx.oncomplete = () => resolve(true); tx.onerror = () => resolve(false); }); }
  async function getAudio(id) { const db = await openDb(); if (!db) return null; return new Promise((resolve) => { const tx = db.transaction("audio", "readonly"); const req = tx.objectStore("audio").get(id); req.onsuccess = () => resolve(req.result || null); req.onerror = () => resolve(null); }); }
  async function deleteAudio(id) { const db = await openDb(); if (!db) return; const tx = db.transaction("audio", "readwrite"); tx.objectStore("audio").delete(id); }
  async function prepareAudio() { if (audioUrl) URL.revokeObjectURL(audioUrl); audioUrl = null; els.audioPlayer.pause(); els.audioPlayer.removeAttribute("src"); els.audioPlayer.load(); if (!current().audio?.name) { settings.useAttachedAudio = false; updateSpeech(); return; } const file = await getAudio(current().id); if (!file) { updateSpeech(); return; } audioUrl = URL.createObjectURL(file); els.audioPlayer.src = audioUrl; updateSpeech(); }

  function askConfirm(title, message, label = "确认") { els.confirmTitle.textContent = title; els.confirmMessage.textContent = message; els.confirmActionButton.textContent = label; els.confirmDialog.showModal(); return new Promise((resolve) => { confirmResolve = resolve; }); }
  function closeConfirm(value) { if (els.confirmDialog.open) els.confirmDialog.close(); if (confirmResolve) { const resolve = confirmResolve; confirmResolve = null; resolve(value); } }
  function resetForm() { els.materialForm.reset(); els.editingMaterialId.value = ""; els.materialDialogTitle.textContent = "新建自定义素材"; els.materialCategoryInput.value = ""; els.materialDifficultyInput.value = "进阶"; pendingAudio = null; removeAudio = false; els.audioUploadTitle.textContent = "选择本地录音文件"; els.removeAudioButton.hidden = true; els.deleteMaterialButton.hidden = true; els.materialCharacterCount.textContent = "0"; }
  function openNewMaterial(type = current()?.type || "kanda") { resetForm(); els.materialTypeInput.value = type; els.materialCategoryInput.value = type === "tingda" ? "自建听打" : "自建看打"; els.materialDialog.showModal(); setTimeout(() => els.materialTitleInput.focus(), 30); }
  function openEditMaterial() {
    const item = current(); if (!item) return; if (item.builtIn) { copyMaterial(true); return; }
    resetForm(); els.editingMaterialId.value = item.id; els.materialDialogTitle.textContent = "编辑自定义素材"; els.materialTitleInput.value = item.title; els.materialTypeInput.value = item.type; els.materialCategoryInput.value = item.category || ""; els.materialDifficultyInput.value = item.difficulty || "进阶"; els.materialTagsInput.value = (item.tags || []).join(" "); els.materialTextInput.value = item.text; els.materialCharacterCount.textContent = String(countChars(item.text)); els.deleteMaterialButton.hidden = false; if (item.audio?.name) { els.audioUploadTitle.textContent = item.audio.name; els.removeAudioButton.hidden = false; } els.materialDialog.showModal();
  }
  async function saveMaterial(event) {
    event.preventDefault(); const title = els.materialTitleInput.value.trim(); const text = els.materialTextInput.value.replace(/\r\n?/g, "\n").trim(); if (!title || !text) return toast("请填写素材标题和正文。", "error");
    const id = els.editingMaterialId.value || uid("custom"); const old = custom.find((item) => item.id === id);
    const item = { id, type: els.materialTypeInput.value, title, category: els.materialCategoryInput.value.trim() || "自建素材", difficulty: els.materialDifficultyInput.value, tags: els.materialTagsInput.value.split(/[\s,，、]+/u).filter(Boolean), text, builtIn: false, favorite: old?.favorite || false, audio: removeAudio ? null : (old?.audio || null), createdAt: old?.createdAt || Date.now(), updatedAt: Date.now() };
    if (pendingAudio) { if (pendingAudio.size > 10 * 1024 * 1024) return toast("录音文件超过 10 MB。", "error"); if (await putAudio(id, pendingAudio)) item.audio = { name: pendingAudio.name, type: pendingAudio.type, size: pendingAudio.size }; }
    if (removeAudio && old?.audio?.name) await deleteAudio(id);
    old ? custom[custom.findIndex((entry) => entry.id === id)] = item : custom.push(item); materials = mergeMaterials(); selectedId = id; prefs.lastSelected = id; saveMaterials(); els.materialDialog.close(); renderList(); renderDetails(); await prepareAudio(); toast(old ? "素材已更新。" : "素材已保存。", "success");
  }
  async function deleteMaterial() {
    const item = current(); if (!item || item.builtIn) return; if (!await askConfirm("删除自定义素材", `确认删除“${item.title}”吗？`, "删除素材")) return;
    custom = custom.filter((entry) => entry.id !== item.id); delete prefs[item.id]; if (item.audio?.name) await deleteAudio(item.id); materials = mergeMaterials(); selectedId = materials[0].id; prefs.lastSelected = selectedId; saveMaterials(); els.materialDialog.close(); resetPractice(false); renderList(); renderDetails(); await prepareAudio(); toast("素材已删除。", "success");
  }
  function copyMaterial(openEditor = false) { const source = current(); const item = { ...source, id: uid("custom"), title: `${source.title}（副本）`, builtIn: false, favorite: false, audio: null, createdAt: Date.now(), updatedAt: Date.now() }; custom.push(item); materials = mergeMaterials(); selectedId = item.id; prefs.lastSelected = item.id; saveMaterials(); renderList(); renderDetails(); if (openEditor) openEditMaterial(); else toast("已复制为自定义素材。", "success"); }
  function toggleFavorite() { const item = current(); item.favorite = !item.favorite; prefs[item.id] = { ...(prefs[item.id] || {}), favorite: item.favorite }; if (!item.builtIn) { const target = custom.find((entry) => entry.id === item.id); if (target) target.favorite = item.favorite; } saveMaterials(); renderList(); renderDetails(); }
  async function importMaterials(file) { try { const data = JSON.parse(await file.text()); const source = Array.isArray(data) ? data : Array.isArray(data?.materials) ? data.materials : []; const list = source.filter((item) => item?.title && item?.text).map((item) => ({ ...item, id: uid("imported"), type: item.type === "tingda" ? "tingda" : "kanda", title: String(item.title).slice(0, 60), category: String(item.category || "导入素材").slice(0, 30), difficulty: ["基础", "进阶", "实战", "挑战"].includes(item.difficulty) ? item.difficulty : "进阶", tags: Array.isArray(item.tags) ? item.tags.map(String) : [], text: String(item.text), builtIn: false, favorite: false, audio: null })); if (!list.length) throw new Error(); custom.push(...list); materials = mergeMaterials(); saveMaterials(); renderList(); toast(`已导入 ${list.length} 条素材。`, "success"); } catch { toast("导入失败，请检查 JSON 文件。", "error"); } finally { els.materialImportInput.value = ""; } }
  function exportBackup() { const blob = new Blob([JSON.stringify({ app: "听打间", version: 2, materials, history, settings }, null, 2)], { type: "application/json;charset=utf-8" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `听打间备份-${new Date().toISOString().slice(0, 10)}.json`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast("备份文件已生成。", "success"); }
  async function resetLibrary() { if (!await askConfirm("恢复默认素材库", "这会删除全部自定义素材和收藏设置。", "恢复默认")) return; custom = []; Object.keys(prefs).forEach((key) => delete prefs[key]); materials = mergeMaterials(); selectedId = materials[0].id; prefs.lastSelected = selectedId; saveMaterials(); resetPractice(false); renderList(); renderDetails(); toast("素材库已恢复默认。", "success"); }
  function switchView(view) { currentView = view; els.practiceView.hidden = view !== "practice"; els.dashboardView.hidden = view !== "dashboard"; document.querySelectorAll(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view)); if (view === "dashboard") renderDashboard(); }
  function openLibrary() { els.body.classList.add("library-open"); els.mobileBackdrop.hidden = false; }
  function closeLibrary() { els.body.classList.remove("library-open"); els.mobileBackdrop.hidden = true; }
  function toggleFocus() { els.body.classList.toggle("is-focus"); const active = els.body.classList.contains("is-focus"); els.focusButton.lastChild.textContent = active ? "退出" : "专注"; }
  function bindToggle(element, key, callback) { if (!element) return; element.addEventListener("change", () => { settings[key] = element.checked; saveSettings(); callback?.(element.checked); }); }

  function wireEvents() {
    document.querySelectorAll(".nav-button").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
    document.querySelectorAll("[data-go-practice]").forEach((button) => button.addEventListener("click", () => switchView("practice")));
    els.openLibraryButton.addEventListener("click", openLibrary); els.closeLibraryButton.addEventListener("click", closeLibrary); els.mobileBackdrop.addEventListener("click", closeLibrary);
    els.materialSearch.addEventListener("input", () => { query = els.materialSearch.value; renderList(); });
    els.libraryFilter.addEventListener("click", (event) => { const button = event.target.closest("[data-filter]"); if (!button) return; filter = button.dataset.filter; els.libraryFilter.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button)); renderList(); });
    els.materialList.addEventListener("click", (event) => { const item = event.target.closest("[data-id]"); if (item) selectMaterial(item.dataset.id); });
    els.newMaterialButton.addEventListener("click", () => openNewMaterial()); els.importMaterialsButton.addEventListener("click", () => els.materialImportInput.click()); els.exportMaterialsButton.addEventListener("click", exportBackup); els.resetLibraryButton.addEventListener("click", resetLibrary);
    els.favoriteButton.addEventListener("click", toggleFavorite); els.copyMaterialButton.addEventListener("click", () => copyMaterial(false)); els.editMaterialButton.addEventListener("click", openEditMaterial);
    document.querySelectorAll(".mode-switch [data-mode]").forEach((button) => button.addEventListener("click", () => switchMode(button.dataset.mode)));
    els.durationOptions.addEventListener("click", (event) => { const button = event.target.closest("[data-duration]"); if (!button) return; settings.duration = Number(button.dataset.duration); saveSettings(); applySettings(); if (practice.status === "idle") updateUI(); });
    els.countdownToggle.addEventListener("change", () => { settings.countdown = els.countdownToggle.checked; saveSettings(); updateUI(); });
    els.startButton.addEventListener("click", () => practice.status === "running" ? finishPractice("manual") : startPractice()); els.pauseButton.addEventListener("click", pausePractice); els.resetButton.addEventListener("click", () => resetPractice(false));
    els.typingInput.addEventListener("scroll", syncInputHighlight);
    els.typingInput.addEventListener("beforeinput", (event) => { lastInputType = event.inputType || ""; });
    els.typingInput.addEventListener("compositionstart", () => { composing = true; }); els.typingInput.addEventListener("compositionend", () => { composing = false; processInput(); }); els.typingInput.addEventListener("input", processInput);
    els.peekSourceButton.addEventListener("click", () => { els.body.classList.toggle("is-peeking"); els.peekSourceButton.textContent = els.body.classList.contains("is-peeking") ? "收回原文" : "临时查看原文"; updateSpeech(); });
    els.focusButton.addEventListener("click", toggleFocus);
    els.fontDecreaseButton.addEventListener("click", () => { settings.fontSize = Math.max(18, settings.fontSize - 1); saveSettings(); applySettings(); }); els.fontIncreaseButton.addEventListener("click", () => { settings.fontSize = Math.min(36, settings.fontSize + 1); saveSettings(); applySettings(); });
    els.themeButton.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")); els.helpButton.addEventListener("click", () => els.helpDialog.showModal()); els.settingsButton.addEventListener("click", () => els.settingsDialog.showModal());
    els.speechPrevButton.addEventListener("click", () => moveSpeech(-1)); els.speechNextButton.addEventListener("click", () => moveSpeech(1)); els.speechPlayButton.addEventListener("click", () => practice.status === "running" ? speechPause() : startPractice());
    els.speechRateSelect.addEventListener("change", () => { settings.speechRate = Number(els.speechRateSelect.value); saveSettings(); if (practice.status === "running") startSpeech(); }); els.voiceSelect.addEventListener("change", () => { settings.voice = els.voiceSelect.value; saveSettings(); }); els.repeatSelect.addEventListener("change", () => { settings.repeat = Number(els.repeatSelect.value); saveSettings(); });
    els.useAudioButton.addEventListener("click", () => { settings.useAttachedAudio = !settings.useAttachedAudio; saveSettings(); stopSpeech(); updateSpeech(); if (practice.status === "running") startSpeech(); }); els.audioPlayer.addEventListener("ended", () => { if (practice.status === "running" && settings.useAttachedAudio && settings.autoFinishAudio) finishPractice("audio-ended"); });
    els.retryButton.addEventListener("click", () => { els.resultDialog.close(); resetPractice(false); startPractice(); }); els.reviewMistakesButton.addEventListener("click", () => { els.resultComparison.hidden = !els.resultComparison.hidden; els.reviewMistakesButton.textContent = els.resultComparison.hidden ? "查看错字校勘" : "收起错字校勘"; });
    document.querySelectorAll("[data-close-result]").forEach((button) => button.addEventListener("click", () => els.resultDialog.close())); document.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => button.closest("dialog")?.close()));
    els.confirmCancelButton.addEventListener("click", () => closeConfirm(false)); els.confirmActionButton.addEventListener("click", () => closeConfirm(true)); els.confirmDialog.addEventListener("cancel", (event) => { event.preventDefault(); closeConfirm(false); });
    bindToggle(els.ignorePunctuationToggle, "ignorePunctuation"); bindToggle(els.allowBackspaceToggle, "allowBackspace"); bindToggle(els.keySoundToggle, "keySound"); bindToggle(els.autoComparisonToggle, "autoComparison"); bindToggle(els.hideSourceToggle, "hideSource", (checked) => { if (current().type === "tingda") els.body.classList.toggle("is-peeking", !checked); updateSpeech(); }); bindToggle(els.autoNextToggle, "autoNext"); bindToggle(els.autoFinishAudioToggle, "autoFinishAudio"); bindToggle(els.autoFocusToggle, "autoFocus");
    els.fontSizeRange.addEventListener("input", () => { settings.fontSize = Number(els.fontSizeRange.value); els.fontSizeOutput.textContent = `${settings.fontSize} px`; document.documentElement.style.setProperty("--source-font-size", `${settings.fontSize}px`); saveSettings(); });
    els.settingsForm.addEventListener("submit", (event) => { event.preventDefault(); saveSettings(); els.settingsDialog.close(); }); els.restoreSettingsButton.addEventListener("click", () => { Object.assign(settings, DEFAULT_SETTINGS); saveSettings(); applySettings(); updateUI(); });
    els.materialForm.addEventListener("submit", saveMaterial); els.materialTextInput.addEventListener("input", () => { els.materialCharacterCount.textContent = String(countChars(els.materialTextInput.value)); }); els.materialTypeInput.addEventListener("change", () => { if (!els.materialCategoryInput.value || /自建看打|自建听打/.test(els.materialCategoryInput.value)) els.materialCategoryInput.value = els.materialTypeInput.value === "tingda" ? "自建听打" : "自建看打"; });
    els.chooseAudioButton.addEventListener("click", () => els.materialAudioInput.click()); els.materialAudioInput.addEventListener("change", () => { const file = els.materialAudioInput.files?.[0]; if (!file) return; if (file.size > 10 * 1024 * 1024) { els.materialAudioInput.value = ""; return toast("录音文件超过 10 MB。", "error"); } pendingAudio = file; removeAudio = false; els.audioUploadTitle.textContent = file.name; els.removeAudioButton.hidden = false; }); els.removeAudioButton.addEventListener("click", () => { pendingAudio = null; removeAudio = true; els.materialAudioInput.value = ""; els.audioUploadTitle.textContent = "选择本地录音文件"; els.removeAudioButton.hidden = true; }); els.deleteMaterialButton.addEventListener("click", deleteMaterial);
    els.materialImportInput.addEventListener("change", () => { const file = els.materialImportInput.files?.[0]; if (file) importMaterials(file); }); els.historyFilterSelect.addEventListener("change", renderHistory); els.historyTableBody.addEventListener("click", async (event) => { const button = event.target.closest("[data-delete]"); if (!button) return; if (!await askConfirm("删除练习记录", "确认删除这条记录吗？", "删除记录")) return; history = history.filter((item) => item.id !== button.dataset.delete); write(KEY.history, history); renderDashboard(); }); els.clearHistoryButton.addEventListener("click", async () => { if (!history.length) return; if (!await askConfirm("清空练习记录", "确认删除全部历史成绩吗？", "全部清空")) return; history = []; write(KEY.history, history); renderDashboard(); toast("练习记录已清空。", "success"); });
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "f") { event.preventDefault(); toggleFocus(); return; }
      if (event.ctrlKey && event.key === "Enter") { event.preventDefault(); if (practice.status === "running") finishPractice("manual"); else startPractice(); return; }
      if (event.key === "Escape" && !document.querySelector("dialog[open]") && (practice.status === "running" || practice.status === "paused")) { event.preventDefault(); pausePractice(); return; }
      if (current().type === "tingda" && event.key === "F2") { event.preventDefault(); speakCurrent(true); } else if (current().type === "tingda" && event.key === "F1") { event.preventDefault(); moveSpeech(-1); } else if (current().type === "tingda" && event.key === "F3") { event.preventDefault(); moveSpeech(1); }
    });
    window.addEventListener("resize", () => { if (innerWidth > 1020) closeLibrary(); if (currentView === "dashboard") requestAnimationFrame(() => drawChart(els.historyChart, history.slice(0, 14).reverse(), 220)); if (els.resultDialog.open) requestAnimationFrame(() => drawChart(els.resultChart, practice.samples.length ? practice.samples : [], 128)); }); window.addEventListener("beforeunload", stopSpeech);
  }
  function init() {
    const theme = localStorage.getItem(KEY.theme) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); applyTheme(theme); if (!materials.some((item) => item.id === selectedId)) selectedId = materials[0].id; applySettings(); if ("speechSynthesis" in window) { voicesReady(); speechSynthesis.addEventListener("voiceschanged", voicesReady); }
    wireEvents(); renderList(); renderDetails(); updateSpeech(); prepareAudio(); renderDashboard(); if (settings.autoFocus) toggleFocus(); if (current().type === "tingda" && !settings.hideSource) els.body.classList.add("is-peeking");
  }
  init();
})();
