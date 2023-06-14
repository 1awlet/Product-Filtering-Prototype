let product= document.querySelector('.product');






const loadProducts = async (data)=>{
    removeItems()

    if(data ){

 
   return  data.map((item)=>{
     const {id, name, Price, ImageUrl} = item;
    const childDiv= document.createElement('div');
 
    childDiv.className='item';
    

    //
    const imgDiv= document.createElement('div');
    const description= document.createElement('div');
    const nameTag= document.createElement('h3');
    const PriceTag= document.createElement('h3');
    const imgTag= document.createElement('img');
    //
    nameTag.innerHTML=name;
    PriceTag.innerHTML= Price;
    imgTag.src=ImageUrl;

    imgDiv.appendChild(imgTag);


    description.appendChild(nameTag);
    description.appendChild(PriceTag);
    
    childDiv.appendChild(imgDiv);
    childDiv.appendChild(description);

    product.appendChild(childDiv)
 
    })
}else{
    loadProducts(DataShop)
}
}


const removeItems = ()=>{
    const items = document.querySelectorAll('.item');

    for(let i=0; i<items.length; i++){
        items[i].remove()
    }
}

const colorFilter = document.querySelector("#color-filter");
const priceFilter = document.querySelector('#price-filter');
const categoryFilter = document.querySelector('#category-filter');

const colorFilteredProducts = ()=>{
  
         
   
    
   if(colorFilter.value == ''){
        loadProducts(DataShop)
    }else {
        
        const newData=  DataShop.filter((item)=> item.color===colorFilter.value);
        
        loadProducts(newData)
    }

}

loadProducts()


colorFilter.addEventListener('change', colorFilteredProducts)




