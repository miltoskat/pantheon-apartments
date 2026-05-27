/* Prefix a `/public/` asset path with Astro's BASE_URL so it works whether
 * the site is deployed at the root (custom domain or user-site) or under a
 * subpath (project-site like `<user>.github.io/<repo>/`). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const tail = path.startsWith("/") ? path : `/${path}`;
  return `${base}${tail}`;
}
