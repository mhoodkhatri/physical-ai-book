# Implementation Plan: Docusaurus Project Initialization

**Branch**: `001-docusaurus-init` | **Date**: 2026-01-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-docusaurus-init/spec.md`

## Summary

Initialize a Docusaurus 3.x project with the "classic" template to serve as the foundation for the Physical AI & Humanoid Robotics Textbook. The project will include:
- 4-module content structure matching the constitution's curriculum
- GitHub Actions CI/CD for automatic deployment to GitHub Pages
- RTL CSS variables for future Urdu translation support
- MDX component placeholders for future Personalize/Translation features
- Hardware specifications documentation for workstation and edge kit requirements

## Technical Context

**Language/Version**: Node.js 18+ (LTS), JavaScript/TypeScript for config files
**Primary Dependencies**: Docusaurus 3.x (@docusaurus/preset-classic), React 18.x
**Storage**: N/A (static site generator)
**Testing**: `npm run build` (validates MDX/config), manual sidebar verification
**Target Platform**: GitHub Pages (static hosting), modern browsers
**Project Type**: Documentation site (Docusaurus standard structure)
**Performance Goals**: N/A for initialization (static site builds in <60s)
**Constraints**: Must use Docusaurus "classic" template per constitution; GitHub Pages free tier
**Scale/Scope**: 25+ markdown placeholder files, 6 module directories, 1 GitHub Actions workflow

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Docusaurus-First Documentation | PASS | Using Docusaurus 3.x classic template |
| II. Spec-Driven Development | PASS | Following SDD workflow (/sp.specify → /sp.clarify → /sp.plan) |
| III. RAG-First Content Design | N/A | Placeholder content only; RAG out of scope for init |
| IV. Modular Content Architecture | PASS | 4-module structure matches constitution exactly |
| V. Code-Content Parity | N/A | No code examples in init phase |
| VI. Accessibility-First Design | PASS | MDX placeholders + RTL CSS variables included |
| VII. Security and Data Integrity | PASS | No secrets; GitHub Actions uses GITHUB_TOKEN |

**Stack Compliance:**

| Component | Required | Planned | Status |
|-----------|----------|---------|--------|
| Documentation | Docusaurus | Docusaurus 3.x | PASS |
| Hosting | GitHub Pages | GitHub Pages | PASS |
| Development | Claude Code + Spec-Kit Plus | Active | PASS |

**Gate Result**: PASS - No violations. Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/001-docusaurus-init/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (sidebar schema)
└── tasks.md             # Phase 2 output (/sp.tasks command)
```

### Source Code (repository root)

```text
physical-ai-book/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD workflow
├── docs/
│   ├── intro.md                 # Course overview
│   ├── module-1-ros2/
│   │   ├── index.md
│   │   ├── 01-nodes-topics.md
│   │   ├── 02-services-actions.md
│   │   ├── 03-rclpy.md
│   │   └── 04-urdf.md
│   ├── module-2-simulation/
│   │   ├── index.md
│   │   ├── 01-gazebo-basics.md
│   │   ├── 02-physics-sim.md
│   │   ├── 03-unity-integration.md
│   │   └── 04-sensors.md
│   ├── module-3-nvidia-isaac/
│   │   ├── index.md
│   │   ├── 01-isaac-sim.md
│   │   ├── 02-isaac-ros.md
│   │   ├── 03-vslam.md
│   │   └── 04-nav2.md
│   ├── module-4-vla/
│   │   ├── index.md
│   │   ├── 01-whisper.md
│   │   ├── 02-cognitive-planning.md
│   │   └── 03-capstone.md
│   ├── hardware/
│   │   ├── index.md
│   │   ├── workstation.md
│   │   └── edge-kit.md
│   └── appendix/
│       ├── index.md
│       ├── assessments.md
│       └── resources.md
├── src/
│   └── css/
│       └── custom.css           # RTL support variables
├── static/                      # Static assets (empty initially)
├── docusaurus.config.js         # Site configuration
├── sidebars.js                  # Sidebar navigation
├── package.json                 # Dependencies
└── babel.config.js              # Babel config (from template)
```

**Structure Decision**: Docusaurus standard structure with `docs/` containing curriculum content organized by module. No backend or additional projects needed for initialization phase.

## Complexity Tracking

> No constitution violations requiring justification.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
