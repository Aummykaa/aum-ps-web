/**
 * Mirrors `next.config.ts` basePath rules for plain `<a href>` (e.g. file downloads).
 * `Link`/`next/image` get base path from Next automatically.
 */
export function getPublicBasePath(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!raw || raw === "/") return "";
  return raw.startsWith("/") ? raw.replace(/\/$/, "") || "" : `/${raw}`.replace(/\/$/, "");
}

/** Prefix an app-absolute path (e.g. `/resume.pdf`) for static hosting under basePath. */
export function withBasePath(path: string): string {
  const base = getPublicBasePath();
  if (!path.startsWith("/")) return path;
  return base ? `${base}${path}` : path;
}
