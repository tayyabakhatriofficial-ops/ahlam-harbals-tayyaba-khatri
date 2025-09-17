import React from "react"
import pic1 from '../assets/5.png'
import pic6 from '../assets/6.webp'
import pic2 from '../assets/7.png'
import pic3 from '../assets/8.png'
import pic4 from '../assets/D4AF37-2.png'
import pic5 from '../assets/9.png'
import background from '../assets/Untitled-design-2.png'
import shampoo from '../assets/Untitled-design.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import Choose from "./Choose";
import TrendingProducts from "./TrendingProducts";
import Footer from "./Footer";
import Questioneer from "./Questioneer";


const HeroSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 w-auto p-10 " style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {/* div 1 */}
                <div className="col-span-2">
                    {/* heading */}
                    <h1 className=" font-bold text-4xl">Revive Your Hair Naturally with</h1>
                    <h1 className=" font-bold text-4xl text-[#D4AF37]">Ahlam Naturals Hair Oil!</h1>
                    <p>
                        Revive Your Hair Naturally with
                        Ahlam Naturals Hair Oil!
                        Ahlam Naturals hair Oil is made from 11 natural ingredients, each chosen for its hair care benefits.
                        It includes Shikakai, Amla, and Reetha for cleansing and strengthening. Castor Oil, Mustard Oil,
                        and Coconut Oil nourish and promote growth. Karwa Oil adds strength, while Vitamin C & E repair damage.
                        Almond Oil and Olive Oil provide deep conditioning, and Kalonji Oil strengthens hair follicles.</p>
                    <div>
                        <div className="grid grid-cols-6 gap-2.5">
                            <img src={pic1} alt="" />
                            <img src={pic2} alt="" />
                            <img src={pic3} alt="" />
                            <img src={pic4} alt="" />
                            <img src={pic5} alt="" />
                            <img src={pic6} alt="" />
                        </div>
                        {/* features */}
                        <div className="flex flex-wrap gap-3 md:gap-7">
                            <div className="flex">  <p><IoCheckmarkSharp /></p><p>Promotes Hair Growth</p></div>
                            <div className="flex">  <p><IoCheckmarkSharp /></p><p>Repairs Damaged Hair</p></div>
                            <div className="flex">  <p><IoCheckmarkSharp /></p><p>Prevents Hair Fall</p></div>
                        </div>
                        <p className="font-bold text-2xl">Contact Us</p>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex gap-3"><FaPhone className="mt-1" /><p>03122824203</p></div>
                            <div className="flex gap-3">< HiBuildingStorefront className="mt-1" /><p>contact@herbauraoil.store</p></div>
                        </div>
                         <div className="my-3"> <button className="bg-[#D4AF37] px-8 py-4 text-white font-bold hover:bg-yellow-600">
                    Buy Now
                </button></div>


                    </div>
                </div>
                {/* div 2 */}
                <div className="flex justify-center items-center">
                    <img className="w-32 md:w-48 lg:w-64 h-auto" src={shampoo} alt="" />
                </div>
               
            </div>
            <Choose />
            <TrendingProducts />
            <Questioneer />
            <Footer />
        </>
    )
}
export default HeroSection