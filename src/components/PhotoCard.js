
import { AiOutlineLike } from 'react-icons/ai'


export const PhotoCard = ({ urls: { regular }, alt_description, likes, user: { name, portfolio_url, profile_image: { medium } } }) => {
  return (
    <>
      <div className=" flex shadow-lg relative  
   ">
        <div className="flex flex-col justify-end  absolute inset-0  ">

          <div className="relative bg-slate-400 bg-opacity-60 hover:bg-opacity-30 ">

            <div className="px-2 py-2 flex justify-between  ">

            <img src={medium} alt={name} className='w-1/6 rounded-lg' />
              
                
               
                <div className='flex gap-2 '>
                  
                <a href={portfolio_url}>
                {name}
                </a>
              <div className='flex'>
                {likes}
                <AiOutlineLike className='mt-1' />
                </div>
                </div>
                 



            </div>
          </div>


        </div>

        <img src={regular} alt={alt_description} className='w-full  object-cover  overflow-hidden ' />


      </div>

    </>







  )
}
