import React from "react";
import img1 from "../../../assests/images/Banner/banner cricket1.jpg";
import img2 from "../../../assests/images/Banner/hocky1.png";
import img3 from "../../../assests/images/Banner/stadium_10.png";
import BannerItem from "./BannerItem";


const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },

]



const Banner = () => {
  return (
    <div className="carousel w-full py-5">
            {
                bannerData.map(slide =><BannerItem
                    key={slide.id}
                    slide = {slide}
                ></BannerItem>)
            }
    </div>
  );
};

export default Banner;
