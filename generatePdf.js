import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generatePDF = (formData, userImage) => {
  const doc = new jsPDF();

  // Set title
  doc.setFontSize(18);
  doc.text(`${formData.fullName}'s Resume`, 20, 20);

  // Resize and draw image (passport size: ~100x100 px = ~35mm x 35mm)
  if (userImage) {
    doc.addImage(userImage, 'JPEG', 150, 10, 40, 40); // x, y, width, height
  }

  // Basic Info
  doc.setFontSize(12);
  doc.text(`Email: ${formData.email}`, 20, 40);
  doc.text(`Phone: ${formData.phone}`, 20, 48);
  doc.text(`Address: ${formData.address}`, 20, 56);

  // Education
  doc.setFontSize(14);
  doc.text('Education', 20, 70);
  autoTable(doc, {
    startY: 75,
    head: [['Degree', 'Institution', 'Year']],
    body: formData.education.map(edu => [edu.degree, edu.institution, edu.year])
  });

  // Skills
  doc.setFontSize(14);
  doc.text('Skills', 20, doc.lastAutoTable.finalY + 10);
  doc.setFontSize(12);
  doc.text(formData.skills.join(', '), 20, doc.lastAutoTable.finalY + 20);

  // Experience
  doc.setFontSize(14);
  doc.text('Experience', 20, doc.lastAutoTable.finalY + 35);
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 40,
    head: [['Company', 'Role', 'Duration']],
    body: formData.experience.map(exp => [exp.company, exp.role, exp.duration])
  });

  // Projects
  doc.setFontSize(14);
  doc.text('Projects', 20, doc.lastAutoTable.finalY + 10);
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Project Name', 'Description']],
    body: formData.projects.map(proj => [proj.name, proj.description])
  });

  // Save PDF to user's system
  doc.save(`${formData.fullName}_Resume.pdf`);
};
