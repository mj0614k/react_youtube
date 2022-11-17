import React from 'react'
import {VideoCard, Loader} from "./"

const Videos = ({videos}) => {
  if (!videos?.length) return <Loader />
  return (
    <article className="videos__inner">
      {videos.map((item, index) => (
          <VideoCard key={index} video={item}/>
      ))}
    </article>
  )
}

export default Videos
