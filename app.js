'use strict';
// Add your certificate at dist/assets/certificate.png, then refresh the page.
// The frame stays blank until that file is present. There are no upload controls.
(() => {
  const certificate = document.getElementById('certificate-image');
  certificate.addEventListener('load', () => { certificate.hidden = false; });
  certificate.addEventListener('error', () => { certificate.hidden = true; });
  certificate.src = 'assets/certificate.png';
})();
