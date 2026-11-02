# Aman Yadav — Cloud curious, always learning

A responsive personal portfolio for Aman Yadav, a senior secondary student preparing for JEE and exploring cloud technology. The site is intentionally built as a small static project so the code and hosting setup stay easy to follow.

## What is in the portfolio

- About: JEE preparation and a new interest in cloud technology.
- Tech superpowers: a transparent snapshot of topics being explored and tools used in this project.
- Projects and achievements: the first portfolio build, including its interactive feature.
- Cloud Break: a short, keyboard accessible routing puzzle. Visitors trace a request from their browser to AWS Amplify and the edge, then see a personal note from Aman. The hint appears in the hero and the feature is also reachable from the project card.

## Run it locally

This is plain HTML, CSS, and JavaScript. Open `index.html` in a browser or start a local static server from this folder, for example:

```sh
npx serve .
```

No build step or server-side secrets are needed.

## Deploy with AWS Amplify Hosting

Follow [`AWS_DEPLOYMENT_GUIDE.md`](AWS_DEPLOYMENT_GUIDE.md) to connect the public repository to Amplify and deploy it. The included `amplify.yml` publishes the static files from the repository root; no framework build or environment variables are required.

The app will not be considered AWS-hosted until the Amplify deployment has actually completed. The GitHub repository alone does not satisfy the hosting requirement.

## AWS services used

- **AWS Amplify Hosting** — intended static site hosting and managed deployment from GitHub. This counts as used after the first successful deployment.
- No database, API, or paid third-party runtime service is required by this static site.

## Before sharing

- Add the actual deployed Amplify URL to the project write-up and the portfolio.
- Update any project or skill details that have changed. The current copy intentionally describes learning in progress and does not claim earlier AWS experience or certifications.

## Project structure

- `index.html` — page content and accessible dialog markup.
- `styles.css` — responsive layout, artwork, and Cloud Break styling.
- `script.js` — the interactive routing puzzle.
- `amplify.yml` — static hosting build specification.
- `AWS_DEPLOYMENT_GUIDE.md` — account setup, repository connection, deployment, and screenshot steps.
- `HACKATHON_SUBMISSION.md` — draft write-up to complete with live screenshots and deployment details.
