let paragraphs = document.querySelectorAll(".container__section__paragraph")
paragraphs.forEach((paragraph) => {
    paragraph.style.display = "none"
})

const buttons = document.querySelectorAll(".container__section__button")
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let paragraph = document.getElementById(`paragraph-${event.target.id}`)
        if (paragraph.style.display === "none") {
            paragraph.style.display = "block"
            paragraph.style.animation = "display-paragraph 600ms ease-out"
            paragraph.ariaHidden = "false"
            event.target.style.backgroundImage = "url(\"assets/images/icon-minus.svg\")"
        } else {
            paragraph.style.display = "none"
            paragraph.ariaHidden = "true"
            event.target.style.backgroundImage = "url(\"assets/images/icon-plus.svg\")"
        }
    })
})