// Scroll-triggered fade-in animations
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => fadeObserver.observe(el));

// Phone number validation
const phoneInput = document.getElementById('mce-SMSPHONE');
const phoneError = document.getElementById('phone-error');
const signupForm = document.getElementById('mc-embedded-subscribe-form');

if (phoneInput) {
  // Strip non-digits on input
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    if (phoneError.classList.contains('visible')) {
      validatePhone();
    }
  });
}

function validatePhone() {
  const digits = phoneInput.value.replace(/\D/g, '');
  if (phoneInput.value === '') {
    phoneError.classList.remove('visible');
    return true;
  }
  if (digits.length !== 10) {
    phoneError.classList.add('visible');
    return false;
  }
  phoneError.classList.remove('visible');
  return true;
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    if (!validatePhone()) {
      e.preventDefault();
    }
  });
}

// Back to top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
}
