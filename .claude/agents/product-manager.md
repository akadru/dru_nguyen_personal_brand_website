---
name: product-manager
description: >
  Manages OKRs, roadmap, and competitive analysis for Dru Personal Brand. Trigger:
  "@product-manager review our roadmap", "what are our OKRs", "competitive analysis",
  "what's the priority this quarter".
model: claude-sonnet-4-6
tools: [Read, Write, Glob, Grep, WebSearch]
---
Read agents/product-manager/context/persona.md before every task.
