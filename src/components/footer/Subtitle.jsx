import React from 'react'
import "./Subtitle.css"

const Subtitle = () => {
  return (
    <div>
      <div class="pre-footer py-[50px] px-0 bg-[#EFEFF4]">
        <div class="wrapper py-0 px-[30px] max-w-[1360px] mx-auto my-auto px-0  after:content[''] after:table after:clear-both">
          <div class="inner">
            <div class="grid-uniform  list-none m-0 p-0 -ml-[30px]">
              <div class="grid__item box-border float-left min-h-[1px] pl-[30px] align-top w-[100%]  ">
                <div class="ft-subscribe  text-center ">

                  <div class="section-title text-center  font-bold">
                    <h2 className='m-0 text-[32px] leading-[54px] uppercase m-[6px]'>
                      đăng ký bản tin
                    </h2>
                    <p className='text-[14px]  my-0 mt-0 mb-[15px]'>
                      Đăng ký nhận bản tin NEM để được cập nhật những mẫu thiết kế mới nhất
                    </p>
                  </div>
                  <div class="ft-sub-wrapper ">

                    <div class='block box-border w-[100%] max-w-[600px] my-0 mx-auto relative my-0 flex justify-center items-center ' method='post'>
                      <input className='px-[10px] py-[8px]' type="email" value="" placeholder="Vui lòng nhập email..." name="contact[email]" id="Email"  />
                      <button type="submit" name="subscribe" id="subscribe" >ĐĂNG KÝ</button>
                    </div>
                  </div>
                </div>
                <div class="ft-social mt-[50px] text-center ">
                  <a href="https://www.facebook.com/" class="fb bg-[#007AFF] inline-block h-[32px] leading-[32px] w-[32px] text-white rounded-[100%] mr-[8px] text-center relative  text-[18px]" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/" class="insta bg-[#E83349] inline-block h-[32px] leading-[32px] w-[32px] text-white rounded-[100%] mr-[8px] text-center relative  text-[18px]" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a href="https://www.youtube.com/" class="youtube bg-[#EB1111] inline-block h-[32px] leading-[32px] w-[32px] text-white rounded-[100%] mr-[8px] text-center relative  text-[18px]" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subtitle