const form = document.getElementById('pickup-scheduling-form');  
  
form.addEventListener('submit', (e) => {  
  e.preventDefault();  
  const pickupDate = document.getElementById('pickup-date').value;  
  const pickupTime = document.getElementById('pickup-time').value;  
  const pickupLocation = document.getElementById('pickup-location').value;  
  
  // Send the data to the server or perform any other action  
  console.log(`Pickup scheduled for ${pickupDate} at ${pickupTime} at ${pickupLocation}`);  
});
