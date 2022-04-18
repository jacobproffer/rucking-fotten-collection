const mainHeader = document.querySelector('#site-header');
const fadeIns = document.querySelectorAll('.gsap-fade-in');

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: 'main',
  start: 'top top',
  end: 'max',
  onEnter: () => mainHeader.classList.add('pinned'),
  onLeaveBack: () => mainHeader.classList.remove('pinned'),
});

if (fadeIns.length > 0) {
  fadeIns.forEach((fadeIn) => {
    gsap.from(fadeIn, {
      y: 30,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: fadeIn,
        start: 'top 85%',
        end: 'bottom top',
        once: true,
      }
    })
  });
}
