import Image from 'next/image'

export default function Home() {
  return (
    <div className='  overflow-y-hidden w-screen  flex flex-col-reverse md:flex-row'>
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <div className=' w-full mt-10 md:mt-0 md:w-4/6 ite flex justify-center md:items-start items-center flex-col '>
          <div className=' flex flex-col'>
            <div className='text-3xl md:text-7xl md:text-start text-center font-bold md:mr-5'>
              Make remote work
            </div>
          </div>
          <div className=' mt-7 md:mt-10 md:text-start text-center text-custom-200'>
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. 
          </div>
          <button className=' mt-7 md:mt-10 p-3 rounded-xl font-bold w-32 bg-custom-300 text-white'>
            Learn more
          </button>
          <div className='md:px-0 md:py-0 py-10 px-3 mt-7 md:mt-10 lg:mt-28 space-x-4 w-full justify-around flex flex-row'>
            <div>
              <Image
              src={"./images/client-databiz.svg"}
              width={114}
              height={20}
              alt='databiz'/>
            </div>
            <div>
              <Image
              src={"./images/client-audiophile.svg"}
              width={73}
              height={36}
              alt='audiophile'/>
            </div>
            <div>
              <Image
              src={"./images/client-meet.svg"}
              width={90}
              height={20}
              alt='meet'/>
            </div>
            <div>
              <Image
              src={"./images/client-maker.svg"}
              width={83}
              height={24}
              alt='maker'/>
            </div>
          </div>

        </div>
      </div>
      <div className=' md:flex hidden w-1/2 p-10'>
        <Image
        src={"/images/image-hero-desktop.png"}
        width={960}
        height={1280}
        className=' max-h-[700px] object-contain  '
        alt='hero'
        />
      </div>
      <div className=' flex md:hidden w-full'>
        <Image
        src={"/images/image-hero-mobile.png"}
        width={7050}
        height={5064}
        className='object-cover  '
        alt='hero'
        />
      </div>

    </div>
  )
}
