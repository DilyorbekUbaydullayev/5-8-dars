function slider(){
    const slides = document.getElementById('slides');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const addImageBtn = document.getElementById('addImage');
        const imageUrlInput = document.getElementById('imageUrl');
        const form = document.getElementById('form');

        let currentIndex = 0;
        let images = JSON.parse(localStorage.getItem('sliderImages')) || [];

        function saveLocalStorage() {
            localStorage.setItem('sliderImages', JSON.stringify(images));
        }

        function updateSlider() {
            slides.innerHTML = '';
            images.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'Slide Image';
                slides.appendChild(img);
            });
            if (images.length > 0) {
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === images.length - 1;
        }

        function addImage() {
            const url = imageUrlInput.value.trim();
            if (url && !images.includes(url)) {
                images.push(url);
                saveImagesToLocalStorage();
                updateSlider();
                imageUrlInput.value = '';
                if (images.length === 1) currentIndex = 0;
            } else if (images.includes(url)) {
                alert('This image is already in the slider!');
            }
            form.reset();
            
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        addImageBtn.addEventListener('click', addImage);
        updateSlider();
        
}export {slider}