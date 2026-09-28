# Personal portfolio links

A small Astro + TypeScript site inspired by Linktree's centered profile and stacked links. Includes four rectangular buttons: Portfolio, Github, Linkedin, Instagram. Uses strict TypeScript, responsive CSS, keyboard focus styles, and no client JavaScript or third-party fonts.

## 1. Install your Windows tools

Install Node.js 24 LTS from https://nodejs.org/en/download, Git for Windows from https://git-scm.com/download/win, and Visual Studio Code from https://code.visualstudio.com/. Keep Git Credential Manager enabled in the Git installer. Install the official Astro extension in VS Code.

Close and reopen your terminal after installing. Use **Command Prompt** for the commands below. In VS Code, select Terminal > New Terminal, then use the terminal dropdown to open Command Prompt.

```bat
node --version
npm --version
git --version
```

Use Node 24 LTS. Astro requires a supported even-numbered Node version, at least 22.12.0.

## 2. Open the starter

Extract the downloaded ZIP. In VS Code select File > Open Folder and select the `portfolio-site` folder that contains `package.json`. Open a Command Prompt terminal inside that folder.

```bat
npm ci
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:4321). Leave the terminal running while editing; the browser updates when you save. Ctrl+C stops the server. Do not open the `.astro` file directly in a browser.

The ZIP already contains the Astro setup, so you do not need to run `npm create astro` too. For a separate blank learning project, the official setup wizard is `npm create astro@latest`; choose the minimal starter.

## 3. Personalize your page

Edit `src/data/profile.ts`. Change `name`, `initials`, `tagline`, and `bio`. Replace each `null` URL with your real destination in quotes. For example:

```ts
{ label: 'Github', caption: 'Code & experiments', href: 'https://github.com/YOUR_USERNAME' },
```

Use your actual portfolio URL, GitHub profile, LinkedIn profile, and Instagram profile. Until a URL is configured, its button is disabled and says “Coming soon.” Configured links navigate in the same tab. Do not publish with example usernames.

Edit `src/pages/index.astro` for layout and colors. Code between the opening `---` markers runs as TypeScript during rendering; the rest is the HTML template and scoped CSS. `astro.config.mjs` holds Astro configuration. `tsconfig.json` enables strict TypeScript.

Before committing, check and build:

```bat
npm run build
npm run preview
```

The build checks types, then generates static files in `dist`. Preview serves those generated files locally. Check the page on a narrow browser window and use Tab to focus configured links.

## 4. Connect your project to GitHub

Create/sign into your account at https://github.com. Create a repository called `portfolio-site`. Choose public or private. Leave README, license, and .gitignore unchecked because this starter already contains files.

Stop the local server with Ctrl+C or open a second terminal in your project. Set your commit identity (use your GitHub no-reply email from GitHub Settings > Emails if preferred):

```bat
git config --global user.name "Your Name"
git config --global user.email "YOUR_EMAIL"
git init
git add .
git commit -m "Create Astro portfolio landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git push -u origin main
```

Replace YOUR_USERNAME and YOUR_EMAIL before running. The global identity commands apply to all your local Git repositories; skip them if you already have the identity you want. Complete the browser sign-in if Git Credential Manager prompts you. GitHub account passwords are not used for HTTPS Git authentication.

Refresh your repository page to see your code. The included `.gitignore` excludes generated files, installed packages, and environment secrets. Commit `package-lock.json` so dependency versions remain reproducible.

For later changes:

```bat
git status
git add .
git commit -m "Update portfolio links"
git push
```

Uploading to GitHub stores your source code; making the website publicly accessible requires a separate hosting/deployment step.

## Troubleshooting

- `npm.ps1 cannot be loaded`: use Command Prompt as described above, or use `npm.cmd` instead of `npm` in PowerShell.
- `node` or `git` is not recognized: reopen VS Code after installation. If necessary, check the installer's PATH option.
- `package.json` not found: open the inner extracted folder containing `package.json`.
- Port 4321 is busy: use the address Astro prints, which may have another port.

## Official references

- Astro setup: https://docs.astro.build/en/install-and-setup/
- Upload an existing local project: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
