"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const FoodDetail = () => {
    
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const [food, setFood] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        if (id) {
            const loadFood = async () => {
                try {
                    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
                    if (!res.ok) {
                        throw new Error("Couldn't connect to dummy json");
                    }
                    const data = await res.json();
                    setFood(data);
                    setIsImageLoaded(true);
                } catch (error) {
                    console.error(error);
                }
            };
            loadFood();
        }
    }, [id]);

    if (!isImageLoaded) {
        return (
            <div>
                
                <div className='flex justify-center items-center gap-[30px] mt-[80px] ml-[320px]'>
                    <Image
                        className=' w-full rounded-[50px] '
                        alt='Loading...'
                        width={550}
                        height={450}
                    />
                </div>
            </div>
        );
    }

    return (
        <div>
           
            <div className='flex justify-center items-center gap-[30px] mt-[80px] ml-[320px]'>
                <Image
                    className='rounded-[25px]'
                    src={food.image }
                    alt={food.name}
                    width={250}
                    height={150}
                />
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='w-full'>{food.name}</h1>
                    <p>{food.description}</p>
                    <p className=' w-full leading-[20px]'>{food.instructions}</p>
                    <p>Price: ${food.cookTimeMinutes}</p>
                    <p>Rating: ⭐⭐⭐⭐ {food.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
