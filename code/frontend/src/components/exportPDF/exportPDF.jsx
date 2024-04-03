import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const TextToPDFExporter = ({ text }) => {
  const exportToPDF = () => {
    const input = document.getElementById('textToExport');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('exported-text.pdf');
      });
  };

  return (
    <div>
      <div id="textToExport">
        <p>{text}</p>
      </div>
      <button onClick={exportToPDF}>Export to PDF</button>
    </div>
  );
};

export default TextToPDFExporter;
