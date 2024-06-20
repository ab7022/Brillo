import React from 'react'
import Intro from './Herosubpage/Intro'
import Introduction from './Herosubpage/Introduction'
import Projecthomesub from './Herosubpage/Projecthomesub'
import KeepTouch from './Herosubpage/KeepTouch'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
export default function Hero() {
  return (
<div className="Hero-Div">
  <Header/>
<Intro/>
<Introduction/>
<Projecthomesub/>
<KeepTouch/>
<Footer/>
</div>
  )
}
