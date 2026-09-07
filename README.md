# World Martial Arts Investigative Archives

A public, source-conscious research archive for investigating martial arts history, lineages, forms, movement concepts, terminology, and cross-tradition comparisons.

## Live Archive

The repository contains a lightweight public web application designed to be deployed directly from GitHub. The initial archive includes searchable research areas for Sanchin / Sam Chien, Uechi-Ryū lineage research, Southern White Crane comparisons, three-forward/three-back movement concepts, wauke/circular receiving, and a source-and-claim register.

## Research Standard

The project keeps four things visibly distinct:

1. **Documented evidence** — material supported directly by identifiable sources.
2. **Practitioner testimony** — personal, lineage, or oral-history accounts attributed to their source.
3. **Comparative analysis** — observed similarities and differences that do not by themselves establish common origin.
4. **Working inquiry** — hypotheses and open questions awaiting stronger evidence.

The guiding process is: **Receive it. Examine it. Experience it. Question it. Cultivate understanding.**

## Project Files

```text
world-martial-arts-investigative-archives/
├── index.html       # Public archive interface
├── styles.css       # Responsive visual design
├── app.js           # Searchable archive index
├── README.md        # Project overview and workflow
├── CONTRIBUTING.md  # Contribution guidance
├── SETUP.md         # Local setup notes
├── LICENSE          # MIT License
└── .gitignore
```

## Git-Based Update Workflow

The `main` branch is the authoritative public version. Changes committed to GitHub create a permanent revision history. Research additions should identify whether they are documented, comparative, testimony, or working inquiry before publication.

Recommended workflow:

```bash
git pull
git checkout -b research/topic-name
# make and review changes
git add .
git commit -m "Add research on topic name"
git push -u origin research/topic-name
```

For direct maintenance through the connected GitHub workflow, reviewed changes can also be committed to `main` when appropriate.

## Deployment

A Netlify project named `world-martial-arts-investigative-archives` exists for the public application. The web application is intentionally static so it can be deployed without a database, API keys, or private user information.

## Contribution Principles

Contributions should preserve historical context, cite sources where possible, distinguish fact from interpretation, avoid presenting movement similarity as automatic proof of lineage, and leave unresolved questions open rather than forcing certainty.

See [CONTRIBUTING.md](CONTRIBUTING.md) for additional guidance.

## License

This repository is released under the [MIT License](LICENSE).

## Maintainer

Repository: `j25byb957r-pixel/world-martial-arts-investigative-archives`

Established: September 7, 2026
