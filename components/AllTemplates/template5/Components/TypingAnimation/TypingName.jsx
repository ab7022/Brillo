import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TypingName() {
  return (
      <TypeAnimation
      sequence={[
        'Saif Ur Rehman.',
      ]}
      wrapper="span"
      speed={75}
    />
  )
}
