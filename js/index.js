var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}



function add(){
    var n = $(".input").val();
    n = (n =="") ? 1: parseInt(n)+1;
    if (n > 10){
        return;
    }
    $(".input").val(n);
}

function minus(){
    var n = $(".input").val();
    n = (n =="") ? 1: parseInt(n)-1;

    if(n < 0){
        return;
    }
    $(".input").val(n);
}

function addToCart(){

    if($(".addToCart").hasClass("hideItems")){
        $(".addToCart").removeClass("hideItems");
    }else{
        $(".addToCart").addClass("hideItems");
    }
}

function close(){
    
    $(".close").removeClass("addToCart");    
}


console.log($("#index-quantity").val());

$("#blue").on("click", ()=>{
    var quantity = $("#index-quantity").val();
    var cartQuantity = Number($("#cartQuantity").text());
    var subTotal = Number($("#price").text());
    cartQuantity+= Number(quantity);
    var subTotal = subTotal*cartQuantity;
    $("#cartQuantity").text(cartQuantity);
    $("#cartSubTotal").text(subTotal);
});

console.log($("#price").text());


