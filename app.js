const POSITIONS = ["投", "捕", "一", "二", "三", "遊", "外"];
const FIRST_NAMES = ["青柳", "桐生", "三枝", "榊", "深町", "朝倉", "鳴海", "片瀬", "有馬", "久世", "篠原", "御影", "橘", "黒沢", "白石", "芹沢"];
const LAST_NAMES = ["悠真", "蓮", "大河", "隼人", "湊", "蒼", "律", "晴", "翔馬", "拓海", "一颯", "瑛斗", "航", "直生", "圭", "宗一郎"];
const ORIGINS = ["北都", "湾岸", "西京", "南海", "東都", "山陽", "北陸", "港町", "中央", "海峡", "湖都", "新都", "白峰", "青森野", "伊予", "筑陽"];
const SAVE_KEY = "front-office-sim-save-v1";
const ROSTER_TARGET = 67;
const ROSTER_MAX = 70;
const LEAGUES = [
  { id: "B", name: "バリーグ" },
  { id: "Z", name: "ゼリーグ" },
];

const PITCH_TYPES = ["ストレート", "ツーシーム", "カットボール", "スライダー", "カーブ", "フォーク", "スプリット", "チェンジアップ", "シュート", "シンカー"];
const HIGH_SCHOOLS = ["白峰学院高", "青森野実業", "伊予中央高", "筑陽学園高", "北嶺高", "海城学園", "翔陽館高", "光風台高", "銀杏台高", "東雲学院高", "蒼天高", "暁星学園高", "鳳凰学院高", "碧水高", "黎明館高"];
const UNIVERSITIES = ["東都大学", "西京大学", "中央学院大", "湾岸大学", "北都学院大", "南海大学", "港町大学", "山陽学院大", "海峡大", "湖都大学"];
const CORPORATE_TEAMS = ["北都重工", "湾岸電機", "西京製鐵", "南海ガス", "東都運輸", "山陽自動車", "港町鉄道", "中央建設", "海峡金属", "新都通信"];
const HITTER_FEATURES = ["強打の遊撃手", "俊足巧打", "長距離砲", "守備の名手", "巧みなバットコントロール", "広角打法", "勝負強い打撃", "走攻守三拍子", "パンチ力のある打撃", "堅実な守備"];
const PITCHER_FEATURES = ["速球派右腕", "本格派左腕", "技巧派サウスポー", "剛腕リリーバー", "安定感抜群の先発型", "多彩な変化球", "制球力抜群", "奪三振マシン", "グラウンドボーラー", "鉄腕"];
const SCOUT_COMMENTS_PITCHER = [
  "速球の威力は申し分なし。変化球の精度向上が課題",
  "制球力が武器の技巧派。緩急を使った投球が光る",
  "スタミナ十分で先発完投型。球威の向上が鍵",
  "フォークの落差は一級品。速球との緩急で三振を量産",
  "左腕からの角度あるストレートが持ち味。変化球の幅を広げたい",
  "即戦力の呼び声高い完成度の高い投手",
  "荒削りだが素材は超一級。プロの指導で化ける可能性大",
  "試合を作れる安定感が魅力。大崩れしないタイプ",
];
const SCOUT_COMMENTS_HITTER = [
  "鋭いスイングから放たれる打球速度は候補屈指",
  "ミート力に長け、広角に打ち分ける技術を持つ",
  "走攻守三拍子揃った好選手。上位指名は確実",
  "長打力が最大の武器。粗さを修正できれば大化けの予感",
  "堅実な守備と確実性の高い打撃が持ち味",
  "俊足を活かした積極的な走塁も魅力",
  "勝負強さは天性のもの。チャンスに強い",
  "打撃センスは素晴らしいが、守備面の強化が必要",
];
const DRAFT_MAX_ROUNDS = 7;
const PROTECT_LIST_SIZE = 28;

const teams = [
  { id: "T01", league: "B", name: "北都フロスト", area: "北都", type: "投手王国", color: "#25705a", budget: 46, power: { hit: 55, sp: 82, rp: 74, def: 67, run: 54 } },
  { id: "T02", league: "B", name: "湾岸レイカーズ", area: "湾岸", type: "強力打線", color: "#bd8b2c", budget: 55, power: { hit: 84, sp: 58, rp: 61, def: 55, run: 62 } },
  { id: "T03", league: "B", name: "西京クラウン", area: "西京", type: "常勝軍団", color: "#8b2f2f", budget: 73, power: { hit: 76, sp: 76, rp: 79, def: 72, run: 58 } },
  { id: "T04", league: "B", name: "南海ブルームス", area: "南海", type: "育成型", color: "#2a6da8", budget: 36, power: { hit: 59, sp: 63, rp: 57, def: 65, run: 72 } },
  { id: "T05", league: "B", name: "東都ライナーズ", area: "東都", type: "バランス型", color: "#315f45", budget: 48, power: { hit: 68, sp: 69, rp: 68, def: 68, run: 66 } },
  { id: "T06", league: "B", name: "山陽ガーディアンズ", area: "山陽", type: "守備重視", color: "#687348", budget: 40, power: { hit: 54, sp: 68, rp: 72, def: 86, run: 76 } },
  { id: "T07", league: "Z", name: "北陸ミスト", area: "北陸", type: "再建期", color: "#4f7180", budget: 27, power: { hit: 51, sp: 52, rp: 55, def: 58, run: 63 } },
  { id: "T08", league: "Z", name: "港町アンカーズ", area: "港町", type: "助っ人依存", color: "#126b7c", budget: 43, power: { hit: 73, sp: 55, rp: 64, def: 59, run: 55 } },
  { id: "T09", league: "Z", name: "中央レガシー", area: "中央", type: "名門低迷", color: "#574d91", budget: 58, power: { hit: 62, sp: 61, rp: 60, def: 57, run: 52 } },
  { id: "T10", league: "Z", name: "海峡スプリンツ", area: "海峡", type: "機動力型", color: "#1f7a69", budget: 34, power: { hit: 58, sp: 56, rp: 58, def: 69, run: 88 } },
  { id: "T11", league: "Z", name: "湖都スターンズ", area: "湖都", type: "素材型", color: "#5f7d35", budget: 30, power: { hit: 56, sp: 59, rp: 53, def: 56, run: 67 } },
  { id: "T12", league: "Z", name: "新都メトロズ", area: "新都", type: "新興球団", color: "#9b6032", budget: 65, power: { hit: 66, sp: 57, rp: 62, def: 61, run: 60 } },
];

const state = {
  year: 2027,
  mode: "select",
  phase: "offseason",
  activeTab: "roster",
  selectedTeamId: null,
  rosters: {},
  freeAgents: [],
  draftPool: [],
  released: [],
  news: [],
  history: [],
  results: null,
  positionFilter: "全",
  scoutTeamId: null,
  detailPlayerId: null,
  // Sort, Trade, Protect List, Active Draft, Draft Round States
  rosterSort: { key: "overall", asc: false },
  tradeState: { partnerTeamId: null, myPlayerIds: [], theirPlayerIds: [] },
  activeDraftPhase: null, // null, "nominate", "pick", "done"
  activeDraftNominees: {}, // teamId -> [playerId, ...]
  activeDraftResult: [],  // [{from, to, player}, ...]
  protectPhase: null,     // null or { faPlayer, formerTeamId, rank, compensationType }
  protectList: [],         // player IDs being protected
  draftRound: 0,           // 0 means not started, 1..7 during draft
  draftOrder: [],          // team IDs in draft order for current round
  draftResults: [],        // list of { round, teamId, player }
  statView: "hitter",      // "hitter" or "pitcher" - determines which stat columns to show
  faNegotiation: null,     // null or { playerId, type: "retain"|"sign" }
  postingRequests: [],     // players requesting posting
  draftNominationBoard: null, // null or { myPick, cpuNominations, phase: "board"|"lottery"|"result" }
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(list) {
  return list[rand(0, list.length - 1)];
}

function money(value) {
  if (value < 1) return `${Math.round(value * 10000)}万`;
  return `${value.toFixed(1)}億`;
}

function leagueName(leagueId) {
  return LEAGUES.find((league) => league.id === leagueId)?.name || "";
}

function teamName(teamId) {
  if (teamId === "FA") return "FA";
  if (teamId === "DRAFT") return "ドラフト候補";
  return teams.find((team) => team.id === teamId)?.name || "未所属";
}

function playerName(index) {
  return `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
}

function bodyProfile(pos) {
  if (pos === "投") return { height: rand(174, 196), weight: rand(72, 98) };
  if (pos === "捕") return { height: rand(170, 188), weight: rand(78, 104) };
  if (pos === "一" || pos === "三") return { height: rand(172, 193), weight: rand(76, 106) };
  if (pos === "遊" || pos === "二") return { height: rand(168, 184), weight: rand(66, 86) };
  return { height: rand(170, 190), weight: rand(68, 92) };
}

function throwBatProfile(pos) {
  const throws = rand(1, 100) <= 26 ? "左投" : "右投";
  if (pos === "投") return `${throws}${throws === "左投" ? "左打" : pick(["右打", "左打"])}`;
  return `${throws}${pick(["右打", "左打", "両打"])}`;
}

function generatePitchTypes() {
  const count = rand(3, 5);
  const types = ["ストレート"];
  const options = PITCH_TYPES.filter((t) => t !== "ストレート");
  while (types.length < count) {
    const t = pick(options);
    if (!types.includes(t)) types.push(t);
  }
  return types;
}

function createPlayer(teamId, index, bias = 0, rookie = false, forcePos = null) {
  const pos = forcePos || (index % 5 === 0 ? "投" : pick(POSITIONS.slice(1)));
  const age = rookie ? rand(18, 23) : rand(20, 38);
  const peak = age < 25 ? 5 : age > 33 ? -7 : 0;
  const base = clamp(rand(44, 82) + bias + peak, 35, 96);
  const potential = clamp(base + rand(-4, 18) + (rookie ? 8 : 0), 40, 99);
  const body = bodyProfile(pos);

  const originType = rookie ? pick(["高卒", "大卒", "社会人"]) : (age <= 22 ? "高卒" : age <= 25 ? pick(["高卒", "大卒"]) : pick(["大卒", "社会人"]));
  const faYears = rookie ? 0 : clamp(age - rand(19, 23), 0, 15);
  const faThreshold = originType === "高卒" ? 8 : 7;
  const faEligible = faYears >= faThreshold;

  const pitchTypes = pos === "投" ? generatePitchTypes() : [];
  const maxVelocity = pos === "投" ? clamp(rand(135, 154) + Math.round(base / 12), 130, 162) : 0;

  const player = {
    id: `${teamId}-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
    name: playerName(index),
    teamId,
    pos,
    age,
    origin: pick(ORIGINS),
    throwBat: throwBatProfile(pos),
    height: body.height,
    weight: body.weight,
    salary: 0,
    years: rookie ? 1 : rand(1, 4),
    potential,
    popularity: rand(30, 92),
    injury: rand(35, 90),
    batting: pos === "投" ? rand(5, 30) : clamp(base + rand(-10, 10), 25, 99),
    power: pos === "投" ? rand(5, 25) : clamp(base + rand(-16, 14), 20, 99),
    defense: clamp(base + rand(-12, 15), 25, 99),
    running: clamp(rand(35, 88), 20, 99),
    velocity: pos === "投" ? clamp(base + rand(-12, 14), 25, 99) : rand(10, 35),
    control: pos === "投" ? clamp(base + rand(-12, 14), 25, 99) : rand(10, 35),
    stamina: pos === "投" ? clamp(base + rand(-15, 16), 25, 99) : rand(10, 35),
    lastStats: null,
    stats: null,
    careerStats: [],
    acquired: rookie ? "ドラフト" : "在籍",
    originType,
    faYears,
    faEligible,
    faExercised: false,
    pitchTypes,
    maxVelocity,
    fairSalary: 0,
  };
  player.fairSalary = fairMarketValue(player);
  player.salary = rookie ? clamp(0.05 + rand(0, 8) / 100, 0.05, 0.18) : player.fairSalary;
  player.careerStats = generateCareerStats(player, overall(player), teamId, rookie);
  player.stats = player.careerStats[player.careerStats.length - 1]?.stats || generatePlayerStats(player, overall(player), 0);
  player.lastStats = player.careerStats.length ? formatStats(player.stats) : "プロ成績なし";
  return player;
}

function overall(player) {
  if (player.pos === "投") {
    return Math.round(player.velocity * 0.34 + player.control * 0.34 + player.stamina * 0.2 + player.injury * 0.12);
  }
  return Math.round(player.batting * 0.32 + player.power * 0.28 + player.defense * 0.22 + player.running * 0.1 + player.injury * 0.08);
}

function fairMarketValue(player) {
  const ovr = overall(player);
  const age = player.age;
  const baseRating = Math.max(0, ovr - 42);
  const tier = baseRating / 58;
  let salary = tier * tier * tier * 4.5 + 0.044;
  if (age < 25) salary -= 0.02;
  else if (age > 34) salary -= 0.04;
  if (player.pos === "投") salary += 0.01;
  return Math.round(clamp(salary, 0.05, 7.0) * 100) / 100;
}

function generatePlayerStats(player, rating = overall(player), teamBoost = 0) {
  const role = clamp(rating + teamBoost + rand(-12, 12), 30, 99);
  const playingTime = clamp((role - 35) / 64, 0.12, 1);
  if (player.pos === "投") {
    const starter = player.stamina + player.velocity + player.control > 190;
    const starts = starter ? clamp(Math.round(playingTime * 26 + rand(-4, 4)), 6, 29) : clamp(Math.round(playingTime * 6 + rand(-2, 3)), 0, 12);
    const reliefGames = starter ? clamp(rand(0, 6), 0, 8) : clamp(Math.round(18 + playingTime * 42 + rand(-8, 8)), 12, 64);
    const games = clamp(starts + reliefGames, starts, 70);
    const inningsBase = starter ? starts * (4.6 + playingTime * 1.9) : games * (0.8 + playingTime * 0.45);
    const innings = clamp(Math.round(inningsBase + rand(-14, 20)), 8, starter ? 190 : 86);
    const era = clamp(5.8 - rating / 28 - teamBoost / 90 + rand(-42, 52) / 100, 1.7, 6.8);
    const wins = clamp(Math.round((innings / 22) + (rating - 55) / 6 + rand(-2, 4)), 0, 18);
    const strikeouts = clamp(Math.round(innings * (0.55 + player.velocity / 130) + rand(-12, 18)), 2, 230);
    const walks = clamp(Math.round(innings * (0.62 - player.control / 190) + rand(-5, 8)), 2, 92);
    const saves = starter ? 0 : clamp(Math.round((rating - 52) / 5 + rand(-3, 8)), 0, 38);
    const holds = starter ? 0 : clamp(Math.round((rating - 48) / 4 + rand(-2, 12)), 0, 42);
    return { kind: "pitcher", games, starts, reliefGames, innings, wins, era, strikeouts, walks, saves, holds, positionGames: { 投: games } };
  }
  const games = clamp(Math.round(28 + playingTime * 118 + rand(-12, 14)), 18, 143);
  const plateAppearances = clamp(Math.round(games * (2.6 + playingTime * 1.65) + rand(-12, 18)), games, 680);
  const walks = clamp(Math.round(plateAppearances * (0.035 + player.batting / 2600 + rand(-8, 12) / 1000)), 1, Math.round(plateAppearances * 0.2));
  const hitByPitch = clamp(Math.round(plateAppearances * rand(0, 12) / 1000), 0, 14);
  const sacFlies = clamp(Math.round(games * rand(0, 5) / 100), 0, 8);
  const atBats = Math.max(1, plateAppearances - walks - hitByPitch - sacFlies);
  const averageTarget = clamp(0.18 + player.batting / 650 + teamBoost / 2800 + rand(-22, 22) / 1000, 0.17, 0.34);
  const hits = clamp(Math.round(atBats * averageTarget), 0, atBats);
  const homers = clamp(Math.round((player.power - 32) / 2.4 * playingTime + rand(-4, 7)), 0, Math.min(52, hits));
  const triples = clamp(Math.round(hits * (0.015 + player.running / 2600) + rand(-1, 2)), 0, Math.max(0, hits - homers));
  const doubles = clamp(Math.round(hits * (0.14 + player.power / 1200) + rand(-2, 4)), 0, Math.max(0, hits - homers - triples));
  const singles = Math.max(0, hits - doubles - triples - homers);
  const totalBases = singles + doubles * 2 + triples * 3 + homers * 4;
  const average = hits / atBats;
  const onBase = (hits + walks + hitByPitch) / Math.max(1, atBats + walks + hitByPitch + sacFlies);
  const slugging = totalBases / atBats;
  const ops = onBase + slugging;
  const rbi = clamp(Math.round(games * (0.18 + player.power / 310) + teamBoost / 2 + rand(-10, 16)), 2, 132);
  const stolenBases = clamp(Math.round((player.running - 42) / 3.2 * playingTime + rand(-3, 6)), 0, 42);
  return {
    kind: "hitter",
    games,
    positionGames: positionGameLog(player, games),
    plateAppearances,
    atBats,
    hits,
    singles,
    doubles,
    triples,
    homers,
    walks,
    hitByPitch,
    sacFlies,
    totalBases,
    average,
    onBase,
    slugging,
    ops,
    rbi,
    stolenBases,
  };
}

