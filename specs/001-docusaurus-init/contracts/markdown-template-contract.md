# Markdown Template Contract

This file defines the expected structure for all markdown content files per spec requirements FR-007.

## Topic Page Template

```mdx
---
title: "[Topic Title]"
sidebar_position: [N]
description: "[Brief description for SEO]"
keywords: [keyword1, keyword2, keyword3]
---

{/* <Personalize /> */}
{/* <UrduTranslation /> */}

# [Topic Title]

[Placeholder content describing the topic]

## Learning Objectives

- Objective 1
- Objective 2
- Objective 3

## Prerequisites

- Prerequisite 1
- Prerequisite 2

## Content

[Main content placeholder]

## Summary

[Summary placeholder]

## Next Steps

[Link to next topic]
```

## Module Index Template

```mdx
---
title: "[Module Title]"
sidebar_position: 0
description: "[Module overview for SEO]"
---

{/* <Personalize /> */}
{/* <UrduTranslation /> */}

# [Module Title]

[Module overview placeholder]

## Topics in This Module

1. [Topic 1](./01-topic-name.md) - Brief description
2. [Topic 2](./02-topic-name.md) - Brief description
3. [Topic 3](./03-topic-name.md) - Brief description

## Learning Outcomes

By the end of this module, you will be able to:

- Outcome 1
- Outcome 2
- Outcome 3
```

## Hardware Specification Template

```mdx
---
title: "[Hardware Name]"
sidebar_position: [N]
description: "[Hardware description for SEO]"
---

{/* <Personalize /> */}
{/* <UrduTranslation /> */}

# [Hardware Name]

[Brief overview]

## Required Specifications

| Component | Specification |
|-----------|---------------|
| [Component 1] | [Spec] |
| [Component 2] | [Spec] |

## Setup Instructions

[Placeholder for setup guide]

## Compatibility Notes

[Placeholder for compatibility information]
```

## Validation Rules

1. Every file MUST have frontmatter with at least `title`
2. Every file MUST include both MDX comment placeholders immediately after frontmatter
3. Placeholders MUST be in exact format: `{/* <ComponentName /> */}`
4. Files MUST be valid MDX (no broken JSX)
5. Files MUST pass `npm run build` without errors
