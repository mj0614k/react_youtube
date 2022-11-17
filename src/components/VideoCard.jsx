import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video: {id: {videoId}, snippet,}}) => {
  return (
    <div className="box">
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
        <span className="videoName">{snippet?.title}</span>
      </Link>
      <Link to={`/channel/${snippet.channelId}`}>
        <span className="channelName">{snippet.channelTitle}</span>
      </Link>
    </div>
  )
}

export default VideoCard