---
title: A space of my own
description: A personal website that connects a simple link hub to a growing collection of project stories.
status: current
year: 2026
category: Personal website
role: Design and development
technologies: [Astro, TypeScript, Markdown]
image: ../../assets/projects/personal-space.svg
imageAlt: Abstract website layout with a profile card, project cards, and orange details.
order: 2
sample: true
---

## Overview

This example describes a personal site with two layers: a quick entry point for links and a deeper home for project stories. Replace the sample narrative with your own goals and design decisions.

## Approach

The landing page stays focused on quick navigation. The portfolio provides context: what each project does, how it was built, and what was learned.

## Implementation

A Markdown file supplies the title, summary, technologies, and case-study text. One shared template turns each file into a page, and the project listing reads from the same collection.

Local project images live next to the source code. Astro processes them during the build, and the site publishes static pages through the existing Git workflow.

## Outcome

The intended result is a site that is easy to maintain. Adding work means writing another entry, instead of designing and wiring up another page.
