const mongoose=require('mongoose');
const passport = require('passport');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    fbId:{
        type:String
    },
    fbaccessToken:{
        type:String
    },
    googleId:{
        type:String
    },
    googleaccessToken:{
        type:String
    },
    isAdmin:{
        type:Boolean
    },
    cart:{
        products:[{
            id:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Products'
            },
            quantity:{
                type:Number
            }
        }]
    }

});
userSchema.method('addToCart',function (productId){
    let cartProducts=this.cart.products;
    let index=-1;
    cartProducts.forEach((element,i)=>{
        if(element.id==productId){
            index=i;
        }
    });
    if(index==-1)
    {
        cartProducts.unshift({
            id:productId,
            quantity:1
        });
    }
    else
    {
        cartProducts[index].quantity = parseInt(cartProducts[index].quantity) + 1;
    }
    return(this.save());
});
const User=mongoose.model('user',userSchema);
module.exports=User;