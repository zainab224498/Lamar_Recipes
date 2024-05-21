import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import FoodPostCard from '../../components/foodPostCard/FoodPostCard'
import DessertPostCard from '../../components/dessertPostCard/DessertPostCard'
import SnackPostCard from '../../components/snackPostCard/SnackPostCard'
import DrinkPostCard from '../../components/drinkPostCard/DrinkPostCard'

function Home() {

useEffect(() => {
window.scrollTo(0, 0)
}, [])

return (
<Layout>
<HeroSection/>
<FoodPostCard/>
<DessertPostCard/>
<SnackPostCard/>
<DrinkPostCard/>
<BlogPostCard/>
</Layout>
)
}

export default Home