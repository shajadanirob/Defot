import Lottie from "lottie-react";
import loginGif from '../../../public/login.json';


const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-20">
            <h3 className="text-center lg:text-xl text-[#080808] font-semibold leading-3">SUBSCRIBE TO NEWSLETTER</h3>
            <p className="text-center my-5 text-xl lg:text-3xl text-[#929292]">Your brand’s power lies in dominance. It is better to have <br /> 50% of one market, instead of 10% of five markets.</p>
          <label
    className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
    for="search-bar">
    <input id="search-bar" placeholder="your keyword here"
        className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"/>
    <button
        className="w-full md:w-auto px-6 py-3 bg-[#080808] border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
        
        <div className="relative">

         
            <div
                className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                        stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
            </div>

            <div className="flex items-center transition-all opacity-1 valid:"><span
                    className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Subscribe
                </span>
            </div>

        </div>
        
    </button>
</label>  

{/* <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">

<div class="group relative block h-64 sm:h-80 lg:h-96">
  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-0 group-hover:-translate-y-0"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >


      <img src="https://i.ibb.co/kmGYJ5V/images-5.jpg" alt="" />
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
         <Lottie className="w-full" animationData={loginGif}></Lottie>
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Read more</p>
    </div>
  </div>
</div>

<div class="group relative block h-64 sm:h-80 lg:h-96">
  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-0 group-hover:-translate-y-0"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >


      <img src="https://i.ibb.co/WkmZqYJ/t-md-b-Supoan1k-G.webp" alt="" />
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity duration-700 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 "
    >
        <div className="flex items-center justify-center">
            
         <Lottie className="w-1/2" animationData={loginGif}></Lottie>
        </div>
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Read more</p>
    </div>
  </div>
</div>




<div class="group relative block h-64 sm:h-80 lg:h-96">
  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-0 group-hover:-translate-y-0"
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >


      <img src="https://i.ibb.co/kmGYJ5V/images-5.jpg" alt="" />
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
         <Lottie className="w-[60%] lg:w-[30%]" animationData={loginGif}></Lottie>
      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

      <p class="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Read more</p>
    </div>
  </div>
</div>

</div> */}
   
        </div>
    );
};

export default Contact;