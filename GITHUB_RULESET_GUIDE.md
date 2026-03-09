# GitHub Ruleset Setup Guide

To fully enable the "GitHub Ruleset" for QBL Consulting, follow these steps in your GitHub repository UI. This will ensure that the standard checks we just added (Lint & Build) are enforced.

## 1. Access Rulesets
1. Go to your repository on GitHub.
2. Click on **Settings** (top tab).
3. In the left sidebar, under "Code and automation", click **Rules** -> **Rulesets**.

## 2. Create a New Ruleset
1. Click **New ruleset** -> **New branch ruleset**.
2. **Ruleset name**: `Main Branch Protection`
3. **Enforcement status**: `Active`

## 3. Target Branches
1. Under "Target branches", click **Add target**.
2. Select **Include default branch**.

## 4. Define Rules
Enable the following rules:

### A. Restrict Pushes
- Check **Restrict pushes** (Prevents direct pushes to `main`).

### B. Require a Pull Request before merging
- Check **Require a pull request before merging**.
- Check **Require approvals** (Set "Required number of approvals" to `1`).
- Check **Require review from Code Owners** (This uses the `.github/CODEOWNERS` file we added).

### C. Require status checks to pass
- Check **Require status checks to pass before merging**.
- Click **Add checks**.
- Search for and select `verify` (This is the "Verify PR" action we just created).

### D. Block Force Pushes & Deletions
- Ensure **Block force pushes** is checked.
- Ensure **Block deletions** is checked.

## 5. Save
Click **Create** at the bottom of the page.

---

**Note**: Once active, all changes to `main` must now happen via Pull Requests that pass the automated Lint/Build checks.
