'use client'
import Image from 'next/image'
import Link from "next/link"
import React, { useState } from 'react'


export default function Navbar(){
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const closeDropdown = () => {
        setIsOpen1(false);
        setIsOpen2(false);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    return(
        <div className="  p-7 w-full h-[10vh] flex justify-between items-center">
            <div className=" flex flex-row"> 
                <Image
                width={84}
                height={27}
                alt='logo'
                src={"/images/logo.svg"}
                />
                <div className=' md:flex ml-10 hidden flex-row   text-custom-200'>
                    <div className=' relative'>
                        <div onClick={toggleDropdown1} className=' cursor-pointer hover:text-black text-sm flex flex-row justify-center items-center'>
                            Features
                            {!isOpen1 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-down.svg"}
                                />
                            )}
                            {isOpen1 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-up.svg"}
                                />
                            )}

                            
                        </div>
                        {isOpen1 && (
                            <div className="origin-top-right absolute right-0 mt-5 w-36 rounded-lg shadow-[0_20px_60px_1px_rgba(0,0,0,0.2)]  ">
                                <ul role="menu" className='p-3 rounded-lg  ' aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block  rounded-lg px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'> 
                                                <Image
                                                src={"/images/icon-todo.svg"}
                                                width={14}
                                                height={16}
                                                className=' w-[14px] h-[16px]'
                                                alt='todo'/>
                                                <div className='ml-3 text-sm'>
                                                    Todo List
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
                                            <div className=' flex   flex-row'> 
                                                <Image
                                                src={"/images/icon-calendar.svg"}
                                                width={16}
                                                height={16}
                                                className=' w-[16px] h-[16px]'
                                                alt='calendar'/>
                                                <div className='ml-3  text-sm'>
                                                    Calendar
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#"className="block px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'> 
                                                <Image
                                                src={"/images/icon-reminders.svg"}
                                                width={13}
                                                height={17}
                                                className=' w-[13px] h-[17px]'
                                                alt='reminders'/>
                                                <div className='ml-3  text-sm'>
                                                    Reminders
                                                </div>
                                            </div>                                            
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#"className="block  rounded-lg px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
                                            <div className=' flex flex-row'> 
                                            <Image
                                                src={"/images/icon-planning.svg"}
                                                width={16}
                                                height={16}
                                                className=' w-[16px] h-[16px]'
                                                alt='calendar'/>
                                                <div className='ml-3  text-sm'>
                                                    Planning
                                                </div>
                                                
                                            </div>  
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        
                    </div>         
                    <div className=' ml-10 pr-10 relative'>
                        <div onClick={toggleDropdown2} className=' cursor-pointer hover:text-black text-sm flex flex-row justify-center items-center'>
                            Comapany
                            {!isOpen2 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-down.svg"}
                                />
                            )}
                            {isOpen2 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-up.svg"}
                                />
                            )}

                            
                        </div>
                        {isOpen2 && (
                            <div className="origin-top-right absolute right-0 mt-5 w-32 rounded-lg shadow-[0_20px_60px_1px_rgba(0,0,0,0.2)]  ">
                                <ul role="menu" className='p-1 rounded-lg  ' aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block  rounded-lg px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'>                                                
                                                <div className='ml-3 text-sm'>
                                                    History
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
                                            <div className=' flex   flex-row'>                                               
                                                <div className='ml-3  text-sm'>
                                                    Our Team
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#"className="block px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'>                                               
                                                <div className='ml-3  text-sm'>
                                                    Blog
                                                </div>
                                            </div>                                            
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        
                    </div> 
                    <div className=' text-sm flex flex-row justify-center items-center'>
                        Careers
                    </div>
                    <div className='ml-10 cursor-pointer hover:text-black text-sm flex flex-row justify-center items-center'>
                        About
                    </div>
                </div>
            </div>
            <div className=" md:flex hidden   flex-row">
                <div className='text-sm flex justify-center items-center text-custom-200 cursor-pointer hover:text-black'>
                    Login
                </div>
                <div className=' text-sm ml-7 border-2 border-custom-200 flex cursor-pointer hover:text-black justify-center items-center text-custom-200 py-2 px-5 rounded-2xl'>
                    Register
                </div>
            </div>
            <div className=" flex md:hidden ">
                <div className='z-20' onClick={()=>(setOpenMenu(!openMenu))}>
                    {!openMenu && (
                        <Image
                        width={32}
                        height={18}
                        alt='menu'

                        src={"/images/icon-menu.svg"}
                        />
                    )}
                    {openMenu && (
                        <Image
                        width={26}
                        height={26}
                        alt='menu'
                        className=' fixed top-7 right-7'
                        onClick={closeDropdown }
                        src={"/images/icon-close-menu.svg"}
                        />
                    )}
                    
                  
                </div>
            </div>

            {/* Mobile menu */}

            {openMenu && (
                <div className=' fixed z-10 top-0 w-2/3 px-5 space-y-4  no  flex-col  flex h-screen right-0'>
                    <div className=' relative mt-20 w-1/2'>
                        <div onClick={toggleDropdown1} className='  cursor-pointer hover:text-black text-sm flex flex-row  items-center'>
                            Features
                            {!isOpen1 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-down.svg"}
                                />
                            )}
                            {isOpen1 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-up.svg"}
                                />
                            )}

                            
                        </div>
                        {isOpen1 && (
                            <div className="origin-top-right  right-0 w-36 rounded-lg   ">
                                <ul role="menu" className='p-3 rounded-lg  ' aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block  rounded-lg px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'> 
                                                <Image
                                                src={"/images/icon-todo.svg"}
                                                width={14}
                                                height={16}
                                                className=' w-[14px] h-[16px]'
                                                alt='todo'/>
                                                <div className='ml-3 text-sm'>
                                                    Todo List
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
                                            <div className=' flex   flex-row'> 
                                                <Image
                                                src={"/images/icon-calendar.svg"}
                                                width={16}
                                                height={16}
                                                className=' w-[16px] h-[16px]'
                                                alt='calendar'/>
                                                <div className='ml-3  text-sm'>
                                                    Calendar
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#"className="block px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'> 
                                                <Image
                                                src={"/images/icon-reminders.svg"}
                                                width={13}
                                                height={17}
                                                className=' w-[13px] h-[17px]'
                                                alt='reminders'/>
                                                <div className='ml-3  text-sm'>
                                                    Reminders
                                                </div>
                                            </div>                                            
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#"className="block  rounded-lg px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
                                            <div className=' flex flex-row'> 
                                            <Image
                                                src={"/images/icon-planning.svg"}
                                                width={16}
                                                height={16}
                                                className=' w-[16px] h-[16px]'
                                                alt='calendar'/>
                                                <div className='ml-3  text-sm'>
                                                    Planning
                                                </div>
                                                
                                            </div>  
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        
                    </div>
                    <div className=' w-1/2 relative'>
                        <div onClick={toggleDropdown2} className=' cursor-pointer hover:text-black text-sm flex flex-row justify-start items-center'>
                            Comapany
                            {!isOpen2 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-down.svg"}
                                />
                            )}
                            {isOpen2 && (
                                <Image
                                width={10}
                                height={6}
                                alt='down'
                                className=' ml-1 w-[10px] h-[6px]'
                                src={"/images/icon-arrow-up.svg"}
                                />
                            )}

                            
                        </div>
                        {isOpen2 && (
                            <div className="origin-top-right right-0 w-32   ">
                                <ul role="menu" className='p-1 rounded-lg  ' aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block  rounded-lg px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'>                                                
                                                <div className='ml-3 text-sm'>
                                                    History
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#" className="block px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
                                            <div className=' flex   flex-row'>                                               
                                                <div className='ml-3  text-sm'>
                                                    Our Team
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className=' bg-transparent'>
                                        <Link href="#"className="block px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
                                            <div className=' flex flex-row'>                                               
                                                <div className='ml-3  text-sm'>
                                                    Blog
                                                </div>
                                            </div>                                            
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        
                    </div> 
                    <div className=' w-full'>
                        <div className=' text-sm text-custom-200'>
                            Careers
                        </div>
                    </div>
                    <div className=' w-full'>
                        <div className=' text-sm hover:text-black cursor-pointer text-custom-200'>
                            About 
                        </div>
                    </div>
                    <div className=' w-full text-sm flex justify-center items-center text-custom-200 cursor-pointer hover:text-black'>
                        Login
                    </div>
                    <div className=' w-full text-sm border-2 border-custom-200 flex cursor-pointer hover:text-black justify-center items-center text-custom-200 py-2 px-5 rounded-2xl'>
                        Register
                    </div>
                    
                </div>
            )}
            {openMenu && (
                <div className=' fixed z-10  top-0 left-0 w-1/3 bg-black bg-opacity-50 h-full'>
                    
                </div>
            )}

        </div>
    )
}

// 'use client'
// import Image from 'next/image'
// import Link from "next/link"
// import React, { useState } from 'react'


// export default function Navbar(){
//     const [isOpen1, setIsOpen1] = useState(false);
//     const [isOpen2, setIsOpen2] = useState(false);

//     const toggleDropdown1 = () => {
//         setIsOpen1(!isOpen1);
//     };

//     const closeDropdown = () => {
//         setIsOpen1(false);
//     };
//     const toggleDropdown2 = () => {
//         setIsOpen2(!isOpen2);
//     };

//     const closeDropdown = () => {
//         setIsOpen2(false);
//     };
//     return(
//         <div className=" p-7 w-full flex justify-between items-center">
//             <div className=" flex flex-row"> 
//                 <Image
//                 width={84}
//                 height={27}
//                 alt='logo'
//                 src={"/images/logo.svg"}
//                 />
//                 <div className=' ml-7  flex flex-row space-x-10  text-custom-200'>
//                     <div className=' relative'>
//                         <div onClick={toggleDropdown1} className=' cursor-pointer hover:text-black text-sm flex flex-row justify-center items-center'>
//                             Features
//                             {!isOpen1 && (
//                                 <Image
//                                 width={10}
//                                 height={6}
//                                 alt='down'
//                                 className=' ml-1 w-[10px] h-[6px]'
//                                 src={"/images/icon-arrow-down.svg"}
//                                 />
//                             )}
//                             {isOpen1 && (
//                                 <Image
//                                 width={10}
//                                 height={6}
//                                 alt='down'
//                                 className=' ml-1 w-[10px] h-[6px]'
//                                 src={"/images/icon-arrow-up.svg"}
//                                 />
//                             )}

                            
//                         </div>
//                         {isOpen1 && (
//                             <div className="origin-top-right absolute right-0 mt-5 w-36 rounded-lg shadow-[0_20px_60px_1px_rgba(0,0,0,0.2)]  ">
//                                 <ul role="menu" className='p-3 rounded-lg  ' aria-orientation="vertical" aria-labelledby="options-menu">
//                                     <li className=' bg-transparent'>
//                                         <Link href="#" className="block  rounded-lg px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
//                                             <div className=' flex flex-row'> 
//                                                 <Image
//                                                 src={"/images/icon-todo.svg"}
//                                                 width={14}
//                                                 height={16}
//                                                 className=' w-[14px] h-[16px]'
//                                                 alt='todo'/>
//                                                 <div className='ml-3 text-sm'>
//                                                     Todo List
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                     <li className=' bg-transparent'>
//                                         <Link href="#" className="block px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
//                                             <div className=' flex   flex-row'> 
//                                                 <Image
//                                                 src={"/images/icon-calendar.svg"}
//                                                 width={16}
//                                                 height={16}
//                                                 className=' w-[16px] h-[16px]'
//                                                 alt='calendar'/>
//                                                 <div className='ml-3  text-sm'>
//                                                     Calendar
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                     <li className=' bg-transparent'>
//                                         <Link href="#"className="block px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
//                                             <div className=' flex flex-row'> 
//                                                 <Image
//                                                 src={"/images/icon-reminders.svg"}
//                                                 width={13}
//                                                 height={17}
//                                                 className=' w-[13px] h-[17px]'
//                                                 alt='reminders'/>
//                                                 <div className='ml-3  text-sm'>
//                                                     Reminders
//                                                 </div>
//                                             </div>                                            
//                                         </Link>
//                                     </li>
//                                     <li className=' bg-transparent'>
//                                         <Link href="#"className="block  rounded-lg px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
//                                             <div className=' flex flex-row'> 
//                                             <Image
//                                                 src={"/images/icon-planning.svg"}
//                                                 width={16}
//                                                 height={16}
//                                                 className=' w-[16px] h-[16px]'
//                                                 alt='calendar'/>
//                                                 <div className='ml-3  text-sm'>
//                                                     Planning
//                                                 </div>
                                                
//                                             </div>  
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}
                        
//                     </div>         
//                     <div className=' relative'>
//                         <div onClick={toggleDropdown2} className=' cursor-pointer hover:text-black text-sm flex flex-row justify-center items-center'>
//                             Comapany
//                             {!isOpen2 && (
//                                 <Image
//                                 width={10}
//                                 height={6}
//                                 alt='down'
//                                 className=' ml-1 w-[10px] h-[6px]'
//                                 src={"/images/icon-arrow-down.svg"}
//                                 />
//                             )}
//                             {isOpen2 && (
//                                 <Image
//                                 width={10}
//                                 height={6}
//                                 alt='down'
//                                 className=' ml-1 w-[10px] h-[6px]'
//                                 src={"/images/icon-arrow-up.svg"}
//                                 />
//                             )}

                            
//                         </div>
//                         {isOpen2 && (
//                             <div className="origin-top-right absolute right-0 mt-5 w-28 rounded-lg shadow-[0_20px_60px_1px_rgba(0,0,0,0.2)]  ">
//                                 <ul role="menu" className='p-1 rounded-lg  ' aria-orientation="vertical" aria-labelledby="options-menu">
//                                     <li className=' bg-transparent'>
//                                         <Link href="#" className="block  rounded-lg px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
//                                             <div className=' flex flex-row'>                                                
//                                                 <div className='ml-3 text-sm'>
//                                                     History
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                     <li className=' bg-transparent'>
//                                         <Link href="#" className="block px-4 py-2 text-sm text-custom-200" onClick={closeDropdown}>
//                                             <div className=' flex   flex-row'>                                               
//                                                 <div className='ml-3  text-sm'>
//                                                     Our Team
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                     <li className=' bg-transparent'>
//                                         <Link href="#"className="block px-4 py-2 text-sm text-custom-200 " onClick={closeDropdown}>
//                                             <div className=' flex flex-row'>                                               
//                                                 <div className='ml-3  text-sm'>
//                                                     Blog
//                                                 </div>
//                                             </div>                                            
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}
                        
//                     </div> 
//                     <div className=' text-sm flex flex-row justify-center items-center'>
//                         Careers
//                     </div>
//                     <div className=' cursor-pointer hover:text-black text-sm flex flex-row justify-center items-center'>
//                         About
//                     </div>
//                 </div>
//             </div>
//             <div className=" flex flex-row">
//                 <div className='text-sm flex justify-center items-center text-custom-200 cursor-pointer hover:text-black'>
//                     Login
//                 </div>
//                 <div className=' text-sm ml-7 border-2 border-custom-200 flex cursor-pointer hover:text-black justify-center items-center text-custom-200 py-2 px-5 rounded-2xl'>
//                     Register
//                 </div>
//             </div>
//         </div>
//     )
// }
