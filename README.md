This is a hugo / tailwind / flowbite static site.  The target is for it be a landing page for a tech startup.
It should be a retro futuristic style.  The only special feature is a mailing list button

## Development Setup (Ubuntu 24.04)

This guide provides instructions for setting up the development environment on Ubuntu 24.04 LTS to work on this project.

### Prerequisites
- Ubuntu 24.04 LTS (or a compatible Debian-based system)
- `curl` for downloading NodeSource setup script

### 1. Install Hugo
Instructions for installing the standard Hugo package, which is used to build the static site:
```bash
sudo apt update
sudo apt install hugo
```
Verify Hugo installation:
```bash
hugo version
```

### 2. Install Node.js and npm
Node.js and its package manager, npm, are required for managing project dependencies like Tailwind CSS and Flowbite. We'll use NodeSource to install a recent version of Node.js (e.g., v20.x).

```bash
# Download and execute the NodeSource setup script for Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js (npm is included)
sudo apt install -y nodejs
```
Verify Node.js and npm installation:
```bash
node -v
npm -v
```

### 3. Install Project Dependencies
After cloning the repository, navigate to the `my-hugo-site` directory (which contains the Hugo site and `package.json` file) and install the necessary npm packages:
```bash
cd my-hugo-site
npm install
```
This command reads the `package.json` file and installs all listed development dependencies, such as Tailwind CSS, PostCSS, Autoprefixer, Flowbite, and any others required for the project's frontend build process.

### Building the Site
Once all prerequisites and dependencies are installed, you can build the static site using Hugo:
```bash
cd my-hugo-site
hugo
```
The generated static files will be placed in the `my-hugo-site/public` directory.

For development, you can run the Hugo development server:
```bash
cd my-hugo-site
hugo server
```
This will start a local server (usually at `http://localhost:1313/`) with live reloading.
