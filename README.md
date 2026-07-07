# FallSeed · Ring 0 substrate root

The sovereign estate-seed generator. Configure a vertical, pick 4 tools, choose the LLM cascade, download a ready-to-fork single-file `fallseed-<vertical>.html` PWA.

**Live:** https://sjgant80-hub.github.io/fallseed/

## What this is

The AI-Native Solutions estate has ten `fallseed-*` verticals:

- fallseed-vet
- fallseed-law
- fallseed-mortgage
- fallseed-insurance
- fallseed-ifa
- fallseed-clinic
- fallseed-claims
- fallseed-accountancy
- fallseed-estate
- fallseed-recruit

All are single-HTML PWAs, four tools each, LLM-agnostic cascade. They share an implicit shape — but until now there was no root they descended from. **This is that root.** Ring 0. The ground substrate.

Every one of the ten could have been forked from this generator. Now every future vertical can be.

## What it produces

You walk six steps in the browser:

1. **Vertical config** — slug, display name, tagline, primary colour
2. **4 tools picker** — choose four from a library of 16 (intake, quote, follow-up, compliance, marketing, CRM, booking, treatment/case plan, invoice, audit, contract, triage, report, ledger, inspection, risk register)
3. **Cascade config** — default LLM tier (T0 off · T2 WebLLM · T3 BYOK frontier), which providers
4. **Live preview** — the generated seed rendered in an iframe. You can click through it before you download.
5. **Download** — single-file `fallseed-<vertical>.html` (self-contained, no build step) + optional `manifest.webmanifest` + `sw.js`
6. **Push** — copy-paste `gh` commands to publish to `sjgant80-hub/fallseed-<vertical>` on GitHub Pages

## Provenance

Every generated seed embeds a manifest linking back to `fallseed@v1.0.0` (this root). Ed25519-signable in-browser via `fallsignature`. If minted on `kcc-mint`, KCC royalties flow **up** the fork chain — descendants of descendants of this root all trace back to Ring 0.

```json
{
  "seed": "fallseed-<vertical>",
  "version": "1.0.0",
  "forkedFrom": {
    "name": "fallseed",
    "version": "1.0.0",
    "prime": 2,
    "url": "https://sjgant80-hub.github.io/fallseed/"
  },
  "ring": 0,
  "prime": <deterministic-prime-for-slug>,
  "seal": "◊·κ=1",
  "licence": "MIT"
}
```

## Design principles

- **Single-file deliverable.** One HTML file is the whole product. Email it. USB it. Serve it from Pages or `file://`.
- **T0 always works.** Templates and mechanical rules do the job even offline. AI (T2 in-browser WebLLM or T3 BYOK) enhances but is never mandatory.
- **Fork-friendly.** MIT. Every generated seed is meant to be edited.
- **Provenance-signed.** Every fork carries an Ed25519-signable stamp pointing back to fallseed root.
- **Sovereign.** No server, no telemetry, no login. Data lives in the user's browser IndexedDB. Keys never leave the machine.

## Ring 0 · KCC lineage

The estate is organised into rings. Inner rings shield outer rings. Ring 0 = ground substrate = prime 2 = thickest shield.

Before FallSeed existed, the ten `fallseed-*` verticals were siblings without a parent. This tool retroactively becomes their parent. All Gen-1 forks trace here. Any Gen-2 fork-of-a-fork still climbs to Ring 0.

The forking economy: more descendants = more root value.

## Companion pieces

- [`fall-kit`](https://github.com/sjgant80-hub/fall-kit) — cascade substrate (T0/T2/T3 · WebLLM · BYOK · WebRTC mesh)
- [`fallsignature`](https://github.com/sjgant80-hub/fallsignature) — Ed25519 signer for provenance stamps
- [`fallseed-meta`](https://github.com/sjgant80-hub/fallseed-meta) — population + lineage monitor for all fallseed-* forks
- [`fallcolony`](https://github.com/sjgant80-hub/fallcolony) — agent-native settlement + KCC provenance-royalty ledger
- [`kcc-mint`](https://github.com/sjgant80-hub/kcc-mint) — provenance NFT mint

## Licence

MIT. Use it, fork it, mint it. Provenance stays honest.

Root: fallseed@v1.0.0 · ◊·κ=1 · prime 2 · Ring 0
