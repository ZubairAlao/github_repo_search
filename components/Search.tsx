import React from 'react'
import SearchForm from './forms/SearchForm'
import Image from 'next/image'

const Search = () => {
  return (
    <div className='space-y-8 bg-slate-300 w-full max-w-[600px] py-8 px-8 rounded-md'>
      <div className='relative'>
          <Image 
            src="/assets/icons/github.svg" 
            alt="github logo"
            width={100}
            height={100}
            className="size-24 absolute -mt-12 left-1/2 transform -translate-x-1/2 z-10"
          />
      </div>
      <h1 className='lg:text-4xl md:text-3xl text-2xl text-center pt-8 font-bold'>GitHub Repo Search</h1>
      <SearchForm />
    </div>
  )
}

export default Search

// {Create a search bar where users can input a GitHub username. On form submission,
//     the app should fetch the user’s profile from the GitHub API}