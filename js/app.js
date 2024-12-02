window.addEventListener("DOMContentLoaded",()=>{
    showloader();
})
window.addEventListener("load",()=>{
    setTimeout(() =>{     
        hideloader();
    }, 2000);
})
const showloader = ()=>{
    const loader = document.getElementById("loaderPagina");
    loader.classList.add("show_loader");
}
const hideloader = ()=>{
    const loader = document.getElementById("loaderPagina");
    loader.classList.remove("show_loader");
}