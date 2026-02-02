# Tasks: Docusaurus Project Initialization

**Input**: Design documents from `/specs/001-docusaurus-init/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No automated tests requested. Validation via `npm run build` and manual verification per success criteria.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: Docusaurus standard structure at repository root
- `docs/` - Documentation content
- `src/css/` - Custom styles
- `.github/workflows/` - CI/CD workflows

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Docusaurus project and configure base settings

- [ ] T001 Initialize Docusaurus 3.x project with classic template using `npx create-docusaurus@latest . classic`
- [ ] T002 Configure `docusaurus.config.js` with title "Physical AI & Humanoid Robotics", GitHub Pages settings (url: `https://hood.github.io`, baseUrl: `/physical-ai-book/`, organizationName: `hood`, projectName: `physical-ai-book`) per contracts/docusaurus-config-contract.js
- [ ] T003 [P] Disable blog in `docusaurus.config.js` preset configuration
- [ ] T004 [P] Configure docs to serve at root path (`routeBasePath: '/'`) in `docusaurus.config.js`
- [ ] T005 Create GitHub Actions workflow at `.github/workflows/deploy.yml` per contracts/deploy-workflow-contract.yml

**Checkpoint**: Docusaurus project initialized with correct configuration. `npm run build` should pass (may have placeholder content warnings).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create directory structure that ALL user stories depend on

**CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create directory `docs/module-1-ros2/`
- [ ] T007 [P] Create directory `docs/module-2-simulation/`
- [ ] T008 [P] Create directory `docs/module-3-nvidia-isaac/`
- [ ] T009 [P] Create directory `docs/module-4-vla/`
- [ ] T010 [P] Create directory `docs/hardware/`
- [ ] T011 [P] Create directory `docs/appendix/`
- [ ] T012 Remove default Docusaurus tutorial content from `docs/` folder (tutorial-basics/, tutorial-extras/, intro.md replacement needed)

**Checkpoint**: Foundation ready - directory structure exists for all modules. User story implementation can now begin.

---

## Phase 3: User Story 1 - Browse Textbook Structure (Priority: P1) MVP

**Goal**: Students and instructors can navigate through all four modules using a well-organized sidebar with complete course structure.

**Independent Test**: Deploy site and verify all sidebar links work and display correct module hierarchy. Run `npm run start` and manually verify sidebar.

### Implementation for User Story 1

#### Core Introduction Page
- [ ] T013 [US1] Create `docs/intro.md` with course overview, title "Physical AI & Humanoid Robotics", MDX placeholders, and sidebar_position: 0

#### Module 1: ROS 2 Content Structure
- [ ] T014 [P] [US1] Create `docs/module-1-ros2/index.md` with module overview, MDX placeholders, sidebar_position: 0
- [ ] T015 [P] [US1] Create `docs/module-1-ros2/01-nodes-topics.md` with topic placeholder, MDX placeholders, sidebar_position: 1
- [ ] T016 [P] [US1] Create `docs/module-1-ros2/02-services-actions.md` with topic placeholder, MDX placeholders, sidebar_position: 2
- [ ] T017 [P] [US1] Create `docs/module-1-ros2/03-rclpy.md` with topic placeholder, MDX placeholders, sidebar_position: 3
- [ ] T018 [P] [US1] Create `docs/module-1-ros2/04-urdf.md` with topic placeholder, MDX placeholders, sidebar_position: 4

#### Module 2: Simulation Content Structure
- [ ] T019 [P] [US1] Create `docs/module-2-simulation/index.md` with module overview, MDX placeholders, sidebar_position: 0
- [ ] T020 [P] [US1] Create `docs/module-2-simulation/01-gazebo-basics.md` with topic placeholder, MDX placeholders, sidebar_position: 1
- [ ] T021 [P] [US1] Create `docs/module-2-simulation/02-physics-sim.md` with topic placeholder, MDX placeholders, sidebar_position: 2
- [ ] T022 [P] [US1] Create `docs/module-2-simulation/03-unity-integration.md` with topic placeholder, MDX placeholders, sidebar_position: 3
- [ ] T023 [P] [US1] Create `docs/module-2-simulation/04-sensors.md` with topic placeholder, MDX placeholders, sidebar_position: 4

