import React, { Component } from 'react';
import Item from './Item'
import data from '../data'
class ItemList extends Component {
    render() {
      
        return (

            <div className="container">
                <div className="row">

                    <div className="col-md-2 productpage">
                        <h6><em>Size</em></h6>
                        <button type="button" className="btn btn-default sizebutton">S</button>
                        <button type="button" className="btn btn-default sizebutton">M</button>
                        <button type="button" className="btn btn-default sizebutton">L</button>
                        <button type="button" className="btn btn-default sizebutton">XL</button>
                    </div>
                    <div className="col-md-10 productpage">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group" width="50%">
                                  <input type="text"
                                        className="form-control" name="" id="" placeholder="Search Here" />
                                </div>
                                </div>
                                    <Item/>
                                    <Item/>
                                    <Item/>
                                    <Item/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;
