import React, { Component } from 'react';
import gb from './17.jpg';
import iheart from './icons/icon-heart-01.png';
import iheart2 from './icons/icon-heart-02.png';
import './css/index.css';
import './css/hamburgers.min.css';
import './css/util.css';
import './css/slick.css';
import './css/magnific-popup.css';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import axios from "axios";

import Header from "./Header";
import HeaderCart from "../lib/store/HeaderCart";
import HeaderWish from "../lib/store/HeaderWish";
import HomeSlideshow from "./HomeSlideshow";

import IsoTopeGrid from "react-isotope";

import {Context} from './Context';

import io from 'socket.io-client';



const socket = io();

// socket.on('connect', () => {
//     $events.appendChild(newItem('connect'));
// });

// const uAPI = 'https://api-online-store-v1.herokuapp.com';
const uAPIlocal = 'http://'+window.location.hostname+':8080';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isoHomeFilter: [],
            isoHomeLayout: [],
            connect: false ,
        }

        
        this.getApiIsotope = this.getApiIsotope.bind(this);
        this.backtotop = this.backtotop.bind(this)
        
        
        
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.filterChange = this.filterChange.bind(this);

    }
    filterChange(sort){

        // var filterValue = $(this).attr('data-filter');
        // var filterValue = e.target.getAttribute('data-filter');
        // var kelas = e.currentTarget.id;
        // console.log(filterValue)
        // console.log(kelas)
        // console.log(e.currentTarget)
        // $("#"+kelas).addClass('how-active1');
        
        // console.log(filterValue);
            // $topeContainer.isotope({filter: filterValue});
        // console.log(sort)

        let isoHomeFilter = [...this.state.isoHomeFilter];
        var Obj = [];
        isoHomeFilter.forEach(el => {
            Obj.push({
                title: el.title,
                label: el.label,
                isChecked: false
            })
        });
        // console.log(Obj)
        let index = Obj.findIndex(el => el.label === sort);
        // if (index !== 0) {
        //     isoHomeFilter[0] = {...isoHomeFilter[0], isChecked: false};
        // } 
        
        Obj[index] = {...Obj[index], isChecked: !Obj[index]['isChecked']};
        // console.log(Obj)
        // console.log(isoHomeFilter)
        this.setState({ isoHomeFilter: Obj });

        // let newMarkers = this.state.isoHomeFilter.map(el => (
        //     el.label===sort ? {...el, isChecked: !el.isChecked}: el
        // ))
        // console.log(newMarkers)
        // this.setState({ isoHomeFilter: newMarkers },()=>console.log(this.state.isoHomeFilter));
    //   this.setState({ markers });
      
        
        // console.log(sort)
        // // const onTheList = {...this.state.isoHomeFilter}.includes(sort);
        // // if (onTheList) {
        // //     console.log(onTheList)
        // // }
        // var index = this.state.isoHomeFilter.findIndex(x=> x.label === sort);
        // // const items = Object.assign({}, this.state.isoHomeFilter);
        // // const match = items.find((item) => item.label === sort);
        // console.log(index);
        // // if (index !== -1){
        //     let temporaryarray = {...this.state.isoHomeFilter};
        //     temporaryarray[index]['isChecked'] = !temporaryarray[index]['isChecked'];
        //     console.log(temporaryarray);

        //     // setArray(temporaryarray);
        // }
        // if (index === 0) {
        //     this.setState({
        //         isoHomeFilter: [
        //             ...this.state.isoHomeFilter.slice(0,index),
        //             Object.assign({}, this.state.isoHomeFilter[index], {label:sort, isChecked:true}),
        //            ...this.state.isoHomeFilter.slice(index+1)
        //         ]
        //     },()=>console.log(this.state.isoHomeFilter));
        // } else {
        //     this.setState({
        //         isoHomeFilter: [
        //             Object.assign({}, this.state.isoHomeFilter[0], {label:"all", isChecked:false}),
        //             ...this.state.isoHomeFilter.slice(1,index),
        //             Object.assign({}, this.state.isoHomeFilter[index], {label:sort, isChecked:!this.state.isoHomeFilter[index].isChecked}),
        //            ...this.state.isoHomeFilter.slice(index+1)
        //         ]
        //     },()=>console.log(this.state.isoHomeFilter));
        // }
        // this.setState({
        //     isoHomeFilter: [
        //         // Object.assign({}, this.state.isoHomeFilter[0], {label:"all", isChecked:false}),
        //         ...this.state.isoHomeFilter.slice(0,index),
        //         // Object.assign({}, ...this.state.isoHomeFilter.slice(0,index), {label:this.state.isoHomeFilter.slice(0,index), isChecked:!this.state.isoHomeFilter[index].isChecked}),
        //         Object.assign({}, this.state.isoHomeFilter[index], {label:sort, isChecked:!this.state.isoHomeFilter[index].isChecked}),
        //        ...this.state.isoHomeFilter.slice(index+1)
        //     ]
        // },()=>console.log(this.state.isoHomeFilter));
        
 
        // this.state.isoHomeFilter.forEach(el => {
        //     console.log(el)
        //     if (el.label === sort) {
        //         console.log(el)
        //         this.setState({
        //             isoHomeFilter: [...this.state.isoHomeFilter, {label:this.el.value, isChecked:true}],
        //         },()=>console.log(this.state.isoHomeFilter))
        //     }
        //     // Obj.push(
        //     //     el.value,
        //     // )
        // });
        // this.setState({
        //     ...this.state.isoHomeFilter,
        //     isChecked: sort
        // },()=>console.log(this.state.isoHomeFilter))
    }
    
    
    getApiIsotope(){
        axios.get(uAPIlocal+'/api/v1/home/isotope')
        .then(response => {
            // console.log(response)
                return response.data
            }
            // response.data.results.map(slideshow => ({
            //     // value: `${subdistrict.subdistrict_name}`,
            //     // label: `${subdistrict.subdistrict_name}`,
            //     // subdistrict_id: `${subdistrict.subdistrict_id}`,
            //     // subdistrict_name: `${subdistrict.subdistrict_name}`,
            // }))
        )
        .then(jsonData => {
            console.log(jsonData)
            var isoHomeFilter = jsonData.filters;
            var isoHomeLayout = jsonData.layout;
            this.setState({
                isoHomeFilter: isoHomeFilter,
                isoHomeLayout: isoHomeLayout
            })

            // if (jsonData.length !== 0) {
            //     this.setState({
            //         isoHomeFilter: jsonData
            //     },()=>console.log(this.state.category))
                
            // }
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
    
    
    
    

    goToPrevSlide(index,id){
        this.saShow(index, id)
    }
      
    goToNextSlide(index,id){
        this.saShow(index, id)
    }
    componentDidMount(){
        socket.on("connect", () => 
            this.setState({ 
                connect: true 
            },()=>console.log(this.state.connect))
        );

        this.getApiIsotope();
        
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
        // var headYC = JSON.parse(localStorage.getItem("YourCart"));
        // if (headYC !== null) {
        //     this.setState({
        //         context: {
        //             ...this.state.context,
        //             dtNotifyCart: headYC.length,
        //         }
                
        //     })
        // }
        // console.log(this.state.connect)s
    }
    render() {

        return (
            <Context>                
                <Header/>
                <HeaderCart/>
                <HeaderWish/>

                {/* Slider */}
                <HomeSlideshow/>
                
                
       
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
                                Daftar Product
                            </h3>
                        </div>

                        <div className="flex-w flex-sb-m p-b-52">
                            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                                {/* <button id="sort_semua" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*" onClick={this.filterChange}>
                                    Semua
                                </button> */}
                                {/* <button id="sort_test" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".test" onClick={this.filterChange}>
                                    Test
                                </button>
                                <button id="sort_test2" className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".test2" onClick={this.filterChange}>
                                    Test2
                                </button> */}
                                {/* {
                                    this.state.category ? (
                                        this.state.category.map((value,index)=>{
                                            return(
                                                <button key={index} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter={"."+(value.name)}>
                                                    {value.name}
                                                </button>
                                            )
                                        })
                                    ):(
                                        <div></div>
                                    )
                                } */}

                                {/* Filter component */}
                                {
                                    this.state.isoHomeFilter ? (
                                        this.state.isoHomeFilter.map((value, index)=>{
                                            return(
                                                <div key={`${value.label}_key`} >
                                                <button onClick={async ()=> {await this.filterChange(value.label)}} className={"stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 "+(value.isChecked ? 'how-active1':'')}>
                                                    {value.title}
                                                </button>
                                                </div>
                                            )
                                        })
                                    ):(
                                        <div></div>
                                    )
                                }
                                {/* <div className="filter-container">
                                    {filters.map(f => (
                                    <div className="filter" key={`${f.label}_key`}>
                                        <input
                                        id={f.label}
                                        type="checkbox"
                                        value={f.label}
                                        onChange={onFilter}
                                        checked={f.isChecked}
                                        />
                                        <label htmlFor={f.label}>{f.label}</label>
                                    </div>
                                    ))}
                                </div> */}

                            </div>

                            
                        </div>
                    
                        <div className="row isotope-grid">
                            {/* <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item test">
                                test
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item test2">
                                test2
                            </div> */}
                            {/* {
                                this.state.isoHomeLayout ? (
                                    this.state.isoHomeLayout.map((value, index)=>{
                                        return(
                                            <div key={index} > */}
                                                <IsoTopeGrid
                                                gridLayout={this.state.isoHomeLayout} // gridlayout of cards
                                                noOfCols={4} // number of columns show in one row
                                                unitWidth={250} // card width of 1 unit
                                                unitHeight={300} // card height of 1 unit
                                                filters={this.state.isoHomeFilter} // list of selected filters
                                                >
                                                {
                                                    this.state.isoHomeLayout ? (
                                                        this.state.isoHomeLayout.map
                                                        // ((value, index)=>{
                                                        //     return(
                                                        //         <div key={index} className={value.filter[0]}>
                                                        //             <div className="block2">
                                                        //                 <div className="block2-pic hov-img0">
                                                        //                     <img src={uAPIlocal+'/'+value.foto_utama_url} alt={value.foto_utama} />
                                                        //                     <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04" onClick={() => this.qvShow(index)}>
                                                        //                         Quick View
                                                        //                     </Link>
                                                        //                 </div>
                                                        //                 <div className="block2-txt flex-w flex-t p-t-14">
                                                        //                     <div className="block2-txt-child1 flex-col-l ">
                                                        //                         <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                        //                             <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                        //                             <span id="wish-slide-product">{value.nama_produk}</span>
                                                        //                         </Link>

                                                        //                         <span className="stext-105 cl3">
                                                        //                             Rp. {value.harga}
                                                        //                         </span>
                                                        //                     </div>
                                                        //                     <div className="block2-txt-child2 flex-r p-t-3">
                                                        //                         <Link id="wish-slide" to="#" className="btn-addwish-b2 dis-block pos-relative ">
                                                        //                             <img className="icon-heart1 dis-block trans-04" src={iheart} alt="ICON" />
                                                        //                             <img className="icon-heart2 dis-block trans-04 ab-t-l" src={iheart2} alt="ICON" />
                                                        //                         </Link>
                                                        //                     </div>
                                                        //                 </div>
                                                        //             </div>
                                                        //         </div>
                                                        //     )
                                                        // })
                                                        (card => (
                                                            <div key={card.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
                                                                <div className="block2">
                                                                    <div className="block2-pic hov-img0">
                                                                        <img src={uAPIlocal+'/'+card.foto_utama_url} alt={card.foto_utama} />
                                                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn0 p-lr-15 trans-04" onClick={() => this.qvShow(card.id)}>
                                                                            Quick View
                                                                        </Link>
                                                                    </div>
                                                                    <div className="block2-txt flex-w flex-t p-t-14">
                                                                        <div className="block2-txt-child1 flex-col-l ">
                                                                            <Link to="#" className="stext-104 cl4 hov-cl1 trans-04 p-b-6">
                                                                                <span id="wish-slide-ip" style={{display:"none"}}>1</span>
                                                                                <span id="wish-slide-product">{card.nama_produk}</span>
                                                                            </Link>

                                                                            <span className="stext-105 cl3">
                                                                                Rp. {card.harga}
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
                                                        ))
                                                    ):(
                                                        <div></div>
                                                    )
                                                }
                                                </IsoTopeGrid>
                                            {/* </div>
                                            )
                                    })
                                ):(
                                    <div></div>
                                )
                            } */}
                                {/* <IsoTopeGrid
                                gridLayout={cardsLayout} // gridlayout of cards
                                noOfCols={3} // number of columns show in one row
                                unitWidth={200} // card width of 1 unit
                                unitHeight={100} // card height of 1 unit
                                filters={this.state.isoHomeFilter} // list of selected filters
                                >
                                {cardsLayout.map(card => (
                                    <div key={card.id} className={card.filter[0]}>
                                    {card.id} + {card.filter[0]}
                                    </div>
                                ))}
                                </IsoTopeGrid> */}
                        </div>
                    </div>
                </section>
                
                {/* Back to top  */}
                <div className="btn-back-to-top" id="myBtn" onClick={this.backtotop}>
                    <span className="symbol-btn-back-to-top">
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </span>
                </div>

            </Context>
            
        );
    }
}

export default withRouter(Index);