import React from 'react'
import AboutMe from '../__components/AboutMe/AboutMe'
import Hobbies from '../__components/AboutMe/Hobbies'
import Degree from '../__components/AboutMe/CV'
export const metadata = {
  title: "About Me",
  description: "Welcome in About Me Section",
};
export default function Aboutme() {
  return (
    <div className='Aboutme'>
        <AboutMe />
        <Hobbies />
        <Degree />
    </div>
  )
}
