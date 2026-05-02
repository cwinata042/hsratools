export type TCharacterDetails = {
  id: string;
  name: string;
  rarity: number;
  path: string;
  element: string;
  traces: any;
  traceTree: any;
  max_sp: number;
  stats: {
    HP: number;
    ATK: number;
    DEF: number;
    SPD: number;
    "CRIT Rate": number;
    "CRIT DMG": number;
  };
  unreleased: boolean;
};

export type TAvatar = {
  avatar_id: number; // Character ID
  data: {
    rank: number; // Eidolon level
    skills: object; // Collection of Skill IDs and current level
    skills_by_anchor_type: object;
  };
  level: number; // Character level
  promotion: number; // Ascension value
  sp_value: number; // Current Energy
  sp_max: number; // Max Energy
  techniques: number[]; // Technique IDs
  enhanced_id: number | null; // Novaflare, 1 if enhanced, null if not
};

export type TDatabase = {
  avatars: any;
  battle_config: TBattleConfig;
  name: string;
  lightcones: TLightCone[];
  loadout: TLoadout[];
  relics: TRelic[];
}

export type TRelic = {
  internal_uid: number;
  relic_id: number;
  relic_set_id: number;
  equip_avatar: number;
  level: number;
  main_affix_id: number;
  sub_affixes: TSubAffix[];
}

export type TSubAffix = {
  count: number;
  step: number;
  sub_affix_id: number;
  rolls: number[];
}

export type TLightCone = {
  internal_uid: number;
  item_id: number;  // light_cone_ranks.json key
  equip_avatar: number; // game_data characters key, 0 if unequipped
  level: number;
  promotion: number;
  rank: number; // superimposition level
}

export type TLoadout = {
  name: string;
  char_id: number; // game_data characters key
  head: number; // 0 if none, else relic uid
  hand: number;
  body: number;
  feet: number;
  planar_sphere: number;
  link_rope: number;
}

export type TBattleConfig = {
  battle_type: string;
    blessings: TBlessing[],
    custom_stats: any;
    cycle_count: number;
    monsters: TMonster[]
    path_resonance_id: number;
    stage_id: number;
}

export type TBlessing = {
  level: number;
  id: number;
}

export type TMonster = {
  monster_id: number;
  amount: number;
  level: number;
}