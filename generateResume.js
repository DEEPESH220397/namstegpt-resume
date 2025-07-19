const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // For auto passport resize

const generateResume = async (formData, photoBuffer, res) => {
  try {
    const doc = new PDFDocument({ size: 'A4', margin: 40 });

    // 📦 Set output filename (user name based)
    const filename = `Resume_${formData.name.replace(/ /g, '_')}.pdf`;

    // 📤 Set headers to force download
    res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');

    // ⏳ Pipe to response
    doc.pipe(res);

    // 🖼️ Resize image to passport size (150x150)
    let imagePath = path.join(__dirname, '../../temp/passport.jpg');
    await sharp(photoBuffer)
      .resize(150, 150)
      .jpeg()
      .toFile(imagePath);

    // 👤 Add passport photo
    doc.image(imagePath, 420, 50, { width: 100, height: 100 });

    // 📝 Basic Info
    doc
      .fontSize(22)
      .text(formData.name, 50, 50)
      .fontSize(12)
      .text(`Email: ${formData.email}`)
      .text(`Phone: ${formData.phone}`)
      .text(`Address: ${formData.address}`)
      .moveDown();

    // 🎓 Education
    doc
      .fontSize(16)
      .text('Education', { underline: true })
      .fontSize(12)
      .text(`${formData.education}`, { indent: 20 })
      .moveDown();

    // 💼 Experience
    doc
      .fontSize(16)
      .text('Experience', { underline: true })
      .fontSize(12)
      .text(`${formData.experience}`, { indent: 20 })
      .moveDown();

    // 🔧 Skills
    doc
      .fontSize(16)
      .text('Skills', { underline: true })
      .fontSize(12)
      .text(formData.skills.split(',').map(skill => `• ${skill.trim()}`).join('\n'), { indent: 20 })
      .moveDown();

    // 📜 Declaration
    doc
      .fontSize(10)
      .text(`\nI hereby declare that the above information is true to the best of my knowledge.`, { align: 'justify' });

    // ✅ Finalize PDF
    doc.end();

    // 🧹 Delete temp photo after response ends
    res.on('finish', () => {
      fs.unlink(imagePath, () => {});
    });
  } catch (error) {
    console.error("❌ Resume Generation Failed:", error);
    res.status(500).send("Resume Generation Error");
  }
};

module.exports = generateResume;
