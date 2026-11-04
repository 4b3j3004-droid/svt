const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const pageSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      for (const link of sectionLinks) {
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          if (entry.isIntersecting) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        } else if (entry.isIntersecting) {
          link.removeAttribute('aria-current');
        }
      }
    }
  }, { rootMargin: '-24% 0px -65% 0px' });

  pageSections.forEach((section) => sectionObserver.observe(section));
}
