import React, { useRef, useState } from 'react'
import "./Header.css"
import { categories, Account } from '../../utils/category'
import { cartProducts } from '../../utils/cartProducts'
import { Link, useNavigate } from 'react-router-dom'
import { convertMoney } from '../../utils/convertMoney'


const Header = () => {
  const history = useNavigate()
  const [indexShow, setIndexShow] = useState(0)
  const [indexChildShow, setIndexChildShow] = useState(0)
  const [searchShow, setSearchShow] = useState(false)
  const [acountShow, setAcountShow] = useState(false)
  const [cartShow, setCartShow] = useState(false)
  const [keyword, setKeyword] = useState("")

  const countTotal = (array) => {
    let sum = 0
    array.forEach((product) => {
      sum += product.price
    })
    return sum
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    history(`search/${keyword}`)
  }

  return (
    <div className="header box-border text-[14px] leading-1.6 text-black font-[100]">
      
      {/* ---------------------trên------------------------- */}
      <div className="box-border bg-black text-white h-9 cursor-pointer">
        <div className="flex flex-row justify-between px-8 pb-[9px] pt-[10px] text-[13px] ">
          <div className="header-left">

            <Link to="./" className="header-left-home w-2/3">
              <i className="fa-solid fa-house-chimney mr-[4px] -align-[0.125em]"></i>
              {/* <i class="fa-solid fa-house-chimney"></i> */}
              Hệ Thống Showroom
            </Link>

          </div>
          <div className="header-right ">

            <Link to="tel:0246.2909098">
            <i class="fa-sharp fa-solid fa-phone-flip fa-beat mr-[5px] -align-[0.125em]"></i>
            {/* <i class="fa-solid fa-phone-flip fa-beat"></i> */}
              Mua hàng online: 0246.2909098
            </Link>

          </div>
        </div>
      </div>
      {/*  ------------------------------------dưới------------------------------------------------ */}
      <div className="px-[0px] py-[15px] bg-white ">{/*   	box-border*/}
        <div className="mx-auto my-0 max-w-[1330px] px-[15px] py-0   ">{/* max-w-[1360px] mx-auto px-[30px] py-0 after:content[''] after:block after:clear-both  */}
          <div className=' '>
            <div className="header-logo list-none m-0 p-0 -ml-[30px] inline-flex w-[calc(100%+30px)] items-center after:content[''] after:block after:clear-both " >{/*  my-0 mx-auto p-0 -ml-[30px]  inline-flex flex-row w-[calc(100%+30px)]   */}
              <div className='box-border float-left min-h-[1px] pl-[30px] align-top w-2/12 '>{/* r  min-h-[1px] pl-[30px]  w-[100%]  */}
                <Link to="./" className="header-logo1 block align-middle max-w-[100%] border-0 border-none ">
                  <img src="//theme.hstatic.net/200000182297/1000887316/14/logo.png?v=509" alt="THỜI TRANG CÔNG SỞ" />
                </Link>
              </div>
              <div className="box-border float-left min-h-[1px] pl-[30px] align-top w-10/12">{/*  box-border  min-h-[1px] pl-[30px] align-top w-[100%]  */}
                <div className='relative'>{/*  */}
                  <div>
                    <ul className="inline-flex list-none ml-0 list-outside m-0 text-right z-[99] p-0 ">{/*  */}

                      {
                        categories.map((main, i) => (
                          <li className=" inline-block px-[10px] py-[15px] relative " onMouseEnter={() => setIndexShow(i + 1)} onMouseLeave={() => setIndexShow(0)}>
                            <Link to={`${main.link}`} className="Sanpham">
                              <span className={`mr-[5px] ${indexShow === i + 1 && "font-[700] text-[#070707]"}`}>{main.name}</span>
                              {main.parent.length > 0 && <i className="fa fa-angle-down" aria-hidden="true"></i>}
                            </Link>
                            <ul className={`header-button absolute ${indexShow === i + 1 ? 'show_effect' : 'hidden'}`}>
                              {main.parent.map((parent, iParent) => (
                                <li className="header-button-sanpham relative font-normal text-[13px]" onMouseEnter={() => setIndexChildShow(iParent + 1)} onMouseLeave={() => setIndexChildShow(0)} >
                                  <Link to={`${parent.link}`} className="header-button1">
                                    <span className='mr-[5px]'>{parent.name}</span>
                                    {(parent?.children?.length > 0) && <i className="fa fa-angle-right" aria-hidden="true"></i>}
                                  </Link>
                                  <ul className={`header-button-child absolute ${indexChildShow === iParent + 1 ? 'show_effect_child' : 'hidden'}`}>
                                    {
                                      parent?.children?.map((child, ichild) => (
                                        <li className="relative">
                                          <Link to={`${child.link}`} className="header-button1">
                                            {child.name}
                                          </Link>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))
                      }
                      <li onMouseEnter={() => setSearchShow(true)} onMouseLeave={() => setSearchShow(false)} className="header-loco inline-block m-0  relative z-[9999] list-item  relative after:content-['after:block after:absolute after:border-l-[1px] after:border-solid after:border-l-stone-400 after:h-5 after:-right-0 after:top-1/2 after:-translate-y-1/2 ']   ">
                        <div className='pointer-events-auto p-[15px] '>
                          <img src="//theme.hstatic.net/200000182297/1000887316/14/search.png?v=509" alt="search" /></div> {/* search */}
                        <ul className={`no-bullets z-50 ${searchShow ? "search_bars" : "hidden"}`}>
                          <form className="search-bar relative h-[40px] rounded-[2px] overflow-hidden" role="search">
                            <input value={keyword} onChange={(e) => { setKeyword(e.target.value) }} type="search" placeholder="Tìm kiếm..." className="input-group-field w-[100%] h-[100%] px-[10px] py-[10px] " aria-label="Tìm kiếm..." />
                            <button type="submit" onClick={handleSubmit} className="btn icon-fallback-text button-form-search">
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </ul>
                      </li>


                      <li onMouseEnter={() => setAcountShow(true)} onMouseLeave={() => setAcountShow(false)} className="header-loco inline-block text-[13px] m-0 z-[9999] list-item  relative relative  after:content-['after:block after:absolute after:border-l-[1px] after:border-solid after:border-l-stone-400 after:h-5 after:-righ-0 after:top-1/2 after:-translate-y-1/2 ' ">
                        <div className='flex flex-row items-center font-normal text-black  px-[15px] py-[15px]'>
                          <img src="//theme.hstatic.net/200000182297/1000887316/14/account.png?v=509" alt="account" className="text-[13px]" />
                          Tài khoản
                        </div>

                        <ul className={`no-bullets absolute ${acountShow ? "Show-Account" : "hidden"}`}>
                          {
                            Account.map((acc, iacc) => (
                              <li className="relative font-normal text-[13px]">
                                <Link to={`${acc.link}`} className="header-button1">
                                  {acc.name}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </li>

                      <li onMouseEnter={() => setCartShow(true)} onMouseLeave={() => setCartShow(false)} className="header-loco inline-block text-[13px] m-0  z-[9999] list-item relative   ">

                        <div className="desktop-cart-wrapper">
                          <div className="flex flex-row items-center justify-around font-normal  text-black relative top-1.5 ml-.5 -translate-y-[3px]  px-[15px] py-[15px]">
                            <img src="//theme.hstatic.net/200000182297/1000887316/14/cart.png?v=509" alt="cart" className='ml-1' />
                            <span className='ml-[6px] text-[13px]'>Giỏ hàng</span>
                            <span className="absolute top-[19px] left-[25px] text-[14px] text-white">{cartProducts.length}</span>
                          </div>
                          <div className="quickview-cart">
                            {
                              cartProducts.length > 0 ?

                                <div className={`no-bullets w-[300px] overflow-hidden ${cartShow ? "Show-Cart" : "hidden"}`}>
                                  <h3 className='relative p-[5px] bg-black uppercase text-white text-[13px]'>

                                    Giỏ hàng của tôi (2 sản phẩm)

                                    <span className='absolute right-[12px] top-[3px] text-white text-[16px] font-[800]'>x</span>
                                  </h3>
                                  <ul className="no-bullets h-[280px] max-h-[280px] overflow-y-auto">
                                    {
                                      cartProducts.map((cart, i) => (
                                        <li className="cart-item relative mt-[5px] mb-[5px] ">
                                          <span className="cart__remove absolute right-[10px] -top-[1px] text-[17px] font-[900] text-red-700"> x </span>
                                          <div className=" flex justify-between">
                                            <div >
                                              <div >
                                                <a href="/products/cong-so-dai-tay-3962">

                                                  <img className='w-[99px] h-[130px]' src={cart.image} alt="ÁO KHOÁC DÁNG NGẮN AK17272" />

                                                </a>
                                              </div>
                                            </div>
                                            <div className="flex flex-col pl-[10px]">
                                              <div className="cart-item-info text-left flex-1 uppercase font-[400] text-black">
                                                <h3 className='mb-[7px]'>{cart.name}</h3>
                                                <span className="quantity">Số lượng: 1</span>
                                              </div>
                                              <div className="cart-item-price-quantity text-left">
                                                <span className="current-price relative -right-[70px] text-black font-[600]">Giá/sp: {convertMoney(cart.price)}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      ))
                                    }
                                  </ul>

                                  <div>
                                    <div className="qv-cart-total text-[13px] font-bold text-black uppercase p-[5px] border-t-[1px] border-[#999] border-solid">
                                      Tạm tính: <span className='absolute right-[10px] text-[13px]'>{convertMoney(countTotal(cartProducts))}</span>
                                    </div>
                                    <div className="quickview-cartactions clearfix">
                                      <div className='btn-cart btn-cart-watch'>Xem giỏ hàng</div>
                                      <div className='btn-cart btn-cart-bill'>Thanh toán</div>
                                    </div>
                                  </div>
                                </div>
                                :

                                <ul className={`no-bullets ${cartShow ? "Show-Cart" : "hidden"}`}>
                                  <li>Bạn chưa có sản phẩm nào trong giỏ hàng!</li>
                                </ul>
                            }





                          </div>
                        </div>

                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header