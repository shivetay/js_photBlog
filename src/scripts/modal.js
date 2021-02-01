export const initModal = function () {
  let getButtons = document.getElementsByClassName('link');
  for (let button of getButtons) {
    button.addEventListener('click', addModalClass);
  }
};

const addModalClass = () => {
  const modal = document.querySelector('.add');
  modal.classList.toggle('active');
  modal.classList.toggle('add_modal');
};

window.onclick = function (e) {
  const modal = document.querySelector('.add');
  if (e.target == modal) {
    modal.classList.toggle('add_modal');
    modal.classList.toggle('active');
  }
};
