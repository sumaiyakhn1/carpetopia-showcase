export const GA_MEASUREMENT_ID = "G-KQSRR8VM8L"; // replace

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  } else {
    console.warn("gtag not loaded yet");
  }
};

export const event = (name: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else {
    console.warn("gtag not loaded yet");
  }
};
