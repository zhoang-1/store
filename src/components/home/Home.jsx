import React, { useState, useEffect } from "react";
import SlideShow from './SlideShow'
import Arrival from "./Arrival"
import Blog from "./Blog"
import HotProduct from "./HotProduct"
import NewProduct from "./NewProduct"

import "./Home.css"
const Home = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 500) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 500) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, [window.pageYOffset]);
    return (
        <div>
            <SlideShow />
            <Arrival />
            <NewProduct />
            <HotProduct />
            <Blog />
            
            {
                showScroll && <div onClick={scrollTop} className='croll z-[100] fixed bottom-[10px] right-[10px] cursor-pointer'>
                <h3>SCROLL TO TOP</h3>
                <i class="fa-solid fa-arrow-up text-[18px] text-white font-[700]"></i>
            </div>
            }
        </div>
    )
}

export default Home