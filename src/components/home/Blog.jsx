import React from 'react'
import { blogs } from '../../utils/blogs'
import "./Blog.css"

import { Swiper, SwiperSlide, navigation } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Navigation, Pagination } from "swiper";
import { convertMoney } from '../../utils/convertMoney';


const Blog = () => {
  return (
    <div className='block box-boder'>
      <div className="   py-0 px-[30px] max-w-[1360px] mx-auto my-auto px-0  after:content[''] after:table after:clear-both">
        <div className="inner">
          <div className="section-title text-center  font-bold">
            <h2 className='m-0 text-[32px] leading-[54px] uppercase m-[6px]'>NEM'S BLOG</h2>
            <p className='text-[14px]  my-0 mt-0 mb-[15px]'>ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH</p>
          </div>
          <div className=" -ml-[5px] list-none m-0 p-0 -ml-[30px]">
            <div className="owl-carousel none w-[100%] w-[1291px] overflow-hidden float-left opacity-100 block relative  left-0 block  after:content[''] after:block after:clear-both   ">

              <>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  freeMode={true}
                  pagination={true}
                  navigation
                  loop
                  // loop
                  modules={[FreeMode, Pagination, Navigation]}
                  className="mySwiper"
                >

                  <div className="wrapper_slider ">
                  {
                    blogs.map((product, i) => (
                      <SwiperSlide>
                        <div className='w-[435px] float-left '>
                          <div className="grid__item box-boder float-left min-h-[1px] pl-[30px] align-top  w-[100%] pl-[5px]">
                            <div className="product-item overflow-hidden relative">
                              <div className="product-img overflow-hidden relative">
                                <a href={product.link} className='relative block overflow-hidden w-[100%] pt-[60%] text-black no-underline bg-transparent'>
                                  <img

                                    className="lazyload w-[100%] absolute inset-0  text-center align-middle boder-0 boder-none" src={product.image}

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
                                  <a href={product.link} className='inline-block text-[14px] leading-[21px]  h-[38px] font-[700] uppercase hover:text-black'>{product.name}</a>
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

export default Blog