import React from 'react';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
          <div className="carousel-img">
                <img src={image} className="w-full banner-img  rounded-xl" alt="" />
          </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5  right-5 top-1/4 text-center ">
          <h1 className="text-6xl font-bold text-white  ">
            Capture The Best, <br />
            <span className="text-orange-400 ">Sports Moment!!</span>
          </h1>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2  left-24  right-24 top-1/2  text-center ">
          <p className="text-white text-2xl ">
            Sports photography is a type of photography that covers every sport
            and sporting event,  capturing the action of a game <br /> and behind the
            scenes of the players.  This type of photography helps to promote
            brands, the players, as well as the sport.
          </p>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2  left-24  right-24 top-3/4  text-center ">
                <button className="btn btn-success">Learn More</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle bg-red-500">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle bg-red-500">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;