# Summit Care Windows Server 2022 Enterprise Domain Configuration

This project is a React/Vite report website for the Summit Care Medical Clinic Windows Server 2022 enterprise domain configuration project.

The site documents:

- Windows Server 2022 domain services
- Active Directory Domain Services
- DNS, DHCP, DHCP failover planning, and static IP design
- Primary and backup domain controllers
- Group Policy security and workstation configuration
- NPS/RADIUS, 802.1X, and WPA3-Enterprise access
- Active Directory Certificate Services and auto-enrollment
- WDS deployment services
- Synology NAS backup strategy
- Proxmox, Hyper-V, nested virtualization, VDI, VPN, and RDP workflows
- Task Scheduler automation, Event Viewer, SNMP, monitoring, and recovery checks
- Microsoft Entra hybrid identity, UPN setup, Microsoft 365 SSO, MFA, and cloud sign-in

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production site is generated into `dist/`.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/static.yml
```

When pushed to the `main` branch, GitHub Actions will:

1. Install dependencies with `npm ci`
2. Build the Vite site with `npm run build`
3. Add a static SPA fallback
4. Deploy the `dist/` folder to GitHub Pages

After pushing, open the GitHub repository and go to:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

## Push Commands

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your GitHub account and repository name.

```bash
git init
git add .
git commit -m "Publish Summit Care Windows Server domain configuration site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Static Site Notes

GitHub Pages only hosts static files. The public report pages work on GitHub Pages. The contact form opens the visitor's email app using `mailto:` because GitHub Pages cannot run the included Express/SQLite backend.

The `.gitignore` file excludes local/generated files such as `node_modules/`, `dist/`, `.DS_Store`, local database files, logs, and environment files.
