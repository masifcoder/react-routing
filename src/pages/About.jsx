import React from 'react'
import { useSearchParams } from 'react-router-dom'

function About() {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('q'));

  return (
    <div id='about-page'>About</div>
  )
}

export default About