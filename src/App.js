import React, {Component} from 'react';
import './App.css';
import Categories from './components/categories/categories';
import ProductList from './components/productList/productList';
import Product from './components/productList/product/product';
import axios from 'axios';

class App extends Component {
    state = {
        category: [],
        productList: [],
        title: '',
        selectedCategoryId: '',
        showProduct:false,
        productId:''
    };

    componentDidMount() {
        axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
            .then((res) => {
                this.setState({
                    category: res.data.category_list,
                    productList: res.data.product_list.products,
                    title: res.data.heading
                });
            }).catch((err) => {

        });


    }

    getCategoryData = (e, id) => {
        this.setState((state) => {
            return {
                ...state,
                selectedCategoryId: id
            }
        }, () => {
            let {selectedCategoryId} = this.state;
            if(selectedCategoryId==='Alll'||selectedCategoryId==='Allr')
            {
                    axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
                  .then((res) => {
                      this.setState({
                          productList: res.data.product_list.products,
                      });
                  }).catch((err) => {

              });
            }
            else{
            axios
                .get("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=" + selectedCategoryId)
                .then((data) => {
                    this.setState((state) => {
                        return {
                            ...state,
                            productList: data.data.products
                        }
                    })
                });
            }
        });
    };

    render() {
        let {getCategoryData, state: {category, productList}} = this;
          return (
            <div className="App">
                  <h2 style={{textAlign: 'left', marginLeft: '65px'}}> {this.state.title}</h2>
                  {
                      (category && category.length) ? <Categories categories={category}
                                                                showCategorySelected={getCategoryData}/> : null
                  }
                  <ProductList productList={productList} />
             </div>
         
        );
    }
}

export default App;
