export const spacingTokens = {
  // Micro (Value / 4)
  microX: 1, // 4px
  micro: 2, // 8px
  microPlus: 3, // 12px

  // Stack (Value / 4)
  stackXs: 4, // 16px
  stackS: 5, // 20px
  stackM: 6, // 24px
  stackMs: 7, // 28px
  stackL: 8, // 32px
  stackXl: 9, // 36px

  // Paddings (Value / 4)
  sectionMobile: 16, // 64px
  sectionTablet: 20, // 80px
  sectionDesktop: 30, // 120px

  // Margin (Value / 4)
  marginMobile: 4, // 16px
  marginTablet: 10, // 40px
  marginDesktop: 18, // 72px

  // Gutters (Value / 4)
  gutterMobile: 4, // 16px
  gutterTablet: 6, // 24px
  gutterDesktop: 6, // 24px

  // Внутрішні блоки (Headline vs Content)
  contentGapMobile: 7, // 28px
  contentGapTablet: 10, // 40px
  contentGapDesktop: 10, // 40px
} as const;
