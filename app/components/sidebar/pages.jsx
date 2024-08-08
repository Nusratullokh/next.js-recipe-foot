import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className='fixed left-[1px] top-[-1px]'>
            <div className='pt-[52px] pl-[41px] relative w-[126px] h-screen rounded-r-[30px] border border-white bg-white/25 flex flex-col justify-between'>
                <div className='pr-[30px] mt-[-15px] mb-5'>
                    <Image src="/fire.svg" alt='img' width={41} height={40} />
                </div>
                <div className='flex flex-col items-center gap-[50px] pr-[40px] pb-[60px]'>
                    <div className='flex justify-center items-center bg-black rounded-full w-[48px] h-[48px]'>
                        <a href='/'>
                            <Image src="/home.svg" alt='img' width={29} height={27} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src="/notification.svg" alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src="/heart.svg" alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src="/bag.svg" alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src="/ticket_sale.svg" alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src="/settings.svg" alt='img' width={30} height={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
