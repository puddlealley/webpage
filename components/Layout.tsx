import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from './ContactUs'

export default function Layout({ children }: {
    children: React.ReactNode
}) {
 return (
     <div className="antialiased min-h-screen">
         <Header />
         { children }
         <ContactUs />
         <Footer />
     </div>
 )
}