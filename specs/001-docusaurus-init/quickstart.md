# Quickstart: Docusaurus Project Initialization

**Feature**: 001-docusaurus-init
**Date**: 2026-01-18

## Prerequisites

Before implementing this feature, ensure you have:

- [ ] Node.js 18+ LTS installed (`node --version`)
- [ ] npm 9+ installed (`npm --version`)
- [ ] Git configured with push access to the repository
- [ ] GitHub repository created at `hood/physical-ai-book`
- [ ] GitHub Pages enabled in repository settings (Settings > Pages > Source: GitHub Actions)

## Implementation Steps Overview

### Step 1: Initialize Docusaurus Project

```bash
# From repository root
npx create-docusaurus@latest . classic --typescript

# Or if directory exists with specs:
# Initialize in temp, then copy files
```

**Expected Output**: Standard Docusaurus classic template files created.

### Step 2: Configure docusaurus.config.js

Update the configuration per `contracts/docusaurus-config-contract.js`:

- Set title: "Physical AI & Humanoid Robotics"
- Set url: "https://hood.github.io"
- Set baseUrl: "/physical-ai-book/"
- Set organizationName: "hood"
- Set projectName: "physical-ai-book"
- Disable blog
- Configure docs at root

### Step 3: Create Directory Structure

Create all directories per spec:

```bash
mkdir -p docs/module-1-ros2
mkdir -p docs/module-2-simulation
mkdir -p docs/module-3-nvidia-isaac
mkdir -p docs/module-4-vla
mkdir -p docs/hardware
mkdir -p docs/appendix
```

### Step 4: Create Placeholder Content Files

For each directory, create:
- `index.md` with module overview
- Topic files (01-*.md, 02-*.md, etc.)

Each file MUST include:
```mdx
---
title: "Topic Title"
sidebar_position: N
---

{/* <Personalize /> */}
{/* <UrduTranslation /> */}

# Topic Title

[Placeholder content]
```

### Step 5: Configure Sidebar

Create/update `sidebars.js` per `contracts/sidebars-example.js`.

### Step 6: Add RTL CSS Variables

Create/update `src/css/custom.css`:

```css
:root {
  --ifm-direction: ltr;
  --ifm-text-align: left;
  --ifm-font-family-rtl: 'Noto Nastaliq Urdu', serif;
}

[dir='rtl'] {
  --ifm-direction: rtl;
  --ifm-text-align: right;
}
```

### Step 7: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml` per `contracts/deploy-workflow-contract.yml`.

### Step 8: Verify Build

```bash
npm run build
```

**Expected**: Build completes without errors.

### Step 9: Test Locally

```bash
npm run start
```

**Expected**: Site accessible at http://localhost:3000/physical-ai-book/

## Verification Checklist

After implementation, verify:

- [ ] `npm run build` passes (SC-001)
- [ ] `npm run start` works (SC-002)
- [ ] Sidebar shows all 4 modules (SC-003)
- [ ] All 25+ markdown files exist (SC-004)
- [ ] Every markdown file has MDX placeholders (SC-005)
- [ ] custom.css has RTL variables (SC-006)
- [ ] docusaurus.config.js has correct settings (SC-007)
- [ ] deploy.yml workflow exists (SC-008)

## Common Issues

### Build Fails on MDX

- Check for unmatched JSX tags
- Ensure placeholders use `{/* */}` not `<!-- -->`

### Sidebar Not Showing

- Verify `sidebars.js` export syntax (use `export default`)
- Check all referenced doc IDs exist

### GitHub Pages 404

- Ensure `baseUrl` matches repository name
- Check GitHub Pages is enabled with "GitHub Actions" source
- Verify workflow has correct permissions

## Next Steps

After completing implementation:

1. Run `/sp.tasks` to generate task list
2. Run `/sp.implement` to execute tasks
3. Commit and push to main branch
4. Verify GitHub Actions deploys successfully
