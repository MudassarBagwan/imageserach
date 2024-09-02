
import { useGlobalcontext } from './Context'

import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'


const ThemeToggle = () => {

  const {isDarkTheme,toggleDarkTheme}=useGlobalcontext();

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ?(<BsFillMoonFill className='toggle-icon'/>):
        (<BsFillSunFill className='toggle-icon'/>
      )}</button>

    </section>

  )
}

export default ThemeToggle
