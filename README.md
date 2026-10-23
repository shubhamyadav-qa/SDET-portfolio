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

Employment history is not presented in the portfolio. The resume page focuses on verified skills, education, and independent project evidence.

## Project evidence

The Salesforce CRM case study is a hands-on scenario design and implementation roadmap. It is not a claim of employment, a completed Salesforce integration, or a tested Salesforce deployment. It covers planned lead, contact/account, opportunity, search, validation, access-control, regression, and future API/UI consistency scenarios. Its hybrid architecture and separate JavaScript/TypeScript approaches are described in the portfolio; Salesforce-specific execution, API checks, reporting artifacts, and CI/CD still require implementation and environment verification.

Related repository descriptions link to existing project documentation. The CRM repository is for VTiger using JavaScript; the TypeScript Playwright repository is for SauceDemo. Neither is presented as a Salesforce implementation. No portfolio metrics, test execution results, or Salesforce live demo are inferred from repository descriptions.

- [SauceDemo Playwright assignment](https://github.com/shubhamyadav-qa/hypd-sdet-ui-automation-assignment)
- [HYPD API automation](https://github.com/shubhamyadav-qa/hypd-api-automation)
- [VTiger CRM Playwright tests](https://github.com/shubhamyadav-qa/LLM-MCP-with_Playwrightjavascript)
- [Selenium with Java repository](https://github.com/shubhamyadav-qa/qa-automation-framework-selenium-java)
- [GitHub profile](https://github.com/shubhamyadav-qa)

No Salesforce project repository or live demo URL was provided.

## Deploy with GitHub Pages

This repository is a static site with its entry point at the repository root. No build command or deployment workflow is required.

1. Push the site files to the `main` branch.
2. In the GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose `main` and `/(root)`, then save.
5. Wait for the Pages deployment to complete. For this repository, the expected project-site URL is `https://shubhamyadav-qa.github.io/SDET-portfolio/` if GitHub Pages is enabled.

Relative local links work from the repository root. If a custom domain or Pages configuration is added later, update the canonical and Open Graph URL in `index.html`.
