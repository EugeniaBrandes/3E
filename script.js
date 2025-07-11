document.getElementById("downloadPDF").addEventListener("click", function () {
    const element = document.body;
    html2pdf().from(element).save("Carta_BaZi.pdf");
});