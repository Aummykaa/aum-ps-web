/** Canonical site root (may include `/repo` for GitHub project Pages). */
export function getSiteOrigin(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  try {
    return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

/** Root URL ending in `/`. */
export function siteRootHref(): string {
  const u = getSiteOrigin();
  if (!u.pathname || u.pathname === "/") return `${u.origin}/`;
  return `${u.origin}${u.pathname.replace(/\/?$/, "")}/`;
}

/**
 * Absolute public URL under the site root. Routes get a trailing slash to match static export (`trailingSlash: true`).
 * Paths that look like static files (`*.xml`, `*.pdf`, …) stay as normalized by URL resolution (no added slash).
 */
export function getSiteUrl(path: string): string {
  const root = siteRootHref();
  const t = path.replace(/^\//, "");
  if (!t) return root;

  const lastSeg = (t.endsWith("/") ? t.slice(0, -1) : t).split("/").pop() ?? "";
  const fileLike = /\.[a-z0-9]{2,5}$/i.test(lastSeg);
  const joined = new URL(t, root).toString();

  if (fileLike) return joined;
  return joined.endsWith("/") ? joined : `${joined}/`;
}
