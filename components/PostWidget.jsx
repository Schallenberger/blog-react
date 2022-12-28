import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8  font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Similar Posts'}
      </h3>
      {relatedPosts.map(( post ) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img src={post.featuredImage.url} alt={post.title} className='w-14 h-14 align-middle rounded-full object-cover'/>
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-700 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md cursor-pointer'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
