# Leadroom

An interactive seller-lead qualification workspace built with vanilla JavaScript and CSS. No API keys, paid services, build step, or application dependencies.

## Run locally

From this directory:

```sh
python -m http.server 8080 --directory dist
```

Open http://localhost:8080. Node.js 20+ is needed only for tests:

```sh
npm test
```

## Try it

1. Explore the four fictional leads, search by name/address, or filter by priority.
2. Enter a seller and property in the qualification studio.
3. Calculate the signal to see its four weighted components and suggested next step.
4. Save the result, refresh to check persistence, and export the pipeline to CSV.
5. Reset demo restores the fictional dataset after confirmation.

## Scoring

| Factor | Options and points |
| --- | --- |
| Motivation | High 35; medium 20; low 5 |
| Timeline | Within 30 days 30; 1–3 months 20; later 5 |
| Condition | Major repairs 15; cosmetic 10; ready 5 |
| Asking / estimated value | <=80% 20; <=95% 15; <=105% 8; above 105% 0 |

Hot: >=75; Warm: >=50; Nurture: below 50. Scoring is an illustrative business heuristic, not an AI prediction or property appraisal. All prices and estimated values are user input.

## Structure

- `dist/index.html`: accessible dashboard and qualification form
- `dist/styles.css`: responsive design
- `dist/scoring.mjs`: pure scoring engine and CSV escaping
- `dist/app.mjs`: persistence, UI, filtering, export
- `tests/scoring.test.mjs`: built-in Node test runner tests

Data stays in localStorage on the browser and origin where it is entered. There is no server, authentication inside the app, synchronization, ReadyMode connection, or actual calling. Use fictional data for demos. Clearing browser storage removes saved leads. The page optionally loads Google Fonts and works with system font fallbacks.

## Deployment

Any static host can serve `dist/`. The ChatGPT Sites hosted copy is separately versioned and private to the owner. GitHub changes are proposed in the demo/leadroom branch; publishing a new GitHub commit does not automatically redeploy Sites.

This demo is added under `leadroom-demo/` in the existing dash repository so it can be reviewed independently of the original dashboard.
