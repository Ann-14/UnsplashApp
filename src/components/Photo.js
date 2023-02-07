import React from 'react'

export const Photo = ({urls:{regular},alt_description,likes,user:{name,portfolio_url,profile_image:{medium}}}) => 

{
  return (
    <article className='flex flex-col'>
      <img src={regular} alt={alt_description} className='w-1/3'/> 
<div>
    <h3>{name}</h3>
    <p>{likes}</p>
</div>
<a href={portfolio_url}>
    <img src={medium} alt={name} className='w-1/5'/>
</a>
    </article>
  )
}
