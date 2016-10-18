var image = document.getElementById('mainImage');
var container = document.getElementById('content');

function updateSizesSingleReflow() {
    // Operations that invalidate the layout
    image.style.width = '50%';
    container.classList.add('highlight');

    // Operations that require a reflow
    var imageHeight = image.offsetHeight;
    var containerHeight = container.offsetHeight;

    return {
        'imageHeight': imageHeight,
        'containerHeight': containerHeight
    };
}

var result = updateSizesSingleReflow();
