import React from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Forms from '../Forms/ContactForm'
import BlogPost from '../BlogPost/BlogPost'
import Services from '../Services/Services'
import FeatureWork from '../FeatureWork/FeatureWork'
import BlogView from '../BlogView/BlogView'
import Clients from '../Clients/Clients'
import About from '../About/About'
import Footer from '../Footer/Footer'
const Home = ()=>{
    return <div>
         <Header />
        <Nav />
        <Forms/>
        <BlogPost/>
        <Services/>
        <FeatureWork/>
        <BlogView/>
        <Clients/>
        <About/>
        <Footer/>
      
    </div>
}

export default Home;