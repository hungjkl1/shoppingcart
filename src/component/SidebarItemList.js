import React, { Component } from 'react';
import CartItem from './CartItem';
class SidebarItemList extends Component {
    render() { 
        let cartItemElm;
        if(this.props.cartItem){
        const cartItem=this.props.cartItem;
        
        cartItemElm=cartItem.map((item,index)=>{

            return <CartItem item={item} key={index}/>
        })
        }
        return (
            <div className="col-md-12 items-in-cart" id="itemlist">
                {cartItemElm}
            </div>
        );
    }
}

export default SidebarItemList;