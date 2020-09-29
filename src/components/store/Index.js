import React, { Component } from 'react';
import logo from './logo.png';
import gb from './17.jpg';
import iheart from './icons/icon-heart-01.png';
import iheart2 from './icons/icon-heart-02.png';
import iclose from './icons/icon-close.png';
import './index.css';
import './hamburgers.min.css';
import './util.css';
import './slick.css';
import './magnific-popup.css';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch, faShoppingCart, faHeart, faAngleLeft, faAngleRight, faAngleUp, faTimes, faExpand} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import axios from "axios";
import Slider from "react-slick";
import "magnific-popup";



// import localIpUrl from 'local-ip-url';
// import prepareUrls from 'local-ip-url/prepareUrls';

// const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://'+window.location.hostname+':8080';

// const localIpUrl = require('local-ip-url');
// const prepareUrls = require('local-ip-url/prepareUrls');

const baseUrl = "https://s3.amazonaws.com/static.neostack.com/img/react-slick";



function NextArrowSlick2(props) {
    // const { className, style, onClick } = props;
    const { onClick } = props;
    return (
        <button
        className="arrow-slick2 next-slick2"
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight}/></button>
    );
}
  
function PrevArrowSlick2(props) {
    const { onClick } = props;
    return (
        <button
        className="arrow-slick2 prev-slick2"
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleLeft}/></button>
    );
}

function NextArrowSlick3(props) {
    // const { className, style, onClick } = props;
    const { onClick } = props;
    return (
        <button
        className="arrow-slick3 next-slick3"
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight}/></button>
    );
}
  
