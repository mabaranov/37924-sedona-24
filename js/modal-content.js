var active = document.querySelector(".btn-search-hotel");
var popup = document.querySelector(".modal-window");

active.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-window-show");
})

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-window-show")) {
            popup.classList.remove("modal-window-show");
        }
    }
});


