import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";
import { Pagination } from 'swiper/modules';
import Marqee from './Marqee'
import Sizeselector from './Sizeselector';
import Buybar from './Buybar';
import ProductCard from './ProductCard';
import Why from './Why';
import Heading from './Heading';
import Divider from './Divider';
import Details from './Details';
const Productpage = () => {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState("");
    const [isLiked, setIsLiked] = useState(false); // State to track if the button is clicked

    const handleLikeClick = () => {
        setIsLiked(!isLiked); // Toggle the like state
    };
    return (
        <>
            <div className='fixed top-0 w-full z-50'>
                <Marqee />
                <div className='w-full flex justify-between items-center px-4 py-2 bg-[rgb(242,235,244)]'>

                    <button className="btn btn-ghost btn-circle" onClick={() => navigate(-1)}>

                        <svg width="28px" height="28px" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#5f0f2a" stroke="#5f0f2a">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#5f0f2a" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
                                <path fill="#5f0f2a" d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" />
                            </g>
                        </svg>
                    </button>
                    <div className='flex justify-between items-center'>
                        <img width="40px" src='/image.png' />
                        ShopBraze</div>
                    <div>

                        <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.529a6 6 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"></path></svg>
                        </button>


                        <button className="btn btn-ghost btn-circle">
               
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="transparent" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.997 11.125v-5a3 3 0 1 1 6 0v5m-8.669-3h11.34a2 2 0 0 1 1.976 2.304l-1.255 8.152a3 3 0 0 1-2.966 2.544H8.571a3 3 0 0 1-2.965-2.544l-1.255-8.152a2 2 0 0 1 1.977-2.304"></path></svg>
                        
                        </button>
                    </div>
                </div>
            </div>


            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 image on mobile devices (screen width < 640px)
                    },
                    700: {
                        slidesPerView: 2, // 2 images on larger screens (screen width >= 1024px)
                    },
                    1024: {
                        slidesPerView: 3, // 2 images on larger screens (screen width >= 1024px)
                    },
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-16"
            >
                <SwiperSlide>
                    <img src="/i1.webp" className="w-full object-cover" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/i2.webp" className="w-full object-cover" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/i3.webp" className="w-full object-cover" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/i4.webp" className="w-full object-cover" alt="Slide 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/i1.webp" className="w-full object-cover" alt="Slide 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/i2.webp" className="w-full object-cover" alt="Slide 6" />
                </SwiperSlide>
            </Swiper>



            <div className='px-4 mb-40 py-2'>


                <div className='flex items-center justify-between'>
                <h2 className="card-title text-lg font-bold mt-2">
                    Aramya
                </h2>
                <div>
                <button
                        className="btn btn-ghost btn-circle hover:bg-red-100"
                        onClick={handleLikeClick}
                    >
                        <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                                fill={isLiked ? "red" : "grey"} // Dynamically change fill color
                            />
                        </svg>
                    </button>
                </div>
                </div>



               
                <p className="text-lg">
                    Soft Cotton Abstract Straight Green Kurta
                </p>

                {/* Product Details */}
                <div className='flex items-center justify-between'>
                <p className="text-sm mt-1">2Pc Set</p>
                <div className="flex items-baseline">
                    <span className="text-md font-semibold text-gray-900">
                        ₹1,248
                    </span>
                    <span className="text-xs line-through text-gray-400 ml-2">
                        ₹2,498
                    </span>
                    <span className="text-xs text-green-500 ml-2">-50%</span>
                </div>

                </div>
          


                

                <div className="bg-[rgb(242,235,244)] p-4 my-4 rounded-lg text-left flex items-center gap-4">
                    <div>
                        <svg fill="#5f0f2a" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209.281 209.281" xml:space="preserve" stroke="#5f0f2a">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <g> <path d="M207.17,99.424l-20.683-21.377l4.168-29.455c0.567-4.006-2.145-7.739-6.131-8.438l-29.298-5.137L141.285,8.739 c-1.896-3.575-6.287-4.998-9.919-3.223L104.64,18.582L77.916,5.517c-3.636-1.777-8.023-0.351-9.92,3.223L54.055,35.018 l-29.298,5.137c-3.985,0.698-6.698,4.432-6.131,8.438l4.167,29.455L2.11,99.424c-2.813,2.907-2.813,7.522,0,10.43l20.682,21.378 l-4.167,29.456c-0.566,4.005,2.146,7.738,6.13,8.438l29.299,5.14l13.942,26.275c1.896,3.574,6.284,5,9.919,3.223l26.724-13.062 l26.727,13.062c1.059,0.518,2.181,0.763,3.288,0.763c2.691,0,5.286-1.454,6.63-3.986l13.942-26.275l29.299-5.14 c3.984-0.699,6.697-4.433,6.13-8.438l-4.168-29.456l20.684-21.378C209.984,106.946,209.984,102.332,207.17,99.424z M173.158,123.438c-1.608,1.662-2.359,3.975-2.035,6.266l3.665,25.902l-25.764,4.52c-2.278,0.4-4.245,1.829-5.329,3.872 l-12.26,23.105l-23.502-11.486c-1.039-0.508-2.166-0.762-3.294-0.762c-1.127,0-2.254,0.254-3.293,0.762l-23.5,11.486l-12.26-23.105 c-1.084-2.043-3.051-3.472-5.329-3.872l-25.764-4.52l3.664-25.902c0.324-2.29-0.427-4.603-2.036-6.265l-18.186-18.799 l18.186-18.797c1.608-1.662,2.36-3.975,2.036-6.265l-3.664-25.901l25.763-4.517c2.279-0.399,4.246-1.829,5.331-3.872l12.259-23.108 l23.499,11.489c2.078,1.017,4.508,1.017,6.588,0l23.501-11.489l12.26,23.108c1.084,2.043,3.051,3.473,5.33,3.872l25.763,4.517 l-3.665,25.901c-0.324,2.291,0.427,4.603,2.036,6.266l18.186,18.796L173.158,123.438z" /> <path d="M80.819,98.979c10.014,0,18.16-8.146,18.16-18.158c0-10.016-8.146-18.164-18.16-18.164 c-10.015,0-18.162,8.148-18.162,18.164C62.657,90.834,70.805,98.979,80.819,98.979z M80.819,74.657c3.397,0,6.16,2.765,6.16,6.164 c0,3.396-2.764,6.158-6.16,6.158c-3.398,0-6.162-2.763-6.162-6.158C74.657,77.422,77.421,74.657,80.819,74.657z" /> <path d="M140.867,68.414c-2.342-2.343-6.143-2.344-8.484,0l-63.968,63.967c-2.343,2.343-2.343,6.142,0,8.485 c1.172,1.172,2.707,1.757,4.243,1.757c1.535,0,3.071-0.586,4.243-1.757l63.967-63.967C143.21,74.556,143.21,70.757,140.867,68.414z " /> <path d="M128.46,110.301c-10.013,0-18.158,8.146-18.158,18.158c0,10.016,8.146,18.164,18.158,18.164 c10.016,0,18.164-8.148,18.164-18.164C146.624,118.447,138.476,110.301,128.46,110.301z M128.46,134.624 c-3.395,0-6.158-2.765-6.158-6.164c0-3.395,2.763-6.158,6.158-6.158c3.398,0,6.164,2.763,6.164,6.158 C134.624,131.858,131.859,134.624,128.46,134.624z" /> </g> </g>

                        </svg>
                    </div>


                    <div>


                        <span className="text-[rgb(95,15,42)] font-semibold text-lg">FREE Travel Pouch</span>
                        <p className="text-gray-600">Above ₹999 | Only applicable on first order</p>
                    </div>
                </div>

                <Sizeselector />
                <Details/>
                <Why />












                <Heading Heading="Recently Viewed" />
                <Divider />
                <div className="carousel rounded-box flex items-center justify-around gap-4 overflow-x-scroll no-scrollbar w-full">
                    <div className="carousel-item">
                        <ProductCard img="/i1.webp" />
                    </div>
                    <div className="carousel-item">
                        <ProductCard img="/i2.webp" />
                    </div>
                    <div className="carousel-item">
                        <ProductCard img="/i3.webp" />
                    </div>
                    <div className="carousel-item">
                        <ProductCard img="/i4.webp" />
                    </div>
                    <div className="carousel-item">
                        <ProductCard img="/i1.webp" />
                    </div>
                </div>


            </div>

  




            <Buybar />
        </>
    );
}

export default Productpage;