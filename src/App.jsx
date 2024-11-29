import { useState } from 'react'


import './App.css'
import BoroContainer from './components/BoroContainer'
import Flex from './components/Flex'
import Button from './components/Button'
import Image from './components/Image'
import Text from './components/Text'
import Logo from  './assets/logo.png'
import Menu from './components/Menu'
import B1 from './assets/b1.png'
import B2 from './assets/b2.png'
import B3 from './assets/b3.png'
import P1 from './assets/p1.png'
import P2 from './assets/p2.png'
import P3 from './assets/p3.png'
import P4 from './assets/p4.png'
import P5 from './assets/p5.png'
import P6 from './assets/p6.png'
import P7 from './assets/p7.png'
import P8 from './assets/p8.png'
import E1 from './assets/e1.png'
import E2 from './assets/e2.png'
import Indicator from './assets/Indicator.png'
import { GoShareAndroid } from "react-icons/go";
import { MdCompareArrows } from "react-icons/md";
import { FaArrowRightLong,FaAngleRight  } from "react-icons/fa6";



import { BsPersonExclamation } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import Container from './components/Container'

function App() {
 

  return (
    <>
    {/* menu start */}
  <div className='py-10 fixed z-10 w-[100%] bg-gray-50'>
    <BoroContainer>
      <Flex>
        <div className=''>
         <Image imgSrc={Logo}/>
        </div>
        <div className='mt-3'>
         <Flex className={'gap-x-20'}>
         <Menu mText={'Home'} className={'font-pp font-medium text-[16px]  hover:text-[20px] '}/>
         <Menu mText={'Shop'} className={'font-pp font-medium text-[16px] hover:text-[20px]'}/>
         <Menu mText={'About'} className={'font-pp font-medium text-[16px] hover:text-[20px]'}/>
         <Menu mText={'Contact'} className={'font-pp font-medium text-[16px] hover:text-[20px]'}/>
         </Flex>
        </div>
        <div className='mt-3'>
          <Flex className={'gap-x-12'}>
          <BsPersonExclamation  className={'text-[25px] font-medium'}/>
          <CiSearch  className={'text-[25px] font-medium'}/>
          <CiHeart className={'text-[25px] font-medium'} />
          <BsCart3  className={'text-[25px] font-medium'}/>
          </Flex>
        </div>
      </Flex>
    </BoroContainer>
  </div>

    {/* menu end */}

    {/* banner part */}
    <div className='pt-[145px] pb-[115px] bg-bb'>
      <Container>
      <div className='pt-[60px] pb-10 pl-7 pr-[60px] bg-[#FFF3E3] w-[643px] ms-auto'>
          <Text text={'New Arrival'}  as={'p'} className={'font-pp font-semibold text-[16px]'}/>
          <Text text={'Discover Our New Collection'}  as={'h1'} className={'font-pp font-bold text-[52px] pr-[95px] text-[#B88E2F]'}/>
          <Text text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'}  as={'p'} className={'font-pp font-mediun text-[18px] py-7'}/>
          <Button bText={'Buy Now'} className={'py-[20px] px-[60px] bg-[#B88E2F] text-white font-pp font-bold text-[16px] rounded-sm'}/>
      </div>
      </Container>

    </div>
    {/* banner part */}

    {/* Browse part */}
   <div className='py-[120px]'>
   <Text text={'Browse The Range'} as={'h1'} className={'font-pp font-bold text-[35px] text-center py-4'}/>
   <Text text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} as={'p'} className={'font-pp text-[#666666] text-[20px] text-center pb-[60px]'}/>
   <Container>
    <Flex>
      <div className='w-32%'>
        <Image imgSrc={B1}/>
         <Text text={'Dining'} as={'h4'} className={'font-pp font-semibold text-[24px] text-center pt-5'}/>

      </div>
      <div className='w-32%'>
        <Image imgSrc={B2}/>
         <Text text={'Living'} as={'h4'} className={'font-pp font-semibold text-[24px] text-center pt-5'}/>

      </div>
      <div className='w-32%'>
        <Image imgSrc={B3}/>
         <Text text={'Bedroom'} as={'h4'} className={'font-pp font-semibold text-[24px] text-center pt-5'}/>

      </div>
    </Flex>
   </Container>
   </div>
    {/* Browse part  */}

    {/* Product part  */}
    <Text text={'Our Products'} as={'h1'} className={'font-pp font-bold text-[35px] text-center py-4'}/>
    <div className='py-[80px]'>
      <div>
        <Container>
          <Flex className={'gap-x-4'}>
            <div className='w-23% block relative'>
              <div>
              <Image imgSrc={P1} className={' w-[330px] block'}/> 
              <div className='bg-[#E97171] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>-30%</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Syltherine'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Stylish cafe chair'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 2.500.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
                 <p className='text-[#B0B0B0] font-pp text-[16px]'><del>Rp 3.500.000</del></p>
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
            <div className='w-23% block relative'>
              <div>
              <Image imgSrc={P2} className={' w-[330px] block'}/> 
              <div className='bg-[#2EC1AC] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>New</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Leviosa'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Stylish cafe chair'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 2.500.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
                
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
            <div className='w-23% block relative'>
              <div>
              <Image imgSrc={P3} className={' w-[330px] block'}/> 
              <div className='bg-[#E97171] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>-50%</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Loloto'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Luxury big sofa'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 7.000.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
                 <p className='text-[#B0B0B0] font-pp text-[16px]'><del>Rp 14.000.000</del></p>
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
            <div className='w-23% block relative'>
              <div>
              <Image imgSrc={P4} className={' w-[330px] block'}/> 
              <div className='bg-[#2EC1AC] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>New</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Respira'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Outdoor bar table and stool'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 500.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
               
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
          </Flex>
          <Flex className={'pt-[50px] gap-x-4'}>
            <div className='w-24% block relative'>
              <div>
              <Image imgSrc={P5} className={' w-[330px] block'}/> 
              <div className='bg-[#E97171] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>-30%</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Grifo'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Night Lamp'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 1.500.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
              
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
            <div className='w-24% block relative'>
              <div>
              <Image imgSrc={P6} className={' w-[330px] block'}/> 
              <div className='bg-[#2EC1AC] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>New</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Muggo'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Small Mug'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 150.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
                
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
            <div className='w-24% block relative'>
              <div>
              <Image imgSrc={P7} className={' w-[330px] block'}/> 
              <div className='bg-[#E97171] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>-50%</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Pingky'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Cute Bed Set'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 7.000.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
                 <p className='text-[#B0B0B0] font-pp text-[16px]'><del>Rp 14.000.000</del></p>
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
            <div className='w-24% block relative'>
              <div>
              <Image imgSrc={P8} className={' w-[330px] block'}/> 
              <div className='bg-[#2EC1AC] text-white h-12 w-12 font-pp font-medium text-[16px] text-center rounded-full pt-3 absolute top-5 right-7'>New</div>
              </div>
              <div className='py-6 px-7 bg-[#F4F5F7]'>
                  <Text text={'Potty'} as={'h4'} className={'text-[24px] text-[#3A3A3A] font-pp font-semibold'}/>
                  <Text text={'Minimalist flower pot'} as={'p'} className={'text-[16px] py-3 text-[#898989] font-pp font-medium'}/>
                 <Flex>
                 <Text text={'Rp 500.000'} as={'h4'} className={'text-[20px] text-[#3A3A3A] font-pp font-semibold pr-2'}/>
                
                 </Flex>
              </div>
              <div className=" w-[100%] absolute bg-overlay top-0 left-0 h-[100%]  opacity-0  hover:opacity-[100%]">
                <Button bText={'Add To Cart'} className={'bg-white py-4 px-[80px] mt-[170px] ml-[44px] text-[#B88E2F] font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
                <Flex className={'pt-10'}>
                  <div>
                    <Flex>
                    <div className='pl-8'>
                    <GoShareAndroid className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Share'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <MdCompareArrows className={'pt-1 text-[20px] text-white'}/>
                    </div>
                    <div>
                      <Text text={'Compare'} as={'p'} className={'font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div>
                  <div>
                    <Flex>
                    <div className=''>
                    <CiHeart className={'pt-1 text-[22px] text-white'}/>
                    </div>
                    <div> 
                      <Text text={'Like'} as={'p'} className={' pr-8 font-pp font-semibold text-[16px] text-white'} />
                    </div>
                    </Flex>
                  </div> 
                </Flex>

              </div>
             
            </div>
          </Flex>
          <div className='text-center'>
          <Button bText={'Show More'} className={'bg-white py-4 px-[80px] text-[#B88E2F] border-[2px] border-[#B88E2F] mt-12 font-pp font-semibold text-[16px] hover:bg-[#B88E2F] hover:text-white'}/>
          </div>
        </Container>
      </div>
    </div>
  
    {/* Product part  */}



    {/* Explore Part */}
    <div className='bg-[#FCF8F3] py-14 mt-20'>
     <Container>
     <Flex>
        <div className='w-[35%] pt-20'>
        <div className='pt-[60px] pb-10  ms-auto'>
          
          <Text text={'50+ Beautiful Rooms Inspiration'}  as={'h1'} className={'font-pp font-bold text-[40px]  '}/>
          <Text text={'Our designer already made a lot of beautiful prototipe of rooms that inspire you'}  as={'p'} className={'font-pp font-mediun text-[18px] py-7'}/>
          <Button bText={'Explore More'} className={'py-[20px] px-[60px] bg-[#B88E2F] text-white font-pp font-bold text-[16px] rounded-sm'}/>
      </div>
        </div>
        <div className='w-[30%] relative'>
          <Image imgSrc={E1}/>
          <div className='p-10 bg-ex absolute bottom-6 left-6'>
          <Text text={'01 -- Bedroom' } as={'p'} className={'font-pp font-medium text-[16px]' }/>
          <Text text={'Inner Peace' } as={'h4'} className={'font-pp font-semibold text-[30px] text-[#3A3A3A] pt-3' }/>
          </div>
          <div className='bg-[#B88E2F] p-5 text-white absolute bottom-6 left-72'>
            <FaArrowRightLong/>
          </div>
        </div>
        <div className='w-[30%] relative'>
          <Image imgSrc={E2}/>
          <Image imgSrc={Indicator} className={'pt-8'}/>
          <div className=' shadow-xl p-4 bg-white rounded-full absolute right-5 top-56'>
            <FaAngleRight className={'text-[#B88E2F] '}/>
          </div>
        </div>

      </Flex>
     </Container>
    </div>
    {/* Explore Part */}

    {/* Footer part */}
    <div className='pt-32'>
      <Container>
        <Flex className={'border-b-[2px] border-[#D9D9D9]'}>
          <div className='w-[30%]'>
          <Text text={'FURNIRO.' } as={'h4'} className={'font-pp font-bold text-[25px] pb-5' }/>
          <Text text={'400 University Drive Suite 200 Coral Gables,' } as={'p'} className={' pr-14 font-pp text-[#9F9F9F] text-[16px]' }/>
          <Text text={'FL 33134 USA' } as={'p'} className={'font-pp text-[#9F9F9F] text-[16px]' }/>
          </div>
          <div className='w-[10%]'>
          <Text text={'Links' } as={'p'} className={'font-pp font-medium text-[20px] text-[#9F9F9F] pb-5' }/>
          <Text text={'Home' } as={'p'} className={'font-pp font-medium text-[16px] py-3' }/>
          <Text text={'Shop' } as={'p'} className={'font-pp font-medium text-[16px] py-2' }/>
          <Text text={'About' } as={'p'} className={'font-pp font-medium text-[16px] py-3' }/>
          <Text text={'Contacts' } as={'p'} className={'font-pp font-medium text-[16px] py-2 pb-36' }/>
          </div>
          <div className='w-[20%]'>
          <Text text={'Help' } as={'p'} className={'font-pp font-medium text-[20px] text-[#9F9F9F] pb-5' }/>
          <Text text={'Payment Options' } as={'p'} className={'font-pp font-medium text-[16px] py-3' }/>
          <Text text={'Returns' } as={'p'} className={'font-pp font-medium text-[16px] py-2' }/>
          <Text text={'Privacy Policies' } as={'p'} className={'font-pp font-medium text-[16px] py-3' }/>
         </div>
         <div className='w-[30%]'>
          <Text text={'NewsLetter' } as={'p'} className={'font-pp font-medium text-[20px] text-[#9F9F9F] pb-5' }/>
         <div className='flex gap-3'>
         <p className=' border-b-[2px] border-black text-[14px] font-pp text-[#9F9F9F] py-3'>Enter Your Email Address  </p>
         <u className='text-[14px] font-semibold font-pp py-3'>SUBSCRIBE</u>
         </div>
         </div>
        </Flex>
        <div className='pt-10'>
        <Text text={'2023 furino. All rights reserved' } as={'p'} className={'font-pp text-[16px]  pb-20' }/>
        
        </div>

      </Container>
    </div>

    {/* Footer part */}


    </>
  )
}

export default App
