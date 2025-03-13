import React from 'react';
import yellowBackgroundImg from '../../assets/Images/StockImages/yellowBackgroundImg.jpg'
import Food1 from '../../assets/Images/StockImages/FoodImg1-removebg-preview.png'
import Food2 from '../../assets/Images/StockImages/FoodImg2-removebg-preview.png'
import Food3 from '../../assets/Images/StockImages/FoodImg3-removebg-preview.png'


const ImageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  },
];

const bgImage = {
  backgroundImage: `url(${yellowBackgroundImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(Food1);

  return (
    <>
      <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* Text Section */}
            <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true" 
            className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to {" "}
                <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Food
                </span>{""}
                io
              </h1>
              <p className='text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure nobis illo nisi adipisci similique eligendi in amet alias veritatis?
              </p>
              <div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
                  Order Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[500px] flex justify-center items-center relative'>
              {/* Main Image Section */}
              <div className='flex justify-center items-center h-[300px] sm:h-[450px] mx-auto spin'>
                <img src={imageId} alt="" className='w-[300px] sm:w-[450px] mx-auto spin'/>
              </div>
              {/* Image List Section */}
              <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 lg:pt-4 lg:bottom-1 justify-center absolute bottom-0 lg:-right-10 bg-white/30 rounded-full'>
                {
                  ImageList.map((item)=>(
                    <img key={item.id} src={item.img} 
                    className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                    onClick={()=>{
                      setImageId(item.id===1?Food1:item.id===2?Food2:Food3);
                    }}/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero