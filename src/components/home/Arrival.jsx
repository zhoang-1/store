import React from 'react'
import "./Arrival.css"
const Arrival = () => {
  return (
    <div className='pt-[5px] mb-[25px]'>
        <div className='box-border'>
          <div className="inner  ">
            <div className="grid  -ml-[5px]  list-none m-0 p-0  after:content[''] after:table after:clear-both">
              <div className="grid__item1  pl-[5px] w-[50%] box-border float-left min-h-[1px] pl-[30px] align-top w-[100%]   ">
                <div className="home-new-banner-item ">
                  <a href="https://nemshop.vn/collections/san-pham-moi">
                    <div className="image w-[100%] align-middle max-w-[100%] boder-0 border-none overflow-clip">
                      <img src="//theme.hstatic.net/200000182297/1000887316/14/home_new_banner_1.jpg?v=514" alt="NEW COLLECTION" className='w-[100%]'/>
                    </div>
                    <div className="title_btn">
                      <div className="title font-bold text-[16px] leading-[27px] uppercase">NEW COLLECTION</div>
                      <div className="btn_shopnow font-medium text-[14px] leading-[21px]">
                        SHOP NOW
                      </div>
                    </div>  
                  </a>
                </div>
              </div>
              <div className="grid__item2  pl-[5px]  w-[50%] box-border float-left min-h-[1px] pl-[30px] align-top w-[100%]  ">
                <div className="home-new-banner-item">
                  <a href="https://nemshop.vn/collections/dam">
                    <div className="image">
                      <img src="//theme.hstatic.net/200000182297/1000887316/14/home_new_banner_2.jpg?v=514" alt="DRESS" className='w-[100%]'/>
                    </div>
                    <div className="title_btn">
                      <div className="title font-bold text-[16px] leading-[27px] uppercase">DRESS</div>
                      <div className="btn_shopnow font-medium text-[14px] leading-[21px]">
                        SHOP NOW
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Arrival