## Deploy Error Fix: Chunk Size Warning

### Problem
The deployment is failing with a Vite chunk size warning. The default chunk size limit (500 KB) is being exceeded by one or more JavaScript bundles, causing the build to treat the warning as an error.

### Root Cause
The project imports several sizeable libraries (Recharts, Radix UI primitives, Embla Carousel, date-fns, etc.) which can produce large output chunks during the Vite build step.

### Fix
Add `build.chunkSizeWarningLimit` to the Vite configuration inside `vite.config.ts` to raise the warning threshold and allow the build to complete.

### Technical Details
Since this project uses `@lovable.dev/vite-tanstack-config`, the extra Vite options are passed via the `vite` key in `defineConfig`:

```ts
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1000, // 1000 KB = 1 MB
    },
  },
});
```

This suppresses the warning without changing the actual chunking behaviour — the app will still be split and deployed normally.

### Files to Change
- `vite.config.ts` — add the `vite.build.chunkSizeWarningLimit` option.

### Verification
After the change, run `vite build` to confirm the warning is gone and the build completes successfully.