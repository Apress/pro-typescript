interface GetUserMedia {
    (options: {}, success: Function, error: Function): any;
}

interface HTMLVideoElement {
    mozSrcObject: any;
}

interface Window {
    URL: any;
    webkitURL: any;
}

interface Navigator {
    getMedia: GetUserMedia;
    getUserMedia: GetUserMedia;
    webkitGetUserMedia: GetUserMedia;
    mozGetUserMedia: GetUserMedia;
    msGetUserMedia: GetUserMedia;
}

navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

var video = document.createElement('video');
document.body.appendChild(video);

function videoObtained(stream) {
    if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
    } else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
    }
    video.play();
}

navigator.getMedia({ video: true, audio: false },
    videoObtained,
    (err) => console.log(err)
    );
