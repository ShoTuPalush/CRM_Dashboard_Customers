(() => {
  const refs = {
    openModalBtn: document.querySelector(".burger"),
    closeModalBtn: document.querySelector(".close"),
    modal: document.querySelector(".main-asside"),
    main: document.querySelector(".main-container"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.main.classList.toggle("is-hidden-main");
  }
})();
