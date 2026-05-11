import type { NextConfig } from "next";

/** Match `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy-pages.yml` and local preview. */
function readBasePath(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!raw || raw === "/") return undefined;
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  const normalized = withSlash.replace(/\/$/, "");
  return normalized === "" ? undefined : normalized;
}

const basePath = readBasePath();

const nextConfig: NextConfig = {
  /** GitHub Actions serves `./out`; also works for any static CDN. */
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
  ...(basePath ? { basePath } : {}),
  images: {
    /** Required for static export (`output: "export"`). */
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
