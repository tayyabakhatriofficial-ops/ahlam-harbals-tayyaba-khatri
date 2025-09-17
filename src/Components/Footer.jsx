import React from "react"
import logo from '../assets/cropped-Ahlam-Herbals-1-2048x904.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPhone, FaLocationDot, FaRegClock } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md"
const Footer = () => {
    return (
        <>
            <div className="bg-[#333333] py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 w-auto ">
                    {/* col1 */}
                    {/* Logo */}
                    <div className="flex items-center space-x-2 flex-col">
                        <img
                            src={logo}
                            className="h-30 w-auto mb-5"
                            alt="Logo"
                        />
                        <div className="flex  space-x-4 text-3xl">
                            <div className="border border-[#D4AF37] p-2 round rounded-full"><FaFacebook className="text-[#D4AF37]" /></div>
                            <div className="border border-[#D4AF37] p-2 round rounded-full"><FaTwitter className="text-[#D4AF37]" /></div>
                            <div className="border border-[#D4AF37] p-2 round rounded-full"><FaYoutube className="text-[#D4AF37]" /></div>
                            <div className="border border-[#D4AF37] p-2 round rounded-full"><RiInstagramFill className="text-[#D4AF37]" /></div>
                        </div>
                    </div>


                    {/* col2 */}
                    <div>
                        <p className="text-[#D4AF37] font-bold text-3xl text-center py-5">Quick Links</p>
                        <div className="flex flex-col space-y-2 mt-2">
                            <ul>
                                <li> <a href="" className="text-[#D4AF37] font-medium text-[20px] my-2">Store</a></li>
                                <li> <a href="" className="text-[#D4AF37] font-medium text-[20px] my-2">About Us</a></li>
                                <li> <a href="" className="text-[#D4AF37] font-medium text-[20px] my-2">Contact Us</a></li>
                                <li> <a href="" className="text-[#D4AF37] font-medium text-[20px] my-2">Refund and Return Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* col3 */}
                    <div>
                        <p className="text-[#D4AF37] font-bold text-3xl text-center py-5">Contact Us</p>
                        <div>
                            <ul>
                                <li className="flex text-[#D4AF37] gap-3"><FaLocationDot  /><a href="" className="text-[#D4AF37] underline-none font-medium text-[20px] my-2" >Second Floor, House No 6,Block A,Sindh Muslim Cooperative Housing Society, Airport Road ,Sukkur</a></li>
                                <li className="flex text-[#D4AF37] gap-3"><FaPhone  /><a href="" className="text-[#D4AF37] underline-none font-medium text-[20px] my-2" >03122824203</a></li>
                                <li className="flex text-[#D4AF37] gap-3"><FaRegClock  /><a href="" className="text-[#D4AF37] underline-none font-medium text-[20px] my-2" >24 Hours, 7 Days a week.</a></li>
                                <li className="flex text-[#D4AF37] gap-3"><MdAttachEmail  /><a href="" className="text-[#D4AF37] underline-none font-medium text-[20px] my-2" > contact@ahlamherbals.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;