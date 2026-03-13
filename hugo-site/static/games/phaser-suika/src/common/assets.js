export const ASSET_KEYS = Object.freeze({
  BACKGROUND: 'BACKGROUND',
  DASHED_LINE: 'DASHED_LINE',
  FRUITS: 'FRUITS',
});

export const TEXTURE_ATLAS_ASSETS = [
  {
    assetKey: ASSET_KEYS.FRUITS,
    textureURL: 'assets/images/fruits.png',
    atlasURL: 'assets/images/fruits.json',
  },
];

export const IMAGE_ASSETS = [
  {
    assetKey: ASSET_KEYS.BACKGROUND,
    path: 'assets/images/bg.png',
  },
  {
    assetKey: ASSET_KEYS.DASHED_LINE,
    path: 'assets/images/dashed_line.png',
  },
];
