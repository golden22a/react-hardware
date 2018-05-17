import React, {Component} from 'react';
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

class AdminView extends Component {
    render() {
        return (
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                <ProductList productList={this.props.productList} deleteProduct={this.props.deleteProduct}/>

                <h2>Create a New Product</h2>
                <ProductForm addProduct={this.props.addProduct} />
            </div>
        );
    }
}

export default AdminView;