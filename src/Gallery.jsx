import { useQuery } from '@tanstack/react-query';
import React from 'react'

const url=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;
import axios from 'axios';
import { useGlobalcontext } from './Context';
const Gallery = () => {
  const {searchTerm}=useGlobalcontext();

  const resp=useQuery({
    queryKey:['images',searchTerm],
    queryFn:async ()=>{
      const result=await axios.get(`${url}&query=${searchTerm}`)
      return result.data;
    }

  })

  if(resp.isLoading){
    return <section className='image-container'>
      <h4>Loading....</h4>
    </section>
  }

  if(resp.isError){
    return <section className='image-container'>
      <h4>There Was Is an Error</h4>
    </section>
  }

  const results =resp.data.results;


  if(results.length < 1){
    return <section className='image-container'>
      <h4>No Result Found</h4>
    </section>
  }


  return (
    <section className='image-container'>

      {results.map((item)=>{
        const url=item?.urls?.regular;

        return <img src={url} key={item.id} alt={item.alt_description} className='img' />
      })} 
    </section>
  )
}

export default Gallery
