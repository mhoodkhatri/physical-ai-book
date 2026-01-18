---
id: 001
title: Hackathon Constitution Setup
stage: constitution
date: 2025-01-18
surface: agent
model: claude-opus-4-5-20251101
feature: none
branch: master
user: hackathon-participant
command: /sp.constitution
labels: ["constitution", "hackathon", "physical-ai", "setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - history/prompts/constitution/001-hackathon-constitution-setup.constitution.prompt.md
tests:
  - N/A (constitution document, no tests)
---

## Prompt

# HACKATHON CONSTITUTION: PHYSICAL AI & HUMANOID ROBOTICS TEXTBOOK

You are an expert technical author and full-stack AI engineer. Your mission is to build an AI-native textbook and ecosystem based on the Panaversity Hackathon requirements.

## 1. CORE MISSION
Create a Docusaurus-based technical textbook teaching "Physical AI & Humanoid Robotics" that bridges the gap between digital brains and physical bodies.

## 2. TECHNICAL STACK CONSTRAINTS
- **Documentation:** Docusaurus deployed to GitHub Pages.
- **Backend:** FastAPI with Neon Serverless Postgres.
- **Database/Vector:** Qdrant Cloud (Free Tier) for RAG.
- **SDKs:** OpenAI Agents / ChatKit SDKs.
- **Auth:** Better-Auth (with background-based personalization).
- **Automation:** Use Claude Code Subagents and Agent Skills for "Reusable Intelligence."

## 3. CONTENT ARCHITECTURE (Strict Adherence)
The book must cover the 4-Module structure:
- **Module 1: The Robotic Nervous System (ROS 2):** Nodes, Topics, URDF, rclpy.
- **Module 2: The Digital Twin (Gazebo & Unity):** Physics, LiDAR, IMUs, Depth Cameras.
- **Module 3: The AI-Robot Brain (NVIDIA Isaac):** Isaac Sim, Isaac ROS, VSLAM, Nav2.
- **Module 4: Vision-Language-Action (VLA):** OpenAI Whisper, LLM cognitive planning, and the Autonomous Humanoid Capstone.

## 4. FUNCTIONAL REQUIREMENTS (Bonus Points Focus)
- **RAG Chatbot:** Must answer questions based on the book and support user-selected text context.
- **Personalization:** At signup, capture user software/hardware background. Implement a "Personalize" button at the start of each chapter to adjust content difficulty/context based on that profile.
- **Translation:** Implement an "Urdu" translation button at the start of each chapter.
- **Hardware Guidance:** Detail the "Digital Twin" Workstation (RTX 4070 Ti+) and the "Edge Kit" (Jetson Orin Nano).

## 5. STYLE & TONE
- **Tone:** Technical, encouraging, and startup-oriented.
- **Formatting:** Use clear hierarchies, bold key terms, and integrate code snippets for ROS 2 and Python agents.
- **Vision:** Emphasize the partnership between people, intelligent agents, and robots.

## Response snapshot

Created the project constitution v1.0.0 for the Physical AI & Humanoid Robotics Textbook hackathon project. The constitution establishes:

**7 Core Principles:**
1. Docusaurus-First Documentation
2. Spec-Driven Development (SDD)
3. RAG-First Content Design
4. Modular Content Architecture (4 Modules)
5. Code-Content Parity
6. Accessibility-First Design
7. Security and Data Integrity

**Key Sections:**
- Technical Stack Constraints (mandatory tech stack table)
- Content Architecture (full book structure with file paths)
- Bonus Features Requirements (RAG, Auth, Personalization, Translation)
- Development Workflow (SDD process + quality gates)
- Governance (amendment process, compliance, ADR triggers)

**Templates Validated:** plan-template.md, spec-template.md, tasks-template.md - all compatible, no updates needed.

## Outcome

- ✅ Impact: Established foundational governance document for hackathon project
- 🧪 Tests: N/A (constitution document)
- 📁 Files: 1 created (.specify/memory/constitution.md)
- 🔁 Next prompts: /sp.specify for first feature (likely Docusaurus setup or RAG chatbot)
- 🧠 Reflection: Constitution successfully captures all hackathon requirements and translates them into actionable principles

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): Standard /sp.constitution with hackathon context
- Next experiment (smallest change to try): Monitor constitution adherence during feature implementation
