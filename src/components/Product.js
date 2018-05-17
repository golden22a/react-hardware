import React, {Component} from 'react';

class Product extends Component {
    render() {
        const productName = this.props.productName;
        const description = this.props.description;
        const price = this.props.price;
        console.log(this.props.index);
        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>

          {this.props.delete ?  <button onClick={()=>this.props.deleteProduct(this.props.index)}>Delete</button>
        : null }    </div>
        );
    }
}

export default Product;