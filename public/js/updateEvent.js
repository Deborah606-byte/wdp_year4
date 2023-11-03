const openEditFormButtons = document.querySelectorAll(".edit-event");
const editModals = document.querySelectorAll(".edit-event-modal");

// Function to open the edit event modal
function openEditModal(id) {
  const modal = document.querySelector(`.edit-event-modal[id="${id}"]`);
  if (modal) {
    modal.classList.remove("hidden");
  }
}

openEditFormButtons.forEach((editForm) => {
  editForm.addEventListener("click", (event) => {
    const id = event.currentTarget.getAttribute("id");
    openEditModal(id);
  });
});
