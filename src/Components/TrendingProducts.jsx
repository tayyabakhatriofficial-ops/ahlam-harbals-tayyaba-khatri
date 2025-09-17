import React from 'react';
import pic from '../assets/Ahlam-Naturals-Hair-Growth-Oil-FREE-Derma-Roller.png'
export default function ProductCard() {
    return (
        <>
            <p className='text-center font-bold text-4xl mt-10'>Our Trendy Product</p>
            <div className="flex flex-col md:flex-row items-center justify-center p-6 my-10 ">
                {/* Left Side - Product Image */}
                <div className=" flex items-center justify-center">
                    <div className="p-6 rounded-2xl items-center">
                        <img
                            src={pic} // replace with your product image
                            alt="Hair Oil"
                            className="w-auto border rounded-3xl  md:w-120 object-contain z-10"
                        />
                    </div>
                </div>

                {/* Right Side - Details */}

                <div className="flex-1 mt-6 md:mt-0 md:ml-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Ahlam Naturals Hair Growth Oil{" "}
                        <span className="text-red-600">FREE Derma Roller!</span>
                    </h2>

                    <ul className="mt-4 space-y-3 text-gray-700 text-base md:text-lg">
                        <li className='list-disc'>
                            <span className="font-bold">100% Natural & Herbal Formula</span> – Made
                            with <span className="font-bold">Shikakai, Amla, Reetha, Castor Oil,
                                Custard Oil, Mustard Oil, and Coconut Oil.</span>
                        </li>
                        <li className='list-disc'>
                            <span className="font-bold">Promotes Hair Growth</span> – Strengthens
                            hair follicles, stimulates growth, and reduces hair fall.
                        </li>
                        <li className='list-disc'>
                            <span className="font-bold">Deep Nourishment & Hydration</span> –
                            Moisturizes scalp, prevents dryness, and adds natural shine.
                        </li>
                        <li className='list-disc'>
                            <span className="font-bold">Repairs & Strengthens Hair</span> – Helps
                            restore damaged hair, making it smooth and manageable.
                        </li>
                        <li className='list-disc'>
                            <span className="font-bold">Chemical-Free & Safe</span> – Free from
                            harmful chemicals, suitable for all hair types.
                        </li>
                    </ul>

                    {/* Price */}
                    <div className="mt-6 flex items-center space-x-3 text-xl">
                        <span className="line-through text-gray-500">Rs 2,000</span>
                        <span className="text-yellow-600 font-bold text-2xl">Rs 14,99</span>
                    </div>

                    {/* Buy Now Button */}
                    <button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
}
