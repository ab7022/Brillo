import React from 'react'

export default function Goodmorning() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning !";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon !";
    } else {
      greeting = "Good evening !";
    }
  return (
    <h2>{greeting}</h2>
  )
}
