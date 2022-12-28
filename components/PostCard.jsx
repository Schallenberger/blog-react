import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          src={post.featuredImage.url} 
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className='transition ease-in-out duration-200 text-center mb-8 cursor-pointer hover:text-blue-400 text-3xl font-semibold'>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img src={post.author.photo.url} alt={post.author.name} className='align-middle rounded-full object-cover w-8 h-8'/>
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-700 flex align-middle justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-200 transform hover:-translate-y-1 inline-block bg-blue-400 text-lg font-medium rounded-full text-white px-9 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
