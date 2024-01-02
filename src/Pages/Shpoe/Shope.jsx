import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleShopeCard from "./SingleShopeCard";
import axios from "axios";

const Shope = () => {

    const [products,setProducts] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/products')
        .then(res => {
            setProducts(res.data)
        })
    },[])


    return (
     <div>
<div>

</div>

<div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 lg:my-0 ">


<div className="bg-white py-6 col-span-5 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 my-10 flex items-end justify-between gap-4">
        
            <select href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            <option disabled selected value="">
            filter category
          </option>
          <option value="almirah">almirah</option>
          <option value="table">table</option>
          <option value="chair">chair</option>
            </select>
        </div>
        <div class="mkd-container clearfix">
<div class="mkd-container-inner">
<div class="mkd-title-subtitle-holder" >
<div class="mkd-title-subtitle-holder-inner">
<div class="mkd-breadcrumbs-holder"> <div class="mkd-breadcrumbs"><div class="mkd-breadcrumbs-inner">
    <Link to='/'>Home</Link>
    <span class="mkd-delimiter">&nbsp; / &nbsp;</span>
    <a href="https://depot.qodeinteractive.com/shop-list/">Shop List</a>
    <span class="mkd-delimiter">&nbsp; &nbsp;</span></div></div>
    </div>
</div>
</div>
</div>
</div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

  {products.map(product => <SingleShopeCard key={product.brand}
  product={product}></SingleShopeCard>)}


        </div>
    </div>
</div>

</div>
     </div>
    );
};

export default Shope;