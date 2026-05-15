function toggleMenu(){
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

function orderNow(){
    alert("WhatsApp ordering feature will be added soon.");
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
