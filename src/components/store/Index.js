import React, { Component } from 'react';
import logo from './logo.png';
import gb from './17.jpg';
import iheart from './icons/icon-heart-01.png';
import iheart2 from './icons/icon-heart-02.png';
import './index.css';
import './hamburgers.min.css';
import './util.css';
import './slick.css';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faShoppingCart, faHeart, faAngleLeft, faAngleRight, faAngleUp, faTimes} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className="arrow-slick2 next-slick2"
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight}/></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className="arrow-slick2 prev-slick2"
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleLeft}/></button>
    );
}


class Index extends Component {
    componentDidMount(){
        /*[ Back to top ]
        ===========================================================*/
        var windowH = $(window).height()/2;

        $(window).on('scroll',function(){
            if ($(this).scrollTop() > windowH) {
                $("#myBtn").css('display','flex');
            } else {
                $("#myBtn").css('display','none');
            }
        });

        $('#myBtn').on("click", function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });

        /*==================================================================
        [ Fixed Header ]*/
        var headerDesktop = $('.container-menu-desktop');
        var wrapMenu = $('.wrap-menu-desktop');
    
        if($('.top-bar').length > 0) {
            var posWrapHeader = $('.top-bar').height();
        }
        else {
            var posWrapHeader = 0;
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
                if($('.menu-mobile').css('display') == 'block') {
                    $('.menu-mobile').css('display','none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }

                $('.sub-menu-m').each(function(){
                    if($(this).css('display') == 'block') { console.log('hello');
                        $(this).css('display','none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });
                    
            }
        });
        /*==================================================================
        [ Cart ]*/
        $('.js-show-cart').on('click',function(){
            $('.js-panel-cart').addClass('show-header-cart');
        });

        $('.js-hide-cart').on('click',function(){
            $('.js-panel-cart').removeClass('show-header-cart');
        });

        $('.js-show-wishlist').on('click',function(){
            $('.js-panel-wishlist').addClass('show-header-cart');
        });

        $('.js-hide-wishlist').on('click',function(){
            $('.js-panel-wishlist').removeClass('show-header-cart');
        });

        /*==================================================================
        [ Cart ]*/
        $('.js-show-sidebar').on('click',function(){
            $('.js-sidebar').addClass('show-sidebar');
        });

        $('.js-hide-sidebar').on('click',function(){
            $('.js-sidebar').removeClass('show-sidebar');
        });
    }
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        return (
            <div>
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

                                <div id="count_cart" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="0">
                                    <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                                </div>

                                <div id="count_wishlist" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-wishlist" data-notify="0">
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

                        <div id="count_cart" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="0">
                            <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                        </div>

                        <div id="count_wishlist" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-wishlist" data-notify="0">
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
                            <div class="right-top-bar flex-w h-full">
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
                            <ul class="sub-menu-m">
                                <li><Link to="#">Shop 1</Link></li>
                                <li><Link to="#">Shop 2</Link></li>
                            </ul>
                            <span class="arrow-main-menu-m">
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

                {/* <!-- Cart --> */}
                <div className="wrap-header-cart js-panel-cart">
                    <div className="s-full js-hide-cart"></div>

                    <div className="header-cart flex-col-l p-l-65 p-r-25">
                        <div className="header-cart-title flex-w flex-sb-m p-b-8">
                            <span className="mtext-103 cl2">
                                Your Cart
                            </span>

                            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>

                        <div id="cart" className="header-cart-content flex-w js-pscroll">
                        </div>
                    </div>
                </div>

                {/* <!-- Whishlist --> */}
                <div className="wrap-header-cart js-panel-wishlist">
                    <div className="s-full js-hide-wishlist"></div>

                    <div className="header-cart flex-col-l p-l-65 p-r-25">
                        <div className="header-cart-title flex-w flex-sb-m p-b-8">
                            <span className="mtext-103 cl2">
                                Your Wishlist
                            </span>

                            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-wishlist">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>

                        <div id="wishlist" className="header-cart-content flex-w js-pscroll">
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div id="slider-product" className="container">
                    <div className="wrap-slick2">
                        <Slider {...settings}>
                            <div className="p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={gb} alt="Logo" />
                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04">
                                            Quick View
                                        </Link>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                <span id="wish-slide-product">Produk</span>
                                            </Link>

                                            <span class="stext-105 cl3">
                                                Rp. 100.000
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={gb} alt="Logo" />
                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04">
                                            Quick View
                                        </Link>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                <span id="wish-slide-product">Produk2</span>
                                            </Link>

                                            <span class="stext-105 cl3">
                                                Rp. 100.000
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={gb} alt="Logo" />
                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04">
                                            Quick View
                                        </Link>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                <span id="wish-slide-product">Produk3</span>
                                            </Link>

                                            <span class="stext-105 cl3">
                                                Rp. 100.000
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={gb} alt="Logo" />
                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04">
                                            Quick View
                                        </Link>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                <span id="wish-slide-product">Produk4</span>
                                            </Link>

                                            <span class="stext-105 cl3">
                                                Rp. 100.000
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={gb} alt="Logo" />
                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04">
                                            Quick View
                                        </Link>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                <span id="wish-slide-product">Produk5</span>
                                            </Link>

                                            <span class="stext-105 cl3">
                                                Rp. 100.000
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="p-l-15 p-r-15 p-t-15 p-b-15">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={logo} alt="Logo" />
                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04">
                                            Quick View
                                        </Link>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                <span id="wish-slide-product">Produk6</span>
                                            </Link>

                                            <span class="stext-105 cl3">
                                                Rp. 100.000
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Slider>
                        
                    </div>
                </div>

                {/* <!-- Banner --> */}
                <div className="sec-banner bg0 p-t-80 p-b-50">
                    <div className="container">
                        <div className="row">
                            <div class="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={gb} alt="Logo" />
                                    <Link to="#" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                        <div className="block1-txt-child1 flex-col-l">
                                            <span className="block1-name ltext-102 trans-04 p-b-8">
                                                ASD
                                            </span>
                                        </div>
                                        <div className="block1-txt-child2 p-b-4 trans-05">
                                            <div className="block1-link stext-101 cl0 trans-09">
                                                Shop Now
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={gb} alt="Logo" />
                                    <Link to="#" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                        <div className="block1-txt-child1 flex-col-l">
                                            <span className="block1-name ltext-102 trans-04 p-b-8">
                                                ASD
                                            </span>
                                        </div>
                                        <div className="block1-txt-child2 p-b-4 trans-05">
                                            <div className="block1-link stext-101 cl0 trans-09">
                                                Shop Now
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={gb} alt="Logo" />
                                    <Link to="#" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                        <div className="block1-txt-child1 flex-col-l">
                                            <span className="block1-name ltext-102 trans-04 p-b-8">
                                                ASD
                                            </span>
                                        </div>
                                        <div className="block1-txt-child2 p-b-4 trans-05">
                                            <div className="block1-link stext-101 cl0 trans-09">
                                                Shop Now
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={gb} alt="Logo" />
                                    <Link to="#" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                        <div className="block1-txt-child1 flex-col-l">
                                            <span className="block1-name ltext-102 trans-04 p-b-8">
                                                ASD
                                            </span>
                                        </div>
                                        <div className="block1-txt-child2 p-b-4 trans-05">
                                            <div className="block1-link stext-101 cl0 trans-09">
                                                Shop Now
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Product --> */}
                <section className="bg0 p-t-23 p-b-140">
                    <div className="container">
                        <div className="p-b-10">
                            <h3 className="ltext-103 cl5">
                                Semua Product
                            </h3>
                        </div>
                    </div>
                </section>
                
                {/* Back to top  */}
                <div class="btn-back-to-top" id="myBtn">
                    <span class="symbol-btn-back-to-top">
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </span>
                </div>

            </div>
            
        );
    }
}

export default withRouter(Index);