function positionGameLog(player, games) {
  const result = { [player.pos]: games };
  if (games < 45 || rand(1, 100) > 28) return result;
  const options = POSITIONS.filter((pos) => pos !== "投" && pos !== player.pos);
  const subPos = pick(options);
  const subGames = clamp(Math.round(games * rand(8, 26) / 100), 4, Math.max(4, games - 1));
  result[player.pos] = games - subGames;
  result[subPos] = subGames;
  return result;
}

function generateCareerStats(player, rating, teamId, rookie = false) {
  if (rookie) return [];
  const seasons = clamp(player.age - rand(19, 23), 1, 14);
  const startYear = state.year - seasons;
  return Array.from({ length: seasons }, (_, index) => {
    const age = player.age - seasons + index;
    const growthCurve = age < 25 ? -4 + index * 0.9 : age > 33 ? -index * 0.6 : 0;
    const stats = generatePlayerStats(player, clamp(rating + growthCurve + rand(-5, 5), 28, 99), rand(-3, 3));
    return {
      year: startYear + index,
      age,
      teamId,
      teamName: teamName(teamId),
      stats,
    };
  });
}

function formatStats(stats) {
  if (!stats) return "-";
  if (stats.kind === "pitcher") {
    return `${stats.games}登 防${stats.era.toFixed(2)} ${stats.wins}勝`;
  }
  return `${stats.games}試 打率${formatRate(stats.average)} ${stats.homers}本`;
}

function formatRate(value) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const fixed = safeValue.toFixed(3);
  return safeValue < 1 ? fixed.replace(/^0/, "") : fixed;
}

function formatPositionGames(positionGames) {
  if (!positionGames) return "-";
  return Object.entries(positionGames)
    .filter(([, games]) => games > 0)
    .map(([pos, games]) => `${pos}${games}`)
    .join(" / ");
}

function normalizeStats(player, stats) {
  if (!stats) return generatePlayerStats(player, overall(player), 0);
  if (stats.kind === "pitcher") {
    stats.starts = stats.starts ?? (stats.games > 35 ? 0 : Math.max(0, Math.min(stats.games, Math.round((stats.innings || 0) / 6))));
    stats.reliefGames = stats.reliefGames ?? Math.max(0, stats.games - stats.starts);
    stats.walks = stats.walks ?? Math.round((stats.innings || 0) * 0.32);
    stats.saves = stats.saves ?? 0;
    stats.holds = stats.holds ?? 0;
    stats.positionGames = stats.positionGames || { 投: stats.games || 0 };
    return stats;
  }
  if (stats.atBats && stats.hits != null && stats.doubles != null && stats.triples != null) {
    stats.positionGames = stats.positionGames || positionGameLog(player, stats.games || 0);
    stats.singles = stats.singles ?? Math.max(0, stats.hits - stats.doubles - stats.triples - stats.homers);
    stats.walks = stats.walks ?? 0;
    stats.hitByPitch = stats.hitByPitch ?? 0;
    stats.sacFlies = stats.sacFlies ?? 0;
    stats.totalBases = stats.singles + stats.doubles * 2 + stats.triples * 3 + stats.homers * 4;
    stats.average = stats.hits / Math.max(1, stats.atBats);
    stats.onBase = (stats.hits + stats.walks + stats.hitByPitch) / Math.max(1, stats.atBats + stats.walks + stats.hitByPitch + stats.sacFlies);
    stats.slugging = stats.totalBases / Math.max(1, stats.atBats);
    stats.ops = stats.onBase + stats.slugging;
    return stats;
  }
  const games = stats.games || 0;
  const average = stats.average || 0;
  const homers = stats.homers || 0;
  const plateAppearances = Math.max(games, Math.round(games * 3.6));
  const walks = Math.round(plateAppearances * 0.08);
  const hitByPitch = Math.round(plateAppearances * 0.008);
  const sacFlies = Math.round(games * 0.03);
  const atBats = Math.max(1, plateAppearances - walks - hitByPitch - sacFlies);
  const hits = clamp(Math.round(atBats * average), homers, atBats);
  const triples = clamp(Math.round(hits * 0.03), 0, Math.max(0, hits - homers));
  const doubles = clamp(Math.round(hits * 0.21), 0, Math.max(0, hits - homers - triples));
  const singles = Math.max(0, hits - doubles - triples - homers);
  const totalBases = singles + doubles * 2 + triples * 3 + homers * 4;
  return {
    kind: "hitter",
    games,
    positionGames: positionGameLog(player, games),
    plateAppearances,
    atBats,
    hits,
    singles,
    doubles,
    triples,
    homers,
    walks,
    hitByPitch,
    sacFlies,
    totalBases,
    average: hits / atBats,
    onBase: (hits + walks + hitByPitch) / Math.max(1, atBats + walks + hitByPitch + sacFlies),
    slugging: totalBases / atBats,
    ops: (hits + walks + hitByPitch) / Math.max(1, atBats + walks + hitByPitch + sacFlies) + totalBases / atBats,
    rbi: stats.rbi || 0,
    stolenBases: stats.stolenBases || 0,
  };
}

function normalizePlayer(player) {
  player.origin = player.origin || pick(ORIGINS);
  player.throwBat = player.throwBat || throwBatProfile(player.pos);
  if (!player.height || !player.weight) {
    const body = bodyProfile(player.pos);
    player.height = body.height;
    player.weight = body.weight;
  }
  if (!Array.isArray(player.careerStats)) {
    player.careerStats = [];
  }
  if (!player.careerStats.length && player.stats) {
    player.stats = normalizeStats(player, player.stats);
    player.careerStats.push({
      year: state.year - 1,
      age: Math.max(18, player.age - 1),
      teamId: player.teamId,
      teamName: teamName(player.teamId),
      stats: player.stats,
    });
  }
  player.careerStats = player.careerStats.map((row) => ({
    ...row,
    stats: normalizeStats(player, row.stats),
  }));
  if (!player.stats) {
    player.stats = player.careerStats[player.careerStats.length - 1]?.stats || generatePlayerStats(player, overall(player), 0);
  }
  player.stats = normalizeStats(player, player.stats);
  player.lastStats = player.lastStats || (player.careerStats.length ? formatStats(player.stats) : "プロ成績なし");

  // New features backward compatibility
  player.originType = player.originType || (player.age <= 22 ? "高卒" : "大卒");
  player.faYears = player.faYears ?? clamp(player.age - rand(19, 23), 0, 15);
  player.faEligible = player.faEligible ?? (player.faYears >= (player.originType === "高卒" ? 8 : 7));
  player.faExercised = player.faExercised ?? false;
  player.pitchTypes = player.pitchTypes || (player.pos === "投" ? generatePitchTypes() : []);
  player.maxVelocity = player.maxVelocity || (player.pos === "投" ? clamp(rand(135, 154), 130, 160) : 0);
  player.fairSalary = player.fairSalary ?? fairMarketValue(player);

  return player;
}

function buildBalancedRoster(teamId, count, bias, rookie = false) {
  const roster = [];
  const pitcherCount = Math.round(count * 0.45);
  const hitterCount = count - pitcherCount;
  const fieldPositions = POSITIONS.slice(1);
  for (let i = 0; i < pitcherCount; i++) {
    roster.push(createPlayer(teamId, i, bias, rookie, "投"));
  }
  for (let i = 0; i < hitterCount; i++) {
    const pos = fieldPositions[i % fieldPositions.length];
    roster.push(createPlayer(teamId, pitcherCount + i, bias, rookie, pos));
  }
  return roster;
}

function initGame(teamId) {
  state.selectedTeamId = teamId;
  state.rosters = {};
  teams.forEach((team) => {
    const bias = Math.round((team.power.hit + team.power.sp + team.power.rp + team.power.def + team.power.run) / 5 - 65) / 3;
    state.rosters[team.id] = buildBalancedRoster(team.id, ROSTER_TARGET, bias);
  });
  
  // Clean states
  state.rosterSort = { key: "overall", asc: false };
  state.tradeState = { partnerTeamId: null, myPlayerIds: [], theirPlayerIds: [] };
  state.activeDraftPhase = null;
  state.activeDraftNominees = {};
  state.activeDraftResult = [];
  state.protectPhase = null;
  state.protectList = [];
  state.draftRound = 0;
  state.draftOrder = [];
  state.draftResults = [];
  state.statView = "hitter";
  state.faNegotiation = null;
  state.postingRequests = [];
  state.draftNominationBoard = null;

  state.freeAgents = generateFAMarket();
  state.draftPool = Array.from({ length: rand(60, 80) }, (_, i) => createDraftCandidate(i, rand(-3, 5)));
  state.released = [];
  state.history = [];
  state.news = [`${getTeam().name}の編成室が始動。${state.year}年オフの補強方針が問われます。`];
  state.results = null;
  state.phase = "offseason";
  state.activeTab = "roster";
  state.positionFilter = "全";
  state.scoutTeamId = teams.find((team) => team.id !== teamId)?.id || teamId;
  state.detailPlayerId = null;
  state.mode = "play";
  persist();
  render();
}

function getTeam() {
  return teams.find((team) => team.id === state.selectedTeamId);
}

function myRoster() {
  return state.rosters[state.selectedTeamId] || [];
}

function rosterSlotsLeft(teamId = state.selectedTeamId) {
  return Math.max(0, ROSTER_MAX - (state.rosters[teamId]?.length || 0));
}

function canAddToRoster(teamId = state.selectedTeamId) {
  return rosterSlotsLeft(teamId) > 0;
}

function rosterSalary(roster = myRoster()) {
  return roster.reduce((sum, player) => sum + player.salary, 0);
}

function budgetLeft() {
  return getTeam().budget - rosterSalary();
}

function teamStrength(teamId) {
  const roster = state.rosters[teamId] || [];
  const hitters = roster.filter((player) => player.pos !== "投").sort((a, b) => overall(b) - overall(a)).slice(0, 9);
  const pitchers = roster.filter((player) => player.pos === "投").sort((a, b) => overall(b) - overall(a));
  const starters = pitchers.slice(0, 5);
  const relievers = pitchers.slice(5, 12);
  const hit = avg(hitters.map((p) => p.batting * 0.55 + p.power * 0.35 + p.running * 0.1));
  const sp = avg(starters.map(overall));
  const rp = avg(relievers.map(overall));
  const def = avg([...roster].sort((a, b) => overall(b) - overall(a)).slice(0, 18).map((p) => p.defense));
  const depth = clamp(roster.length * 2.4 + avg(roster.map((p) => Math.max(0, p.potential - overall(p)))) * 0.3, 35, 95);
  return {
    hit: Math.round(hit),
    sp: Math.round(sp),
    rp: Math.round(rp),
    def: Math.round(def),
    depth: Math.round(depth),
    total: Math.round(hit * 0.3 + sp * 0.27 + rp * 0.18 + def * 0.15 + depth * 0.1),
  };
}

function avg(values) {
  if (!values.length) return 42;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function persist() {
  if (state.mode !== "play") return;
  state._fairSalaryVersion = 1;
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

let audioCtx = null;
function playClickSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = 800;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.06);
  } catch (e) { /* ignore audio errors */ }
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (!saved || !saved.selectedTeamId || !saved.rosters) return false;
    Object.assign(state, {
      ...saved,
      phase: saved.phase || (saved.results ? "result" : "offseason"),
      history: saved.history || [],
      released: saved.released || [],
      positionFilter: saved.positionFilter || "全",
      scoutTeamId: saved.scoutTeamId || teams.find((team) => team.id !== saved.selectedTeamId)?.id || saved.selectedTeamId,
      detailPlayerId: null,

      rosterSort: saved.rosterSort || { key: "overall", asc: false },
      tradeState: saved.tradeState || { partnerTeamId: null, myPlayerIds: [], theirPlayerIds: [] },
      activeDraftPhase: saved.activeDraftPhase || null,
      activeDraftNominees: saved.activeDraftNominees || {},
      activeDraftResult: saved.activeDraftResult || [],
      protectPhase: saved.protectPhase || null,
      protectList: saved.protectList || [],
      draftRound: saved.draftRound || 0,
      draftOrder: saved.draftOrder || [],
      draftResults: saved.draftResults || [],
      statView: saved.statView || "hitter",
      faNegotiation: null,
      postingRequests: saved.postingRequests || [],
      draftNominationBoard: null,
    });
    state.freeAgents = state.freeAgents || [];
    state.draftPool = state.draftPool || [];
    state.released = state.released || [];
    Object.values(state.rosters).forEach((roster) => roster.forEach(normalizePlayer));
    state.freeAgents.forEach(normalizePlayer);
    state.draftPool.forEach(normalizePlayer);

    // Recalculate fair salaries for existing saves (after formula updates)
    if (!saved._fairSalaryVersion) {
      const recalc = (p) => {
        const fair = fairMarketValue(p);
        p.fairSalary = fair;
        // Fix salary if it was set by old inflated formula
        if (p.salary > fair * 1.5 && !p._userSetSalary) {
          p.salary = fair;
        }
      };
      Object.values(state.rosters).forEach((roster) => roster.forEach(recalc));
      state.freeAgents.forEach(recalc);
      state.draftPool.forEach(recalc);
    }
    return true;
  } catch {
    localStorage.removeItem(SAVE_KEY);
    return false;
  }
}

function clearSave() {
  localStorage.removeItem(SAVE_KEY);
  Object.assign(state, {
    year: 2027,
    mode: "select",
    phase: "offseason",
    activeTab: "roster",
    selectedTeamId: null,
    rosters: {},
    freeAgents: [],
    draftPool: [],
    released: [],
    news: [],
    history: [],
    results: null,
    positionFilter: "全",
    scoutTeamId: null,
    detailPlayerId: null,
    rosterSort: { key: "overall", asc: false },
    tradeState: { partnerTeamId: null, myPlayerIds: [], theirPlayerIds: [] },
    activeDraftPhase: null,
    activeDraftNominees: {},
    activeDraftResult: [],
    protectPhase: null,
    protectList: [],
    draftRound: 0,
    draftOrder: [],
    draftResults: [],
    statView: "hitter",
    faNegotiation: null,
    postingRequests: [],
    draftNominationBoard: null,
  });
  render();
}

function generateMarket(count, teamId, startIndex, bias, rookie = false) {
  return Array.from({ length: count }, (_, index) => createPlayer(teamId, index + startIndex, bias, rookie));
}

function releasePlayer(id) {
  if (state.phase !== "offseason") return;
  const roster = myRoster();
  const player = roster.find((item) => item.id === id);
  if (!player) return;
  if (!confirm(`${player.name}を戦力外にします。よろしいですか？`)) return;
  state.rosters[state.selectedTeamId] = roster.filter((item) => item.id !== id);
  state.released.push(player);
  state.news.unshift(`${player.name}へ戦力外を通告。年俸枠 ${money(player.salary)} を確保しました。`);
  persist();
  render();
}

// FA System NPB Rules
function calculateFARank(player, teamId) {
  const roster = state.rosters[teamId] || [];
  const sorted = [...roster].sort((a, b) => b.salary - a.salary);
  const rank = sorted.findIndex((p) => p.id === player.id) + 1;
  if (rank <= 3) return "A";
  if (rank <= 10) return "B";
  return "C";
}

