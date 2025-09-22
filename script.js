const cursor = document.querySelector('.cursor');
        
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

  // Navigation
  prevButton.addEventListener('click', previousImage);
  nextButton.addEventListener('click', nextImage);

  document.addEventListener('keydown', function(e) {
      if (modal.classList.contains('active')) {
          if (e.key === 'ArrowRight') {
              nextImage();
          } else if (e.key === 'ArrowLeft') {
              previousImage();
          } else if (e.key === 'Escape') {
              closeModal();
          }
      }
  });

  function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
  }

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
      if (e.target === modal) {
          closeModal();
      }
  });