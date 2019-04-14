import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import ItemList from './component/ItemList';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      cartitem:[],
    }
  }
  getItem=(item)=>
  {
    let itemcart=this.state.cartitem;
    itemcart.push(item)
    this.setState({
      cartitem:itemcart
    })

  }
  render() {

  
    return (
      
      <div>
        <Navbar
        cartitem={this.state.cartitem}/>
        <ItemList
          getItem={this.getItem}
        />
      </div>
    );
  }
}

export default App;
