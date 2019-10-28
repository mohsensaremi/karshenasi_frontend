export const locale = window.location.search.replace("?hl=", "") || "en";
export const localQueryString = locale !== "en" ? `?hl=${locale}` : "";

export const dateFormat = locale === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD";
export const dateTimeFormat = locale === "fa" ? "jYYYY/jMM/jDD H:m" : "YYYY/MM/DD H:m";
