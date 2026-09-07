# Setup Guide - World Martial Arts Investigative Archives

## System Requirements

### Minimum Requirements
- 2GB RAM
- 500MB free disk space
- Internet connection for initial setup

### Supported Operating Systems
- Windows 10+
- macOS 10.15+
- Linux (Ubuntu 18.04+, Debian 10+)

---

## Installation Steps

### Step 1: Prerequisites Installation

#### Windows
```bash
# Install Git
https://git-scm.com/download/win

# Install Node.js (optional, if using JavaScript)
https://nodejs.org/

# Install Python (optional, if using Python)
https://www.python.org/downloads/
```

#### macOS
```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Git
brew install git

# Install Node.js (optional)
brew install node

# Install Python (optional)
brew install python3
```

#### Linux (Ubuntu/Debian)
```bash
# Update package manager
sudo apt update

# Install Git
sudo apt install git

# Install Node.js (optional)
sudo apt install nodejs npm

# Install Python (optional)
sudo apt install python3 python3-pip
```

### Step 2: Clone Repository

```bash
# Clone the repository
git clone https://github.com/j25byb957r-pixel/world-martial-arts-investigative-archives.git

# Navigate into directory
cd world-martial-arts-investigative-archives

# Verify you're in the right directory
pwd  # macOS/Linux
cd   # Windows
```

### Step 3: Project-Specific Setup

#### For Node.js/JavaScript Projects
```bash
# Install dependencies
npm install

# Verify installation
npm --version
node --version
```

#### For Python Projects
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# macOS/Linux:
source venv/bin/activate

# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Verify installation
pip list
```

### Step 4: Configuration

```bash
# Copy example environment file if it exists
cp .env.example .env

# Edit configuration
nano .env  # or use your preferred editor
```

---

## Verification

Run these commands to verify the installation:

```bash
# Check Git
git --version

# Check Node.js (if installed)
node --version
npm --version

# Check Python (if installed)
python3 --version
pip3 --version

# Verify repository structure
ls -la  # macOS/Linux
dir    # Windows
```

---

## Common Issues & Troubleshooting

### Issue: "git: command not found"
**Solution**: Install Git from https://git-scm.com/

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "Permission denied" on macOS/Linux
**Solution**: 
```bash
chmod +x ./setup.sh
./setup.sh
```

### Issue: Python version conflicts
**Solution**:
```bash
# Specify Python 3
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
pip3 install -r requirements.txt
```

### Issue: Port already in use
**Solution**:
```bash
# Change port in configuration file
# Edit .env or config file to use a different port
```

---

## Next Steps

1. ✅ Read the [README.md](README.md)
2. ✅ Review [CONTRIBUTING.md](CONTRIBUTING.md)
3. ✅ Check the documentation in `/docs` folder
4. ✅ Run tests: `npm test` or `pytest`
5. ✅ Start development: `npm run dev` or `python app.py`

---

## Getting Help

- 📖 [GitHub Wiki](https://github.com/j25byb957r-pixel/world-martial-arts-investigative-archives/wiki)
- 🐛 [Issues](https://github.com/j25byb957r-pixel/world-martial-arts-investigative-archives/issues)
- 💬 [Discussions](https://github.com/j25byb957r-pixel/world-martial-arts-investigative-archives/discussions)
- 📧 Contact maintainers

---

**Installation completed successfully! 🎉**