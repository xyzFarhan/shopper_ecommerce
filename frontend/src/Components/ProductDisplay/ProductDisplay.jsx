import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);
    
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {[...Array(4)].map((_, i) => (
                        <img key={i} src={product.image} alt="" />
                    ))}
                </div>
                <div className="productdisplay-image">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    {[...Array(4)].map((_, i) => (
                        <img key={i} src={star_icon} alt="star" />
                    ))}
                    <img src={star_dull_icon} alt="star" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-oldprice">${product.old_price}</div>
                    <div className="productdisplay-newprice">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    <p>
                        Elevate your style with the Men's Green Solid Zip-Up Slim Fit Bomber Jacket: sleek silhouette, durable fabric, perfect for casual outings. Stay warm and stylish with full-zip closure, ribbed cuffs, and modern solid green color.
                    </p>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div key={size}>{size}</div>
                        ))}
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
