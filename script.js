
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }, 3000);
    
    const form = document.getElementById('upload-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        
        if (file) {
            alert(`Archivo ${file.name} subido exitosamente.`);
        } else {
            alert('Por favor selecciona un archivo PDF.');
        }
    });
});
