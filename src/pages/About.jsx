import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of passion for innovation and a dsire to revolutionized. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, impedit dolore repellat maiores explicabo cum obcaecati tempore quibusdam recusandae eius!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores voluptate corporis rem aliquid facere libero, distinctio nostrum accusantium nesciunt hic repudiandae atque consequuntur magnam impedit voluptas repellendus quos! Quasi voluptas alias a harum minus distinctio non ratione dolore sit?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos suscipit aperiam enim alias perferendis quisquam dolorum veritatis, consequatur, voluptatum debitis voluptas optio placeat tenetur autem reiciendis consequuntur laudantium asperiores.</p>
         </div>
       </div>

       <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       
       <div className='flex flex-col md:flex-row mb-20 text-sm'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
            <b>Quality Assurance:</b>
            <p className='text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima molestias fugiat totam asperiores enim ullam.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
            <b>Convenience:</b>
            <p className='text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima molestias fugiat totam asperiores enim ullam.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
            <b>Expectional Customer Service:</b>
            <p className='text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima molestias fugiat totam asperiores enim ullam.</p>
         </div>
       </div>

       <NewsLetterBox/>
    </div>
  )
}

export default About
