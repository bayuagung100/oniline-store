import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faExpand, faMinus, faPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "magnific-popup";
import iheart from './icons/icon-heart-01.png';
import iheart2 from './icons/icon-heart-02.png';
import iclose from './icons/icon-close.png';
import axios from "axios";
import $ from 'jquery';
import Select from "react-select";
import MyContext from './Context';

const uAPIlocal = 'http://'+window.location.hostname+':8080';

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
class HomeSlideshow extends Component {
    constructor(props) {
        super(props);
        this.id_produk =[];
        this.qty_produk =[];
        this.state = {
            slidesToShow: null,
            yourCart: null,
            addToCart: {
                id: '',
                size: '',
                color: '',
                qty: 1,
            },
        }
        this.getApiSlideshow = this.getApiSlideshow.bind(this);
        this.qvShow = this.qvShow.bind(this);
        this.qvHide = this.qvHide.bind(this);
        this.saShow = this.saShow.bind(this);
        this.gallery = this.gallery.bind(this);
        this.sizeChange = this.sizeChange.bind(this);
        this.colorChange = this.colorChange.bind(this);
        this.qtyChange = this.qtyChange.bind(this);
        this.kurangQty = this.kurangQty.bind(this);
        this.tambahQty = this.tambahQty.bind(this);
        this.addToCartSubmit = this.addToCartSubmit.bind(this);
    }
    getApiSlideshow(){
        axios.get(uAPIlocal+'/api/v1/home/slideshow')
        .then(response => {
                return response.data.results
            }
        )
        .then(jsonData => {
            if (jsonData.length !== 0) {
                this.setState({
                    slidesToShow: jsonData.length,
                    slideshow: jsonData
                })
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    qvShow(id){
        $('#qv'+id).addClass('show-modal');
    }
    qvHide(id){
        this.setState({
            addToCart: {
                id: '',
                size: '',
                color: '',
                qty: 1,
            },
        })
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
    addToCartSubmit(index){
        this.setState({
            addToCart: {
                ...this.state.addToCart,
                id: this.id_produk[index].value
            },
        },()=>{
            console.log(this.state.addToCart)
            // var YourCart = {id: "18",size: "",color: "",qty: 1,};
            const Jparse = [];
            
            var getYC = JSON.parse(localStorage.getItem("YourCart"));
            if (getYC !== null) {
                getYC.forEach(el => {
                    Jparse.push({
                        id: el.id,
                        size: el.size,
                        color: el.color,
                        qty: el.qty,
                    })
                })

                //find the index of object from array that you want to update
                const objIndex = Jparse.findIndex(obj => obj.id === this.state.addToCart.id && obj.size === this.state.addToCart.size && obj.color === this.state.addToCart.color);
                console.log(objIndex)
                if (objIndex >= 0) { // id already exist

                    // make new object of updated object.   
                    const updatedObj = { ...Jparse[objIndex], qty: Jparse[objIndex].qty+this.state.addToCart.qty};
        
                    // make final new array of objects by combining updated object.
                    const updatedProjects = [...Jparse.slice(0, objIndex), updatedObj, ...Jparse.slice(objIndex + 1),];
        
                    // console.log("original data=", Jparse);
                    // console.log("updated data=", updatedProjects);
                    localStorage.setItem("YourCart", JSON.stringify(updatedProjects))
                    // this.props.updateNotifyCart(getYC);
                } else {
 
                    const newObj = this.state.addToCart;
                    
                    const newProjects = [...Jparse, newObj];

                    localStorage.setItem("YourCart", JSON.stringify(newProjects))
                    // this.props.updateNotifyCart(getYC);
                }
    
                
            } else {
                localStorage.setItem("YourCart", JSON.stringify([this.state.addToCart]))
                // this.props.updateNotifyCart(getYC);
            }

            // var newYC = JSON.parse(localStorage.getItem("YourCart"));
            // this.setState({
            //     yourCart: newYC
            // },()=>
            //     this.setState((prevState, props) => 
            //         // console.log(prevState.yourCart)
            //         ({
            //             yourCart:prevState.yourCart
            //         },()=>console.log(this.state.yourCart))
            //     )
            // )
            
              
            // console.log(newYC)
            // return newYC;
        })
    }
    
    sizeChange(e){
        this.setState({
            addToCart: {
                ...this.state.addToCart,
                size: e.value
            }
        },()=>console.log(this.state.addToCart))
    }
    colorChange(e){
        this.setState({
            addToCart: {
                ...this.state.addToCart,
                color: e.value
            }
        },()=>console.log(this.state.addToCart))
    }
    qtyChange(e){
        e.preventDefault();
        var max = e.target.max;
        var min = e.target.min;
        var val = e.target.value
        if(val == 0 || val === ''){
            val = min;
        } 
        if (val >= max) {
            val = max;
        }
        // const onTheList = Obj.includes(data.value);
        // if (![null, '', false].includes(val)) {
        //     val = min;
        // }
        this.setState({
            addToCart: {
                ...this.state.addToCart,
                qty: val
            }
        },()=>console.log(this.state.addToCart));

        
        
    }
    kurangQty(index){
        // var numProduct = Number($('.num-product').val());
        // // console.log(numProduct)
        // if(numProduct > 1) $('.num-product').val(numProduct - 1);
        var val = this.qty_produk[index].attributes.value.value;
        var min = this.qty_produk[index].attributes.min.value;
        if (val > min) {
            this.setState({
                addToCart: {
                    ...this.state.addToCart,
                    qty: this.state.addToCart.qty-1
                }
            },()=>console.log(this.state.addToCart));
        }
    }
    tambahQty(index){
        var val = this.qty_produk[index].attributes.value.value;
        var max = this.qty_produk[index].attributes.max.value
        if (val !== max) {
            this.setState({
                addToCart: {
                    ...this.state.addToCart,
                    qty: this.state.addToCart.qty+1
                }
            },()=>console.log(this.state.addToCart));
        }
      
    }

    componentDidMount(){
        this.getApiSlideshow();
    }
    
      

    render(){

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
        
        return(
            <div>
                
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
                
                <MyContext.Consumer>
                    {/* {
                    ({ updateNotifyCart }) => {
                        return (
                            <button onClick={updateNotifyCart}>
                                {status === 'playing' ? 'PAUSE' : 'PLAY'}
                                asd
                            </button>
                        )}
                    } */}
                    {({context, updateNotifyCart}) => {
                        return (
                            // <button onClick={updateNotifyCart}>
                                /* {status === 'playing' ? 'PAUSE' : 'PLAY'} */
                                /* asd */
                            /* </button> */
                            <div>
                            {
                                this.state.slideshow ? (
                                    this.state.slideshow.map((value, index) => {
                                        return(
                                            <div key={index}>
                                                <button onClick={()=>{this.addToCartSubmit(index)} } >
                                                    Add to cart
                                                </button>
                                                <button onClick={updateNotifyCart } >
                                                    Add to cart2
                                                </button>
                                            </div>
                                        )
                                    })
                                ):(<div></div>)
                            }
                            </div>
                            
                        )
                    }}
                </MyContext.Consumer>

                {
                    this.state.slideshow ? (
                        this.state.slideshow.map((value, index) => {
                            var size = value.ukuran.split(",");
                            var optionSize = [];
                            size.forEach(el => {
                                optionSize.push(
                                    {value: el, label: el}
                                )
                            });
                            var warna = value.warna.split(",");
                            var optionWarna = [];
                            warna.forEach(el => {
                                optionWarna.push(
                                    {value: el, label: el}
                                )
                            });

                            var classStok, statStok, isDisabled;
                            if(value.stok>5){
                                classStok = "clgreen";
                                statStok = value.stok+" Stocks Available";
                                isDisabled = false;
                            } else if(value.stok > 0 && value.stok <= 5) {
                                classStok = "clwarning";
                                statStok = value.stok+" Stocks Available";
                                isDisabled = false;
                            } else {
                                classStok = "cldanger";
                                statStok = "Out of Stocks";
                                isDisabled = true;
                            }
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
                                                            <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
                                                            
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
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-lg-5 p-b-30">
                                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                                        <input type="hidden" ref={c => this.id_produk[index] = c} value={value.id} />
                                                        <h4 className="mtext-105 cl2 p-b-14">
                                                            <span>{value.nama_produk}</span>
                                                        </h4>
                                                        <span className="mtext-106 cl2">Rp. {value.harga}</span>
                                                        <p className={"stext-102 p-t-23 "+(classStok)}>{statStok}</p>
                                                        <p className="stext-102 cl3 p-t-23">{value.deskripsi_produk}</p>

                                                        <div className="p-t-33">
                                                            <div className="flex-w flex-r-m p-b-10">
                                                                <div className="size-203 flex-c-m respon6">
                                                                    Size
                                                                </div>
                                                                <div className="size-204 respon6-next">
                                                                    <div className="rs1-select2 bor8 bg0">
                                                                    <Select
                                                                        placeholder='Pilih Ukuran'
                                                                        onChange={this.sizeChange}
                                                                        isDisabled={isDisabled}
                                                                        options={optionSize}
                                                                    />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-w flex-r-m p-b-10">
                                                                <div className="size-203 flex-c-m respon6">
                                                                    Color
                                                                </div>
                                                                <div className="size-204 respon6-next">
                                                                    <div className="rs1-select2 bor8 bg0">
                                                                    <Select
                                                                        placeholder='Pilih Warna'
                                                                        onChange={this.colorChange}
                                                                        isDisabled={isDisabled}
                                                                        options={optionWarna}
                                                                    />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-w flex-r-m p-b-10">
                                                                <div className="size-204 flex-w flex-m respon6-next">
                                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                                        <button className={"btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m "+(value.stok<1 ? "disabled":"")} onClick={()=>this.kurangQty(index)} disabled={value.stok<1} >
                                                                            <FontAwesomeIcon icon={faMinus}/>
                                                                        </button>
                                                                        <input ref={c => this.qty_produk[index] = c}  className="mtext-104 cl3 txt-center num-product" type="number" name="qty" value={this.state.addToCart.qty} onChange={this.qtyChange} min="1" max={value.stok} disabled={value.stok<1} />
                                                                        
                                                                        <button className={"btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m "+(value.stok<1 ? "disabled":"")} onClick={()=>this.tambahQty(index)} disabled={value.stok<1} >
                                                                            <FontAwesomeIcon icon={faPlus}/>
                                                                        </button>
                                                                    </div>
                                                                    
                                                                    <button onClick={()=>{this.addToCartSubmit(index)}} className={"flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn0 p-lr-15 trans-04 "+(value.stok<1 ? "disabled":"")} disabled={value.stok<1}>
                                                                        Add to cart
                                                                    </button>
                                                                </div>
                                                            </div>
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
            </div>
        )
    }
}
HomeSlideshow.contextType = MyContext;
export default HomeSlideshow;