<script>
  const slider = document.querySelector('.testimonial-slider');
setInterval(() => {
  slider.scrollBy({ left: 320, behavior: 'smooth' });
  // Wrap back to start
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    setTimeout(() => slider.scrollTo({ left: 0, behavior: 'smooth' }), 1000);
  }
}, 5000);
</script>
