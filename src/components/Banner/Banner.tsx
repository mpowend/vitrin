import React from 'react'

interface Props {
  to: string
  src: string
}

function Banner({ to, src }: Props) {
  return (
    <a href={to}>
      <img src={src} alt="" />
    </a>
  )
}

export default Banner
