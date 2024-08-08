"use client"
import { useState, useEffect } from 'react';
import './hero.css';
import Image from 'next/image';
import sup from '../../../public/sup.svg';
import gamburger from '../../../public/gamburger.svg';
import sok from '../../../public/sok.svg';
import cake from '../../../public/cake.svg';
import Link from "next/link";

const Hero = ({ searchQuery }) => {
    const [activeButton, setActiveButton] = useState('Noodles');
    const [foods, setFoods] = useState([]);

    const buttons = [
        { name: 'Noodles', image: sup },
        { name: 'Burger', image: gamburger },
        { name: 'Drink', image: sok },
        { name: 'Desert', image: cake },
    ];

    useEffect(() => {
        const loadFoods = async () => {
            try {
                const res = await fetch("https://dummyjson.com/recipes");
                if (!res.ok) {
                    throw new Error("Couldn't connect to dummy json");
                }
                const data = await res.json();
                setFoods(data.recipes);
            } catch (error) {
                console.error(error);
            }
        };
        loadFoods();
    }, []);

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='ml-[182px] mt-[18px] w-[1200px] h-[278px] rounded-[30px] border border-white bg-white/25'>
            <div className=' p-[78px_7px_54px_0px] flex justify-between '>
                <div>
                    <h1 className='w-[437.934px] text-black font-philosopher text-[40px] font-bold leading-normal ml-7 '>It’s not just Food, it’s an Experience</h1>
                    <p className='w-[356.624px] mr-[80px] mt-[10px] ml-7 text-[#676161] font-roboto text-[16px] font-normal leading-normal'>Order Your Favourite food & enjoy your day</p>
                </div>
                <Image className='ml-[200px] mt-[-110px] ' src="/food.png" alt="logo" width={500} height={500} />
            </div>
            <section className='ml-[-30px] flex justify-between'>
                <div className='flex justify-between gap-[24px]'>
                    {buttons.map((button) => (
                        <button
                            key={button.name}
                            className={`btn ${activeButton === button.name ? 'active' : ''}`}
                            onClick={() => setActiveButton(button.name)}
                        >
                            <Image  src={button.image} alt='img' width={77} height={62} />
                            {button.name}
                        </button>
                    ))}
                </div>
            </section>
            <section className='flex gap-[20px] mt-[81px]'>
                <div className='justify-center flex-wrap flex gap-[65px]'>
                    {filteredFoods.map((food) => (
                        <div key={food.id} className='flex flex-col items-center text-left p-[15px] gap-[7px] bg-white/25 border border-white rounded-[30px] w-[327.855px] h-[370px]'>
                            <Link href={`/${food.id}`}>
                                <Image className='rounded-full w-[220px] h-[220px] mt-[-70px] ml-[136px]'
                                    src={food.image}
                                    alt={food.name}
                                    width={200}
                                    height={150}
                                />
                                <h3 className='mt-[10px] ml-[100px] text-black font-roboto text-[20px] font-medium leading-normal tracking-[0.26px] w-[393.992px]'>{food.name}</h3>
                                <p className="text-black font-roboto text-[14px] font-normal leading-normal tracking-[0.12px] ml-[100px] w-[217.716px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                <p className="text-black font-roboto text-[14px] font-normal leading-normal tracking-[0.12px] ml-[100px] w-[217.716px]">Rating: ⭐⭐⭐⭐⭐  {food.rating} </p>
                                <h5 className=" text-black font-roboto text-[25px] font-medium leading-normal tracking-[0.26px] mt-4 ml-[100px]"> ${food.cookTimeMinutes}</h5>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Hero;
