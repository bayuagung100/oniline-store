import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class HeaderCart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.cartHide = this.cartHide.bind(this);
    }
    cartHide(){
        $('.js-panel-cart').removeClass('show-header-cart');
    }

    render(){
        return(
            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full" onClick={this.cartHide}></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Your Cart
                        </span>

                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04" onClick={this.cartHide}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>

                    <div id="cart" className="header-cart-content flex-w js-pscroll">
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderCart;