const { execSync } = require("child_process");
const fs = require("fs");

function isPackageInstalled(pkg) {
  try {
    require.resolve(pkg);
    return true;
  } catch {
    return false;
  }
}

function installDependencies() {
  console.log("Installing Next.js, React, and ReactDOM...");
  try {
    execSync("npm install next react react-dom", { stdio: "inherit" });
    console.log("✅ Installation complete.");
  } catch (err) {
    console.error("❌ Installation failed:", err);
  }
}

// Ensure package.json exists
if (!fs.existsSync("package.json")) {
  console.log("Initializing package.json...");
  execSync("npm init -y", { stdio: "inherit" });
}

if (!isPackageInstalled("next")) {
  installDependencies();
} else {
  console.log("✅ Next.js is already installed.");
}
