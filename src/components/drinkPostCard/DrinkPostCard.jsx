import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@material-tailwind/react';
import Loader from '../loader/Loader';
import myContext from '../../context/data/myContext';

function DrinkPostCard() {
  const context = useContext(myContext);
  const { mode, getAllDrink } = context;
  const navigate = useNavigate();

  const carouselSettings = {
    dots: false, // Hide the carousel dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Enable automatic slide movement
    autoplaySpeed: 3000, // Set the delay between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <></>, // Hide the previous arrow button
    nextArrow: <></>, // Hide the next arrow button
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
        <h1 className=' text-center text-6xl font-bold my-4'
            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            Drinks
          </h1>
          <div className="mb-5">
            {getAllDrink.length > 0 ? (
              <Slider {...carouselSettings}>
                {getAllDrink.map((item, index) => (
                  <div className="p-4" key={index}>
                    <div
                      style={{
                        background:
                          mode === 'dark' ? 'rgb(55, 179, 77)' : 'white',
                        borderBottom:
                          mode === 'dark'
                            ? ' 4px solid rgb(226, 232, 240)'
                            : ' 4px solid rgb(55, 179, 77)',
                      }}
                      className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 ${
                        mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'
                      } rounded-xl overflow-hidden`}
                      onClick={() => navigate(`/drinkinfo/${item.id}`)}
                    >
                      <img className="w-full" src={item.thumbnail} alt="drink" />
                      <div className="p-6">
                        <h2
                          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                          style={{
                            color:
                              mode === 'dark'
                                ? 'rgb(226, 232, 240)'
                                : '#373737',
                          }}
                        >
                          {item.date}
                        </h2>
                        <h1
                          className="title-font text-lg font-bold text-gray-900 mb-3"
                          style={{
                            color:
                              mode === 'dark'
                                ? 'rgb(226, 232, 240)'
                                : '#373737',
                          }}
                        >
                          {item.drinks.title}
                        </h1>
                        <p
                          className="leading-relaxed mb-3"
                          style={{
                            color:
                              mode === 'dark'
                                ? 'rgb(226, 232, 240)'
                                : '#373737',
                          }}
                        >
                          {item.drinks.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <Loader />
            )}
          </div>
          <div className="flex justify-center my-5">
            <Link to="/alldrinks">
              <Button
                style={{
                  background:
                    mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : 'rgb(55, 179, 77)',
                  color:
                    mode === 'dark'
                      ? 'rgb(55, 179, 77)'
                      : 'rgb(226, 232, 240)',
                }}
              >
                See More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DrinkPostCard;