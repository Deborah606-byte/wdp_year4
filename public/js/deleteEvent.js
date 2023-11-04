const openDeleteFormButtons = document.querySelectorAll(".delete-event");
const deleteModals = document.querySelectorAll(".delete-event-modal");

// Function to open the delete event modal
function openDeleteModal(id) {
  const modalDelete = document.querySelector(`#${id}`);
  if (modalDelete) {
    modalDelete.classList.remove("hidden");
  }
}

openDeleteFormButtons.forEach((deleteForm) => {
  deleteForm.addEventListener("click", (event) => {
    const id = event.currentTarget.getAttribute("id");
    console.log(openDeleteModal);
    openDeleteModal(id);
  });
});
