const fs = require("fs");

const payload = JSON.parse(process.argv[2]);

const now = new Date();
const date = now.toISOString().split("T")[0];
const slug = `${date}-strava-${payload.object_id}.md`;

const content = `---
layout: post
title: "Nuova attività Strava"
date: ${now.toISOString()}
categories: [sport]
tags: [strava]
---

## Nuova attività registrata

- Activity ID: ${payload.object_id}
- Type: ${payload.aspect_type}

[Apri Strava](https://www.strava.com/activities/${payload.object_id})
`;

fs.writeFileSync(`_posts/${slug}`, content);
console.log("Post creato:", slug);
