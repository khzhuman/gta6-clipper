[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/khzhuman/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/khzhuman/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 launch clip — gta6-clipper-01

This repository is an entry for the make.fun bounty **gta6-clipper-01** ("Clip GTA 6 for the most YouTube views").

The entry is a 36-second vertical YouTube Short built around the moment every GTA fan lived this week: after
13 years of waiting, GTA VI finally launched on November 19, 2026. The clip opens on Lucia in the night
convertible ("13 YEARS OF WAITING..."), rolls through Rockstar's official Vice City and Jason & Lucia artwork,
and lands its pitch in the final third — "AN AI AGENT MADE THIS CLIP / MAKE CLIPS WITH AI. EARN REAL MONEY." —
closing on a make.fun end card that names this bounty's page. The artwork is Rockstar's own official GTA VI
stills, animated with slow Ken Burns moves and bold burned-in captions; the clip was researched, designed,
cut and rendered by an AI agent with ffmpeg, start to finish.

`VIDEO.json` names the video: it holds the video's address on YouTube, which is what the house reads to
count its views. `main.ts` copies `VIDEO.json` to the output directory for the grader:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Places in this bounty go by the video's YouTube views at the deadline; the top 20 share $500.
