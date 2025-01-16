const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
const navItem = document.getElementById("navItem");

// Event listener for the open icon
openIcon.addEventListener('click', function() {
    navItem.classList.add("show");   // Add the class to show the navigation
    navItem.style.display = "block"; // Display the navigation
    openIcon.style.display = "none"; // Hide the open icon
    closeIcon.style.display = "block"; // Show the close icon
});

// Event listener for the close icon
closeIcon.addEventListener('click', function() {
    navItem.classList.remove("show"); // Remove the class to hide the navigation
    navItem.style.display = "none";   // Hide the navigation
    closeIcon.style.display = "none"; // Hide the close icon
    openIcon.style.display = "block"; // Show the open icon again
});
