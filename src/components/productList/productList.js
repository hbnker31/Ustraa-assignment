import React from 'react';
import Product from './product/product';
const productList=(props)=>(
    <div >
        {(props.productList).map(product=>(
            <Product
                key= {product.id} 
                id= {product.id}
                weight= {product.weight}
                weightUnit= {product.weight_unit}
                actualPrice= {product.price}
                finalPrice= {product.final_price}
                image= {product.image_urls.x520}
                name= {product.name}
                
             />        
        ))}
    </div>
)
export default productList;