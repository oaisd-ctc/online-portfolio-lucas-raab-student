const images = [
    "Images/VrCert.png",
    " Images/unitycert.png",
    "Images/ITS-Badges_HTML-and-CSS_1200px.png"
];

const slider = document.getElementById("slider");
const galleryImage = document.getElementById("galleryImage");

slider.addEventListener("input", () => {
    galleryImage.src = images[slider.value];
   
});