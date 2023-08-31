darkModus=false;
var myVar;
let body =document.getElementById("body");
var x = window.matchMedia("(max-width: 450px)");
var logosWidth= window.matchMedia("(max-width: 768px)");

function toggleTheme(){

    if(darkModus){
        body.setAttribute("data-bs-theme","light");
        document.getElementById("logo").setAttribute("src","/images/base_sml.png");
        darkModus=false;
    } else {
        body.setAttribute("data-bs-theme","dark");
        document.getElementById("logo").setAttribute("src","/images/colored_sml.png");
        darkModus=true;  
    }
    
}

function preloading() {
    if(x.matches){
        document.getElementById("preloader").removeAttribute("hidden");
        myVar= setTimeout(displayContent,4000);
    }else{
        document.getElementById("content").removeAttribute("hidden")  
    }
    
}

function displayContent() {
    document.getElementById("preloader").setAttribute("hidden","true");
    document.getElementById("content").removeAttribute("hidden")

}


/*
   ES6
   Forget about jQuery
*/

// Expand/Collapse Article
document.querySelectorAll("#infographic article").forEach((article) => {
    article.addEventListener("click", () => {
       article.classList.toggle("active");
    });
 });
 
 // Always Collapse Article on click outside
 document.addEventListener("mouseup", (e) => {
    document.querySelectorAll("article.active").forEach((article) => {
       if (article.contains(e.target)) return;
       if (article === e.target) return;
       article.classList.remove("active");
    });
 });
 
 // Activate artciles through prev/next interactions
 document.querySelectorAll("#infographic article .btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
       e.preventDefault();
       var isprev =
          e.target === e.target.parentElement.firstElementChild ? true : false;
       var article = btn.closest("article");
       var step = parseInt(article.getAttribute("data-step"));
       var next = document.querySelector(
          `[data-step="${isprev ? step - 1 : step + 1}"]`
       );
       next.classList.add("active");
       next.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
       });
    });
 });



 function reorder(size) {
    if (size.matches) { // If media query matches
      document.getElementById("order").removeAttribute("class", "order-1")
      document.getElementById("order1").removeAttribute("class", "order-1")
    } else {
        document.getElementById("order").setAttribute("class", "col-md-6 order-1")
        document.getElementById("order1").setAttribute("class", "col-md-6 order-1")
    }
  }


reorder(logosWidth) // Call listener function at run time
logosWidth.addListener(reorder)

