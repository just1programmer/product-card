import React from 'react'
import './ProductCard.scss'
// import productImgDesktop from '../images/image-product-desktop.jpg'
// import productImgMobile from "../images/image-product-mobile.jpg";

const ProductCard = () => {
  return (
		<div className="product">
			<div className="product-img" />
			<div className="product-description">
				<div className="product-subtitle">
					<p>Perfume</p>
				</div>
				<div className="product-title">
					<h1>Gabrielle Essence Eau De Parfum</h1>
				</div>
				<div className="product-description-text">
					A floral,solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
				</div>
				<div className="product-price">
					<span className="product-new-price">$149.99</span>
					<span className="product-old-price">$169.99</span>
				</div>

				<div className="product-add-to-cart">
					<button className="add-to-cart-btn"> iconita + Add to Cart </button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard