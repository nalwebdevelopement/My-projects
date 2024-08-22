async function initialLoad() {
    try {
      // Fetch the list of breeds from the cat API
      const response = await fetch("https://api.thecatapi.com/v1/breeds",{
      headers: {
        'x-api-key': 'live_jZ1q3dhDbJzKvqNzrd2K8XKkJjSCFNSSrsuJbJDvQAiEBSyRfKJLrouUJdYqonpF'
      }});
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
      
      const breeds = await response.json();
      console.log(breeds);
      
      // Get the select element
      const breedSelect = document.getElementById('breedSelect');
      
      // Create and append an <option> for each breed
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;  // Set the value to the breed id
        option.textContent = breed.name;  // Set the text to the breed name
        breedSelect.appendChild(option);
      });
      
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  }
  
  // Execute the initialLoad function immediately
  document.addEventListener('DOMContentLoaded', () => {
    initialLoad();
  });