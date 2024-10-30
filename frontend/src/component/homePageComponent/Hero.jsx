import React from 'react'
import "./Hero.css"
import { IoMdSearch } from "react-icons/io";
import Mycard from './card';

const Hero = () => {
    let array = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg"]
    return (
        <div className='Hero py-5 '>
            <div className="searchbar">
                <p style={{ color: '#fff' }}>Explore pupular in the community!</p>
                <p style={{ color: "#8d5cdf" }}>Genrated with Ai</p>
                <div className='searchinput'>
                    <IoMdSearch color='#fff' />
                    <input type="text" placeholder='search with name' style={{ backgroundColor: "transparent", border: "none" }} />
                </div>
            </div>
            <div className="cards container py-5">
                {
                    array?.map((e) => {
                        console.log(e);
                        return (<>
                            <Mycard image={e} />
                        </>)
                    })
                }
            </div>
        </div>
    )
}

export default Hero