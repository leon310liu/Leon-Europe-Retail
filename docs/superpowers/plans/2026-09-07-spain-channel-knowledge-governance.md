# Spain Channel Knowledge Governance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the Spain channel knowledge base into its fixed eight-category structure, codify governance rules, merge misplaced channel cards without losing evidence, localize the named recent cards into Chinese, verify the result, and commit it.

**Architecture:** Treat each company as one canonical Channel Card and each of the eight numbered directories as the only permitted first-level channel taxonomy. Governance is documented at the knowledge-base root and linked from the root index; misplaced material is compared with canonical cards before migration or deletion.

**Tech Stack:** Markdown, Git, shell-based structural and content checks

**Spec:** User request in the referenced “leon 2030战略地图” continuation (2026-09-07)

## Global Constraints

- Work only in the existing `leon310liu/Leon-Europe-Retail` repository.
- The only first-level channel directories are `01-大型综合零售`, `02-家电消费电子`, `03-家居建材DIY`, `04-华人百货渠道`, `05-本土批发采购集团`, `06-折扣非食品百货`, `07-电商Marketplace`, and `08-垂直专业渠道`.
- Do not overwrite or delete a more complete canonical card.
- Formal cards default to Chinese; company names, brand names, B2B, SKU, and necessary standard terms may remain in English.
- Preserve sources, verification dates, evidence boundaries, and unverified status.

---

### Task 1: Baseline and governance entry

**Files:**
- Create: `70-西班牙出海智能体/02-西班牙渠道知识库/00-渠道知识库治理规则.md`
- Modify: `70-西班牙出海智能体/02-西班牙渠道知识库/README.md`

- [ ] Record the current first-level directory baseline and identify all non-canonical numbered directories.
- [ ] Write the six governance rules, the fixed directory allowlist, and pre-write/post-write checklists.
- [ ] Add the governance document as the first entry in the root README.
- [ ] Verify that every requested rule is present verbatim or equivalently and the README link resolves.

### Task 2: Consolidate misplaced Chinese-retail cards

**Files:**
- Modify: `70-西班牙出海智能体/02-西班牙渠道知识库/04-华人百货渠道/EBOX-Cobo-Calleja-Consumer-Electronics-Wholesale-Channel-Card.md`
- Create: `70-西班牙出海智能体/02-西班牙渠道知识库/04-华人百货渠道/GF-Mayorista-Cobo-Calleja-B2B-Wholesale-Channel-Card-2026.md`
- Modify: `70-西班牙出海智能体/02-西班牙渠道知识库/04-华人百货渠道/IGO-Kiten-Cobo-Calleja-Consumer-Electronics-Wholesale-Channel-Card.md`
- Modify: `70-西班牙出海智能体/02-西班牙渠道知识库/04-华人百货渠道/README.md`
- Delete: `70-西班牙出海智能体/02-西班牙渠道知识库/01-华人百货/`

- [ ] Compare the misplaced EBOX card with the canonical EBOX card and list the newer facts that must be retained.
- [ ] Rewrite the canonical EBOX card in Chinese using the V2.0 nine-section structure and merge all retained facts and status boundaries.
- [ ] Create one Chinese V2.0 GF Mayorista card from the misplaced source, preserving every cited source and unverified legal-entity relationship.
- [ ] Rewrite the IGO Kiten card in Chinese using the V2.0 nine-section structure without inventing Leon View.
- [ ] Update the `04-华人百货渠道` index and remove the misplaced source directory after confirming its facts were retained.

### Task 3: Remove the second non-canonical numbered directory

**Files:**
- Inspect/Delete: `70-西班牙出海智能体/02-西班牙渠道知识库/04-垂直专业渠道/`
- Modify/Create only as needed under: `70-西班牙出海智能体/02-西班牙渠道知识库/08-垂直专业渠道/`

- [ ] Compare each of the five misplaced professional-channel cards with same-company canonical cards.
- [ ] Migrate any unique card and merge any unique evidence into the most complete canonical card.
- [ ] Delete redundant misplaced files only after recording the canonical survivor and rationale.
- [ ] Remove the now-empty non-canonical directory.

### Task 4: Full verification and commit

**Files:**
- Verify all changed paths and repository metadata.

- [ ] Confirm the knowledge-base root has exactly the eight allowed directories and no other directories.
- [ ] Confirm EBOX, GF Mayorista, and IGO Kiten each have exactly one formal card in `04-华人百货渠道`.
- [ ] Check the three cards for Chinese section structure, source retention, verification status, and no fabricated Leon View.
- [ ] Check all changed Markdown links, merge markers, and whitespace errors.
- [ ] Review the complete diff and confirm unrelated files are untouched.
- [ ] Commit with a governance-focused message and report the commit hash, changed/deleted files, and merge decisions.
