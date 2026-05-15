function toggleMenu(){
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

function orderNow(){
    const phoneNumber = "6588352243";

    const message = "Hi MK Food, I would like to order Chinese New Year cookies.";

    const whatsappURL =
    "https://wa.me/" + phoneNumber +
    "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}

let currentLanguage = "en";

function toggleLanguage(){
    currentLanguage = currentLanguage === "en" ? "zh" : "en";

    const translatableElements = document.querySelectorAll("[data-en][data-zh]");
    const languageButton = document.querySelector(".language-btn");

    translatableElements.forEach(function(element){
        element.textContent = element.getAttribute("data-" + currentLanguage);
    });

    languageButton.textContent = currentLanguage === "en" ? "中文" : "EN";
}
