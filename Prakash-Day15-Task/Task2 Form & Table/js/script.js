form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Extract form data
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      pincode: document.getElementById('pincode').value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      foods: Array.from(document.querySelectorAll('input[name="food"]:checked')).map(option => option.value),
      state: document.getElementById('state').value,
      country: document.getElementById('country').value
    };
  
    // Send data to server
    fetch('http://127.0.0.1:5500/index.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle success
      console.log('Form data saved successfully:', data);
      // Optionally, clear form fields or update UI
      form.reset();
    })
    .catch(error => {
      // Handle error
      console.error('Error saving form data:', error);
    });
  });
  