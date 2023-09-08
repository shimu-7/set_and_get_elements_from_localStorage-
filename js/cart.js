const addProduct=()=>{
    const name=document.getElementById('product_name').value ;
    const quantity=document.getElementById('product_quantity').value ;
    // localStorage.setItem(name,quantity);
    document.getElementById('product_name').value='';
    document.getElementById('product_quantity').value='';
    display(name,quantity);
    saveInLocalStorage(name,quantity);
}
const display=(name,quantity)=>{
    const ul=document.getElementById('container');
    const li=document.createElement('li');
    li.innerHTML=`${name}: ${quantity}`;
    ul.appendChild(li);
}

const getShoppingCart=()=>{
    const storedCart=localStorage.getItem('cart');
    let cart ={};
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
}

const saveInLocalStorage=(name,quantity)=>{
    const cart = getShoppingCart();
    cart[name]=quantity;
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(cart));

}

const displayProductFromLocalStorage=()=>{
    const cart=getShoppingCart();
    console.log(cart);
    for(const product in cart){
        const ul=document.getElementById('container');
        const li=document.createElement('li');
        li.innerHTML=`${product}: ${cart[product]}`;
        ul.appendChild(li);
    }
}
displayProductFromLocalStorage();