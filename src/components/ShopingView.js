import React, { Component } from 'react'; 
import Product from './Product';
class ShopingView extends Component {
    render() {
        const productList = this.props.productList;

        console.log(productList);

        const productComponents = productList.map((product, index) => {
            return <Product
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}
                index={index}   
                deleteProduct={this.props.deleteProduct}/>;
        });
        return (
            <div>
                <h1> ShopingView </h1>
                {productComponents}
            </div>
        );
    }
}

export default ShopingView;