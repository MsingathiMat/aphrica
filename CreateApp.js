#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');
const AdmZip = require('adm-zip');

const allowedComponents = ['whatsapp.zip', 'Component2', 'Component3']; // Define your allowed component names here

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest);
      reject(err.message);
    });
  });
}

async function extractZip(zipFile, destFolder) {
  try {
    const zip = new AdmZip(zipFile);
    zip.extractAllTo(destFolder, /*overwrite*/ true);
    fs.unlinkSync(zipFile); // Remove the downloaded ZIP file
  } catch (error) {
    throw new Error(`Error extracting ZIP file: ${error}`);
  }
}

async function addComponent(componentName) {
  if (!allowedComponents.includes(componentName)) {
    console.error(`Error: '${componentName}' is not part of the library.`);
    return;
  }

  const componentDirectory = path.join(process.cwd(), 'AttlrUi', componentName.replace('.zip', ''));

  if (!fs.existsSync(componentDirectory)) {
    try {
      // Create the component directory and all parent directories if they don't exist
      fs.mkdirSync(componentDirectory, { recursive: true });
      const githubFileUrl = `https://github.com/MsingathiMat/attlrUi/archive/main.zip`;

      const zipFile = path.join(componentDirectory, 'main.zip');

      await downloadFile(githubFileUrl, zipFile);
      await extractZip(zipFile, componentDirectory);

      console.log(`Component '${componentName}' added successfully.`);
    } catch (error) {
      console.error(`Error adding component: ${error}`);
    }
  } else {
    console.log(`Component '${componentName}' already exists.`);
  }
}

if (process.argv.length < 3) {
  console.log('Usage: npx attlr-ui <componentName>');
} else {
  addComponent(process.argv[2]);
}
