import React from "react";
import cssClass from './product.module.css';
const product =(props) =>(

    <div className={cssClass.ProductControl}>
        <div className={cssClass.img}>
            <img className= {cssClass.image} src={props.image} />
        </div>
        <div className={cssClass.productInfo}>
            <h3>{props.name}</h3> 
            <p className={cssClass.weight}>({props.weight} {props.weightUnit}) </p>
            <div className={cssClass.Prices}>
                <span className={cssClass.FinalPrice}>₹ {props.finalPrice} 
                </span> 
                <span className={cssClass.ActualPrice}>₹ {props.actualPrice}</span>
            </div>
            <div><button className ={cssClass.OrderButton}>
                {true? 'ADD TO CART': 'OUT OF STOCK'}</button>
            </div>
        </div>    
        <div className={cssClass.rating}> 
            4.3 ★
        </div>
        
    </div>
);



export default product;