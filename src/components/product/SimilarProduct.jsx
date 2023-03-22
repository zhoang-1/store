import React from 'react'
import {similarProduct}from '../../utils/similarProduct'
import "./SimilarProduct.css"


import { Swiper, SwiperSlide, navigation } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Navigation, Pagination } from "swiper";
import { convertMoney } from '../../utils/convertMoney';


const SimliarProduct = () => {
  return (
    <div className='block box-boder'>
      <div className="   py-0 px-[30px] max-w-[1360px] mx-auto my-auto px-0 py-[15px] after:content[''] after:table after:clear-both">
        <div className="inner">
          <div className="section-title text-center  font-bold uppercase m-[6px] text-[32px] leading-[54px] text-center">
            <h2 className=''>Sản phẩm Tương tự</h2>
          </div>
          <div className="grid-uniform -ml-[5px] list-none m-0 p-0 -ml-[30px]">
            <div className="owl-carousel none w-[100%] w-[1299px] overflow-hidden float-left opacity-100 block relative  left-0 block  after:content[''] after:block after:clear-both   ">

              <>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  freeMode={true}
                  pagination={true}
                  navigation
                  loop
                  // loop
                  modules={[FreeMode, Pagination, Navigation]}
                  className="mySwiper"
                >

                  <div className="wrapper_slider">
                  {
                    similarProduct.map((product, i) => (
                      <SwiperSlide>
                        <div className='w-[326px] float-left'>
                          <div className="grid__item box-boder float-left min-h-[1px] pl-[30px] align-top  w-[100%] pl-[5px]">
                            <div className="product-item overflow-hidden relative">
                              <div className="product-img overflow-hidden relative">
                                <a href={product.link} className='block text-black no-underline bg-transparent'>
                                  <img

                                    className="lazyload w-[100%] align-middle max-w-[100%] h-[] boder-0 boder-none" src={product.image}

                                    alt={product.name} />
                                </a>


                                <div className="product-actions text-center after:content[''] after:table after:clear-both">
                                  <a className="product-link absolute top-0 left-0 w-[100%] h-[100%] z-[3] text-black" href={product.link}></a>
                                  <div className='relative z-[4] w-[100%]'>
                                    <a href="https://m.me/nemfashion.official" target="_blank" className='w-[80%] px[20px] py-[7px] uppercase hover:bg-white hover:text-black font-bold inline-block bg-transparent text-white text-[16px] border-[1px] border-solid border-white'>Tư vấn</a>
                                  </div>
                                </div>
                              </div>

                              <div className="product-item-info text-center p-[10px]">
                                <div className="product-title ">
                                  <a href={product.link} className='inline-block text-[14px] leading-[21px] text-neutral-400 h-[38px] font-bold uppercase hover:text-black'>{product.name}</a>
                                </div>

                                <div className="product-price clearfix">
                                  <span className="text-[#070707] text-[16px] font-bold current-price text-black leading-[24px]">{convertMoney(product.price)}</span>

                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </SwiperSlide>

                    ))
                  }
                  </div>
                </Swiper>
              </>


            </div>
            {/* <div className='owl-contros m-0 mt-[10px] text-center select-none'>
              <div className='owl-button'>
                <div className='owl-prev left-[5px] font-[18px]'>
                  
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="wrapper my-[40px] mx-0 block">
        <div className="inner">
          <div className="grid mg-left-5">
            <div className="owl-carousel owl-theme">
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SimliarProduct