import React from 'react'
import Navbar from '../Navbar'
import Card2 from '../Card2'
import '../../index';
import Card3 from '../Card3';
import Card4 from '../Card4';
import WhatWeDo from '../WhatWeDo';
import Card6 from '../Card6';
import Card7 from '../Card7';
import ContactUs from '../ContactUs';
import Footer from '../Footer';
import Hero from '../Hero';
import AboutUs from '../AboutUs';
import OurProduct from '../OurProduct';
const Main = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Card2 />
        <Card3 />
        <Card4 />
        <WhatWeDo />
        <Card6 />
        <Card7 />
        <AboutUs />
        <OurProduct />
        <ContactUs />
        <Footer />
    </div>
  )
}
export default Main