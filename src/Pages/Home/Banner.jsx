import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {

    return (
    
<Swiper  
pagination={{ clickable: true }}
autoplay={{ delay: 3000 }}
modules={[Pagination]} 
className="mySwiper h-[100vh] lg:h-[90vh]"
>
    {/* slide one */}
        <SwiperSlide>
        <div className="bg-[#eee9e9]  mx-auto px-8 md:px-16 lg:px-24 py-5  dark:bg-gray-800  dark:text-gray-100">
  <div
    className="container mx-auto lg:grid flex flex-col-reverse  gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl"
  >
    <div className="flex items-center text-center lg:text-left">
      <div className="space-y-8">
    
        <div>
          
          <h2 className="mb-4 text-xl lg:text-4xl font-black text-black dark:text-white">
            THINK DEFFERENT
            
          </h2>
          <h3
            className="text-xs lg:text-xl font-medium leading-relaxed text-[#929292] dark:text-gray-300"
          >
            Inspiring results from day one without the pain. Get your own custom
            dashboard and start building amazing services.
          </h3>
        </div>
      
      </div>
    </div>
    <div className="flex items-center justify-center text-blue-500 lg:justify-end">
     <img className='w-[60%] md:w-[30%] lg:w-[70%]' src="https://i.ibb.co/KhxGsKK/h1-slide1-img.png" alt="" />
    </div>
  </div>
</div>

        </SwiperSlide>
        {/* slide two */}
        <SwiperSlide>

        <div className="bg-[#eee9e9]  mx-auto px-8 md:px-16 lg:px-24 py-5  dark:bg-gray-800  dark:text-gray-100">
  <div
    className="container mx-auto lg:grid flex flex-col-reverse gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl"
  >
    <div className="flex items-center text-center lg:text-left">
      <div className="space-y-8">
    
        <div>
          
          <h2 className="mb-4 text-xl lg:text-4xl font-black text-black dark:text-white">
            Premium Comport
            
          </h2>
          <h3
            className="text-xs lg:text-xl font-medium leading-relaxed text-[#929292] dark:text-gray-300"
          >
            Inspiring results from day one without the pain. Get your own custom
            dashboard and start building amazing services.
          </h3>
        </div>
      
      </div>
    </div>
    <div className="flex items-center justify-center text-blue-500 lg:justify-end">
     <img className='w-[50%] md:w-[20%] lg:w-[50%]' src="https://i.ibb.co/7gyJsJJ/h1-slide3-img-removebg-preview.png" alt="" />
    </div>
  </div>
</div>
        </SwiperSlide>

        {/* slide three */}
        <SwiperSlide>
        <div className="bg-[#eee9e9]  mx-auto px-8 md:px-16 lg:px-24 py-5  dark:bg-gray-800  dark:text-gray-100">
  <div
    className="container mx-auto lg:grid flex flex-col-reverse gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl"
  >
    <div className="flex items-center text-center lg:text-left">
      <div className="space-y-8">
    
        <div>
          
          <h2 className="mb-4 text-xl lg:text-4xl font-black text-black dark:text-white">
            THINK DEFFERENT
            
          </h2>
          <h3
            className="text-xs lg:text-xl font-medium leading-relaxed text-[#929292] dark:text-gray-300"
          >
            Inspiring results from day one without the pain. Get your own custom
            dashboard and start building amazing services.
          </h3>
        </div>
      
      </div>
    </div>
    <div className="flex items-center justify-center text-blue-500 lg:justify-end">
     <img className='w-[70%] md:w-[30%] lg:w-[70%]' src="https://i.ibb.co/NYjZDGy/h1-product-4-505x505-removebg-preview.png" alt="" />
    </div>
  </div>
</div>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default Banner;