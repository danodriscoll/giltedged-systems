# GiltEdged Systems Website

## Safer Dependency Upgrade Flow

Alternative flow to use instead of `yarn upgrade --latest` across the whole tree.

1. Create a dedicated branch for dependency work.
2. Check what is out of date:
   - `yarn deps:check`
3. Upgrade in small batches:
   - Patch/minor first: `yarn deps:upgrade:patch-minor`
   - Docusaurus packages together: `yarn deps:upgrade:docusaurus`
   - React packages together: `yarn deps:upgrade:react`
   - Optional manual selection: `yarn deps:upgrade:interactive`
4. Validate after each batch:
   - `yarn verify`
   - `yarn start --port 3001`
5. Commit each successful batch separately so regressions are easy to bisect.

## Current Compatibility Pin

`webpack` is pinned via Yarn `resolutions` to avoid a known `webpackbar` / `ProgressPlugin` schema mismatch during Docusaurus startup.
