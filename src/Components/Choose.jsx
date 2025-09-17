import React, { useState } from "react";
import background from '../assets/Untitled-design-2.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import image from '../assets/Ahlam-Naturals-Hair-Growth-Oil.png'
import shampoo from '../assets/Untitled-design.png'
const Choose = () => {
    const faqs = [
        {
            question: "What is Ahlam Naturals Hair Oil?",
            answer:
                "Ahlam Naturals Hair Oil is a natural herbal oil specially formulated for hair care. It contains organic ingredients and essential oils that help nourish the scalp and hair, promoting healthier and stronger hair growth.",
        },
        {
            question: "What are the benefits of using Ahlam Naturals Hair Oil?",
            answer:
                `The benefits of Ahlam Naturals Hair Oil include:
                Hydrates and nourishes dry scalp 
                Reduces dandruff and hair fall
                Improves hair texture and shine
                Promotes stronger and thicker hair growth
                Helps relax and relieve stress with its soothing properties`,
        },
        {
            question: "How should I use Ahlam Naturals Hair Oil?",
            answer:
                `For Hair Care: Take a small amount of oil in your hands and gently massage it into your scalp. Apply the oil along the length of your hair. Leave it on for about 30 minutes, then wash your hair with a mild shampoo.
                For Scalp Massage: You can also use it for a relaxing scalp massage to improve circulation.`
        },
        {
            question: "Is Ahlam Naturals Hair Oil safe for all hair types?",
            answer: "Yes, Herbaura Hair Oil is safe for all hair types. However, if you have a sensitive scalp or allergies to certain ingredients, we recommend doing a patch test before use."
        },
        {
            question: "How often should I use Ahlam Naturals Hair Oil?",
            answer: "For hair care, it is recommended to use the oil 2-3 times a week. For scalp nourishment, you can use it daily, but if any irritation occurs, reduce the frequency."
        },
        {
            question: "Is Ahlam Naturals Hair Oil chemical-free?",
            answer: "Yes, Herbaura Hair Oil is free from harmful chemicals. It is made with pure herbal ingredients and is safe for your hair and scalp."

        },
        {
            question: "How should I store Ahlam Naturals Hair Oil?",
            answer: "Store Herbaura Hair Oil in a cool, dry place, away from direct sunlight. Make sure the bottle is tightly sealed to preserve its freshness."
        }
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <>
            <div className="" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <p className="text-5xl font-medium text-center pt-10 pb-10 ">
                    Why to chose us?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-15">
                    {/* col 1 */}
                    <div className="flex flex-col justify-center ">
                        <div className="flex font-bold text-2xl p-2 md:p-4"><IoCheckmarkSharp className="mt-2 " /><p>100% Natural & Herbal Formula</p></div>
                        <div className="flex font-bold text-2xl p-2 md:p-4"><IoCheckmarkSharp className="mt-2 " /><p>Proven Hair & Skin Benefits</p></div>
                        <div className="flex font-bold text-2xl p-2 md:p-4"><IoCheckmarkSharp className="mt-2 " /><p>Dermatologist Approved & Safe for All</p></div>
                        <div className="flex font-bold text-2xl p-2 md:p-4"><IoCheckmarkSharp className="mt-2 " /><p>Satisfaction Guaranteed</p></div>
                        <div className="flex font-bold text-2xl p-2 md:p-4"><IoCheckmarkSharp className="mt-2 " /><p>Fast & Visible Results</p></div>
                        <div className="flex font-bold text-2xl p-2 md:p-4"><IoCheckmarkSharp className="mt-2 " /><p>Made with Love & Ethical Practices</p></div>
                    </div>
                    {/* col 2 */}
                    <div className="flex justify-center items-center p-10">
                        <img src={image} alt="" className="w-full h-auto object-cover rounded-[20px] shadow-2xl" style={{ boxShadow: "4px 4px 10px gray" }} />
                    </div>
                </div>
                {/* section 2 */}
                <p className='font-medium text-5xl text-center my-5'>Frequently Asked Questions</p>
                <div className="flex flex-wrap mx-5 px-5">
                    <div className="flex justify-center"><img className="w-32 md:w-48 lg:w-64 h-auto" src={shampoo} alt="" /></div>
                    <div className="w-full md:w-3/4 p-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="ml-5 md:ml-10">
                                <button onClick={() => toggleFAQ(index)} className="font-medium text-2xl py-2 text-left">
                                    <span >{openIndex === index ? "-" : "+"}</span>
                                    {faq.question}
                                </button>
                                {openIndex === index && (

                                    <p className="pt-2">
                                        {faq.answer}
                                    </p>
                                )}

                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </>
    )
}
export default Choose;