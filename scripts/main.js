
function isPhone() {
    return window.innerWidth < 768;
}
document.addEventListener("DOMContentLoaded", function() {


    var modal = document.getElementById('gal');

    const currentYear = new Date().getFullYear();
    document.getElementById("date").textContent = currentYear;

    var closeBtn = document.getElementById("closebtn");

    function openImg(src) {
    //if(!isPhone()) {
        imgSet = document.getElementById('modalImg');
        imgSet.src = src;
        modal.style.display = "block";
    //}
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }


    }



    var imageContainer = document.getElementById('galDiv');

    var images = imageContainer.getElementsByTagName('img');

    function handleClick(event) {
        var src = event.target.getAttribute('src');
        var alt = event.target.getAttribute('alt');
        console.log("Image clicked! src : "+src+" alt: "+alt);
        openImg(src)
    }

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', handleClick);
    }
});

function burgControl(){
    const navbarNav = document.getElementById('navbarNav');

    if (navbarNav) {

        for(let i=0;i<navbarNav.classList.length;i++)
            console.log(navbarNav.classList[i])


        if(!navbarNav.classList.contains('show'))
            navbarNav.classList.add('show');
        else
            navbarNav.classList.remove('show');
;
    }
}
function home(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
//Закрити
let oc = false;
function openOrClose(){

    var button = document.getElementById("ocBtn");
    const photos = document.getElementById('restPhoto');
    const more = document.getElementById('more').innerText;
    const less = document.getElementById('less').innerText;
    if(oc){
        //Open
        button.innerText = more;
        photos.classList.remove("d-flex");
        photos.classList.add("d-none");

    }else{
        button.innerText = less;
        photos.classList.add("d-flex");
        photos.classList.remove("d-none");



    }
    oc=!oc

}