function generateFAMarket() {
  const faPlayers = [];
  let totalDeclared = 0;
  const MAX_FA = 14;
  teams.forEach((team) => {
    const roster = state.rosters[team.id] || [];
    roster.forEach((player) => {
      if (!player.faEligible || player.faExercised || totalDeclared >= MAX_FA) return;
      const isMyTeam = team.id === state.selectedTeamId;
      const fairSal = player.fairSalary || fairMarketValue(player);
      const underpayRatio = fairSal > 0 ? player.salary / fairSal : 1;
      const underpayBonus = underpayRatio < 0.7 ? Math.round((0.7 - underpayRatio) * 40) : 0;
      const exerciseChance = clamp(
        4 + (player.age >= 30 ? 6 : 0) + (overall(player) >= 70 ? 8 : 0) - (player.salary > 2.5 ? 6 : 0) + underpayBonus,
        2,
        40
      );
      const decChance = clamp((player.years === 0 ? 25 : 4) * (overall(player) / 80) + underpayBonus * 0.4, 2, 45);
      const willDeclare = rand(1, 100) <= (isMyTeam ? decChance : exerciseChance);

      if (willDeclare) {
        totalDeclared++;
        player.faExercised = true;
        const rank = calculateFARank(player, team.id);
        const demandSal = clamp(player.salary * (1.1 + rand(0, 3) / 10), 0.15, 8.0);
        faPlayers.push({
          ...player,
          faRank: rank,
          formerTeamId: team.id,
          formerTeamName: team.name,
          demandSalary: demandSal,
          salary: demandSal,
        });
        state.rosters[team.id] = state.rosters[team.id].filter((p) => p.id !== player.id);
      }
    });
  });

  const count = rand(2, 4);
  for (let i = 0; i < count; i++) {
    const p = createPlayer("FA", state.year * 10 + i, rand(-4, 2));
    p.teamId = "FA";
    p.faRank = "C";
    p.formerTeamId = null;
    p.formerTeamName = "無所属";
    p.demandSalary = p.salary;
    p.faEligible = true;
    p.faExercised = true;
    faPlayers.push(p);
  }

  // Generate posting requests
  state.postingRequests = [];
  teams.forEach((team) => {
    const roster = state.rosters[team.id] || [];
    roster.forEach((player) => {
      if (player.faEligible || player.age < 24 || player.age > 32 || overall(player) < 65) return;
      const chance = clamp(5 + (overall(player) - 65) * 0.5 + (player.age >= 28 ? 3 : 0), 2, 20);
      if (rand(1, 100) <= chance) {
        state.postingRequests.push({ ...player, formerTeamId: team.id });
      }
    });
  });
  if (state.postingRequests.length) {
    state.news.unshift(`${state.postingRequests.length}名の選手がポスティングによる海外移籍を希望しています。`);
  }

  return faPlayers;
}

function signFreeAgent(id) {
  if (state.phase !== "offseason") return;
  const player = state.freeAgents.find((item) => item.id === id);
  if (!player || budgetLeft() < player.demandSalary) return;

  const chance = clamp(60 + budgetLeft() * 2.5 + (getTeam().budget - 45) * 0.5, 25, 95);
  const success = rand(1, 100) <= chance;

  if (success) {
    state.freeAgents = state.freeAgents.filter((item) => item.id !== id);
    player.teamId = state.selectedTeamId;
    player.acquired = "FA";
    player.salary = player.demandSalary;
    player.fairSalary = fairMarketValue(player);
    player.years = rand(2, 4);

    if (player.formerTeamId && player.formerTeamId !== "FA" && (player.faRank === "A" || player.faRank === "B")) {
      const decideRoll = rand(1, 100);
      const isHumanComp = decideRoll <= 70; // 70% chance CPU demands human compensation player
      
      if (isHumanComp) {
        state.protectPhase = {
          faPlayer: player,
          formerTeamId: player.formerTeamId,
          rank: player.faRank,
          compensationType: "human",
        };
        // Auto protect top 28 players by salary
        const myPlrs = [...myRoster()].sort((a, b) => b.salary - a.salary);
        state.protectList = myPlrs.slice(0, Math.min(myPlrs.length, PROTECT_LIST_SIZE)).map((p) => p.id);
        state.news.unshift(`${player.name}のFA合意。旧所属の${player.formerTeamName}から人的補償の要求があり、プロテクトリストを編成します。`);
      } else {
        const rate = player.faRank === "A" ? 0.8 : 0.6;
        const fee = player.salary * rate;
        // Pay money only
        state.rosters[state.selectedTeamId].push(player);
        state.news.unshift(`${player.name}をFA獲得（補償金${money(fee)}を支払）。`);
      }
    } else {
      state.rosters[state.selectedTeamId].push(player);
      state.news.unshift(`${player.name}をFA獲得（Cランクのため補償なし）。`);
    }
  } else {
    state.news.unshift(`${player.name}との交渉決裂。条件面で合意に至りませんでした。`);
  }
  persist();
  render();
}

function confirmProtectList() {
  if (!state.protectPhase) return;
  if (state.protectList.length > PROTECT_LIST_SIZE) {
    alert(`プロテクト枠は最大${PROTECT_LIST_SIZE}名です。`);
    return;
  }

  const { faPlayer, formerTeamId, rank } = state.protectPhase;
  const unprotected = myRoster().filter((p) => !state.protectList.includes(p.id));
  
  let chosenPlayer = null;
  if (unprotected.length > 0) {
    unprotected.sort((a, b) => overall(b) - overall(a));
    chosenPlayer = unprotected[0];
  }

  // Remove chosen player from my roster
  if (chosenPlayer) {
    state.rosters[state.selectedTeamId] = myRoster().filter((p) => p.id !== chosenPlayer.id);
    chosenPlayer.teamId = formerTeamId;
    chosenPlayer.acquired = "人的補償";
    state.rosters[formerTeamId].push(chosenPlayer);
  }

  // Add signed FA to my roster
  state.rosters[state.selectedTeamId].push(faPlayer);

  const rate = rank === "A" ? 0.5 : 0.4;
  const fee = faPlayer.salary * rate;

  state.news.unshift(`${faPlayer.name}の移籍完了。人的補償として${chosenPlayer ? chosenPlayer.name : "なし"}が移籍し、補償金${money(fee)}を支払いました。`);
  state.protectPhase = null;
  state.protectList = [];
  persist();
  render();
}

// Overhauled Trade Logic
function tradeValue(player, forTeamId) {
  let val = overall(player)
    + Math.max(0, 30 - player.age) * 0.8
    + player.potential * 0.15
    - player.salary * 3.0;

  const roster = state.rosters[forTeamId] || [];
  const samePos = roster.filter((p) => p.pos === player.pos).length;
  const needBonus = samePos < 3 ? 5 : samePos < 5 ? 2 : 0;
  return val + needBonus;
}

function getTradeFeasibility() {
  const { partnerTeamId, myPlayerIds, theirPlayerIds } = state.tradeState;
  if (!partnerTeamId || !myPlayerIds.length || !theirPlayerIds.length) return { level: "none", score: 0 };

  let myValSum = myPlayerIds.reduce((sum, id) => sum + tradeValue(myRoster().find((p) => p.id === id), partnerTeamId), 0);
  let theirValSum = theirPlayerIds.reduce((sum, id) => sum + tradeValue((state.rosters[partnerTeamId] || []).find((p) => p.id === id), state.selectedTeamId), 0);

  const diff = myValSum - theirValSum;
  if (diff >= 3) return { level: "likely", text: "成立可能性: 高", score: diff };
  if (diff >= -5) return { level: "neutral", text: "成立可能性: 中", score: diff };
  return { level: "unlikely", text: "成立可能性: 低", score: diff };
}

function canTrade() {
  const { partnerTeamId, myPlayerIds, theirPlayerIds } = state.tradeState;
  if (!partnerTeamId || !myPlayerIds.length || !theirPlayerIds.length) return false;
  return true;
}

function executeTrade() {
  const { partnerTeamId, myPlayerIds, theirPlayerIds } = state.tradeState;
  if (!partnerTeamId || !myPlayerIds.length || !theirPlayerIds.length) return;

  const partnerRoster = state.rosters[partnerTeamId] || [];
  const feasibility = getTradeFeasibility();
  const myPlrs = myPlayerIds.map((id) => myRoster().find((p) => p.id === id));
  const theirPlrs = theirPlayerIds.map((id) => partnerRoster.find((p) => p.id === id));

  // Roster size checks
  if (myRoster().length - myPlrs.length + theirPlrs.length > ROSTER_MAX) {
    alert("トレード完了後に自球団の支配下登録上限(70人)を超過します。");
    return;
  }
  if (partnerRoster.length - theirPlrs.length + myPlrs.length > ROSTER_MAX) {
    alert("相手球団の支配下登録上限を超過するためトレードできません。");
    return;
  }

  const baseChance = feasibility.level === "likely" ? 85 : feasibility.level === "neutral" ? 50 : 15;
  const roll = rand(1, 100);
  
  if (roll <= baseChance) {
    // Perform swap
    state.rosters[state.selectedTeamId] = myRoster().filter((p) => !myPlayerIds.includes(p.id));
    state.rosters[partnerTeamId] = partnerRoster.filter((p) => !theirPlayerIds.includes(p.id));

    myPlrs.forEach((p) => {
      p.teamId = partnerTeamId;
      p.acquired = "トレード";
      state.rosters[partnerTeamId].push(p);
    });

    theirPlrs.forEach((p) => {
      p.teamId = state.selectedTeamId;
      p.acquired = "トレード";
      state.rosters[state.selectedTeamId].push(p);
    });

    state.news.unshift(`トレード成立！${teamName(partnerTeamId)}と選手交換を行いました。（放出: ${myPlrs.map((p) => p.name).join(",")} / 獲得: ${theirPlrs.map((p) => p.name).join(",")}）`);
    state.tradeState = { partnerTeamId: null, myPlayerIds: [], theirPlayerIds: [] };
  } else {
    state.news.unshift(`${teamName(partnerTeamId)}とのトレード交渉不成立。条件面で折り合いがつきませんでした。`);
  }
  persist();
  render();
}

// Active Draft (現役ドラフト) System
function isActiveDraftEligible(player) {
  const isPitcher = player.pos === "投";
  const games = player.stats?.games || 0;
  return (
    player.teamId === state.selectedTeamId &&
    !player.faEligible &&
    player.age >= 22 &&
    player.salary <= 1.0 &&
    (isPitcher ? games <= 15 : games <= 40)
  );
}

function getEligibleActiveDraftPlayers() {
  let plrs = myRoster().filter(isActiveDraftEligible);
  if (plrs.length < 3) {
    // Relaxed constraint fallback to guarantee options
    plrs = myRoster().filter((p) => !p.faEligible && p.age >= 21 && p.salary <= 2.0);
  }
  return plrs;
}

function nominateForActiveDraft(nominatedIds) {
  if (nominatedIds.length < 2) {
    alert("ノミネート選手を2名選択してください。");
    return;
  }

  state.activeDraftNominees[state.selectedTeamId] = nominatedIds.map((id) => myRoster().find((p) => p.id === id));

  // Nominate for CPU teams
  teams.forEach((t) => {
    if (t.id === state.selectedTeamId) return;
    const roster = state.rosters[t.id] || [];
    let eligible = roster.filter((p) => {
      const isPitcher = p.pos === "投";
      const games = p.stats?.games || 0;
      return !p.faEligible && p.age >= 22 && p.salary <= 1.2 && (isPitcher ? games <= 18 : games <= 45);
    });
    if (eligible.length < 2) {
      eligible = roster.filter((p) => !p.faEligible && p.age >= 21 && p.salary <= 2.0);
    }
    // Select 2 lowest overall players to nominate
    eligible.sort((a, b) => overall(a) - overall(b));
    state.activeDraftNominees[t.id] = eligible.slice(0, 2);
  });

  state.activeDraftPhase = "pick";
  persist();
  render();
}

function simulateActiveDraft(playerPickId) {
  const allNominees = [];
  Object.entries(state.activeDraftNominees).forEach(([teamId, players]) => {
    players.forEach((p) => {
      allNominees.push({ ...p, originalTeamId: teamId });
    });
  });

  const picks = {};
  const takenFrom = new Set();
  const selectors = new Set(teams.map((t) => t.id));

  const playerPick = allNominees.find((p) => p.id === playerPickId);
  picks[state.selectedTeamId] = playerPick;
  takenFrom.add(playerPick.originalTeamId);
  selectors.delete(state.selectedTeamId);

  const results = [{ from: playerPick.originalTeamId, to: state.selectedTeamId, player: playerPick }];
  let currentSelector = playerPick.originalTeamId;

  while (selectors.size > 0) {
    if (!selectors.has(currentSelector)) {
      currentSelector = [...selectors][rand(0, selectors.size - 1)];
    }
    selectors.delete(currentSelector);

    const available = allNominees.filter((p) => p.originalTeamId !== currentSelector && !takenFrom.has(p.originalTeamId));
    if (available.length === 0) break;

    available.sort((a, b) => overall(b) - overall(a));
    const chosen = available[0];

    picks[currentSelector] = chosen;
    takenFrom.add(chosen.originalTeamId);
    results.push({ from: chosen.originalTeamId, to: currentSelector, player: chosen });

    currentSelector = chosen.originalTeamId;
  }

  // Apply roster changes
  results.forEach((res) => {
    state.rosters[res.from] = state.rosters[res.from].filter((p) => p.id !== res.player.id);
    res.player.teamId = res.to;
    res.player.acquired = "現役D";
    state.rosters[res.to].push(res.player);
  });

  state.activeDraftResult = results;
  state.activeDraftPhase = "done";
  state.news.unshift(`現役ドラフト開催。自球団は${playerPick.name}を獲得、人的補償として${results.find((r) => r.from === state.selectedTeamId)?.player.name || "選手"}を放出しました。`);
  persist();
  render();
}

// Rich Draft System Overhaul
function generateAmateurStats(pos, originType, base) {
  if (originType === "高卒") {
    if (pos === "投") {
      return {
        label: "高校通算",
        甲子園出場: rand(1, 100) <= 30 ? "あり" : "なし",
        地方大会: `${rand(8, 20)}勝${rand(1, 5)}敗`,
        防御率: (clamp(4.0 - base / 25 + rand(-8, 8) / 10, 0.5, 4.2)).toFixed(2),
        奪三振: rand(80, 250),
      };
    }
    return {
      label: "高校通算",
      甲子園出場: rand(1, 100) <= 30 ? "あり" : "なし",
      打率: formatRate(clamp(0.28 + base / 400 + rand(-5, 5) / 100, 0.22, 0.48)),
      本塁打: rand(5, 55),
      打点: rand(30, 150),
    };
  }
  if (originType === "大卒") {
    const league = pick(["東都大学リーグ", "西京六大学", "首都大学リーグ", "北都大学リーグ"]);
    const awards = [];
    if (rand(1, 100) <= 25) awards.push("ベストナイン");
    if (rand(1, 100) <= 15) awards.push(pos === "投" ? "最優秀防御率" : "首位打者");
    if (rand(1, 100) <= 10) awards.push("MVP");
    const awardsStr = awards.length ? awards.join(", ") : "なし";
    if (pos === "投") {
      return {
        label: "大学通算",
        リーグ: league,
        成績: `${rand(10, 30)}勝${rand(2, 12)}敗`,
        防御率: (clamp(3.2 - base / 30 + rand(-6, 6) / 10, 0.8, 3.8)).toFixed(2),
        奪三振: rand(120, 350),
        受賞: awardsStr,
      };
    }
    return {
      label: "大学通算",
      リーグ: league,
      打率: formatRate(clamp(0.26 + base / 350 + rand(-4, 4) / 100, 0.22, 0.40)),
      本塁打: rand(6, 36),
      打点: rand(40, 130),
      受賞: awardsStr,
    };
  }
  // 社会人
  if (pos === "投") {
    return {
      label: "社会人通算",
      都市対抗: `${rand(1, 4)}回出場`,
      成績: `${rand(15, 40)}勝${rand(3, 10)}敗`,
      防御率: (clamp(2.8 - base / 35 + rand(-5, 5) / 10, 0.6, 3.5)).toFixed(2),
      奪三振: rand(150, 420),
    };
  }
  return {
    label: "社会人通算",
    都市対抗: `${rand(1, 4)}回出場`,
    打率: formatRate(clamp(0.27 + base / 320 + rand(-3, 3) / 100, 0.24, 0.38)),
    本塁打: rand(10, 45),
    打点: rand(50, 160),
  };
}

