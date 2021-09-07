import React, { Component, useContext } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faShoppingCart, faHeart} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import myContext from "./Context";

// const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://'+window.location.hostname+':8080';


class Header extends Component {
    constructor(props) {
        super(props);
        // let headYC = JSON.parse(localStorage.getItem("YourCart"));
        // if (headYC !== null) {
        //     this.setState({
        //         dtNotifyCart: headYC.length,
        //     })
        // }
        this.state = {
            dtNotifyCart: 0,
        }
        this.cartShow = this.cartShow.bind(this);
        this.wishShow = this.wishShow.bind(this);
    }
    
    cartShow(){
        $('.js-panel-cart').addClass('show-header-cart');
    }
    wishShow(){
        $('.js-panel-wishlist').addClass('show-header-cart');
    }

    componentDidMount(){
        /*==================================================================
        [ Fixed Header ]*/
        var headerDesktop = $('.container-menu-desktop');
        var wrapMenu = $('.wrap-menu-desktop');
        if($('.top-bar').length > 0) {
            var posWrapHeader = $('.top-bar').height();
        }
        else {
            posWrapHeader = 0;
        }
        if($(window).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        }
        $(window).on('scroll',function(){
            if($(this).scrollTop() > posWrapHeader) {
                $(headerDesktop).addClass('fix-menu-desktop');
                $(wrapMenu).css('top',0); 
            }  
            else {
                $(headerDesktop).removeClass('fix-menu-desktop');
                $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
            } 
        });
        /*==================================================================
        [ Menu mobile ]*/
        $('.btn-show-menu-mobile').on('click', function(){
            $(this).toggleClass('is-active');
            $('.menu-mobile').slideToggle();
        });

        var arrowMainMenu = $('.arrow-main-menu-m');

        for(var i=0; i<arrowMainMenu.length; i++){
            $(arrowMainMenu[i]).on('click', function(){
                $(this).parent().find('.sub-menu-m').slideToggle();
                $(this).toggleClass('turn-arrow-main-menu-m');
            })
        }

        $(window).resize(function(){
            if($(window).width() >= 992){
                if($('.menu-mobile').css('display') === 'block') {
                    $('.menu-mobile').css('display','none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }

                $('.sub-menu-m').each(function(){
                    if($(this).css('display') === 'block') { console.log('hello');
                        $(this).css('display','none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });
                    
            }
        });

        // var headYC = JSON.parse(localStorage.getItem("YourCart"));
        // if (headYC !== null) {
        //     this.setState({
        //         dtNotifyCart: headYC.length,
        //     },()=>console.log(this.state.dtNotifyCart))
        // }

        
    }
    render() {
        let context = this.context;
        return(
        
            <header>

                {/* Header desktop */}
                <div className="container-menu-desktop">
                    {/* Topbar */}
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                #HelaiHijab
                            </div>
                            <div className="right-top-bar flex-w h-full">
                                <Link to="#" className="flex-c-m trans-04 p-lr-25">
                                    Help FAQs
                                </Link>
                                <Link to="#" className="flex-c-m trans-04 p-lr-25">
                                    My Account
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Menu Desktop */}
                    <div className="wrap-menu-desktop how-shadow1">
                        <div className="limiter-menu-desktop container">
                            {/* Logo desktop  */}
                            <Link to="#" className="logo">
                                <img src={logo} alt="Logo" />
                            </Link>
                            {/* Menu desktop */}
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                        <Link to="#" className="PoppinsMedium">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Shop <FontAwesomeIcon icon={faAngleDown}/></Link>
                                        <ul className="sub-menu">
                                            <li><Link to="#">Shop 1</Link></li>
                                            <li><Link to="#">Shop 2</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Konfirmasi Pembayaran</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Right icon desktop */}
                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
                                    <FontAwesomeIcon icon={faSearch} size="sm" />
                                </div>

                                <div id="count_cart" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={this.state.dtNotifyCart} onClick={this.cartShow}>
                                    <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                                    
                                </div>

                                <div id="count_wishlist" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0" onClick={this.wishShow}>
                                    <FontAwesomeIcon icon={faHeart} size="sm" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Header Mobile */}
                <div className="wrap-header-mobile">

                    {/* Logo Mobile  */}
                    <div className="logo-mobile">
                        <Link to="#"><img src={logo} alt="Logo" /></Link>
                    </div>

                    {/* Right icon mobile */}
                    <div className="wrap-icon-header flex-w flex-r-m">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
                            <FontAwesomeIcon icon={faSearch} size="sm" />
                        </div>

                        <div id="count_cart" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={this.state.dtNotifyCart} onClick={this.cartShow}>
                            <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                        </div>

                        <div id="count_wishlist" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0" onClick={this.wishShow}>
                            <FontAwesomeIcon icon={faHeart} size="sm" />
                        </div>
                    </div>

                    {/* Button show menu */}
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>

                </div> 

                {/* Menu Mobile */}
                <div className="menu-mobile">
                    <ul className="topbar-mobile" style={{marginBottom: 0}}>
                        <li>
                            <div className="left-top-bar">
                                #HelaiHijab
                            </div>
                        </li>
                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                                    Help FAQs
                                </Link>
                                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </Link>
                                
                            </div>
                        </li>
                    </ul>
                    <ul className="main-menu-m">
                        <li>
                            <Link to="#">Home</Link>
                        </li>
                        <li>
                            <Link to="#">Shop</Link>
                            <ul className="sub-menu-m">
                                <li><Link to="#">Shop 1</Link></li>
                                <li><Link to="#">Shop 2</Link></li>
                            </ul>
                            <span className="arrow-main-menu-m">
                                <FontAwesomeIcon icon={faAngleDown}/>
                            </span>
                        </li>
                        <li>
                            <Link to="#">Konfirmasi Pembayaran</Link>
                        </li>
                        <li>
                            <Link to="#">Contact</Link>
                        </li>
                    </ul>
                </div>

            </header>
        )
    }
}

Header.contextType = myContext;
export default Header;