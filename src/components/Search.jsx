import React from 'react';
import './form.css'
import { useGlobalContext } from '../context/Context';

export default function Search() {
  const {query, SearchPost}  = useGlobalContext();
  return (
    <div className='search'>
      <h1>welcome to Abu Bakar site</h1>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div>
        <input type="text" 
        className='form-input'
        placeholder='Search here'
        value={query}
        onChange={(e)=> SearchPost(e.target.value)}
        />
        </div>
      </form>
    </div>
  )
}
