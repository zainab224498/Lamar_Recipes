import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
        <img className=" h-auto  w-full  " src="https://www.tuv-nord.com/typo3temp/focuscrop/a5a72554ef755e2b30a50d3897e4117fa2d80304-fp-2000-500-0-0.jpg" alt="" />
      </div>
    )
}

export default HeroSection