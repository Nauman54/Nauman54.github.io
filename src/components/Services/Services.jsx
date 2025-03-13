import React from 'react'
import Food1 from '../../assets/Images/StockImages/FoodImg1-removebg-preview.png'
import Food2 from '../../assets/Images/StockImages/FoodImg2-removebg-preview.png'
import Food3 from '../../assets/Images/StockImages/FoodImg3-removebg-preview.png'

const ServicesData = [
    {
        id: 1,
        img: Food1,
        name: "Biryani1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur velit a modi? Nam, assumenda enim vitae dignissimos recusandae asperiores?"
    },
    {
        id: 2,
        img: Food1,
        name: "Biryani2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur velit a modi? Nam, assumenda enim vitae dignissimos recusandae asperiores?"
    },
    {
        id: 3,
        img: Food1,
        name: "Biryani3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur velit a modi? Nam, assumenda enim vitae dignissimos recusandae asperiores?"
    },
];

const Services = () => {
    return (
        <>
            <div className='py-10'>
                <div className='container'>
                    {/* Header Section */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            Our Services
                        </p>
                        <h1 className='text-3xl font-bold'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            {""}
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odio tempora incidunt alias fuga fugit eius cumque voluptatum error deserunt.
                        </p>
                    </div>
                    {/* Card Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ServicesData.map((service) => (
                            <div data-aos="zoom-in" data-aos-duration="300"
                            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                            >
                                <div className="h-[105px]">
                                    <img src={service.img} width="500" height="600" alt=""
                                        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h1 className="text-xl font-bold">{service.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services