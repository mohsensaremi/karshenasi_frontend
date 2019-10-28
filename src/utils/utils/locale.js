export const locale = window.location.search.replace("?hl=", "") || "en";
export const localQueryString = locale !== "en" ? `?hl=${locale}` : "";
