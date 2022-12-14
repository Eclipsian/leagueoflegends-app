export interface Champion {
    blurb: string;
    id: string;
    image: {
      full: string;
      sprite: string;
      group: string;
    };
    info: {
      attack: number;
      defense: number;
      magic: number;
      difficulty: number;
    };
    name: string;
    partype: string;
    key: string;
    stats: {
      armor: number;
      armorperlevel: number;
      attackdamage: number;
      attackdamageperlevel: number;
      attackrange: number;
      attackspeed: number;
      attackspeedperlevel: number;
      crit: number;
      critperlevel: number;
      hp: number;
      hpperlevel: number;
      hpregen: number;
      hpregenperlevel: number;
      movespeed: number;
      mp: number;
      mpperlevel: number;
      mpregen: number;
      mpregenperlevel: number;
      spellblock: number;
      spellblockperlevel: number;
    };
    tags: string[];
    title: string;
  }