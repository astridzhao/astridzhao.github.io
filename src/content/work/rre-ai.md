---
title: "RRE.ai · Agentic Error Diagnostics"
publishDate: 2026-10-01
img: /assets/project-agentic.svg
img_alt: "Abstract diagram of collaborating AI agents and a human reviewer"
description: "Multi-agent regulatory error investigation and repair recommendations with engineer review."
tags:
  - Semantic Kernel
  - Multi-agent AI
  - RAG
  - Human-in-the-loop
---

## From an engineering bottleneck to an AI workflow

Investigating rejected trade reports can require searching complex regulatory specifications, identifying which business rules apply, and inspecting the underlying data. I initiated RRE.ai to help engineers work through this process more efficiently.

I designed a multi-agent architecture that brings together specification retrieval, contextual investigation, and proposed SQL repair steps. **Engineers review each recommendation before any repair is applied.**

## Learning from failure

Early retrieval results confused similar language across different event types. Rather than relying on a stronger embedding model alone, I redesigned how the specification was represented and retrieved so the relevant business context traveled with each rule.

In an internal evaluation, diagnostic accuracy improved from approximately **60% to 95%**. The result also raised a deeper engineering question: what evidence should an individual AI recommendation provide to help a human decide whether to trust it?

*This overview intentionally excludes confidential implementation details, proprietary data, and production architecture.*
