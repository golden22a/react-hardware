import React, {Component} from 'react';
import AdminView from './AdminView'
import ShopingView from './ShopingView';

class HomePage extends Component {

    state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: false,
        productList: [
            {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
            },
            {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
            }
        ]
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }
    addProduct = (data) => {
        const products= [...this.state.productList];
        products.push(data);
        this.setState({productList:products});

    }
    deleteProduct = (index) => {
        let products= [...this.state.productList];
        products.splice(index,1);
        this.setState({productList:products});
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                <button onClick={this.toggleEditSaleItem}>
                  {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                </button>
              </span>

                    {this.state.editSaleItem ? <div>
                        <input
                            value={this.state.itemCurrentlyOnSale}
                            type="text"
                            onChange={this.handleItemCurrentlyOnSaleChange}/>
                    </div> : null}


                    <AdminView 
                    productList={this.state.productList} 
                    addProduct={this.addProduct}
                    deleteProduct={this.deleteProduct}/>
                    <ShopingView productList={this.state.productList} />
                </div>
            </div>
        );
    }
}

export default HomePage;