let cartItems=document.querySelector('.cartItems');4
cartItems.addEventListener('click',(event)=>{
    let item=event.target;
    let sign=item.innerText;
    let productId=item.getAttribute('productId');
    
    let priceValue=document.querySelector('.priceValue');
    if(sign==='+'){
        let quantityNumber=event.target.parentElement.previousElementSibling;
        axios.get(`/shop/increaseQty?productId=${productId}`).then((res)=>{
            quantityNumber.innerText=Number(quantityNumber.innerText)+1;
            priceValue.innerText=`$${res.data.totalPrice}`;
        })
    }
    else if(sign==='-')
    {
        let quantityNumber=event.target.parentElement.previousElementSibling.previousElementSibling;
        axios.get(`/shop/decreaseQty?productId=${productId}`).then((res)=>{
            quantityNumber.innerText=Number(quantityNumber.innerText)-1;
            priceValue.innerText=`$${res.data.totalPrice}`;
        })
    }
    else if(event.target.classList.contains('deleteBtn')){
        axios.get(`/shop/deletecartitem?productId=${productId}`)
        .then((res)=>{
            event.target.parentElement.parentElement.innerText='';
            let cartCount=document.querySelector('.cartCount');
            cartCount.innerText=Number(cartCount.innerText)-1;
            priceValue.innerText=`$${res.data.totalPrice}`;
        }).catch((err)=>{
            return next(err);
        })
    }
})