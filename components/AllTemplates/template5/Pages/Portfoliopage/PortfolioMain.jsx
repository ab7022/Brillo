// eslint-disable-next-line no-unused-vars
import React from 'react'
import PortfolioCard from '../../Components/PortfolioCard/Portfolio'
import '../HomePage/Herosubpage/projecthomesub.scss'
import '../HomePage/Herosubpage/queryProject.scss'
import '../Portfoliopage/PortfolioMain.scss'
import '../Portfoliopage/queryportfolioMain.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function PortfolioMain() {
  return (
    <>
    <Header/>
    <div className='Mainportfoliopage'>
        <h1>🚀Some Things I’ve Built.</h1>
        <p>I love building projects and practice my engineering skills, here&apos;s an archive of things that I&apos;ve worked on.</p>
      <PortfolioCard/>
    </div>
    <Footer/>
    </>
  )
}
