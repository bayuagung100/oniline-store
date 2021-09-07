import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class HeaderWIsh extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.wishHide = this.wishHide.bind(this);
    }
    wishHide(){
        $('.js-panel-wishlist').removeClass('show-header-cart');
    }

    render(){
        return(
            <div className="wrap-header-cart js-panel-wishlist">
                <div className="s-full" onClick={this.wishHide}></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Your Wishlist
                        </span>

                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04" onClick={this.wishHide}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>

                    <div id="wishlist" className="header-cart-content flex-w js-pscroll">
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderWIsh;