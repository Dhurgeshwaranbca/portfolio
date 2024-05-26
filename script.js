// Define initial values
var count = 100;

// Create the background image dynamically
var content = document.querySelector('.home_container');
var body = document.querySelector('body');

content.style.background = `url(images/train_image.jpeg) no-repeat center center`;
content.style.backgroundSize = 'cover';
content.style.transition = 'all 0.5s ease';

// Add an event listener to the window for the wheel event
window.addEventListener('wheel', handleScroll);

// Function to handle the scroll event
function handleScroll(event) {
    // Check the scroll direction
    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

    // Log the scroll direction
    // console.log(`Scroll direction: ${scrollDirection}`);

    // Check if the scroll direction is down
    if (scrollDirection === 'down') {
        // If scrolled down, decrease the size of the background image
        count = Math.max(count - 1, 50); // Prevent the size from getting too small
        // Align the background image to the right
        content.style.backgroundPosition = 'right center';
    } else {
        // If scrolled up, increase the size of the background image
        count = Math.min(count + 1, 100); // Prevent the size from getting too large
        // Align the background image to the center
        content.style.backgroundPosition = 'center center';
    }

    // Log the updated count
    // console.log(`Updated size percentage: ${count}%`);

    // Apply the new size to the background image
    content.style.backgroundSize = `${count}%`;
}

// Change body's overflow to visible after 1 second
setTimeout(() => {
    body.style.overflowY = 'visible';
    body.style.overflowX = 'hidden';
    // console.log('Body overflow changed to visible');
}, 1000);