function createDraftCandidate(index, bias) {
  const originRoll = rand(1, 100);
  const originType = originRoll <= 35 ? "高卒" : originRoll <= 70 ? "大卒" : "社会人";
  const age = originType === "高卒" ? 18 : originType === "大卒" ? 22 : rand(23, 25);
  const pos = index % 4 === 0 ? "投" : pick(POSITIONS.slice(1));
  
  const originBonus = originType === "高卒" ? rand(-8, 2) : originType === "大卒" ? rand(-3, 5) : rand(2, 10);
  const base = clamp(rand(40, 78) + bias + originBonus, 30, 92);
  const potential = originType === "高卒" 
    ? clamp(base + rand(8, 25), 50, 99)
    : originType === "大卒" 
      ? clamp(base + rand(4, 16), 45, 96) 
      : clamp(base + rand(-2, 10), 40, 90);
  
  const gradeScore = base * 0.4 + potential * 0.6;
  const scoutGrade = gradeScore >= 80 ? "S" : gradeScore >= 68 ? "A" : gradeScore >= 55 ? "B" : gradeScore >= 42 ? "C" : "D";
  
  const school = originType === "高卒" ? pick(HIGH_SCHOOLS) 
    : originType === "大卒" ? pick(UNIVERSITIES) 
    : pick(CORPORATE_TEAMS);
  
  const pitchTypes = pos === "投" ? generatePitchTypes() : [];
  const maxVelocity = pos === "投" ? clamp(rand(130, 153) + Math.round(base / 15) + (originType === "社会人" ? 3 : 0), 128, 162) : 0;
  
  const feature = pos === "投" ? pick(PITCHER_FEATURES) : pick(HITTER_FEATURES);
  const scoutComment = pos === "投" ? pick(SCOUT_COMMENTS_PITCHER) : pick(SCOUT_COMMENTS_HITTER);
  
  const amateurStats = generateAmateurStats(pos, originType, base);
  const body = bodyProfile(pos);
  const salary = 0.05 + rand(0, 12) / 100; // Rookie salary is low: 500万 - 1700万
  
  const player = {
    id: `DRAFT-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
    name: playerName(index),
    teamId: "DRAFT",
    pos,
    age,
    origin: pick(ORIGINS),
    throwBat: throwBatProfile(pos),
    height: body.height,
    weight: body.weight,
    salary,
    years: 1,
    potential,
    popularity: rand(20, 70),
    injury: rand(40, 92),
    batting: pos === "投" ? rand(5, 30) : clamp(base + rand(-10, 10), 25, 99),
    power: pos === "投" ? rand(5, 25) : clamp(base + rand(-16, 14), 20, 99),
    defense: clamp(base + rand(-12, 15), 25, 99),
    running: clamp(rand(35, 88), 20, 99),
    velocity: pos === "投" ? clamp(base + rand(-12, 14), 25, 99) : rand(10, 35),
    control: pos === "投" ? clamp(base + rand(-12, 14), 25, 99) : rand(10, 35),
    stamina: pos === "投" ? clamp(base + rand(-15, 16), 25, 99) : rand(10, 35),
    lastStats: "アマチュア",
    stats: null,
    careerStats: [],
    acquired: "ドラフト",
    originType,
    faYears: 0,
    faEligible: false,
    faExercised: false,
    pitchTypes,
    maxVelocity,
    fairSalary: 0,
    draftProfile: {
      originType,
      school,
      scoutGrade,
      scoutComment,
      feature,
      pitchTypes,
      maxVelocity,
      amateurStats,
      runTime50m: (5.6 + rand(0, 14) / 10).toFixed(1),
    },
  };
  player.fairSalary = fairMarketValue(player);
  return player;
}

function startDraft() {
  if (state.draftRound > 0) return;
  state.draftRound = 1;
  state.draftResults = [];
  
  // Define Round 1 order (simultaneous pick + lottery logic)
  let waiverOrder = teams.map((t) => t.id);
  if (state.results) {
    const sorted = [...state.results.rows].sort((a, b) => a.wins - b.wins);
    waiverOrder = sorted.map((r) => r.team.id);
  }
  state.draftOrder = waiverOrder;
  persist();
  render();
}

function endDraftEarly() {
  state.draftRound = 0;
  state.draftOrder = [];
  state.draftNominationBoard = null;
  state.activeTab = "roster";
  state.news.unshift("ドラフト会議を終了しました。");
  persist();
  render();
}

function simulateCPUDraftRound1(playerNominee) {
  const nominations = { [state.selectedTeamId]: playerNominee };
  const teamList = teams.filter((t) => t.id !== state.selectedTeamId);

  // CPU choose nominee
  teamList.forEach((team) => {
    const candidates = [...state.draftPool].sort((a, b) => overall(b) - overall(a));
    const roll = rand(1, 100);
    const chosen = roll <= 55 ? candidates[0] : roll <= 85 ? candidates[1] : candidates[2];
    nominations[team.id] = chosen;
  });

  let remainingTeams = teams.map((t) => t.id);
  const roundResults = [];

  while (remainingTeams.length > 0) {
    const targets = {}; 
    remainingTeams.forEach((tid) => {
      const p = nominations[tid];
      if (!p) return;
      if (!targets[p.id]) targets[p.id] = [];
      targets[p.id].push(tid);
    });

    const nextLosingTeams = [];

    Object.entries(targets).forEach(([pid, tids]) => {
      const p = state.draftPool.find((item) => item.id === pid);
      if (tids.length === 1) {
        const winner = tids[0];
        roundResults.push({ teamId: winner, player: p });
        state.draftPool = state.draftPool.filter((item) => item.id !== pid);
      } else {
        const winnerIdx = rand(0, tids.length - 1);
        const winner = tids[winnerIdx];
        roundResults.push({ teamId: winner, player: p });
        state.draftPool = state.draftPool.filter((item) => item.id !== pid);
        
        tids.forEach((tid, idx) => {
          if (idx !== winnerIdx) nextLosingTeams.push(tid);
        });
      }
    });

    remainingTeams = nextLosingTeams;
    remainingTeams.forEach((tid) => {
      const candidates = [...state.draftPool].sort((a, b) => overall(b) - overall(a));
      nominations[tid] = candidates[0] || null;
    });
  }

  roundResults.forEach((res) => {
    state.draftResults.push({ round: 1, teamId: res.teamId, player: res.player });
    res.player.teamId = res.teamId;
    state.rosters[res.teamId].push(res.player);
  });

  state.draftRound = 2;
  persist();
  render();
}

function pickDraftCandidate(id) {
  if (state.draftRound === 0) return;
  const player = state.draftPool.find((item) => item.id === id);
  if (!player) return;

  if (state.draftRound === 1) {
    // Set up nomination board instead of immediate lottery
    const cpuNoms = {};
    teams.filter((t) => t.id !== state.selectedTeamId).forEach((t) => {
      const candidates = [...state.draftPool].sort((a, b) => overall(b) - overall(a));
      const chosen = candidates[rand(0, Math.min(2, candidates.length - 1))];
      if (chosen) cpuNoms[t.id] = { teamName: t.name, playerId: chosen.id, playerName: chosen.name, playerPos: chosen.pos };
    });
    state.draftNominationBoard = {
      myPick: { playerId: id, playerName: player.name, playerPos: player.pos },
      cpuNominations: cpuNoms,
      phase: "board"
    };
    render();
    return;
  }

  const round = state.draftRound;
  const roundOrder = [...state.draftOrder];
  if (round % 2 === 1) {
    roundOrder.reverse(); 
  }

  roundOrder.forEach((tid) => {
    if (tid === state.selectedTeamId) {
      state.draftPool = state.draftPool.filter((item) => item.id !== id);
      player.teamId = state.selectedTeamId;
      state.rosters[state.selectedTeamId].push(player);
      state.draftResults.push({ round, teamId: state.selectedTeamId, player });
    } else {
      const candidates = [...state.draftPool].sort((a, b) => overall(b) - overall(a));
      const chosen = candidates[0];
      if (chosen) {
        state.draftPool = state.draftPool.filter((item) => item.id !== chosen.id);
        chosen.teamId = tid;
        state.rosters[tid].push(chosen);
        state.draftResults.push({ round, teamId: tid, player: chosen });
      }
    }
  });

  if (state.draftRound < DRAFT_MAX_ROUNDS) {
    state.draftRound += 1;
  } else {
    state.draftRound = 0; 
    state.activeTab = "roster";
  }
  persist();
  render();
}

// Sort Mechanism
function sortRoster(roster) {
  const { key, asc } = state.rosterSort;
  const sorted = [...roster].sort((a, b) => {
    let va, vb;
    switch (key) {
      case "name": va = a.name; vb = b.name; break;
      case "pos": va = a.pos; vb = b.pos; break;
      case "age": va = a.age; vb = b.age; break;
      case "overall": va = overall(a); vb = overall(b); break;
      case "salary": va = a.salary; vb = b.salary; break;
      case "years": va = a.years; vb = b.years; break;
      case "teamId": va = teamName(a.teamId); vb = teamName(b.teamId); break;
      case "avg":
        va = a.stats?.kind === "pitcher" ? -(a.stats?.era || 99) : (a.stats?.average || 0);
        vb = b.stats?.kind === "pitcher" ? -(b.stats?.era || 99) : (b.stats?.average || 0);
        break;
      case "hr":
        va = a.pos === "投" ? (a.stats?.wins || 0) : (a.stats?.homers || 0);
        vb = b.pos === "投" ? (b.stats?.wins || 0) : (b.stats?.homers || 0);
        break;
      case "rbi":
        va = a.pos === "投" ? (a.stats?.strikeouts || 0) : (a.stats?.rbi || 0);
        vb = b.pos === "投" ? (b.stats?.strikeouts || 0) : (b.stats?.rbi || 0);
        break;
      case "games": va = a.stats?.games || 0; vb = b.stats?.games || 0; break;
      default: va = overall(a); vb = overall(b);
    }
    if (typeof va === "string") return asc ? va.localeCompare(vb) : vb.localeCompare(va);
    return asc ? va - vb : vb - va;
  });
  return sorted;
}

function sortHeader(label, key) {
  const active = state.rosterSort.key === key;
  const arrow = active ? (state.rosterSort.asc ? "▲" : "▼") : "";
  return `<th class="sortable-th" data-sort="${key}">${label} ${arrow}</th>`;
}

function teamSeasonStats(row, rank, teamId = state.selectedTeamId) {
  const strength = teamStrength(teamId);
  const runs = clamp(Math.round(410 + strength.hit * 3.1 + strength.depth * 1.2 + rand(-24, 28)), 420, 820);
  const allowed = clamp(Math.round(820 - strength.sp * 2.4 - strength.rp * 1.8 - strength.def * 1.1 + rand(-22, 26)), 390, 760);
  const era = clamp(allowed / 143 / 1.08, 2.55, 5.2);
  const payroll = rosterSalary(state.rosters[teamId] || []);
  const previous = state.history[state.history.length - 1];
  const rankDelta = previous ? previous.rank - rank : 0;
  const fanSatisfaction = clamp(Math.round(38 + (13 - rank) * 4.4 + (row.wins - 70) * 0.45 + rankDelta * 4), 12, 99);
  return {
    runs,
    allowed,
    era,
    payroll,
    fanSatisfaction,
    rankDelta,
    total: strength.total,
  };
}

function seasonLeaders(roster) {
  return [...roster]
    .filter((player) => player.lastStats)
    .sort((a, b) => overall(b) - overall(a))
    .slice(0, 6)
    .map((player) => ({
      id: player.id,
      name: player.name,
      pos: player.pos,
      age: player.age,
      overall: overall(player),
      stats: player.lastStats,
      acquired: player.acquired,
    }));
}

function ageAndUpdatePlayer(player, teamBoost, teamId) {
  const rating = overall(player);
  player.stats = generatePlayerStats(player, rating, teamBoost);
  player.lastStats = formatStats(player.stats);
  player.careerStats = Array.isArray(player.careerStats) ? player.careerStats : [];
  player.careerStats.push({
    year: state.year,
    age: player.age,
    teamId,
    teamName: teamName(teamId),
    stats: player.stats,
  });
  player.careerStats = player.careerStats.slice(-18);
  const ageFactor = player.age < 24 ? rand(-3, 7) : player.age > 34 ? rand(-8, 1) : rand(-4, 5);
  player.age += 1;
  let growth = player.age <= 26 ? rand(0, 4) : player.age >= 34 ? rand(-5, 0) : rand(-2, 2);

  // Recalculate fair market value for new age
  player.fairSalary = fairMarketValue(player);

  // Underpay morale penalty: stat decrease for severely underpaid players
  // Skip penalty for rookies on standard contracts (first 2 years)
  const isRookieContract = player.acquired === "ドラフト" && player.faYears < 2;
  const underpayRatio = player.salary / player.fairSalary;
  if (!isRookieContract && underpayRatio < 0.8) {
    const moralePenalty = Math.round((0.8 - underpayRatio) * 8);
    player.potential = clamp(player.potential - Math.round(moralePenalty * 0.5), 20, 99);
    growth -= moralePenalty;
  }

  ["batting", "power", "defense", "running", "velocity", "control", "stamina"].forEach((key) => {
    player[key] = clamp(player[key] + growth + ageFactor * 0.15, 5, 99);
  });
  player.salary = clamp(player.salary * (1 + (rating - 55) / 200), 0.044, 8.0);

  player.faYears += 1;
  const faThreshold = player.originType === "高卒" ? 8 : 7;
  player.faEligible = player.faYears >= faThreshold;
}

function leagueStandings(rows) {
  return LEAGUES.map((league) => ({
    ...league,
    rows: rows
      .filter((row) => row.team.league === league.id)
      .sort((a, b) => b.wins - a.wins || b.strength.total - a.strength.total)
      .map((row, index) => ({ ...row, leagueRank: index + 1 })),
  }));
}

function simulateSeason() {
  try {
    if (state.phase !== "offseason") {
      if (state.phase === "result") {
        alert("シーズン結果確認中です。「翌年のオフへ進む」を押して次のオフに進んでください。");
      } else {
        alert("現在ペナントを開始できる状態ではありません。(phase: " + state.phase + ")");
      }
      return;
    }
    if (state.draftNominationBoard) {
      alert("ドラフト会議1巡目の抽選が完了していません。「抽選を開始する」を押してください。");
      return;
    }

    alert("ペナントを開幕します。シーズン結果を計算中...");

    // Auto-skip incomplete active draft
    if (state.activeDraftPhase === "nominate" || state.activeDraftPhase === "pick") {
      state.activeDraftPhase = null;
      state.activeDraftNominees = {};
    }
    // Finish in-progress draft
    if (state.draftRound > 0) {
      state.draftRound = 0;
      state.draftOrder = [];
    }

  const baseRows = teams.map((team) => {
    const strength = teamStrength(team.id);
    const variance = rand(-10, 10) + (strength.depth < 58 ? rand(-8, 4) : 0);
    const winRate = clamp(0.32 + (strength.total + variance - 45) / 115, 0.28, 0.72);
    const wins = clamp(Math.round(143 * winRate), 38, 99);
    return { team, strength, wins, losses: 143 - wins };
  });
  const leagueRows = leagueStandings(baseRows);
  const rows = leagueRows.flatMap((league) => league.rows);

  teams.forEach((team) => {
    const row = rows.find((item) => item.team.id === team.id);
    const teamBoost = row ? (row.strength.total - 62) / 2 : 0;
    (state.rosters[team.id] || []).forEach((player) => ageAndUpdatePlayer(player, teamBoost, team.id));
  });

  const roster = myRoster();
  const mine = rows.find((row) => row.team.id === state.selectedTeamId);
  const rank = mine.leagueRank;
  const bestPlayer = [...roster].sort((a, b) => overall(b) - overall(a))[0];
  const teamStats = teamSeasonStats(mine, rank, state.selectedTeamId);
  const leaders = seasonLeaders(roster);
  const comments = [
    rank <= 2 ? "大型補強が順位に直結。編成部の評価は急上昇です。" : "補強効果は限定的。来冬は弱点をさらに絞る必要があります。",
    mine.strength.sp < 60 ? "先発層の薄さが終盤戦で響きました。" : "先発陣が大きく崩れず、シーズンを安定させました。",
    teamStats.fanSatisfaction >= 70 ? `ファン満足度は${teamStats.fanSatisfaction}。冬の判断に納得感が広がっています。` : `ファン満足度は${teamStats.fanSatisfaction}。来季はわかりやすい上積みが求められます。`,
    bestPlayer ? `${bestPlayer.name}が中心選手として存在感を示しました。` : "主力不在の苦しいシーズンでした。",
  ];
  state.results = { year: state.year, rows, leagueRows, rank, mine, comments, teamStats, leaders };
  state.history.push({ year: state.year, rank, wins: mine.wins, losses: mine.losses, fanSatisfaction: teamStats.fanSatisfaction });
  state.news = comments.concat(state.news).slice(0, 12);
  state.phase = "result";
  persist();
  render();
  } catch(e) {
    alert("ペナントシミュレーション中にエラーが発生しました: " + e.message);
  }
}

function updateRosterForNextYear(team) {
  const retired = [];
  const roster = state.rosters[team.id] || [];
  state.rosters[team.id] = roster.filter((player) => {
    player.years = Math.max(0, player.years - 1);
    if (player.years === 0) {
      player.years = rand(1, 3);
    }
    const retireChance = player.age >= 39 ? 55 : player.age >= 36 && overall(player) < 58 ? 28 : 0;
    const retires = retireChance && rand(1, 100) <= retireChance;
    if (retires) retired.push(player);
    return !retires;
  });
  const bias = Math.round((team.power.hit + team.power.sp + team.power.rp + team.power.def + team.power.run) / 5 - 65) / 3;
  while (state.rosters[team.id].length < ROSTER_TARGET) {
    const currentPitchers = state.rosters[team.id].filter((p) => p.pos === "投").length;
    const needPitcher = currentPitchers < Math.round(ROSTER_TARGET * 0.45);
    const forcePos = needPitcher ? "投" : pick(POSITIONS.slice(1));
    state.rosters[team.id].push(createPlayer(team.id, state.year * 100 + state.rosters[team.id].length, bias - 4, true, forcePos));
  }
  return retired;
}

function advanceToNextYear() {
  if (state.phase !== "result") return;
  const retired = teams.flatMap(updateRosterForNextYear);

  state.released = [];
  state.results = null;
  state.phase = "offseason";
  state.activeTab = "roster";
  state.positionFilter = "全";
  state.year += 1;

  // New year initial states
  state.rosterSort = { key: "overall", asc: false };
  state.tradeState = { partnerTeamId: null, myPlayerIds: [], theirPlayerIds: [] };
  state.activeDraftPhase = "nominate"; 
  state.activeDraftNominees = {};
  state.activeDraftResult = [];
  state.protectPhase = null;
  state.protectList = [];
  state.draftRound = 0;
  state.draftOrder = [];
  state.draftResults = [];
  state.faNegotiation = null;
  state.postingRequests = [];
  state.draftNominationBoard = null;

  state.freeAgents = generateFAMarket();
  state.draftPool = Array.from({ length: rand(60, 80) }, (_, i) => createDraftCandidate(i, rand(-3, 5)));

  const retireNews = retired.length ? `${retired.slice(0, 3).map((player) => player.name).join("、")}が現役を退きました。` : "大きな引退報道はなく、静かな市場入りです。";
  state.news = [
    `${state.year}年オフが始まりました。FA市場とドラフト候補が更新されています。`,
    retireNews,
    ...state.news,
  ].slice(0, 12);
  persist();
  render();
}

function render() {
  try {
  const app = document.querySelector("#app");
  app.innerHTML = `${state.mode === "select" ? renderTeamSelect() : renderGame()}${state.detailPlayerId ? renderPlayerDetail() : ""}${state.protectPhase ? renderProtectModal() : ""}${state.faNegotiation ? renderFANegotiationModal() : ""}${state.draftNominationBoard ? renderDraftBoard() : ""}`;
  bindEvents();
  } catch(e) {
    document.querySelector("#app").innerHTML = `<div style="padding:40px;color:red;"><h2>エラー</h2><pre>${e.message}\n${e.stack}</pre></div>`;
  }
}

function renderTeamSelect() {
  const hasSave = Boolean(localStorage.getItem(SAVE_KEY));
  return `
    <div class="app-shell">
      ${renderTopbar(false)}
      <main class="screen-select">
        <section class="intro">
          <h1>冬の編成室</h1>
          <p>架空プロ野球リーグの球団フロントとして、オフの補強と放出だけでペナントを動かす編成シミュレータ。人的補償付きFA、現役ドラフト、交渉式トレードを完全再現したリアルNPB仕様です。</p>
          <div class="select-actions">
            <button class="primary-button" data-continue ${hasSave ? "" : "disabled"}>続きから</button>
            <button class="ghost-button" data-reset-save ${hasSave ? "" : "disabled"}>保存を消す</button>
          </div>
        </section>
        <section class="team-grid">
          ${teams.map(renderTeamCard).join("")}
        </section>
      </main>
    </div>
  `;
}

function renderTopbar(showMeta = true) {
  const phaseLabel = state.phase === "result" ? "シーズン結果" : "オフシーズン";
  return `
    <header class="topbar">
      <div class="brand"><div class="brand-mark">冬</div><div>冬の編成室</div></div>
      ${showMeta ? `<div class="topbar-meta"><span>${state.year}年 ${phaseLabel}</span><span>${getTeam()?.name || ""}</span><span>${leagueName(getTeam()?.league)}所属</span></div>` : `<div class="topbar-meta"><span>バリーグ / ゼリーグ 12球団制</span></div>`}
    </header>
  `;
}

function renderTeamCard(team) {
  const avgPower = Math.round((team.power.hit + team.power.sp + team.power.rp + team.power.def + team.power.run) / 5);
  return `
    <button class="team-card" data-team="${team.id}" style="border-left-color:${team.color}">
      <h3>${team.name}</h3>
      <p>${leagueName(team.league)} / ${team.area} / ${team.type}</p>
      <div class="metric-row"><span>予算</span><span class="value">${team.budget}億</span></div>
      <div class="metric-row"><span>総合戦力</span><span class="value">${avgPower}</span></div>
      <div class="metric-row"><span>難易度</span><span class="value">${team.budget < 35 ? "難" : team.budget > 55 ? "易" : "普"}</span></div>
    </button>
  `;
}

function renderStatusStrip(strength) {
  const team = getTeam();
  const budget = budgetLeft();
  const players = myRoster().length;
  return `
    <div class="status-strip">
      <div class="status-box">
        <div class="status-label">年俸総額</div>
        <div class="status-value">${money(rosterSalary())}</div>
      </div>
      <div class="status-box">
        <div class="status-label">予算残</div>
        <div class="status-value" style="color:${budget < 2 ? 'var(--red)' : 'var(--green-2)'}">${money(budget)}</div>
      </div>
      <div class="status-box">
        <div class="status-label">支配下人数</div>
        <div class="status-value">${players} / ${ROSTER_MAX}人</div>
      </div>
      <div class="status-box">
        <div class="status-label">総合力</div>
        <div class="status-value">${strength.total}</div>
      </div>
    </div>
  `;
}

function renderStrengthBars(strength) {
  const bars = [
    ["打撃", strength.hit],
    ["先発", strength.sp],
    ["救援", strength.rp],
    ["守備", strength.def],
    ["選手層", strength.depth],
  ];
  return `
    <div class="bars">
      ${bars.map(([label, value]) => `
        <div>
          <div class="bar-label"><span>${label}</span><span>${value}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, value)}%"></div></div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderGame() {
  const team = getTeam();
  const strength = teamStrength(team.id);
  const locked = state.phase === "result";
  return `
    <div class="app-shell">
      ${renderTopbar(true)}
      <main class="layout">
        <aside class="side-summary panel">
          <div class="panel-header">
            <div class="selected-team">
              <div class="crest" style="background:${team.color}">${team.area.slice(0, 1)}</div>
              <div>
                <div class="team-name">${team.name}</div>
                <div class="team-type">${leagueName(team.league)} / ${team.type}</div>
              </div>
            </div>
          </div>
          <div class="panel-body">
            ${renderStrengthBars(strength)}
          </div>
        </aside>
        <section class="main-column">
          ${renderStatusStrip(strength)}
          <section class="panel">
            <div class="panel-header">
              <h1 class="headline">${locked ? "シーズン結果確認" : "オフシーズン編成"}</h1>
              <p class="panel-sub">${locked ? "順位、チーム成績、主要選手の個人成績を確認し、翌年のオフへ進みます。" : "戦力外、FA、トレード、ドラフトを処理してからペナントを開幕します。"}</p>
            </div>
            <div class="panel-body">
              <div class="actions">
                ${[
                  "roster:選手一覧",
                  "league:12球団",
                  "fa:FA交渉",
                  "trade:トレード",
                  "draft:ドラフト",
                  "activedraft:現役D",
                  "records:記録",
                ].map((item) => {
                  const [key, label] = item.split(":");
                  return `<button class="action-button ${state.activeTab === key ? "active" : ""}" data-tab="${key}">${label}</button>`;
                }).join("")}
              </div>
            </div>
          </section>
          ${renderActivePanel()}
        </section>
        <aside class="right-column">
          <section class="panel">
            <div class="panel-header">
              <h2 class="panel-title">ペナント</h2>
              <p class="panel-sub">編成確定後、143試合を一括計算します。</p>
            </div>
            <div class="panel-body">
              <button class="primary-button" onclick="simulateSeason()">ペナント開幕</button>
              <div class="fine muted" style="margin-top:8px;">
                ${(() => {
                  const msgs = [];
                  if (locked) msgs.push("結果確認中 → 「翌年のオフへ進む」を押してください");
                  if (!locked && state.activeDraftPhase && (state.activeDraftPhase === "nominate" || state.activeDraftPhase === "pick")) msgs.push("現役ドラフト未完了（スキップ可）");
                  if (!locked && state.draftRound > 0) msgs.push("ドラフト進行中（「ドラフトを終了する」で抜けられます）");
                  if (!locked && state.draftNominationBoard) msgs.push("1巡目抽選中");
                  return msgs.length ? `<span style="color:#b88b22;">${msgs.join(" / ")}</span>` : "オフの判断完了後、クリックでシーズン開始";
                })()}
              </div>
              ${state.results ? renderResults() : `<p class="fine muted">まだ今季の結果はありません。オフの判断を終えたら開幕してください。</p>`}
            </div>
          </section>
          <section class="panel">
            <div class="panel-header">
              <h2 class="panel-title">編成ニュース</h2>
            </div>
            <div class="panel-body news-list">
              ${state.news.map((item) => `<div class="news-item fine">${item}</div>`).join("")}
            </div>
          </section>
        </aside>
      </main>
    </div>
  `;
}

function renderActivePanel() {
  if (state.activeTab === "league") return renderLeaguePanel();
  if (state.activeTab === "fa") return renderFAPanel();
  if (state.activeTab === "draft") return renderDraftPanel();
  if (state.activeTab === "trade") return renderTradePanel();
  if (state.activeTab === "activedraft") return renderActiveDraftPanel();
  if (state.activeTab === "records") return renderRecordsPanel();
  return renderRosterPanel("選手一覧", false);
}

function renderLeaguePanel() {
  const scoutTeam = teams.find((team) => team.id === (state.scoutTeamId || state.selectedTeamId)) || getTeam();
  const roster = sortRoster(state.rosters[scoutTeam.id] || []);
  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">12球団スカウティング</h2>
        <p class="panel-sub">選んでいない球団にも全員ロスターがあります。ヘッダークリックでソートできます。</p>
      </div>
      <div class="panel-body">
        <div class="league-board">
          ${LEAGUES.map((league) => `
            <div class="league-card">
              <h3>${league.name}</h3>
              ${teams.filter((team) => team.league === league.id).map((team) => {
                const strength = teamStrength(team.id);
                const topPlayer = [...(state.rosters[team.id] || [])].sort((a, b) => overall(b) - overall(a))[0];
                return `
                  <button class="club-row ${team.id === scoutTeam.id ? "active" : ""}" data-scout-team="${team.id}">
                    <span>${team.name}</span>
                    <strong>${strength.total}</strong>
                    <small>${state.rosters[team.id]?.length || 0}人 / ${topPlayer ? `${topPlayer.name} 総合${overall(topPlayer)}` : "未登録"}</small>
                  </button>
                `;
              }).join("")}
            </div>
          `).join("")}
        </div>
        <div class="toolbar scout-toolbar">
          <h2>${scoutTeam.name} ロスター</h2>
          <div style="display:flex;gap:8px;align-items:center;">
            <span class="tag">${leagueName(scoutTeam.league)}</span>
            <div class="stat-toggle">
              <button class="toggle-btn ${state.statView === 'hitter' ? 'active' : ''}" data-stat-view="hitter">野手</button>
              <button class="toggle-btn ${state.statView === 'pitcher' ? 'active' : ''}" data-stat-view="pitcher">投手</button>
            </div>
          </div>
        </div>
        <div class="table-wrap">
          <table class="roster-table">
            <thead>
              <tr>
                ${sortHeader("選手", "name")}
                ${sortHeader("守備", "pos")}
                ${sortHeader("年齢", "age")}
                <th>体格</th>
                ${sortHeader("総合", "overall")}
                ${sortHeader("年俸", "salary")}
                ${sortHeader("試合/登板", "games")}${sortHeader("打率/防", "avg")}${sortHeader("本/勝", "hr")}${sortHeader("点/奪三", "rbi")}
              </tr>
            </thead>
            <tbody>
              ${roster.map((player) => `
                <tr>
                  <td>${renderPlayerButton(player)} <span class="tag">${player.acquired}</span></td>
                  <td>${player.pos}</td>
                  <td>${player.age}</td>
                  <td>${player.height}cm / ${player.weight}kg</td>
                  <td><strong>${overall(player)}</strong></td>
                  <td>${money(player.salary)}</td>
                  ${player.pos === "投"
                    ? `<td>${player.stats?.games || 0}</td><td>${player.stats?.era?.toFixed(2) || "-"}</td><td>${player.stats?.wins || 0}</td><td>${player.stats?.strikeouts || 0}</td>`
                    : `<td>${player.stats?.games || 0}</td><td>${formatRate(player.stats?.average)}</td><td>${player.stats?.homers || 0}</td><td>${player.stats?.rbi || 0}</td>`}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderRosterPanel(title, tradeMode) {
  let roster = state.positionFilter === "全" ? myRoster() : myRoster().filter((player) => player.pos === state.positionFilter);
  roster = sortRoster(roster);
  const locked = state.phase !== "offseason";
  const isHitter = state.statView === "hitter";

  function statHeaders() {
    return `${sortHeader("試合/登板", "games")}${sortHeader("打率/防", "avg")}${sortHeader("本/勝", "hr")}${sortHeader("点/奪三", "rbi")}`;
  }

  function renderStatCells(p) {
    if (p.pos === "投") {
      return `<td>${p.stats?.games || 0}</td><td>${p.stats?.era?.toFixed(2) || "-"}</td><td>${p.stats?.wins || 0}</td><td>${p.stats?.strikeouts || 0}</td>`;
    }
    return `<td>${p.stats?.games || 0}</td><td>${formatRate(p.stats?.average)}</td><td>${p.stats?.homers || 0}</td><td>${p.stats?.rbi || 0}</td>`;
  }

  return `
    <section class="panel">
      <div class="panel-body">
        <div class="toolbar">
          <h2>${title}</h2>
          <div style="display:flex;gap:8px;align-items:center;">
            <select data-filter>
              ${["全", ...POSITIONS].map((pos) => `<option value="${pos}" ${state.positionFilter === pos ? "selected" : ""}>${pos}</option>`).join("")}
            </select>
            <div class="stat-toggle">
              <button class="toggle-btn ${isHitter ? 'active' : ''}" data-stat-view="hitter">野手</button>
              <button class="toggle-btn ${!isHitter ? 'active' : ''}" data-stat-view="pitcher">投手</button>
            </div>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${sortHeader("選手", "name")}
                ${sortHeader("守備", "pos")}
                ${sortHeader("年齢", "age")}
                <th>体格</th>
                ${sortHeader("総合", "overall")}
                ${sortHeader("年俸", "salary")}
                ${sortHeader("契約", "years")}
                ${statHeaders()}
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${roster.map((player) => `
                <tr>
                  <td>${renderPlayerButton(player)} <span class="tag">${player.acquired}</span></td>
                  <td>${player.pos}</td>
                  <td>${player.age}</td>
                  <td>${player.height}cm / ${player.weight}kg</td>
                  <td><strong>${overall(player)}</strong></td>
                  <td>${money(player.salary)}</td>
                  <td>${player.years}年</td>
                  ${renderStatCells(player)}
                  <td>
                    <button class="small-button secondary" data-release="${player.id}" ${locked ? "disabled" : ""}>戦力外</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderTradePanel() {
  const locked = state.phase !== "offseason";
  const { partnerTeamId, myPlayerIds, theirPlayerIds } = state.tradeState;
  const partnerTeam = teams.find((t) => t.id === partnerTeamId);
  
  const myRost = sortRoster(myRoster());
  const partnerRost = partnerTeamId ? sortRoster(state.rosters[partnerTeamId] || []) : [];

  const teamButtons = teams.filter((t) => t.id !== state.selectedTeamId).map((t) => `
    <button class="trade-team-btn ${t.id === partnerTeamId ? 'active' : ''}" data-trade-team="${t.id}" style="border-left-color:${t.color}">
      ${t.name}
    </button>
  `).join("");

  const feasibility = getTradeFeasibility();
  const canSubmit = canTrade() && !locked;

  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">交渉式トレード</h2>
        <p class="panel-sub">交渉相手球団を選択し、双方の交換候補（最大2名ずつ）を選択してトレードを打診します。</p>
      </div>
      <div class="panel-body">
        <div class="trade-teams">
          ${teamButtons}
        </div>
        ${partnerTeamId ? `
          <div class="trade-columns">
            <div class="trade-column">
              <div class="trade-column-header">自球団選手 (選択: ${myPlayerIds.length}/2)</div>
              <div class="trade-player-list">
                ${myRost.map((p) => {
                  const isChecked = myPlayerIds.includes(p.id);
                  return `
                    <label class="trade-player-row ${isChecked ? 'selected' : ''}">
                      <input type="checkbox" data-trade-my="${p.id}" ${isChecked ? 'checked' : ''} ${!isChecked && myPlayerIds.length >= 2 ? 'disabled' : ''}>
                      <span>${p.name} (${p.pos})</span>
                      <strong>総合${overall(p)}</strong>
                      <span class="muted">${money(p.salary)}</span>
                    </label>
                  `;
                }).join("")}
              </div>
            </div>
            <div class="trade-column">
              <div class="trade-column-header partner" style="border-top:3px solid ${partnerTeam.color}">${partnerTeam.name}選手 (選択: ${theirPlayerIds.length}/2)</div>
              <div class="trade-player-list">
                ${partnerRost.map((p) => {
                  const isChecked = theirPlayerIds.includes(p.id);
                  return `
                    <label class="trade-player-row ${isChecked ? 'selected' : ''}">
                      <input type="checkbox" data-trade-their="${p.id}" ${isChecked ? 'checked' : ''} ${!isChecked && theirPlayerIds.length >= 2 ? 'disabled' : ''}>
                      <span>${p.name} (${p.pos})</span>
                      <strong>総合${overall(p)}</strong>
                      <span class="muted">${money(p.salary)}</span>
                    </label>
                  `;
                }).join("")}
              </div>
            </div>
          </div>
          ${myPlayerIds.length && theirPlayerIds.length ? `
            <div class="trade-summary">
              <div class="trade-value">
                <div class="label">放出価値合計</div>
                <div class="number">${Math.round(myPlayerIds.reduce((sum, id) => sum + tradeValue(myRoster().find((p) => p.id === id), partnerTeamId), 0))}</div>
              </div>
              <div class="trade-arrow">⇄</div>
              <div class="trade-value">
                <div class="label">獲得価値合計</div>
                <div class="number">${Math.round(theirPlayerIds.reduce((sum, id) => sum + tradeValue(partnerRost.find((p) => p.id === id), state.selectedTeamId), 0))}</div>
              </div>
            </div>
            <div class="trade-feasibility ${feasibility.level}">
              ${feasibility.text} (価値差: ${feasibility.score > 0 ? '+' : ''}${Math.round(feasibility.score)})
            </div>
          ` : ""}
          <div style="margin-top: 14px;">
            <button class="primary-button" data-execute-trade ${canSubmit ? '' : 'disabled'}>トレードを打診する</button>
          </div>
        ` : `
          <div class="empty">トレード交渉を行う相手球団を選択してください。</div>
        `}
      </div>
    </section>
  `;
}

function renderFAPanel() {
  const locked = state.phase !== "offseason";
  const ownFA = state.freeAgents.filter((p) => p.formerTeamId === state.selectedTeamId);
  const otherFA = state.freeAgents.filter((p) => p.formerTeamId !== state.selectedTeamId);
  const allSorted = [...ownFA.sort((a, b) => overall(b) - overall(a)), ...otherFA.sort((a, b) => overall(b) - overall(a))];

  function renderFACard(player, isOwn) {
    const isAB = player.faRank === "A" || player.faRank === "B";
    const compText = isAB ? `${player.faRank}ランク (人的補償あり)` : "Cランク (補償なし)";
    const canBid = !locked && budgetLeft() >= (player.demandSalary || player.salary);
    return `
      <div class="fa-card ${isOwn ? 'fa-own' : ''}">
        ${isOwn ? '<div class="fa-own-label">自球団FA</div>' : ''}
        <div class="fa-card-head">
          <div class="fa-card-left">
            <span class="fa-rank-badge rank-${player.faRank}">${player.faRank}</span>
            <div>
              ${renderPlayerButton(player)}
              <div class="fa-card-info">${player.age}歳 / ${player.height}cm / ${player.pos} / 総合${overall(player)} / 旧所属: ${player.formerTeamName || "無所属"}</div>
            </div>
          </div>
          <strong class="velocity-tag">${money(player.demandSalary || player.salary)}</strong>
        </div>
        <div class="fa-compensation-info ${player.faRank === 'C' ? 'none' : ''}">
          ${compText} / 希望年俸: ${money(player.demandSalary || player.salary)}
        </div>
        <div class="fa-actions">
          ${isOwn
            ? `<button class="small-button" data-fa-negotiate="${player.id}" data-fa-type="retain" ${canBid ? "" : "disabled"}>宣言残留を打診する</button>`
            : `<button class="small-button gold" data-fa-negotiate="${player.id}" data-fa-type="sign" ${canBid ? "" : "disabled"}>獲得を打診する</button>`}
        </div>
      </div>
    `;
  }

  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">FA宣言選手市場</h2>
        <p class="panel-sub">金額と年数を提示して交渉します。自チームからのFA選手は引き留め交渉が可能です。</p>
      </div>
      <div class="panel-body market-list">
        ${state.postingRequests.length ? `
          <div style="margin-bottom:16px; padding:14px; background:#fff8e1; border:1px solid #e8d5a0; border-radius:8px;">
            <strong style="color:#87640f;">ポスティング要請</strong>
            <div class="fine muted" style="margin:6px 0 10px;">以下の選手が海外移籍を希望しています。容認すると譲渡金を得られますが選手は退団します。</div>
            ${state.postingRequests.map((p) => `
              <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid #e8d5a0;">
                <span><strong>${p.name}</strong> (${p.pos} / 総合${overall(p)})</span>
                <div style="display:flex;gap:4px;">
                  <button class="small-button" data-posting-allow="${p.id}" ${locked ? 'disabled' : ''}>容認</button>
                  <button class="small-button secondary" data-posting-deny="${p.id}" ${locked ? 'disabled' : ''}>否認</button>
                </div>
              </div>
            `).join("")}
          </div>
        ` : ""}
        ${allSorted.length ? allSorted.map((player) => renderFACard(player, ownFA.includes(player))).join("") : `<div class="empty">FA宣言した選手はいません。</div>`}
      </div>
    </section>
  `;
}

function renderDraftPanel() {
  if (state.draftRound === 0) {
    return `
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">新人選手選択会議 (ドラフト)</h2>
          <p class="panel-sub">今季の新人ドラフト会議を開始します。最大7巡まで指名を行います。</p>
        </div>
        <div class="panel-body">
          <button class="primary-button" data-start-draft>ドラフト会議を開始する</button>
          ${state.draftResults.length ? `
            <h3 class="detail-heading">今オフのドラフト指名結果</h3>
            <div class="draft-results">
              ${state.draftResults.map((r) => `
                <div class="draft-result-row">
                  <strong>${r.round}位</strong>
                  <span>${teamName(r.teamId)}</span>
                  <span>${r.player.name} (${r.player.pos} / 総合${overall(r.player)})</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </section>
    `;
  }

  const roundText = state.draftRound === 1 ? "1巡目 (重複抽選あり)" : `${state.draftRound}巡目 (ウェーバー順)`;
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="draft-round-bar">
          <span class="round-label">ドラフト会議 - ${roundText}</span>
          <span class="tag gold">プール残数: ${state.draftPool.length}名</span>
        </div>
        <p class="panel-sub">獲得したい選手を指名してください。高校・大学・社会人それぞれのスカウトレポート、特徴が確認できます。</p>
      </div>
      <div class="panel-body draft-grid">
        ${state.draftRound > 1 ? `
          <div style="grid-column:1/-1; margin-bottom:10px;">
            <button class="ghost-button" onclick="endDraftEarly()" style="width:auto;display:inline-block;padding:8px 20px;">ドラフトを終了する</button>
          </div>
        ` : ""}
        ${state.draftPool.sort((a, b) => overall(b) - overall(a)).map((p) => {
          const profile = p.draftProfile || {};
          const originClass = profile.originType === "高卒" ? "highschool" : profile.originType === "大卒" ? "university" : "corporate";
          
          let specInfo = "";
          if (p.pos === "投") {
            specInfo = `
              <div class="velocity-tag">${profile.maxVelocity} km/h</div>
              <div class="pitch-tags">
                ${(profile.pitchTypes || []).map((t) => `<span class="pitch-tag">${t}</span>`).join("")}
              </div>
            `;
          } else {
            specInfo = `<div class="feature">${profile.feature || "強打の野手候補"}</div>`;
          }

          const stats = profile.amateurStats || {};
          let statsHtml = "";
          if (profile.originType === "高卒") {
            statsHtml = `
              <span>甲子園: <strong>${stats.甲子園出場 || "なし"}</strong></span>
              ${p.pos === '投' ? `<span>地方大会: <strong>${stats.地方大会}</strong> 防${stats.防御率}</span>` : `<span>打率: <strong>${stats.打率}</strong> ${stats.本塁打}本 ${stats.打点}点</span>`}
            `;
          } else if (profile.originType === "大卒") {
            statsHtml = `
              <span>所属: <strong>${stats.リーグ}</strong></span>
              ${p.pos === '投' ? `<span>成績: <strong>${stats.成績}</strong> 防${stats.防御率}</span>` : `<span>打率: <strong>${stats.打率}</strong> ${stats.本塁打}本 ${stats.受賞 ? `(${stats.受賞})` : ''}</span>`}
            `;
          } else {
            statsHtml = `
              <span>チーム: <strong>${stats.都市対抗}</strong></span>
              ${p.pos === '投' ? `<span>成績: <strong>${stats.成績}</strong> 防${stats.防御率}</span>` : `<span>打率: <strong>${stats.打率}</strong> ${stats.本塁打}本 ${stats.打点}点</span>`}
            `;
          }

          return `
            <div class="draft-card">
              <div class="draft-card-head">
                <div>
                  <div class="draft-card-name">${p.name}</div>
                  <div class="draft-card-meta">${p.age}歳 / ${p.height}cm ${p.weight}kg / ${p.pos}投打</div>
                </div>
                <span class="scout-badge grade-${profile.scoutGrade}">${profile.scoutGrade}</span>
              </div>
              <div class="draft-card-body">
                ${specInfo}
                <div class="scout-comment">“${profile.scoutComment}”</div>
                <div class="amateur-stats">
                  <div class="fine muted">${stats.label || "アマチュア通算"}</div>
                  ${statsHtml}
                  <span>50m走: <strong>${profile.runTime50m || "6.2"}秒</strong></span>
                </div>
              </div>
              <div class="draft-card-foot">
                <span class="origin-badge ${originClass}">${profile.originType} (${profile.school})</span>
                <button class="small-button" data-draft-candidate="${p.id}">指名する</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderActiveDraftPanel() {
  const phase = state.activeDraftPhase;
  const locked = state.phase !== "offseason";

  if (!phase || phase === "nominate") {
    const eligible = getEligibleActiveDraftPlayers();
    return `
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">現役ドラフト - 候補ノミネート</h2>
          <p class="panel-sub">自チームの支配下選手から、現役ドラフト対象の基準を満たす選手を<strong>2名</strong>選択してノミネートしてください。</p>
        </div>
        <div class="panel-body">
          ${eligible.length ? `
            <div class="nominate-grid">
              ${eligible.map((p) => {
                const isNom = (state.activeDraftNominees[state.selectedTeamId] || []).some((n) => n.id === p.id);
                return `
                  <label class="nominate-row ${isNom ? 'nominated' : ''}">
                    <input type="checkbox" data-active-nominate="${p.id}" ${isNom ? 'checked' : ''}>
                    <span><strong>${p.name}</strong> (${p.pos})</span>
                    <span>${p.age}歳</span>
                    <span>総合${overall(p)}</span>
                    <span class="muted">年俸: ${money(p.salary)}</span>
                  </label>
                `;
              }).join("")}
            </div>
            <div style="margin-top: 14px;">
              <button class="primary-button" data-submit-active-nomination ${locked ? 'disabled' : ''}>ノミネートを決定する</button>
            </div>
          ` : `
            <div class="empty">ノミネート可能な選手がロスターに存在しません。</div>
          `}
        </div>
      </section>
    `;
  }

  if (phase === "pick") {
    const allNominees = [];
    Object.entries(state.activeDraftNominees).forEach(([teamId, players]) => {
      if (teamId === state.selectedTeamId) return; 
      players.forEach((p) => {
        allNominees.push({ ...p, originalTeamId: teamId });
      });
    });

    return `
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">現役ドラフト - 指名会議</h2>
          <p class="panel-sub">他球団がノミネートした選手一覧です。獲得したい選手を<strong>1名</strong>選んで指名してください（指名後、自動でチェーン抽選が実行されます）。</p>
        </div>
        <div class="panel-body market-list">
          ${allNominees.map((p) => `
            <div class="market-item">
              <div class="market-top">
                <div>
                  ${renderPlayerButton(p)}
                  <div class="fine muted">${p.age}歳 / ${p.pos} / 総合${overall(p)} / 元所属: ${teamName(p.originalTeamId)}</div>
                </div>
                <span class="tag gold">年俸: ${money(p.salary)}</span>
              </div>
              <button class="small-button gold" data-pick-active="${p.id}" ${locked ? 'disabled' : ''}>獲得する</button>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">現役ドラフト - 指名結果</h2>
        <p class="panel-sub">今オフの現役ドラフトの選手移動結果一覧です。</p>
      </div>
      <div class="panel-body">
        <div class="active-draft-results">
          ${state.activeDraftResult.map((r) => `
            <div class="active-draft-result">
              <span>${teamName(r.from)} 放出</span>
              <span class="arrow">➔</span>
              <span>${teamName(r.to)} 獲得 (${r.player.name} / ${r.player.pos} / 総合${overall(r.player)})</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderPlayerButton(player) {
  return `<button class="player-link" data-player-detail="${player.id}">${player.name}</button>`;
}

function renderRecordsPanel() {
  let allPls = allPlayers().filter((p) => p.teamId !== "DRAFT" && p.teamId !== "FA");
  allPls = sortRoster(allPls);
  const isHitter = state.statView === "hitter";

  function statHeaders() {
    return `${sortHeader("試合/登板", "games")}${sortHeader("打率/防", "avg")}${sortHeader("本/勝", "hr")}${sortHeader("点/奪三", "rbi")}`;
  }

  function statCells(p) {
    if (p.pos === "投") {
      return `<td>${p.stats?.games || 0}</td><td>${p.stats?.era?.toFixed(2) || "-"}</td><td>${p.stats?.wins || 0}</td><td>${p.stats?.strikeouts || 0}</td>`;
    }
    return `<td>${p.stats?.games || 0}</td><td>${formatRate(p.stats?.average)}</td><td>${p.stats?.homers || 0}</td><td>${p.stats?.rbi || 0}</td>`;
  }

  return `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">全球団選手記録</h2>
        <p class="panel-sub">全球団の全支配下選手データです。ヘッダークリックでソート、野手/投手切替で表示が切り替わります。</p>
      </div>
      <div class="panel-body">
        <div class="toolbar">
          <span class="fine muted">${allPls.length}名</span>
          <div class="stat-toggle">
            <button class="toggle-btn ${isHitter ? 'active' : ''}" data-stat-view="hitter">野手</button>
            <button class="toggle-btn ${!isHitter ? 'active' : ''}" data-stat-view="pitcher">投手</button>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${sortHeader("選手", "name")}
                ${sortHeader("チーム", "teamId")}
                ${sortHeader("守備", "pos")}
                ${sortHeader("年齢", "age")}
                ${sortHeader("総合", "overall")}
                ${sortHeader("年俸", "salary")}
                ${statHeaders()}
              </tr>
            </thead>
            <tbody>
              ${allPls.map((p) => `
                <tr>
                  <td>${renderPlayerButton(p)}</td>
                  <td>${teamName(p.teamId)}</td>
                  <td>${p.pos}</td>
                  <td>${p.age}</td>
                  <td><strong>${overall(p)}</strong></td>
                  <td>${money(p.salary)}</td>
                  ${statCells(p)}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function allPlayers() {
  return [
    ...Object.values(state.rosters).flat(),
    ...state.freeAgents,
    ...state.draftPool,
    ...Object.values(state.activeDraftNominees).flat(),
  ];
}

function findPlayer(playerId) {
  return allPlayers().find((player) => player.id === playerId);
}

function renderRatingGrid(player) {
  const items = player.pos === "投"
    ? [["球威", player.velocity], ["制球", player.control], ["スタミナ", player.stamina], ["守備", player.defense], ["怪我耐性", player.injury], ["潜在", player.potential]]
    : [["ミート", player.batting], ["パワー", player.power], ["守備", player.defense], ["走力", player.running], ["怪我耐性", player.injury], ["潜在", player.potential]];
  return `<div class="rating-grid">${items.map(([label, value]) => `<div><span>${label}</span><strong>${Math.round(value)}</strong></div>`).join("")}</div>`;
}

function renderCareerTable(player) {
  const rows = Array.isArray(player.careerStats) ? player.careerStats : [];
  if (!rows.length) {
    return `<div class="empty">プロ成績はまだありません。</div>`;
  }
  const isPitcher = rows[0]?.stats?.kind === "pitcher";
  return `
    <div class="table-wrap">
      <table class="career-table">
        <thead>
          ${isPitcher
            ? `<tr><th>年度</th><th>年齢</th><th>所属</th><th>出場</th><th>登板</th><th>先発</th><th>救援</th><th>投球回</th><th>勝</th><th>防御率</th><th>奪三振</th><th>四球</th><th>SV</th><th>HLD</th></tr>`
            : `<tr><th>年度</th><th>年齢</th><th>所属</th><th>出場</th><th>試合</th><th>打席</th><th>打数</th><th>安打</th><th>二塁打</th><th>三塁打</th><th>本塁打</th><th>四球</th><th>死球</th><th>犠飛</th><th>打率</th><th>出塁率</th><th>長打率</th><th>OPS</th></tr>`}
        </thead>
        <tbody>
          ${rows.slice().reverse().map((row) => `
            ${renderCareerRow(row, isPitcher)}
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCareerRow(row, isPitcher) {
  const stats = row.stats;
  if (isPitcher) {
    return `
      <tr>
        <td>${row.year}</td>
        <td>${row.age}</td>
        <td>${row.teamName || teamName(row.teamId)}</td>
        <td>${formatPositionGames(stats.positionGames)}</td>
        <td>${stats.games}</td>
        <td>${stats.starts || 0}</td>
        <td>${stats.reliefGames || 0}</td>
        <td>${stats.innings}</td>
        <td>${stats.wins}</td>
        <td>${stats.era.toFixed(2)}</td>
        <td>${stats.strikeouts}</td>
        <td>${stats.walks || 0}</td>
        <td>${stats.saves || 0}</td>
        <td>${stats.holds || 0}</td>
      </tr>
    `;
  }
  return `
    <tr>
      <td>${row.year}</td>
      <td>${row.age}</td>
      <td>${row.teamName || teamName(row.teamId)}</td>
      <td>${formatPositionGames(stats.positionGames)}</td>
      <td>${stats.games}</td>
      <td>${stats.plateAppearances}</td>
      <td>${stats.atBats}</td>
      <td>${stats.hits}</td>
      <td>${stats.doubles}</td>
      <td>${stats.triples}</td>
      <td>${stats.homers}</td>
      <td>${stats.walks}</td>
      <td>${stats.hitByPitch}</td>
      <td>${stats.sacFlies}</td>
      <td>${formatRate(stats.average)}</td>
      <td>${formatRate(stats.onBase)}</td>
      <td>${formatRate(stats.slugging)}</td>
      <td>${formatRate(stats.ops)}</td>
    </tr>
  `;
}

function renderCurrentStatsGrid(player) {
  const stats = normalizeStats(player, player.stats);
  const items = stats.kind === "pitcher"
    ? [["出場", formatPositionGames(stats.positionGames)], ["登板", stats.games], ["先発", stats.starts || 0], ["救援", stats.reliefGames || 0], ["投球回", stats.innings], ["防御率", stats.era.toFixed(2)], ["勝利", stats.wins], ["奪三振", stats.strikeouts], ["四球", stats.walks || 0], ["SV", stats.saves || 0], ["HLD", stats.holds || 0]]
    : [["出場", formatPositionGames(stats.positionGames)], ["試合", stats.games], ["打席", stats.plateAppearances], ["打数", stats.atBats], ["安打", stats.hits], ["二塁打", stats.doubles], ["三塁打", stats.triples], ["本塁打", stats.homers], ["四球", stats.walks], ["死球", stats.hitByPitch], ["犠飛", stats.sacFlies], ["打率", formatRate(stats.average)], ["出塁率", formatRate(stats.onBase)], ["長打率", formatRate(stats.slugging)], ["OPS", formatRate(stats.ops)]];
  return `<div class="stat-grid">${items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

function renderPlayerDetail() {
  const player = findPlayer(state.detailPlayerId);
  if (!player) return "";
  const team = teams.find((item) => item.id === player.teamId);
  const currentTeam = team ? `${team.name} / ${leagueName(team.league)}` : teamName(player.teamId);
  
  let pitchSpec = "";
  if (player.pos === "投" && player.pitchTypes) {
    pitchSpec = `
      <h3 class="detail-heading">球種・最速</h3>
      <div class="profile-grid">
        <div><span>最速</span><strong>${player.maxVelocity || 140} km/h</strong></div>
        <div style="grid-column: 2 / -1">
          <span>持ち球</span>
          <strong>${player.pitchTypes.join(", ")}</strong>
        </div>
      </div>
    `;
  }

  return `
    <div class="modal-backdrop" data-close-detail>
      <section class="modal player-detail" role="dialog" aria-modal="true" aria-label="${player.name}の選手詳細">
        <div class="modal-head">
          <div>
            <h2>${player.name}</h2>
            <p class="panel-sub">${currentTeam} / ${player.pos} / ${player.throwBat} / ${player.originType || "高卒"}</p>
          </div>
          <button class="close-button" data-close-detail>×</button>
        </div>
        <div class="modal-body">
          <div class="profile-grid">
            <div><span>年齢</span><strong>${player.age}歳</strong></div>
            <div><span>出身</span><strong>${player.origin}</strong></div>
            <div><span>身長</span><strong>${player.height}cm</strong></div>
            <div><span>体重</span><strong>${player.weight}kg</strong></div>
            <div><span>年俸</span><strong>${money(player.salary)}</strong></div>
            <div><span>適正価格</span><strong>${money(player.fairSalary || fairMarketValue(player))}</strong></div>
            <div><span>総合</span><strong>${overall(player)}</strong></div>
            <div><span>直近成績</span><strong>${player.lastStats || formatStats(player.stats)}</strong></div>
          </div>
          ${player.teamId === state.selectedTeamId ? `
          <div class="salary-edit-section" style="margin-top:12px; padding:12px; background:#f7faf8; border:1px solid var(--line); border-radius:8px;">
            <div style="font-weight:800; font-size:13px; margin-bottom:6px;">年俸調整</div>
            <div class="fine muted" style="margin-bottom:8px;">適正より低いとFA流出リスクが上がり能力が低下します</div>
            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
              <input type="number" id="salary-input-${player.id}" value="${player.salary.toFixed(2)}" min="0.05" max="8.0" step="0.01" style="width:100px; padding:6px 8px; border:1px solid var(--line); border-radius:6px; font:inherit;">
              <span style="font-size:13px;">億</span>
              <button class="small-button" data-set-salary="${player.id}">更新</button>
              <button class="small-button secondary" data-reset-salary="${player.id}">適正に戻す</button>
            </div>
          </div>
          ` : ""}
          <div class="fine muted" style="margin-top:6px;">FA登録: ${player.faYears}年 (${player.faEligible ? 'FA権あり' : 'FA権なし'}) / 契約年数: ${player.years}年</div>
          ${pitchSpec}
          ${renderRatingGrid(player)}
          <h3 class="detail-heading">直近成績詳細</h3>
          ${renderCurrentStatsGrid(player)}
          <h3 class="detail-heading">年度別成績</h3>
          ${renderCareerTable(player)}
        </div>
      </section>
    </div>
  `;
}

function renderProtectModal() {
  const { faPlayer, rank } = state.protectPhase;
  const list = myRoster();
  
  return `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true" style="width: min(800px, 100%)">
        <div class="modal-head">
          <div>
            <h2>プロテクトリスト編成 (人的補償)</h2>
            <p class="panel-sub">${faPlayer.name} (${rank}ランク) を獲得するため、プロテクト枠 (28名) を設定してください。プロテクトから漏れた選手を1名、人的補償として獲得される可能性があります。</p>
          </div>
        </div>
        <div class="modal-body">
          <div class="protect-counter ${state.protectList.length > PROTECT_LIST_SIZE ? 'over' : ''}">
            プロテクト選手数: <strong>${state.protectList.length}</strong> / ${PROTECT_LIST_SIZE} 名
          </div>
          <div class="protect-grid">
            ${list.map((p) => {
              const isProt = state.protectList.includes(p.id);
              return `
                <div class="protect-row ${isProt ? 'protected' : ''}" data-protect-toggle="${p.id}">
                  <input type="checkbox" ${isProt ? 'checked' : ''} style="pointer-events:none">
                  <span style="flex-grow:1"><strong>${p.name}</strong> (${p.pos})</span>
                  <span>総合${overall(p)}</span>
                  <span class="muted">${money(p.salary)}</span>
                </div>
              `;
            }).join("")}
          </div>
          <div style="margin-top:14px; display:flex; gap:10px;">
            <button class="primary-button" data-submit-protect ${state.protectList.length > PROTECT_LIST_SIZE ? 'disabled' : ''}>プロテクトを決定する</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderFANegotiationModal() {
  const neg = state.faNegotiation;
  if (!neg) return "";
  const player = findPlayer(neg.playerId);
  if (!player) return "";
  const isRetain = neg.type === "retain";
  const demand = player.demandSalary || player.salary;
  return `
    <div class="modal-backdrop" data-close-fa>
      <section class="modal" role="dialog" aria-modal="true" style="width:min(500px,100%)">
        <div class="modal-head">
          <div>
            <h2>${isRetain ? '宣言残留交渉' : 'FA獲得交渉'}: ${player.name}</h2>
            <p class="panel-sub">${player.age}歳 / ${player.pos} / 総合${overall(player)} / ${player.formerTeamName || '無所属'}</p>
          </div>
          <button class="close-button" data-close-fa>×</button>
        </div>
        <div class="modal-body">
          <div class="profile-grid" style="margin-bottom:14px;">
            <div><span>希望年俸</span><strong>${money(demand)}</strong></div>
            <div><span>旧所属</span><strong>${player.formerTeamName || teamName(player.formerTeamId) || '無所属'}</strong></div>
            <div><span>FAランク</span><strong>${player.faRank || 'C'}</strong></div>
            <div><span>${isRetain ? '残留確率目安' : '獲得確率目安'}</span><strong>55%前後</strong></div>
          </div>
          <div style="padding:14px; background:#f7faf8; border:1px solid var(--line); border-radius:8px;">
            <div style="font-weight:800; font-size:14px; margin-bottom:10px;">${isRetain ? '残留条件を提示' : '獲得条件を提示'}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div>
                <label style="font-size:12px;color:var(--muted);">年俸 (億)</label>
                <input type="number" id="fa-offer-salary" value="${demand.toFixed(2)}" min="0.05" max="8.0" step="0.01" style="width:100%;padding:6px 8px;border:1px solid var(--line);border-radius:6px;font:inherit;">
              </div>
              <div>
                <label style="font-size:12px;color:var(--muted);">契約年数</label>
                <input type="number" id="fa-offer-years" value="3" min="1" max="6" style="width:100%;padding:6px 8px;border:1px solid var(--line);border-radius:6px;font:inherit;">
              </div>
            </div>
            <div style="margin-top:12px; display:flex; gap:8px;">
              <button class="primary-button" data-submit-fa-offer="${player.id}" style="width:auto;">提示する</button>
              <button class="ghost-button" data-close-fa style="width:auto;">キャンセル</button>
            </div>
            <div class="fine muted" style="margin-top:8px;">※年俸・年数が高いほど成功確率が上がります。自チームからのFA選手には残留ボーナスあり。</div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function submitFAOffer() {
  const neg = state.faNegotiation;
  if (!neg) return;
  const player = findPlayer(neg.playerId);
  if (!player) return;
  const isRetain = neg.type === "retain";

  const salaryInput = document.querySelector("#fa-offer-salary");
  const yearsInput = document.querySelector("#fa-offer-years");
  const offeredSalary = parseFloat(salaryInput?.value || 0);
  const offeredYears = parseInt(yearsInput?.value || 3);

  if (isNaN(offeredSalary) || offeredSalary < 0.05 || offeredSalary > 8.0) {
    alert("年俸は0.05億〜8.0億の範囲で入力してください。");
    return;
  }

  const demand = player.demandSalary || player.salary;
  const offerValue = offeredSalary * 1.2 + offeredYears * 0.15;
  const cpuBid = demand * (0.9 + Math.random() * 0.5);
  const cpuYears = Math.floor(Math.random() * 4) + 2;
  const cpuValue = cpuBid * 1.2 + cpuYears * 0.15;
  const loyaltyBonus = isRetain ? (0.1 + Math.random() * 0.2) : 0;
  const threshold = cpuValue * (1 - loyaltyBonus);

  const success = offerValue >= threshold;

  if (success) {
    state.freeAgents = state.freeAgents.filter((p) => p.id !== player.id);
    player.teamId = state.selectedTeamId;
    player.salary = offeredSalary;
    player.fairSalary = fairMarketValue(player);
    player.years = offeredYears;
    player.acquired = isRetain ? "FA残留" : "FA";

    if (!isRetain && player.formerTeamId && player.formerTeamId !== "FA" && (player.faRank === "A" || player.faRank === "B")) {
      const decideRoll = Math.random() * 100;
      const isHumanComp = decideRoll <= 70;
      if (isHumanComp) {
        state.protectPhase = {
          faPlayer: player,
          formerTeamId: player.formerTeamId,
          rank: player.faRank,
          compensationType: "human",
        };
        const myPlrs = [...myRoster()].sort((a, b) => b.salary - a.salary);
        state.protectList = myPlrs.slice(0, Math.min(myPlrs.length, PROTECT_LIST_SIZE)).map((p) => p.id);
        state.news.unshift(`${player.name}と${isRetain ? '残留' : '獲得'}で合意。人的補償のプロテクトリスト編成が必要です。`);
      } else {
        state.rosters[state.selectedTeamId].push(player);
        const fee = player.salary * (player.faRank === "A" ? 0.8 : 0.6);
        state.news.unshift(`${player.name}を${isRetain ? '引き留め成功（残留）' : 'FA獲得'}。補償金${money(fee)}を支払いました。`);
      }
    } else {
      state.rosters[state.selectedTeamId].push(player);
      state.news.unshift(`${player.name}を${isRetain ? '引き留めに成功！残留が決定' : 'FA獲得'}しました。（${offeredYears}年 ${money(offeredSalary)}）`);
    }
  } else {
    state.news.unshift(`${player.name}との交渉不成立。${isRetain ? '他球団への移籍が決定しました。' : '条件面で折り合いませんでした。'}`);
    if (isRetain) {
      // Player leaves to another team
      const cpuTeam = teams.filter((t) => t.id !== state.selectedTeamId)[Math.floor(Math.random() * 11)];
      if (cpuTeam) {
        player.teamId = cpuTeam.id;
        player.acquired = "FA移籍";
        player.salary = player.demandSalary;
        player.years = Math.floor(Math.random() * 3) + 2;
        state.rosters[cpuTeam.id].push(player);
      }
    }
  }

  state.faNegotiation = null;
  persist();
  render();
}

function renderDraftBoard() {
  const board = state.draftNominationBoard;
  if (!board) return "";

  // Find conflicts
  const allPicks = {};
  const addPick = (teamId, teamName, playerId, playerName, playerPos) => {
    if (!allPicks[playerId]) allPicks[playerId] = { playerName, playerPos, teams: [] };
    allPicks[playerId].teams.push({ teamId, teamName });
  };
  addPick(state.selectedTeamId, getTeam().name, board.myPick.playerId, board.myPick.playerName, board.myPick.playerPos);
  Object.entries(board.cpuNominations).forEach(([tid, nom]) => {
    addPick(tid, nom.teamName, nom.playerId, nom.playerName, nom.playerPos);
  });

  const conflicts = Object.entries(allPicks).filter(([, v]) => v.teams.length >= 2);
  const noConflict = Object.entries(allPicks).filter(([, v]) => v.teams.length === 1);

  return `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true" style="width:min(700px,100%);max-height:min(700px,90vh);">
        <div class="modal-head">
          <div>
            <h2>ドラフト会議 1巡目 指名確認</h2>
            <p class="panel-sub">全球団の1巡目指名選手です。重複がある場合は抽選となります。</p>
          </div>
        </div>
        <div class="modal-body">
          ${board.phase === "board" ? `
            <p style="font-weight:800;color:var(--red);margin-bottom:10px;">
              ${conflicts.length ? `${conflicts.length}件の競合があります` : '競合はありません'}
            </p>
            <div style="max-height:350px;overflow-y:auto;margin-bottom:14px;">
              <table style="min-width:100%;">
                <thead><tr><th>球団</th><th>指名選手</th><th>守備</th><th>状態</th></tr></thead>
                <tbody>
                  ${Object.entries(board.cpuNominations).map(([, nom]) => {
                    const isConflict = conflicts.some(([, v]) => v.playerName === nom.playerName);
                    return `<tr>
                      <td>${nom.teamName}</td>
                      <td><strong>${nom.playerName}</strong></td>
                      <td>${nom.playerPos}</td>
                      <td style="color:${isConflict ? 'var(--red)' : 'var(--green)'}">${isConflict ? '競合' : '単独'}</td>
                    </tr>`;
                  }).join("")}
                  <tr style="background:#e6f7ed;">
                    <td><strong>${getTeam().name}</strong></td>
                    <td><strong>${board.myPick.playerName}</strong></td>
                    <td>${board.myPick.playerPos}</td>
                    <td style="color:${conflicts.some(([, v]) => v.playerName === board.myPick.playerName) ? 'var(--red)' : 'var(--green)'};">${conflicts.some(([, v]) => v.playerName === board.myPick.playerName) ? '競合' : '単独'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button class="primary-button" data-run-draft-lottery>抽選を開始する</button>
          ` : board.phase === "repick" ? `
            <h3 style="margin:0 0 10px;color:var(--red);">抽選失敗！ 外れ${board.userLostInfo?.lostCount || 1}位</h3>
            <p class="panel-sub" style="margin-bottom:14px;">残り選手から再指名してください。</p>
            <div style="max-height:350px;overflow-y:auto;margin-bottom:14px;">
              ${[...state.draftPool].sort((a, b) => overall(b) - overall(a)).map((p) => {
                const profile = p.draftProfile || {};
                return `
                  <div style="display:flex;align-items:center;justify-content:space-between;padding:8px;margin-bottom:4px;border:1px solid var(--line);border-radius:6px;background:white;">
                    <span><strong>${p.name}</strong> (${p.pos} / ${profile.originType || ''} / ${profile.school || ''} / ${profile.scoutGrade || ''}) 総合${overall(p)}</span>
                    <button class="small-button" onclick="rePickDraftCandidate('${p.id}')">再指名する</button>
                  </div>
                `;
              }).join("")}
            </div>
          ` : board.phase === "result" ? `
            <h3 style="margin:0 0 10px;">抽選結果</h3>
            <div style="max-height:350px;overflow-y:auto;margin-bottom:14px;">
              ${board.lotteryResults.map((r) => `
                <div style="padding:10px;margin-bottom:6px;background:#f7faf8;border:1px solid var(--line);border-radius:6px;">
                  <strong>${r.playerName}</strong> (${r.playerPos}) →
                  <span style="color:var(--green);font-weight:800;">${r.winnerName} が交渉権獲得</span>
                  ${r.losers.length ? `<div class="fine muted">${r.losers.map((l) => l.teamName).join('、')} は抽選で外れました</div>` : ''}
                </div>
              `).join("")}
            </div>
            <button class="primary-button" onclick="closeDraftBoard()">閉じる (2巡目へ)</button>
          ` : ""}
        </div>
      </section>
    </div>
  `;
}

function runDraftLottery() {
  const board = state.draftNominationBoard;
  if (!board) return;

  const allPicks = {};
  const addPick = (teamId, teamName, playerId, playerName, playerPos) => {
    if (!allPicks[playerId]) allPicks[playerId] = { playerId, playerName, playerPos, teams: [] };
    allPicks[playerId].teams.push({ teamId, teamName });
  };
  addPick(state.selectedTeamId, getTeam().name, board.myPick.playerId, board.myPick.playerName, board.myPick.playerPos);
  Object.entries(board.cpuNominations).forEach(([tid, nom]) => {
    addPick(tid, nom.teamName, nom.playerId, nom.playerName, nom.playerPos);
  });

  const results = [];
  const assignedPlayers = new Set();
  const userPickResult = { lost: false, lostCount: 0 };

  Object.entries(allPicks).forEach(([pid, entry]) => {
    if (entry.teams.length === 1) {
      const winner = entry.teams[0];
      const player = state.draftPool.find((p) => p.id === pid);
      if (player && !assignedPlayers.has(pid)) {
        assignedPlayers.add(pid);
        state.draftPool = state.draftPool.filter((p) => p.id !== pid);
        player.teamId = winner.teamId;
        state.rosters[winner.teamId].push(player);
        state.draftResults.push({ round: 1, teamId: winner.teamId, player });
        results.push({ playerName: entry.playerName, playerPos: entry.playerPos, winnerName: winner.teamName, losers: [] });
      }
    } else {
      const winnerIdx = rand(0, entry.teams.length - 1);
      const winner = entry.teams[winnerIdx];
      const losers = entry.teams.filter((_, i) => i !== winnerIdx);
      const player = state.draftPool.find((p) => p.id === pid);
      if (player && !assignedPlayers.has(pid)) {
        assignedPlayers.add(pid);
        state.draftPool = state.draftPool.filter((p) => p.id !== pid);
        player.teamId = winner.teamId;
        state.rosters[winner.teamId].push(player);
        state.draftResults.push({ round: 1, teamId: winner.teamId, player });
        results.push({ playerName: entry.playerName, playerPos: entry.playerPos, winnerName: winner.teamName, losers });
        // Check if user lost this lottery
        if (winner.teamId !== state.selectedTeamId && losers.some((l) => l.teamId === state.selectedTeamId)) {
          userPickResult.lost = true;
          userPickResult.lostCount = losers.findIndex((l) => l.teamId === state.selectedTeamId) + 1;
        }
      }
    }
  });

  // Handle non-conflicted losers (if user's pick was auto-assigned but they didn't actually "win" it because another team already claimed it)
  // Actually, non-conflicted picks always go to the only team - so they always win.

  if (userPickResult.lost) {
    // User lost - enter re-pick phase
    board.phase = "repick";
    board.lotteryResults = results;
    board.userLostInfo = userPickResult;
    persist();
    render();
  } else {
    // User won or no conflict - assign other losers and proceed
    const myWon = results.find((r) => r.winnerName === getTeam().name);
    if (myWon) {
      state.news.unshift(`ドラフト1巡目: ${myWon.playerName}の交渉権を獲得！`);
    }

    // Auto-assign other losing teams
    const losingTeams = [];
    results.forEach((r) => {
      r.losers.forEach((l) => losingTeams.push(l));
    });
    losingTeams.forEach((t) => {
      if (t.teamId === state.selectedTeamId) return;
      const candidates = [...state.draftPool].sort((a, b) => overall(b) - overall(a));
      if (candidates.length > 0) {
        const chosen = candidates[rand(0, Math.min(2, candidates.length - 1))];
        if (chosen) {
          state.draftPool = state.draftPool.filter((p) => p.id !== chosen.id);
          chosen.teamId = t.teamId;
          state.rosters[t.teamId].push(chosen);
          state.draftResults.push({ round: 1, teamId: t.teamId, player: chosen });
        }
      }
    });

    board.phase = "result";
    board.lotteryResults = results;
    persist();
    render();
  }
}

function rePickDraftCandidate(playerId) {
  const board = state.draftNominationBoard;
  if (!board || board.phase !== "repick") return;
  const player = state.draftPool.find((p) => p.id === playerId);
  if (!player) return;

  state.draftPool = state.draftPool.filter((p) => p.id !== playerId);
  player.teamId = state.selectedTeamId;
  state.rosters[state.selectedTeamId].push(player);
  state.draftResults.push({ round: 1, teamId: state.selectedTeamId, player });
  state.news.unshift(`ドラフト1巡目: 抽選外れ → ${player.name}を再指名で獲得`);

  // Auto-assign other losing teams  
  const losingTeams = [];
  board.lotteryResults.forEach((r) => {
    r.losers.forEach((l) => { if (l.teamId !== state.selectedTeamId) losingTeams.push(l); });
  });
  losingTeams.forEach((t) => {
    const candidates = [...state.draftPool].sort((a, b) => overall(b) - overall(a));
    if (candidates.length > 0) {
      const chosen = candidates[rand(0, Math.min(2, candidates.length - 1))];
      if (chosen) {
        state.draftPool = state.draftPool.filter((p) => p.id !== chosen.id);
        chosen.teamId = t.teamId;
        state.rosters[t.teamId].push(chosen);
        state.draftResults.push({ round: 1, teamId: t.teamId, player: chosen });
      }
    }
  });

  board.phase = "result";
  persist();
  render();
}

function closeDraftBoard() {
  state.draftNominationBoard = null;
  state.draftRound = 2;
  persist();
  render();
}

function renderResults() {
  const stats = state.results.teamStats;
  const resultLeagueRows = state.results.leagueRows || leagueStandings(state.results.rows || []);
  const rankDelta = stats.rankDelta === 0 ? "前年同位" : stats.rankDelta > 0 ? `前年から${stats.rankDelta}上昇` : `前年から${Math.abs(stats.rankDelta)}下降`;
  return `
    <div class="result-list" style="margin-top:14px">
      <div class="result-item">
        <strong>${getTeam().name}: ${state.results.mine.wins}勝${state.results.mine.losses}敗 / ${leagueName(getTeam().league)} ${state.results.rank}位</strong>
        <div class="fine muted">${rankDelta} / ファン満足度 ${stats.fanSatisfaction}</div>
      </div>
      <div class="result-grid">
        <div><span>得点</span><strong>${stats.runs}</strong></div>
        <div><span>失点</span><strong>${stats.allowed}</strong></div>
        <div><span>防御率</span><strong>${stats.era.toFixed(2)}</strong></div>
        <div><span>年俸総額</span><strong>${money(stats.payroll)}</strong></div>
      </div>
      ${resultLeagueRows.map((league) => `
        <div class="result-item">
          <strong>${league.name} 順位表</strong>
          <div class="standings">
            ${league.rows.map((row) => `
              <div class="standing-row ${row.team.id === state.selectedTeamId ? "mine" : ""}">
                <strong>${row.leagueRank}</strong>
                <span>${row.team.name}</span>
                <span>${row.wins}勝</span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
      <div class="result-item">
        <strong>主要選手</strong>
        <div class="leader-list">
          ${state.results.leaders.map((player) => `
            <div class="leader-row">
              <span>${player.name}</span>
              <span>${player.pos} / ${player.age}歳 / 総合${player.overall}</span>
              <span>${player.stats}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <button class="primary-button" onclick="advanceToNextYear()">翌年のオフへ進む</button>
    </div>
  `;
}

function bindEvents() {
  document.querySelector("[data-continue]")?.addEventListener("click", () => {
    if (loadSavedState()) render();
  });
  document.querySelector("[data-reset-save]")?.addEventListener("click", () => {
    if (confirm("保存データを削除します。よろしいですか？")) clearSave();
  });
  document.querySelectorAll("[data-team]").forEach((button) => {
    button.addEventListener("click", () => initGame(button.dataset.team));
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      render();
    });
  });

  document.querySelectorAll("[data-scout-team]").forEach((button) => {
    button.addEventListener("click", () => {
      state.scoutTeamId = button.dataset.scoutTeam;
      persist();
      render();
    });
  });

  document.querySelectorAll("[data-player-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      state.detailPlayerId = button.dataset.playerDetail;
      render();
    });
  });
  document.querySelectorAll("[data-close-detail]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && element.classList.contains("modal-backdrop")) return;
      state.detailPlayerId = null;
      render();
    });
  });

  document.querySelectorAll("[data-release]").forEach((button) => {
    button.addEventListener("click", () => releasePlayer(button.dataset.release));
  });

  document.querySelectorAll("[data-sign-fa]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.signFa;
      state.faNegotiation = { playerId: id, type: "sign" };
      render();
    });
  });

  document.querySelectorAll("[data-fa-negotiate]").forEach((button) => {
    button.addEventListener("click", () => {
      state.faNegotiation = { playerId: button.dataset.faNegotiate, type: button.dataset.faType };
      render();
    });
  });

  document.querySelector("[data-submit-fa-offer]")?.addEventListener("click", submitFAOffer);

  document.querySelectorAll("[data-close-fa]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && element.classList.contains("modal-backdrop")) return;
      state.faNegotiation = null;
      render();
    });
  });

  // Posting
  document.querySelectorAll("[data-posting-allow]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.postingAllow;
      const player = state.postingRequests.find((p) => p.id === pid);
      if (!player) return;
      const fee = clamp(overall(player) * 0.3 + player.salary * 2, 0.5, 15);
      state.rosters[player.formerTeamId] = (state.rosters[player.formerTeamId] || []).filter((p) => p.id !== pid);
      state.postingRequests = state.postingRequests.filter((p) => p.id !== pid);
      state.news.unshift(`${player.name}のポスティングを容認。譲渡金${money(fee)}を獲得しました。`);
      persist();
      render();
    });
  });
  document.querySelectorAll("[data-posting-deny]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.postingDeny;
      const player = state.postingRequests.find((p) => p.id === pid);
      if (!player) return;
      state.postingRequests = state.postingRequests.filter((p) => p.id !== pid);
      state.news.unshift(`${player.name}のポスティングを否認しました。`);
      persist();
      render();
    });
  });

  document.querySelectorAll("[data-protect-toggle]").forEach((element) => {
    element.addEventListener("click", () => {
      const pid = element.dataset.protectToggle;
      if (state.protectList.includes(pid)) {
        state.protectList = state.protectList.filter((id) => id !== pid);
      } else {
        state.protectList.push(pid);
      }
      render();
    });
  });
  document.querySelector("[data-submit-protect]")?.addEventListener("click", confirmProtectList);

  document.querySelectorAll("[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (state.rosterSort.key === key) {
        state.rosterSort.asc = !state.rosterSort.asc;
      } else {
        state.rosterSort.key = key;
        state.rosterSort.asc = false;
      }
      render();
    });
  });

  document.querySelectorAll("[data-trade-team]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tradeState.partnerTeamId = btn.dataset.tradeTeam;
      state.tradeState.myPlayerIds = [];
      state.tradeState.theirPlayerIds = [];
      render();
    });
  });
  document.querySelectorAll("[data-trade-my]").forEach((cb) => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.tradeMy;
      if (cb.checked) {
        if (state.tradeState.myPlayerIds.length < 2) {
          state.tradeState.myPlayerIds.push(id);
        }
      } else {
        state.tradeState.myPlayerIds = state.tradeState.myPlayerIds.filter((x) => x !== id);
      }
      render();
    });
  });
  document.querySelectorAll("[data-trade-their]").forEach((cb) => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.tradeTheir;
      if (cb.checked) {
        if (state.tradeState.theirPlayerIds.length < 2) {
          state.tradeState.theirPlayerIds.push(id);
        }
      } else {
        state.tradeState.theirPlayerIds = state.tradeState.theirPlayerIds.filter((x) => x !== id);
      }
      render();
    });
  });
  document.querySelector("[data-execute-trade]")?.addEventListener("click", executeTrade);

  document.querySelector("[data-start-draft]")?.addEventListener("click", startDraft);
  document.querySelectorAll("[data-draft-candidate]").forEach((btn) => {
    btn.addEventListener("click", () => pickDraftCandidate(btn.dataset.draftCandidate));
  });

  document.querySelector("[data-run-draft-lottery]")?.addEventListener("click", runDraftLottery);
  document.querySelector("[data-close-draft-board]")?.addEventListener("click", () => {
    state.draftNominationBoard = null;
    state.draftRound = 2;
    persist();
    render();
  });

  document.querySelectorAll("[data-active-nominate]").forEach((cb) => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.activeNominate;
      let noms = state.activeDraftNominees[state.selectedTeamId] || [];
      if (cb.checked) {
        if (!noms.some((p) => p.id === id)) {
          const p = myRoster().find((x) => x.id === id);
          if (p) noms.push(p);
        }
      } else {
        noms = noms.filter((p) => p.id !== id);
      }
      state.activeDraftNominees[state.selectedTeamId] = noms;
      render();
    });
  });
  document.querySelector("[data-submit-active-nomination]")?.addEventListener("click", () => {
    const noms = state.activeDraftNominees[state.selectedTeamId] || [];
    nominateForActiveDraft(noms.map((p) => p.id));
  });
  document.querySelectorAll("[data-pick-active]").forEach((btn) => {
    btn.addEventListener("click", () => simulateActiveDraft(btn.dataset.pickActive));
  });

  document.querySelector("[data-simulate]")?.addEventListener("click", simulateSeason);
  document.querySelector("[data-next-year]")?.addEventListener("click", advanceToNextYear);
  document.querySelector("[data-filter]")?.addEventListener("change", (event) => {
    state.positionFilter = event.target.value;
    render();
  });

  document.querySelectorAll("[data-stat-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.statView = btn.dataset.statView;
      persist();
      render();
    });
  });

  // Salary editing
  document.querySelector("[data-set-salary]")?.addEventListener("click", () => {
    const btn = document.querySelector("[data-set-salary]");
    const playerId = btn.dataset.setSalary;
    const input = document.querySelector(`#salary-input-${playerId}`);
    const newSalary = parseFloat(input.value);
    if (isNaN(newSalary) || newSalary < 0.05 || newSalary > 8.0) {
      alert("年俸は0.05億(500万)〜8.0億(8億)の範囲で入力してください。");
      return;
    }
    const player = findPlayer(playerId);
    if (player) {
      player.salary = Math.round(newSalary * 100) / 100;
      player._userSetSalary = true;
      persist();
      render();
    }
  });
  document.querySelector("[data-reset-salary]")?.addEventListener("click", () => {
    const btn = document.querySelector("[data-reset-salary]");
    const playerId = btn.dataset.resetSalary;
    const player = findPlayer(playerId);
    if (player) {
      player.salary = player.fairSalary || fairMarketValue(player);
      player._userSetSalary = false;
      persist();
      render();
    }
  });
}

try {
  render();
} catch(e) {
  document.querySelector("#app").innerHTML = '<div style="padding:40px;color:red;"><h2>起動エラー</h2><pre>' + e.message + '</pre></div>';
}
