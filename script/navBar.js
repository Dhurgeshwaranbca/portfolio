document.addEventListener('DOMContentLoaded', function() {
    var navList = document.querySelector('.nav-list');
    navList.style.display = 'none';
    // Add event listener to the toggle button
    document.getElementById('nav-toggle').addEventListener('click', function() {
        console.log("inside function")
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });
});
