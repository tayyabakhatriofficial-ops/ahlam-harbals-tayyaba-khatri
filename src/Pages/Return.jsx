import React from 'react';
import Footer from '../Components/Footer';
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import background from '../assets/Untitled-design-2.png'

const Return = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='mx-10 md:mx-50 mb-20 md:30' >
                    <p className='text-5xl font-bold text-center my-10 text-[#444444]'>Refund and Return Policy</p>
                    <p className='text-center'>At Ahlam Herbals, customer satisfaction is our top priority. We want you
                        to feel confident and happy with every purchase you make from us.
                        Please read our Refund and Return Policy carefully to understand how we handle returns,
                        exchanges, and refunds.</p>

                </div>
                <div className='mx-20'>
                    {/* return */}
                    <div>
                        <p className='text-3xl font-bold text-[#444444] mb-5 md:mb-8 '>1. Returns</p>
                        <ul className='mb-6'>
                            <li>You may request a return within 7 days of receiving your order.</li>
                            <li>The product must be unused, in its original packaging, and in the same condition as received.</li>
                            <li>Items that are damaged due to misuse, improper handling, or not in their original condition will not be eligible for return.</li>
                        </ul>
                    </div>
                    {/* 2. Refunds */}
                    <div>
                        <p className='text-3xl font-bold text-[#444444] mb-5 md:mb-8'>2. Refunds</p>
                        <ul className='mb-6'>
                            <li>Once your returned item is received and inspected, we will notify you via email or phone about the status of your refund.</li>
                            <li>If approved, your refund will be processed within 5–10 business days and automatically credited to your original method of payment.</li>
                            <li>Shipping charges are non-refundable.</li>
                        </ul>
                    </div>
                    {/* 3. Exchanges */}
                    <div>
                        <p className='text-3xl font-bold text-[#444444] mb-5 md:mb-8'>3. Exchanges</p>
                        <ul className='mb-6'>
                            <li>We only replace items if they are defective, damaged, or if you received the wrong product.</li>
                            <li>If you need to exchange an item, please contact us at contact@ahlamherbals.com.</li>
                        </ul>
                    </div>
                    {/* 4. Non-Returnable Items */}
                    <div>
                        <p className='text-3xl font-bold text-[#444444] mb-5 md:mb-8'>4. Non-Returnable Items</p>
                        <p>The following items are non-returnable and non-refundable:</p>
                        <ul className='mb-6'>
                            <li>Perishable goods (e.g., food, beverages).</li>
                            <li>Personal care products (for hygiene reasons).</li>
                            <li>Sale or discounted items.</li>
                        </ul>
                    </div>
                    {/* 5. How to Request a Return */}
                    <div>
                        <p className='text-3xl font-bold text-[#444444] mb-5 md:mb-8'>5. How to Request a Return</p>
                        <p>To initiate a return or refund request:</p>
                        <ul className='mb-6'>
                            <li>Contact us at contact@ahlamherbals.com with your order number and reason for return.</li>
                            <li>Our support team will guide you through the process.</li>
                            <li>Ship the product back to the provided return address.</li>

                        </ul>
                    </div>
                    {/* 6. Contact Us */}
                    <div>
                        <p className='text-3xl font-bold text-[#444444] mb-5 md:mb-8'>6. Contact Us</p>
                        <p className='mb-3'>If you have any questions about our Refund and Return Policy, please feel free to reach out:</p>
                        <div className='mb-5'>
                            <div><p className='flex'><MdAttachEmail className='mt-1.5 mr-2' />Email: <span>contact@ahlamherbals.com</span></p></div>
                            <div><p className='flex'><FaPhoneAlt className='mt-1.5 mr-2' />phone <span>03122824203</span></p></div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}
export default Return;