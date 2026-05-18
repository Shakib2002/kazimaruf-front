## Problem

`wrangler.jsonc` has a trailing comma after `"main": "src/server.ts",` which causes `ParseError: PropertyNameExpected` in strict JSON parsers (e.g. Cloudflare Pages build).

```jsonc
{
  "main": "src/server.ts",   // ← trailing comma
}
```

## Important context

This project is **TanStack Start SSR on Cloudflare Workers** (not Pages). `src/server.ts` is the legitimate Worker entry — it must stay. Removing `wrangler.jsonc` or converting to Pages would break SSR, server functions, and Supabase auth middleware.

## Fix

1. **Edit `wrangler.jsonc`** — remove the trailing comma so it parses under strict JSON:

   ```jsonc
   {
     "$schema": "node_modules/wrangler/config-schema.json",
     "name": "tanstack-start-app",
     "compatibility_date": "2025-09-24",
     "compatibility_flags": ["nodejs_compat"],
     "main": "src/server.ts"
   }
   ```

2. **Scan other JSON files** (`package.json`, `tsconfig.json`, `components.json`, `.lovable/project.json`, `supabase/config.toml` is TOML so skip) for trailing commas and fix any found.

3. **Do NOT** delete `wrangler.jsonc` or `src/server.ts` — they are required for the Workers SSR runtime this template targets.

4. **Do NOT** convert to Cloudflare Pages — Pages does not support this template's SSR setup. Deploy with `npx wrangler deploy` (Workers), or use Lovable Publish.

## What I will NOT do

- Switch to Pages config (would break SSR).
- Remove the server entry.
- Touch `src/routeTree.gen.ts` or Supabase client files.