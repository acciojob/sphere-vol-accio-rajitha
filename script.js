function volume_sphere() {
    //Write your code here
	 // Retrieve the radius value entered by the user
    const radius = parseFloat(document.getElementById('radius').value);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' in the volume field for invalid input
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the calculated volume to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the calculated volume in the designated output field
        document.getElementById('volume').value = roundedVolume;
    }

    // Prevent the default form submission behavior
    return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
