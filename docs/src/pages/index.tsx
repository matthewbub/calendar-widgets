import React, { FC } from 'react'
import { EndlessCards } from '../components';
import { landingNav } from '../constants/landing';
import { Calendar } from 'calender-widgets'

export default function HomePage() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <div>
        <Calendar className='w-[400px]' />
      </div>

      <EndlessCards cards={landingNav} />
    </div>
  )
}