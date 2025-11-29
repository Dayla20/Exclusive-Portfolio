// Integrating emailjs service
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");   
    loading.classList += (" modal__overlay--visible"); 

emailjs
    .sendForm(
        "service_zhtz31e",
        "template_f3kdeey",
        event.target,
        "y9EbGYMVnU0P_s63i"
    ).then(()=> {
        loading.classList.remove("modal__overlay--visible");
        success.classList += (" modal__overlay--visible");
    }).catch(() => { 
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable, please contact me at freitasdiana@gmail.com");
    }) 
}

//toggle modal
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;    
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";}