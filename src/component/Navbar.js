import React, { Component } from 'react';

import SidebarItemList from './SidebarItemList';
class Navbar extends Component {
    render() {
      
        return (
            <div className="wrapper">
                <div id="content">
                    <nav className="navbar-nav ml-auto">
                        <div>

                            <button type="button" id="sidebarCollapse">
                                <i className="fa fa-shopping-cart" id="activesidebar"></i>
                            </button>
                       </div>
                    </nav>
                </div>
                    <nav id="sidebar" className="active">
                    <div className="container-fluid">
                        <div className="row">
                        <div id="Cart">
                            <i className="fa fa-shopping-cart" ></i>
                        </div>
                            <h3 className="col-md-12" id="YourCart">Your Shopping Cart</h3>
                            <hr className="col-md-12"></hr>
                            <SidebarItemList
                            cartItem={this.props.cartItem}/>
                            <hr className="col-md-12"></hr>
                            
                        </div>
                    </div>
                    <div className="TotalPrice">
                        <h3>Total:</h3>
                        <h4>100$</h4>
                    </div>
                    <div className="text-center">
                            <button type="button" className="btn btn-md" id="Purchase">Purchase</button>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;