import React from 'react'

const Link = ({link}) => {
  return (
    <a href={link.url} className='text-lg font-poppins uppercase tracking-wide hover:text-gray-600 duration-300'>{link.name}</a>
  )
}

export default Link