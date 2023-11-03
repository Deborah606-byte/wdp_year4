document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and pre-fill event details for editing
    function fetchEventDetails(eventId) {
      // Make an AJAX request to get event details by eventId
      fetch(`/api/events/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          // Populate the form fields with event details
          document.getElementById('category').value = data.category;
          document.getElementById('title').value = data.title;
          document.getElementById('description').value = data.description;
          // Add more fields as needed
        })
        .catch((error) => console.error('Error fetching event details:', error));
    }
  
    // Get the eventId from the URL or wherever it's available
    const eventId = 'your_event_id'; // Replace with actual event ID
  
    // Call the function to pre-fill event details
    fetchEventDetails(eventId);
  
    // Handle form submission
    const editEventForm = document.getElementById('editEventForm');
    editEventForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Collect form data for the updated event
      const updatedEventData = {
        category: document.getElementById('category').value,
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        // Add more fields as needed
      };
  
      // Make an AJAX request to update the event
      fetch(`/api/events/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(updatedEventData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Event updated successfully:', data);
          // Redirect or show a success message
        })
        .catch((error) => console.error('Error updating event:', error));
    });
  });
  