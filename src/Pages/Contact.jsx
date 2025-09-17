import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from '../Components/Footer';

export default function Contact() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-200 p-6">
                <div className="max-w-5xl w-full bg-white/90 rounded-xl shadow-md overflow-hidden border">
                    <div className="grid md:grid-cols-2">
                        {/* Left Side */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Let's Get in Touch</h2>
                            <p className="text-gray-700 mb-6">
                                We’d love to hear from you! Whether you have a question, need assistance,
                                or want to share feedback, feel free to reach out to us. Please fill out the form below,
                                and we’ll get back to you as soon as possible.
                            </p>

                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-xl" />
                                    <span>03122824203</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-xl" />
                                    <span>contact@herbauraoil.store</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-xl mt-1" />
                                    <span>
                                        Office SS.2 Kissan Street, Circular Road, Lahore, Punjab, Pakistan
                                    </span>
                                </div>
                            </div>

                            <h3 className="mt-6 font-bold text-2xl">Connect With Us</h3>
                            <div className="flex gap-3 mt-3">
                                <a href="#" className="p-2 bg-black text-white rounded shadow hover:bg-gray-700">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="p-2 bg-black text-white rounded shadow hover:bg-gray-700">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="p-2 bg-black text-white rounded shadow hover:bg-gray-700">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="bg-[#D4AF37] p-8 flex flex-col justify-center">
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 rounded border bg-[#D4AF37] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full p-3 rounded border bg-[#D4AF37] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded border bg-[#D4AF37] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full p-3 rounded border bg-[#D4AF37] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-black text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-800"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
