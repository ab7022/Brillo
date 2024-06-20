import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Typing() {
  return (
      <TypeAnimation
      sequence={[
        'A MERN Stack Developer', // Types 'One'
        2000, // Waits 1s
        'A Next Js Developer',
        2000, 
        'Open Source enthusiast',
        2000, 
        'A Member of the Jedi Order',
        2000,  
        'A Mighty Avenger',
        2000, 
        // () => {
        // },
      ]}
      wrapper="h2"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  )
}
