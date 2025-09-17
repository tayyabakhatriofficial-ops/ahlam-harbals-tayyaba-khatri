import React from 'react';
import Footer from '../Components/Footer';
import pic from '../assets/Ahlam-Naturals-Hair-Growth-Oil-FREE-Derma-Roller.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import background from '../assets/Untitled-design-2.png'
const Store = () => {

    return (
        <>
        <div style={{background:`url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',padding:'20px'}}>
                <div className='mx-10 md:mx-50 my-20 md:30' >
                <p className='font-bold text-4xl text-center'>Welcome to Ahlam Herbals Store </p>
                <p className='text-center'>At Ahlam Herbals, we bring you pure, natural, and herbal products designed to care for your hair, skin, and overall well-being. Each item in our store is crafted with love, using safe and effective natural ingredients free from harsh chemicals and harmful additives. </p>
            </div>
            <Card style={{ width: '18rem' }} className='mx-10 my-10'>
                <Card.Img variant="top" src={pic} className='border rounded-2xl' />
                <Card.Body>
                    <Card.Text className='text-center py-2'>
                        Ahlam Naturals Hair Growth Oil + FREE Derma Roller!
                    </Card.Text>
                    <Card.Text className='font-bold text-center'>₨ 2,000 ₨ 1,499 </Card.Text>
                    <div className='flex justify-center mt-5'> <Button variant="primary" className=' bg-black text-[#B49530] px-8 py-2 rounded ' >Add to Cart</Button></div>
                </Card.Body>
            </Card>

            {/* <div>
                <img src={pic} alt="" className='border  rounded-2xl  className="w-32 md:w-48 lg:w-64 h-auto"' />
                <p>Ahlam Naturals Hair Growth Oil + FREE Derma Roller!</p>
            </div> */}
        </div>
            <Footer />
        </>
    )
}
export default Store;