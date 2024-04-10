"use client"
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Styles/slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { produceFetch } from '@/app/rtk/ProductSlice';

export default function Slider() {
    const dispatch = useDispatch()
    const product = useSelector(state=>state.product)
    useEffect(()=>{
        dispatch(produceFetch())
    },[])
    if(product){
        return (
            <>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper my-20"
              >
                {product?.products?.map(ele=>{
                    return(
                <SwiperSlide key={ele.id} className='bg-red-500 shadow-lg'>
                  <img src={ele.images[0]} className='h-[300px] object-cover' />
                </SwiperSlide>
                    )
                })}
              </Swiper>
            </>
          );
    }else{
        return(
            <Loader />
        )
    }
}
