export const SITE_URL = "https://www.davini.hr";

export const SITE_NAME = "Davini";

export const HERO_IMAGE_VERSION = "20260803-light-interior";

export const SITE_DESCRIPTION =
  "Davini je studio za dizajn interijera u Zagrebu: idejna rješenja, 3D vizualizacije, projektna dokumentacija i namještaj po mjeri.";

const configuredGoogleAnalyticsId =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() ?? "";

export const GOOGLE_ANALYTICS_ID = /^G-[A-Z0-9]+$/i.test(
  configuredGoogleAnalyticsId,
)
  ? configuredGoogleAnalyticsId
  : "";

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ?? "";
