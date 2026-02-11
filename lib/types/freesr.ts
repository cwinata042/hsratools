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

export type TFreeSRChar = {
  avatar_id: string; // Character ID
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
