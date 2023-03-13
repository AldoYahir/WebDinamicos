const subir2 = document.querySelector('.subir');
window.addEventListener('scroll', irArriba)
function irArriba() {
    if (window.scrollY >= 100) {
        subir2.style.display = "block";

    } else {
        subir2.style.display = "none";
    }
}
function scrollToTop() {
    if (subir2.onclick) {
        window.scrollTo(0, 0)
    }
}