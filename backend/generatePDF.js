// backend/generatePDF.js
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function generatePDF(data, photoPath) {
  const htmlTemplate = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
          }
          .header {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #333;
            padding-bottom: 10px;
          }
          .photo {
            width: 100px;
            height: 120px;
            object-fit: cover;
            border: 1px solid #333;
            margin-right: 20px;
          }
          .info {
            flex: 1;
          }
          h1 {
            margin: 0;
            font-size: 24px;
          }
          .section {
            margin-top: 20px;
          }
          .section h2 {
            font-size: 18px;
            border-bottom: 1px solid #ccc;
          }
          .section p {
            margin: 4px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="file://${photoPath}" class="photo" />
          <div class="info">
            <h1>${data.name}</h1>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Address: ${data.address}</p>
          </div>
        </div>

        <div class="section">
          <h2>Career Objective</h2>
          <p>${data.objective}</p>
        </div>

        <div class="section">
          <h2>Education</h2>
          <p>${data.education}</p>
        </div>

        <div class="section">
          <h2>Skills</h2>
          <p>${data.skills}</p>
        </div>

        <div class="section">
          <h2>Projects</h2>
          <p>${data.projects}</p>
        </div>

        <div class="section">
          <h2>Experience</h2>
          <p>${data.experience}</p>
        </div>

        <div class="section">
          <h2>Languages</h2>
          <p>${data.languages}</p>
        </div>

        <div class="section">
          <h2>Declaration</h2>
          <p>${data.declaration}</p>
        </div>
      </body>
    </html>
  `;

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setContent(htmlTemplate, { waitUntil: "networkidle0" });

  const pdfPath = path.join(__dirname, "resume.pdf");
  await page.pdf({ path: pdfPath, format: "A4" });

  await browser.close();
  return pdfPath;
}

module.exports = generatePDF;
