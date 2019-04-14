import React, { Component } from 'react';

class Item extends Component {
    returnItem=event=>
    {
        event.preventDefault();
        this.props.getItem(this.props.ItemThing)
    }
    render() {
        const ItemThing=this.props.ItemThing;
        return (
                <div className="helloword col-md-3 col-sm-12 col-xs-12">
                 <div className="card">
                                        <img className="card-img-top" src="img/1.jpg" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Name</h4>
                                            <p className="card-text">price</p>
                                            <p className="text-center">
                                                <button>Add to cart</button>
                                            </p>
                                        </div>
                                    </div>
                                    </div>
        );
    }
}

export default Item;