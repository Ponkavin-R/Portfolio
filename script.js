function downloadPDF() {
    var pdfURL = 'https://drive.google.com/file/d/1oGSAHE9e40B1rZKFIDd1c1pHgEY7qLLu/view?usp=drive_link';
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'ponkavin Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
