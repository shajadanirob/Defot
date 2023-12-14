
import { Parallax } from 'react-parallax';

const Pearalax = () => {
    return (
        <div className='my-14'>
            {/* <Parallax strength={300}>
        <Background className="custom-bg">
            <img src="https://i.ibb.co/FHCgZgp/small-house-built-peaceful-green-hill-high-up-mountains.jpg" alt="fill murray" />
        </Background>
    </Parallax> */}
         <Parallax
       
        bgImage='https://i.ibb.co/m9mc91z/h6-product-49.jpg'
        bgImageAlt="the dog"
        strength={300}
        
    >


<div class="min-h-[500px] h-[80vh] w-full bg-about bg-fixed flex  justify-center items-center"><div class="flex flex-col  items-center justify-center text-white w-[70%] gap-4"><h3 class="text-sm text-center md:text-medium font-clashSemibold">Your Journey in Style Begins Here</h3><h1 class="text-2xl text-center md:text-3xl lg:text-5xl font-clashBold">Discover the World of Exceptional Footwear</h1><p class="text-[10px] md:text-sm text-center w-full md:w-[80%] text-gray-200">Embark on a stylish journey with our curated footwear collection. From timeless classics to cutting-edge designs, we celebrate diversity in every step. Explore a world where craftsmanship meets innovation, where every pair tells a unique story. Elevate your style, elevate your stride—discover exceptional footwear that resonates with your individuality.</p></div></div>
        
  
    </Parallax>
        </div>
    );
};

export default Pearalax;