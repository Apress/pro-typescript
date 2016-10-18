var image = document.getElementById('mainImage');
var container = document.getElementById('content');

function updateSizes() {
    // Flags the layout as invalid
    image.style.width = '50%';

    // Causes a reflow to get the value
    var imageHeight = image.offsetHeight;

    // Flags the layout as invalid
    container.classList.add('highlight');

    // Causes a reflow to get the value
    var containerHeight = container.offsetHeight;

    return {
        'imageHeight': imageHeight,
        'containerHeight': containerHeight
    };
}

var result = updateSizes();
