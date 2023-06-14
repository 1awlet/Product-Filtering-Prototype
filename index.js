let product= document.querySelector('.product');



const loadProducts = async (data)=>{
    
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




colorFilter.addEventListener('change', colorFilteredProducts)




