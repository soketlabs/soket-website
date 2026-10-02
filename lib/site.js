export const SITE_URL = "https://soket.ai";

export function absoluteUrl(path) {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function jobShareDescription(job) {
  return `${job.summary} · ${job.location} · ${job.team} — Apply at Soket AI`;
}
