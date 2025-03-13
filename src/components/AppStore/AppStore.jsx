import React from "react";
import AppStoreImg from '../../assets/Images/StockImages/App_Store_Badge.png';
import PlayStoreImg from "../../assets/Images/StockImages/Play_Store_badge.png";
import Gif from '../../assets/Images/StockImages/delivery_bike.gif';

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                FoodMania is available on Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] mr-1 sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] ml-1 sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="mobile bike"
                className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;