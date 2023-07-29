import React from 'react'

interface props {
  to: string
  src: string
  title: string
}

function Banner({ to, src, title }: props) {
  return (
    <a href={to}>
      <img src={src} alt={title} />
    </a>
  )
}

export default Banner