function PrevArrowSlick3(props) {
    const { onClick } = props;
    return (
        <button
        className="arrow-slick3 prev-slick3"
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleLeft}/></button>
    );
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: null,
        }

        this.getApiSlideshow = this.getApiSlideshow.bind(this);
        this.backtotop = this.backtotop.bind(this);
        this.cartShow = this.cartShow.bind(this);
        this.cartHide = this.cartHide.bind(this);
        this.wishShow = this.wishShow.bind(this);
        this.wishHide = this.wishHide.bind(this);
        this.qvShow = this.qvShow.bind(this);
        this.qvHide = this.qvHide.bind(this);
        this.saShow = this.saShow.bind(this);
        this.gallery = this.gallery.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

    }
    getApiSlideshow(){
        axios.get(uAPIlocal+'/api/v1/home/slideshow')
        .then(response => {
                return response.data.results
            }
            // response.data.results.map(slideshow => ({
            //     // value: `${subdistrict.subdistrict_name}`,
            //     // label: `${subdistrict.subdistrict_name}`,
            //     // subdistrict_id: `${subdistrict.subdistrict_id}`,
            //     // subdistrict_name: `${subdistrict.subdistrict_name}`,
            // }))
        )
        .then(jsonData => {
            if (jsonData.length !== 0) {
                this.setState({
                    slidesToShow: jsonData.length,
                    slideshow: jsonData
                })
                
            }
        })
        // .then(slideshow => {
        //     this.setState({
        //         slideshow
        //     },()=>console.log(this.state.slideshow));
        // })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    backtotop(){
        $('html, body').animate({scrollTop: 0}, 300);
    }
    cartShow(){
        $('.js-panel-cart').addClass('show-header-cart');
    }
    cartHide(){
        $('.js-panel-cart').removeClass('show-header-cart');
    }
    wishShow(){
        $('.js-panel-wishlist').addClass('show-header-cart');
    }
    wishHide(){
        $('.js-panel-wishlist').removeClass('show-header-cart');
    }
    qvShow(id){
        $('#qv'+id).addClass('show-modal');
    }
    qvHide(id){
        $('#qv'+id).removeClass('show-modal');
    }
    saShow(index,id){
        console.log(index)
        if (1===index) {
            $('#sa1-'+id).addClass('slick-active');
            $('#hi1-'+id).removeClass('himage');
            // $('#hbn1-'+id).removeClass('hbtn');
        } else {
            $('#sa1-'+id).removeClass('slick-active');
            $('#hi1-'+id).addClass('himage');
            // $('#hbn1-'+id).addClass('hbtn');
        }
        if (2===index) {
            $('#sa2-'+id).addClass('slick-active');
            $('#hi2-'+id).removeClass('himage');
            // $('#hbp2-'+id).removeClass('hbtn');
            // $('#hbn2-'+id).removeClass('hbtn');
        } else {
            $('#sa2-'+id).removeClass('slick-active');
            $('#hi2-'+id).addClass('himage');
            // $('#hbp2-'+id).addClass('hbtn');
            // $('#hbn2-'+id).addClass('hbtn');
        } 
        if (3===index) {
            $('#sa3-'+id).addClass('slick-active');
            $('#hi3-'+id).removeClass('himage');
            // $('#hbp3-'+id).removeClass('hbtn');
            // $('#hbn3-'+id).removeClass('hbtn');
        } else {
            $('#sa3-'+id).removeClass('slick-active');
            $('#hi3-'+id).addClass('himage');
            // $('#hbp3-'+id).addClass('hbtn');
            // $('#hbn3-'+id).addClass('hbtn');
        } 
        if (4===index) {
            $('#sa4-'+id).addClass('slick-active');
            $('#hi4-'+id).removeClass('himage');
            // $('#hbp4-'+id).removeClass('hbtn');
            // $('#hbn4-'+id).removeClass('hbtn');
        } else {
            $('#sa4-'+id).removeClass('slick-active');
            $('#hi4-'+id).addClass('himage');
            // $('#hbp4-'+id).addClass('hbtn');
            // $('#hbn4-'+id).addClass('hbtn');
        } 
        if (5===index) {
            $('#sa5-'+id).addClass('slick-active');
            $('#hi5-'+id).removeClass('himage');
            // $('#hbp5-'+id).removeClass('hbtn');
            // $('#hbn5-'+id).removeClass('hbtn');
        } else {
            $('#sa5-'+id).removeClass('slick-active');
            $('#hi5-'+id).addClass('himage');
            // $('#hbp5-'+id).addClass('hbtn');
            // $('#hbn5-'+id).addClass('hbtn');
        }
        if (6===index) {
            $('#sa6-'+id).addClass('slick-active');
            $('#hi6-'+id).removeClass('himage');
            // $('#hbp6-'+id).removeClass('hbtn');
            // $('#hbn6-'+id).removeClass('hbtn');
        } else {
            $('#sa6-'+id).removeClass('slick-active');
            $('#hi6-'+id).addClass('himage');
            // $('#hbp6-'+id).addClass('hbtn');
            // $('#hbn6-'+id).addClass('hbtn');
        }
        if (7===index) {
            $('#sa7-'+id).addClass('slick-active');
            $('#hi7-'+id).removeClass('himage');
            // $('#hbp7-'+id).removeClass('hbtn');
            // $('#hbn7-'+id).removeClass('hbtn');
        } else {
            $('#sa7-'+id).removeClass('slick-active');
            $('#hi7-'+id).addClass('himage');
            // $('#hbp7-'+id).addClass('hbtn');
            // $('#hbn7-'+id).addClass('hbtn');
        }
        if (8===index) {
            $('#sa8-'+id).addClass('slick-active');
            $('#hi8-'+id).removeClass('himage');
            // $('#hbp8-'+id).removeClass('hbtn');
            // $('#hbn8-'+id).removeClass('hbtn');
        } else {
            $('#sa8-'+id).removeClass('slick-active');
            $('#hi8-'+id).addClass('himage');
            // $('#hbp8-'+id).addClass('hbtn');
            // $('#hbn8-'+id).addClass('hbtn');
        }
        if (9===index) {
            $('#sa9-'+id).addClass('slick-active');
            $('#hi9-'+id).removeClass('himage');
            // $('#hbp9-'+id).removeClass('hbtn');
        } else {
            $('#sa9-'+id).removeClass('slick-active');
            $('#hi9-'+id).addClass('himage');
            // $('#hbp9-'+id).addClass('hbtn');
        }
    }
    gallery(arr){
        $(this).magnificPopup({
            type: 'image',
            items: arr,
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-fade',
        }).magnificPopup('open');
    }

    goToPrevSlide(index,id){
        this.saShow(index, id)
    }
      
    goToNextSlide(index,id){
        this.saShow(index, id)
    }
    componentDidMount(){
        this.getApiSlideshow();
        
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

    }
    render() {
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            // arrows: true,
            nextArrow: <NextArrowSlick2 />, 
            prevArrow: <PrevArrowSlick2 />,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]    
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

                                <div id="count_cart" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0" onClick={this.cartShow}>
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

                        <div id="count_cart" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0" onClick={this.cartShow}>
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

                {/* <!-- Cart --> */}
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

                {/* <!-- Whishlist --> */}
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

                {/* Slider */}
                <div id="slider-product" className="container">
                    <div className="wrap-slick2">
                        {
                            this.state.slidesToShow ? (
                                <Slider {...settings}>
                                    {
                                        this.state.slideshow.map((value, index) => {
                                            return(
                                                <div key={index} className="p-l-15 p-r-15 p-t-15 p-b-15">
                                                    <div className="block2">
                                                        <div className="block2-pic hov-img0">
                                                            <img src={uAPIlocal+'/'+value.foto_utama_url} alt={value.foto_utama} />
                                                            <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04" onClick={() => this.qvShow(index)}>
                                                                Quick View
                                                            </Link>
                                                        </div>
                                                        <div className="block2-txt flex-w flex-t p-t-14">
                                                            <div className="block2-txt-child1 flex-col-l ">
                                                                <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                                    <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                                    <span id="wish-slide-product">{value.nama_produk}</span>
                                                                </Link>

                                                                <span className="stext-105 cl3">
                                                                    Rp. {value.harga}
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
                                            )
                                        })
                                    }
                                    
                                </Slider>
                            ):(
                                <div></div>
                            )
                        }
                    </div>
                </div>

                {/* Quick View */}
                
                {
                    this.state.slideshow ? (
                        this.state.slideshow.map((value, index) => {
                            var itemsArr = [
                                {
                                    src: uAPIlocal+'/'+value.foto_utama_url,
                                    title: value.foto_utama
                                },
                            ];
                            if (value.foto1 && value.foto1_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto1_url,
                                    title: value.foto1
                                })
                            }
                            if (value.foto2 && value.foto2_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto2_url,
                                    title: value.foto2
                                })
                            }
                            if (value.foto3 && value.foto3_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto3_url,
                                    title: value.foto3
                                })
                            }
                            if (value.foto4 && value.foto4_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto4_url,
                                    title: value.foto4
                                })
                            }
                            if (value.foto5 && value.foto5_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto5_url,
                                    title: value.foto5
                                })
                            }
                            if (value.foto6 && value.foto6_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto6_url,
                                    title: value.foto6
                                })
                            }
                            if (value.foto7 && value.foto7_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto7_url,
                                    title: value.foto7
                                })
                            }
                            if (value.foto8 && value.foto8_url !== null) {
                                itemsArr.push({
                                    src: uAPIlocal+'/'+value.foto8_url,
                                    title: value.foto8
                                })
                            }
                            return(
                                <div key={index} id={"qv"+(index)} className="wrap-modal p-t-60 p-b-20">
                                    <div className="overlay-modal" onClick={() => this.qvHide(index)}></div>
    
                                    <div className="container">
                                        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                                            <button className="how-pos3 hov3 trans-04" onClick={() => this.qvHide(index)}>
                                                <img src={iclose} alt="CLOSE" />
                                            </button>

                                            <div className="row">
                                                <div className="col-md-6 col-lg-7 p-b-30">
                                                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                                                        <div className="wrap-slick3 flex-sb flex-w">
                                                            <div className="wrap-slick3-dots">
                                                                <ul className="slick3-dots">
                                                                    <li id={"sa1-"+(value.id)} className="slick-active" onClick={()=>this.saShow(1, value.id)}>
                                                                        <img src={uAPIlocal+'/'+value.foto_utama_url} alt={value.foto_utama} />
                                                                        <div className="slick3-dot-overlay"></div>
                                                                    </li>
                                                                    {
                                                                        value.foto1 && value.foto1_url ? (
                                                                        <li id={"sa2-"+(value.id)} onClick={()=>this.saShow(2, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto1_url} alt={value.foto1} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto2 && value.foto2_url ? (
                                                                        <li id={"sa3-"+(value.id)} onClick={()=>this.saShow(3, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto2_url} alt={value.foto2} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto3 && value.foto3_url ? (
                                                                        <li id={"sa4-"+(value.id)} onClick={()=>this.saShow(4, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto3_url} alt={value.foto3} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto4 && value.foto4_url ? (
                                                                        <li id={"sa5-"+(value.id)} onClick={()=>this.saShow(5, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto4_url} alt={value.foto4} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto5 && value.foto5_url ? (
                                                                        <li id={"sa6-"+(value.id)} onClick={()=>this.saShow(6, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto5_url} alt={value.foto5} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto6 && value.foto6_url ? (
                                                                        <li id={"sa7-"+(value.id)} onClick={()=>this.saShow(7, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto6_url} alt={value.foto6} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto7 && value.foto7_url ? (
                                                                        <li id={"sa8-"+(value.id)} onClick={()=>this.saShow(8, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto7_url} alt={value.foto7} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.foto8 && value.foto8_url ? (
                                                                        <li id={"sa9-"+(value.id)} onClick={()=>this.saShow(9, value.id)}>
                                                                            <img src={uAPIlocal+'/'+value.foto8_url} alt={value.foto8} />
                                                                            <div className="slick3-dot-overlay"></div>
                                                                        </li>
                                                                        ):(
                                                                            <div></div>
                                                                        )
                                                                    }
                                                                    
                                                                    
                                                                </ul>
                                                            </div>
                                                            <div className="wrap-slick3-arrows flex-sb-m flex-w">
                                                                {/* <button id={"hbn1-"+(value.id)} className="arrow-slick3 next-slick3 " onClick={()=>this.goToNextSlide(2, value.id)}>
                                                                    <FontAwesomeIcon icon={faAngleRight}/>
                                                                </button>
                                                                {
                                                                    value.foto1 && value.foto1_url ? (
                                                                    <div>
                                                                        <button id={"hbp2-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(1, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn2-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(3, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto2 && value.foto2_url ? (
                                                                    <div>
                                                                        <button id={"hbp3-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(2, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn3-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(4, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto3 && value.foto3_url ? (
                                                                    <div>
                                                                        <button id={"hbp4-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(3, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn4-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(5, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto4 && value.foto4_url ? (
                                                                    <div>
                                                                        <button id={"hbp5-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(4, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn5-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(6, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto5 && value.foto5_url ? (
                                                                    <div>
                                                                        <button id={"hbp6-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(5, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn6-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(7, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto6 && value.foto6_url ? (
                                                                    <div>
                                                                        <button id={"hbp7-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(6, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn7-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(8, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto7 && value.foto7_url ? (
                                                                    <div>
                                                                        <button id={"hbp8-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(7, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                        <button id={"hbn8-"+(value.id)} className="arrow-slick3 next-slick3 hbtn" onClick={()=>this.goToNextSlide(9, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleRight}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                }
                                                                {
                                                                    value.foto8 && value.foto8_url ? (
                                                                    <div>
                                                                        <button id={"hbp9-"+(value.id)} className="arrow-slick3 prev-slick3 hbtn" onClick={()=>this.goToPrevSlide(8, value.id)}>
                                                                            <FontAwesomeIcon icon={faAngleLeft}/>
                                                                        </button>
                                                                    </div>
                                                                    ):(
                                                                        <div></div>
                                                                    )
                                                                } */}
                                                            </div>
                                                            
                                                            <div className={"slick3 gallery-lb"+(value.id)}>
                                                                <div className="item-slick3">
                                                                    <div className="wrap-pic-w pos-relative">
                                                                        <img id={"hi1-"+(value.id)} src={uAPIlocal+'/'+value.foto_utama_url} alt={value.foto_utama} />
                                                                        {
                                                                            value.foto1 && value.foto1_url ? (
                                                                            <img id={"hi2-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto1_url} alt={value.foto1} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto2 && value.foto2_url ? (
                                                                            <img id={"hi3-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto2_url} alt={value.foto2} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto3 && value.foto3_url ? (
                                                                            <img id={"hi4-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto3_url} alt={value.foto3} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto4 && value.foto4_url ? (
                                                                            <img id={"hi5-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto4_url} alt={value.foto4} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto5 && value.foto5_url ? (
                                                                            <img id={"hi6-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto5_url} alt={value.foto5} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto6 && value.foto6_url ? (
                                                                            <img id={"hi7-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto6_url} alt={value.foto6} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto7 && value.foto7_url ? (
                                                                            <img id={"hi8-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto7_url} alt={value.foto7} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        {
                                                                            value.foto8 && value.foto8_url ? (
                                                                            <img id={"hi9-"+(value.id)} className="himage" src={uAPIlocal+'/'+value.foto8_url} alt={value.foto8} />
                                                                            ):(
                                                                                <div></div>
                                                                            )
                                                                        }
                                                                        <Link to="#" className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" >
                                                                            <FontAwesomeIcon icon={faExpand} onClick={async ()=> {await this.gallery(itemsArr)}}/>
                                                                        </Link>
                                                                        

                                                                        
                                                                    </div>
                                                                </div>

                                                                
                                                            </div>
                                                            {/* <div className="wrap-slick3-dots"></div>
                                                            <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                                            <div className="slick3 gallery-lb">
                                                                <div className="item-slick3" data-thumb={uAPIlocal+'/'+value.foto1_url}>
                                                                    <div className="wrap-pic-w pos-relative">
                                                                        <img src={uAPIlocal+'/'+value.foto1_url} alt={value.foto1} />

                                                                        <Link className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" to={uAPIlocal+'/'+value.foto1_url}>
                                                                            <FontAwesomeIcon icon={faExpand} />
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                                <div className="item-slick3" data-thumb={uAPIlocal+'/'+value.foto2_url}>
                                                                    <div className="wrap-pic-w pos-relative">
                                                                        <img src={uAPIlocal+'/'+value.foto2_url} alt={value.foto2} />

                                                                        <Link className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" to={uAPIlocal+'/'+value.foto2_url}>
                                                                            <FontAwesomeIcon icon={faExpand} />
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                                <div className="item-slick3" data-thumb={uAPIlocal+'/'+value.foto3_url}>
                                                                    <div className="wrap-pic-w pos-relative">
                                                                        <img src={uAPIlocal+'/'+value.foto1_url} alt={value.foto3} />

                                                                        <Link className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" to={uAPIlocal+'/'+value.foto3_url}>
                                                                            <FontAwesomeIcon icon={faExpand} />
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                                <div className="item-slick3" data-thumb={uAPIlocal+'/'+value.foto5_url}>
                                                                    <div className="wrap-pic-w pos-relative">
                                                                        <img src={uAPIlocal+'/'+value.foto5_url} alt={value.foto5} />

                                                                        <Link className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" to={uAPIlocal+'/'+value.foto5_url}>
                                                                            <FontAwesomeIcon icon={faExpand} />
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                                <div className="item-slick3" data-thumb={uAPIlocal+'/'+value.foto6_url}>
                                                                    <div className="wrap-pic-w pos-relative">
                                                                        <img src={uAPIlocal+'/'+value.foto6_url} alt={value.foto6} />

                                                                        <Link className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" to={uAPIlocal+'/'+value.foto6_url}>
                                                                            <FontAwesomeIcon icon={faExpand} />
                                                                        </Link>
                                                                    </div>
                                                                </div>


                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ):(
                        <div></div>
                    )
                }

                {/* <!-- Banner --> */}
                <div className="sec-banner bg0 p-t-80 p-b-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div className="block1 wrap-pic-w">
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
                            <div className="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div className="block1 wrap-pic-w">
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
                            <div className="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div className="block1 wrap-pic-w">
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
                            <div className="col-md-6 col-xl-3 p-b-30 m-lr-auto">
                                <div className="block1 wrap-pic-w">
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
                <div className="btn-back-to-top" id="myBtn" onClick={this.backtotop}>
                    <span className="symbol-btn-back-to-top">
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </span>
                </div>

            </div>
            
        );
    }
}

export default withRouter(Index);