#### Module 3: NVIDIA Isaac Content Structure
- [ ] T024 [P] [US1] Create `docs/module-3-nvidia-isaac/index.md` with module overview, MDX placeholders, sidebar_position: 0
- [ ] T025 [P] [US1] Create `docs/module-3-nvidia-isaac/01-isaac-sim.md` with topic placeholder, MDX placeholders, sidebar_position: 1
- [ ] T026 [P] [US1] Create `docs/module-3-nvidia-isaac/02-isaac-ros.md` with topic placeholder, MDX placeholders, sidebar_position: 2
- [ ] T027 [P] [US1] Create `docs/module-3-nvidia-isaac/03-vslam.md` with topic placeholder, MDX placeholders, sidebar_position: 3
- [ ] T028 [P] [US1] Create `docs/module-3-nvidia-isaac/04-nav2.md` with topic placeholder, MDX placeholders, sidebar_position: 4

#### Module 4: VLA Content Structure
- [ ] T029 [P] [US1] Create `docs/module-4-vla/index.md` with module overview, MDX placeholders, sidebar_position: 0
- [ ] T030 [P] [US1] Create `docs/module-4-vla/01-whisper.md` with topic placeholder, MDX placeholders, sidebar_position: 1
- [ ] T031 [P] [US1] Create `docs/module-4-vla/02-cognitive-planning.md` with topic placeholder, MDX placeholders, sidebar_position: 2
- [ ] T032 [P] [US1] Create `docs/module-4-vla/03-capstone.md` with topic placeholder, MDX placeholders, sidebar_position: 3

#### Appendix Content Structure
- [ ] T033 [P] [US1] Create `docs/appendix/index.md` with appendix overview, MDX placeholders, sidebar_position: 0
- [ ] T034 [P] [US1] Create `docs/appendix/assessments.md` with assessments placeholder, MDX placeholders, sidebar_position: 1
- [ ] T035 [P] [US1] Create `docs/appendix/resources.md` with resources placeholder, MDX placeholders, sidebar_position: 2

#### Sidebar Configuration
- [ ] T036 [US1] Configure `sidebars.js` with all 4 modules, hardware, and appendix categories per contracts/sidebars-example.js

**Checkpoint**: User Story 1 complete. All 4 modules visible in sidebar, all links navigate correctly. Run `npm run build` and `npm run start` to verify SC-001, SC-002, SC-003, SC-004.

---

## Phase 4: User Story 2 - View Hardware Specifications (Priority: P2)

**Goal**: Students can access Hardware Specifications section with workstation (RTX 4070 Ti+) and edge kit (Jetson Orin Nano) requirements.

**Independent Test**: Navigate to Hardware Specifications in sidebar and verify both workstation and edge kit pages load with correct hardware specifications.

### Implementation for User Story 2

- [ ] T037 [P] [US2] Create `docs/hardware/index.md` with hardware overview, MDX placeholders, links to workstation and edge-kit, sidebar_position: 0
- [ ] T038 [P] [US2] Create `docs/hardware/workstation.md` with "Digital Twin Workstation" specs (RTX 4070 Ti+ GPU 16GB VRAM, 32GB RAM, CUDA 12.x, Ubuntu 22.04 LTS or Windows 11), MDX placeholders, sidebar_position: 1
- [ ] T039 [US2] Create `docs/hardware/edge-kit.md` with "Physical AI Edge Kit" specs (Jetson Orin Nano Developer Kit, 8GB unified memory, NVMe SSD, 15W power), MDX placeholders, sidebar_position: 2

**Checkpoint**: User Story 2 complete. Hardware Specifications section accessible with correct specs. Verify FR-010 compliance.

---

## Phase 5: User Story 3 - Content Accessibility Preparation (Priority: P3)

**Goal**: All generated markdown files contain MDX JSX comment placeholders for future Personalize and UrduTranslation components.

**Independent Test**: Open any generated .md file and verify presence of `{/* <Personalize /> */}` and `{/* <UrduTranslation /> */}` placeholders at top of content.

### Implementation for User Story 3

- [ ] T040 [US3] Audit all 25+ markdown files in `docs/` to verify MDX placeholders `{/* <Personalize /> */}` and `{/* <UrduTranslation /> */}` are present after frontmatter
- [ ] T041 [US3] Verify `npm run build` succeeds with all MDX placeholders (they should be valid JSX comments)

**Checkpoint**: User Story 3 complete. SC-005 verified - every markdown file contains MDX component placeholder comments.

---

## Phase 6: User Story 4 - RTL Language Support Foundation (Priority: P3)

**Goal**: Developers implementing Urdu translation find CSS custom properties already configured for RTL text direction support.

