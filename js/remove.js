function removeElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}