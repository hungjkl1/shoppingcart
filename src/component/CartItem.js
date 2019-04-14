import React from 'react';

const CartItem = () => {
  
    return (
        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 col-xs-2 col-sm-2">
                                <img src="./img/1.jpg" className="img-fluid"></img>
                            </div>
                                <h6 className="col-md-6 col-xs-6 col-sm-6"></h6>
                                <h6 className="col-md-2 col-xs-2 col-sm-2"></h6>
                                <div className="col-md-2 items-in-cart col-xs-2 col-sm-2">
                                <button>
                                    <i class="fa fa-times" id="de"></i>
                                </button>
                                </div>
                        </div>
                        </div>
    );
};

export default CartItem;