import React from "react";
import background from '../assets/Untitled-design-2.png'
import Footer from '../Components/Footer'
export default function About() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 flex justify-center p-8" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="max-w-4xl w-full text-gray-800 space-y-6">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold">About Us Ahlam Herbals</h2>
                    <p className="text-lg">Welcome to Ahlam Herbals 🌿</p>

                    {/* Paragraphs */}
                    <p>
                        We started Ahlam Herbals with a simple dream – to bring you pure, natural,
                        and safe products that really work. Our belief is simple: real beauty comes
                        from nature, and nature has everything we need to look and feel our best.
                    </p>

                    <p>
                        Our products are 100% natural, herbal, and chemical-free, made with love
                        and care. Every ingredient we use is carefully chosen to give you the best
                        results without any harmful side effects.
                    </p>

                    <p>
                        Our most loved product, <b>Ahlam Naturals Hair Growth Oil</b>, has helped
                        many people reduce hair fall, grow stronger hair, and feel more confident.
                        Along with this, we are continuously creating herbal products that care
                        for your hair, skin, and overall well-being.
                    </p>

                    {/* Promises */}
                    <p>At Ahlam Herbals, we promise you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Pure & Natural Products 🌱
                        </li>
                        <li>
                            No Harsh Chemicals ❌
                        </li>
                        <li>
                            Care That Comes From Nature 💚
                        </li>
                    </ul>

                    {/* Closing */}
                    <p>
                        We’re not just a brand, we’re a family that believes in natural healing,
                        healthy living, and beauty that lasts.
                    </p>

                    <p className="font-semibold">
                        Ahlam Herbals Where Nature Takes Care of You.
                    </p>
                </div>


            </div>
            {/* second div */}
            <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 flex justify-center p-6" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="max-w-5xl w-full bg-white rounded-xl shadow-md border overflow-hidden">
                    {/* Header Tabs */}
                    <div className="flex bg-gray-800 text-white font-semibold rounded-t-xl">
                        <div className="flex-1 text-center py-2 bg-white text-[#D4AF37]">
                            Incorporation Letter
                        </div>
                        <div className="flex-1 text-center py-2 text-[#D4AF37]">FBR TAX</div>
                    </div>

                    {/* Content */}
                    <div className="p-8 text-gray-800 space-y-6">
                        <h2 className="text-2xl font-bold">Our Legal Incorporation</h2>

                        <p>
                            At <b>Ahlam Herbals</b>, transparency and trust are at the heart of everything we do.
                            We want our customers to feel fully confident when choosing our products.
                            That’s why we are proud to share that <b>Ahlam Herbals is an officially registered business.</b>
                        </p>

                        <p>
                            Our <b>Incorporation Certificate</b> is proof of our legal standing as a recognized and authorized company.
                            This document confirms that our operations follow proper regulations, giving you the assurance
                            that you are buying from a legitimate and trusted brand.
                        </p>

                        <p className="font-semibold">Why this matters for you:</p>
                        <ul className="space-y-2">
                            <li>✅ Confidence that you are purchasing from a <b>registered business</b></li>
                            <li>✅ Assurance of <b>genuine and safe products</b></li>
                            <li>✅ Stronger <b>trust and credibility</b></li>
                        </ul>

                        <p>
                            We believe that honesty builds long-term relationships with our valued customers,
                            and by sharing our incorporation details, we aim to strengthen that bond of trust.
                        </p>

                        <p>
                            📄 You can view our official <b>Incorporation Document</b> here 👇👇👇
                        </p>

                        <div className="pt-2">
                            <button className="px-6 py-2 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-full hover:bg-yellow-600 hover:text-white transition">
                                View Incorporation Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>


        </>


    );
}