**Independent Test**: Inspect `src/css/custom.css` for RTL-related variables (`--ifm-direction`, `--ifm-text-align`, `--ifm-font-family-rtl`).

### Implementation for User Story 4

- [ ] T042 [US4] Update `src/css/custom.css` to add RTL support CSS variables: `:root { --ifm-direction: ltr; --ifm-text-align: left; --ifm-font-family-rtl: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif; }` and `[dir='rtl']` selector overrides per research.md

**Checkpoint**: User Story 4 complete. SC-006 verified - custom CSS contains RTL support variables.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and validation across all user stories

- [ ] T043 Run `npm run build` and verify build completes without errors (SC-001)
- [ ] T044 Run `npm run start` and verify dev server launches at localhost (SC-002)
- [ ] T045 Manually verify sidebar displays all 4 modules with correct hierarchy (SC-003)
- [ ] T046 Count and verify 25+ placeholder markdown files created (SC-004)
- [ ] T047 Verify `docusaurus.config.js` contains correct title, URL, baseUrl, organizationName, projectName (SC-007)
- [ ] T048 Verify `.github/workflows/deploy.yml` exists with correct workflow structure (SC-008)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - US1 (P1): Can start after Phase 2
  - US2 (P2): Can start after Phase 2 (parallel with US1)
  - US3 (P3): Depends on US1 and US2 completion (audits their files)
  - US4 (P3): Can start after Phase 2 (parallel with US1, US2)
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Parallel with US1
- **User Story 3 (P3)**: Must wait for US1 and US2 completion (audits created files)
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - Parallel with US1, US2

### Within Each User Story

- Index files before topic files (for internal links)
- All topic files within a module can be created in parallel
- Sidebar configuration after all content files exist

### Parallel Opportunities

- T003, T004 can run in parallel (different config sections)
- T006-T011 can all run in parallel (independent directories)
- T014-T035 can all run in parallel (different files)
- T037-T038 can run in parallel (different hardware pages)
- US1, US2, US4 can run in parallel after Phase 2

---

## Parallel Example: User Story 1 Module Content

```bash
# Launch all Module 1 topic pages together:
Task: "Create docs/module-1-ros2/01-nodes-topics.md"
Task: "Create docs/module-1-ros2/02-services-actions.md"
Task: "Create docs/module-1-ros2/03-rclpy.md"
Task: "Create docs/module-1-ros2/04-urdf.md"

# Launch all module index pages together:
Task: "Create docs/module-1-ros2/index.md"
Task: "Create docs/module-2-simulation/index.md"
Task: "Create docs/module-3-nvidia-isaac/index.md"
Task: "Create docs/module-4-vla/index.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (Docusaurus init + config)
2. Complete Phase 2: Foundational (directory structure)
3. Complete Phase 3: User Story 1 (all 4 modules + sidebar)
4. **STOP and VALIDATE**: Run `npm run build` and `npm run start`
5. Deploy/demo if ready - basic textbook navigation works

### Incremental Delivery

1. Complete Setup + Foundational -> Foundation ready
2. Add User Story 1 -> Test independently -> Demo (MVP!)
3. Add User Story 2 -> Hardware section added -> Demo
4. Add User Story 3 -> Verify MDX placeholders -> Audit complete
5. Add User Story 4 -> RTL CSS foundation -> Ready for i18n
6. Complete Phase 7 -> Full validation -> Production ready

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Module 1-2 content)
   - Developer B: User Story 1 (Module 3-4 content) + User Story 2
   - Developer C: User Story 4 (RTL CSS)
3. Developer A or B: User Story 3 (audit after US1/US2 complete)
4. All: Phase 7 verification

---

## Summary

| Category | Count |
|----------|-------|
| **Total Tasks** | 48 |
| **Phase 1 (Setup)** | 5 |
| **Phase 2 (Foundational)** | 7 |
| **Phase 3 (US1)** | 24 |
| **Phase 4 (US2)** | 3 |
| **Phase 5 (US3)** | 2 |
| **Phase 6 (US4)** | 1 |
| **Phase 7 (Polish)** | 6 |
| **Parallel Opportunities** | 30+ tasks marked [P] |

**MVP Scope**: Phases 1-3 (User Story 1) = 36 tasks
**Full Scope**: All 48 tasks

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- MDX placeholders format: `{/* <Personalize /> */}` and `{/* <UrduTranslation /> */}`
- All markdown files must have frontmatter with at least `title` and `sidebar_position`
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
