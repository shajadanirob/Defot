
const AddProducts = () => {
    return (
        <div>
          <div class="mt-5 text-xl md:text-2xl font-bold bg-white min-h-[100px] h-[23vh] flex  justify-center pl-[5%] flex-col gap-3 ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path>
                <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z">
                    </path>
                    </svg>
                    <h2 class=" font-clashBold">MY ACCOUNT</h2>
                    </div>





          <div className="min-h-[400px] bg-white mt-5 pt-5 px-[5%] pb-5">
      <form className="grid grid-cols-1 md:grid-cols-6 gap-x-3 gap-y-4">
        <div className="md:col-span-3">
          <label htmlFor="name" className="font-semibold text-lg">
            Name
          </label>
          <input
            name="name"
            placeholder="Product Name"
            id="name"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Brand
          </label>
          <input
            name="brand"
            placeholder="Brand"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Category
          </label>
          <input
            name="brand"
            placeholder="Brand"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="brand" className="font-semibold text-lg">
            Price
          </label>
          <input
            name="price"
            placeholder="price"
            id="brand"
            className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
          />
        </div>


        <div className="md:col-span-6">
          <label htmlFor="description" className="font-semibold text-lg">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="3"
            className="w-full bg-[#EBEBEB] pl-2 pt-4 focus:outline-none"
            placeholder="Product Description"
          ></textarea>
        </div>


        <div class="md:col-span-3 flex items-center">
            <label for="fileInput" class="flex items-center gap-2 px-4 py-2 text-[12px] md:text-sm font-semibold text-black bg-white border border-gray-300 rounded-full w-max">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg> Upload Photo
                </label>
        <input id="fileInput" type="file" class="hidden"/>
        </div>







        
        {/* ... Repeat similar structure for other form fields ... */}
        <button className="active:scale-95 duration-300 bg-black md:col-span-6 text-white py-2 mt-5 font-clashBold">
          Add Product
        </button>
      </form>
    </div>







          
        </div>
    );
};

export default AddProducts;