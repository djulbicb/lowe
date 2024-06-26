export const SPRITE_SHEET = "ciabattas-revenge-sprites.png"
export const SIZE=16

export const LEVEL_THEMES = {
    YELLOW: "YELLOW",
    BLUE: "BLUE",
    GREEN: "GREEN",
    PINK: "PINK",
    GRAY: "GRAY",
  };
  
  
  export const THEME_BACKGROUNDS = {
    [LEVEL_THEMES.YELLOW]: "#2f2808",
    [LEVEL_THEMES.BLUE]: "#3d4c67",
    [LEVEL_THEMES.GREEN]: "#2f2808",
    [LEVEL_THEMES.PINK]: "#673d5e",
    [LEVEL_THEMES.GRAY]: "#96a1c7",
  };
  
  
  export const THEME_TILES_MAP = {
    [LEVEL_THEMES.YELLOW]: {
      FLOOR: "1x1",
      TOP: "1x0",
      LEFT: "0x1",
      RIGHT: "2x1",
      BOTTOM: "1x2",
      WALL: "0x2",
    },
  
    [LEVEL_THEMES.BLUE]: {
      FLOOR: "4x1",
      TOP: "4x0",
      LEFT: "3x1",
      RIGHT: "5x1",
      BOTTOM: "4x2",
      WALL: "3x2",
    },
  
    [LEVEL_THEMES.GREEN]: {
      FLOOR: "7x1",
      TOP: "7x0",
      LEFT: "6x1",
      RIGHT: "8x1",
      BOTTOM: "7x2",
      WALL: "6x2",
    },
  
    [LEVEL_THEMES.PINK]: {
      FLOOR: "10x1",
      TOP: "10x0",
      LEFT: "9x1",
      RIGHT: "11x1",
      BOTTOM: "10x2",
      WALL: "9x2",
    },
  
    [LEVEL_THEMES.GRAY]: {
      FLOOR: "13x1",
      TOP: "13x0",
      LEFT: "12x1",
      RIGHT: "14x1",
      BOTTOM: "13x2",
      WALL: "12x2",
    },
  
  };