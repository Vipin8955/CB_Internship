let addtocartBtn=document.querySelector('.addtocartBtn');
addtocartBtn.addEventListener('click',(event)=>{
 let productId=addtocartBtn.getAttribute('productId');
 axios.get(`/shop/addtocart?productId=${productId}`).then((res)=>{
    console.log("Item Added Successfully",res);
    let cartCount=document.querySelector('.cartCount');
    let x=Number(cartCount.innerText);
    x++
    console.log("cartCount:",x);
    cartCount.innerText=x;
 }).catch((err)=>{
    console.log(err);
 });
})


