let carts =document.querySelectorAll('.btn-cart');

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click' , () => {
        document.getElementById('hu').innerHTML=('ITEM ADDED TO CART' & i++)
        document.write("Item Added to Cart");
    })
}