const refs = {
  openModalBtn: document.querySelector("[data-modal='open']"),
  closeModalBtn: document.querySelector("[data-modal='close']"),
  modalOverlay: document.querySelector("[data-modal='overlay']"),
  body: document.querySelector('body'),
  openMobileMenuBtn: document.querySelector("[data-modal='mobile-open']"),
  closeMobileMenuBtn: document.querySelector("[data-modal='mobile-close']"),
  mobileMenu: document.querySelector('.mobile-header-menu'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modalOverlay.addEventListener('click', closeModal);

refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleModal() {
  refs.modalOverlay.classList.toggle('is-open');
  refs.body.classList.toggle('no-scroll');
}

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle('is-open');
  refs.body.classList.toggle('no-scroll');
}

function closeModal(e) {
  if (e.target === refs.modalOverlay) {
    toggleModal();
  }
}