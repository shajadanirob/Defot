import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,FreeMode} from 'swiper/modules';
const Brand = () => {
    return (
        <div className="">
       
<div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-20">
        <h1 className=" font-extrabold leading-8 my-5 text-[#1F2937] text-4xl">Discover Brands</h1>

        

     <div className='md:block hidden'>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Clothes
                </div>
              </div>
            </a>
        </SwiperSlide>
        
        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Computers
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group  relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        
      </Swiper> 
     </div>



<div className='lg:hidden '>
<Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
       <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Clothes
                </div>
              </div>
            </a>
        </SwiperSlide>
        
        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Computers
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group  relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
</div>







          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </div>
            <div
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Computers
                </div>
              </div>
            </div>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Clothes
                </div>
              </div>
            </a>
           
          </div> */}
        </div>
      </div>




        </div>
    );
};

export default Brand;