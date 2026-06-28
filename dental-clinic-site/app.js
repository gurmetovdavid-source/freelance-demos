document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.innerHTML = '☰';
  const headerInner = document.querySelector('.header-inner');
  const nav = document.querySelector('.nav');
  headerInner.insertBefore(menuBtn, nav.nextSibling);

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.innerHTML = '☰';
    });
  });

  // Appointment form
  const form = document.getElementById('appointmentForm');
  const modal = document.getElementById('successModal');
  const closeModal = document.getElementById('closeModal');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Appointment request:', data);
    modal.classList.add('active');
    form.reset();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});
