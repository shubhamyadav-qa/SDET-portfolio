# Shubham Yadav | QA Automation Portfolio

A responsive, accessible portfolio built with semantic HTML, CSS, and vanilla JavaScript. There is no build step or third-party runtime dependency. The visual system pairs midnight black and navy with selective gold and blue accents. The provided portrait is stored locally at `assets/shubham-yadav-portrait.png`; the image itself is preserved and its unrelated lettering is visually subdued in the hero.

## Run locally

Open `index.html` in a browser, or serve the project root with any static web server. For example, in PowerShell:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Resume

The project does not contain the original resume PDF. `resume.html` is a print-friendly portfolio profile with a **Print / Save as PDF** action. The Google Drive resume URL previously used by this site redirects to Google sign-in, so it is not presented as a verified public download. Replace the print-friendly profile with the current source resume or a publicly accessible PDF when available.

The supplied profile and resume versions differ on the Innovative Business Solutions title (QA Automation Testing Intern / QA Automation Engineer) and end date: the profile lists September 2026, while the resume lists Present. The site uses the internship title to keep the employment type explicit, attributes the displayed date to the profile, and calls out both conflicts for confirmation rather than merging the claims.

## Project evidence

Project descriptions link to the public repository documentation and identify professional workflow contexts separately from independent practice repositories. No portfolio metrics or test execution results are inferred from repository descriptions.

- [SauceDemo Playwright assignment](https://github.com/shubhamyadav-qa/hypd-sdet-ui-automation-assignment)
- [HYPD API automation](https://github.com/shubhamyadav-qa/hypd-api-automation)
- [VTiger CRM Playwright tests](https://github.com/shubhamyadav-qa/LLM-MCP-with_Playwrightjavascript)
- [Selenium with Java repository](https://github.com/shubhamyadav-qa/qa-automation-framework-selenium-java)
- [GitHub profile](https://github.com/shubhamyadav-qa)

The supplied `hypd-sdet-ui-automation` URL could not be found during inspection (404); the accessible SauceDemo assignment repository is linked instead. No project demo URL was provided.

## Deploy with GitHub Pages

This repository is a static site with its entry point at the repository root. No build command or deployment workflow is required.

1. Push the site files to the `main` branch.
2. In the GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose `main` and `/(root)`, then save.
5. Wait for the Pages deployment to complete. For this repository, the expected project-site URL is `https://shubhamyadav-qa.github.io/SDET-portfolio/` if GitHub Pages is enabled.

Relative local links work from the repository root. If a custom domain or Pages configuration is added later, update the canonical and Open Graph URL in `index.html`.
