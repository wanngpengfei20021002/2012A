import React, { useEffect, useState } from 'react'
import { MCard } from '@@@'
import { Button } from 'antd-mobile'
import headPortrait from '@/assets/images/headPortrait.png'
import './styles.less'

export default function Home (props) {
  const data = [
    {
      image: headPortrait,
      num: 132,
      title: '城管',
    },
    {
      image: headPortrait,
      num: 32,
      title: '和尚',
    },
    {
      image: headPortrait,
      num: 100,
      title: '和尚',
    },
    {
      image: headPortrait,
      num: 35,
      title: '和尚',
    },
    {
      image: headPortrait,
      num: 38,
      title: '和尚',
    },
  ]
  return (
    <div>
      <MCard 
        data={data}
        columns={3}
        rowGap={28}
        mfont={{
          fontSize: '30px',
          shadow: 1,
          autoincrement: true,
        }}
        numSize='50px'
      />

      <Button>ddd</Button>
    </div>
  )
}

