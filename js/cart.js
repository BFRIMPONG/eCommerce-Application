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


