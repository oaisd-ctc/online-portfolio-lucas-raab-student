const images = [
    "Images/VrCert.png",
    " Images/unitycert.png",
    "Images/image3.jpg"
];

const slider = document.getElementById("slider");
const galleryImage = document.getElementById("galleryImage");

slider.addEventListener("input", () => {
    galleryImage.src = images[slider.value];
});