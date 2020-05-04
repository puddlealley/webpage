import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }: {
    children: React.ReactNode
}) {
 return (
     <div className="antialiased min-h-screen">
         <Header />
         { children }
         <Footer />
     </div>
 )
}