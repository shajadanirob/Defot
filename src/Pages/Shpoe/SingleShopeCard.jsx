import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SingleShopeCard = ({product}) => {
    
    return (
        <div>
        <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
            <img src={product.image} loading="lazy" alt="Photo by Galina N" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div>
            <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{product.productName}</a>

            <div className="flex items-end gap-2">
                <span className="font-bold text-gray-800 lg:text-lg">${product.price}</span>
            </div>
            <Link>
                    <button className="btn bg-black text-white btn-sm">Detail</button>
                </Link>
        </div>
    </div>
    );
};

export default SingleShopeCard;