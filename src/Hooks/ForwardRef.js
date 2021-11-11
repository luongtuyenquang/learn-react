import { forwardRef, useEffect, useRef } from 'react'
import video1 from '../videos/video_1.mp4'

function ForwardRef(props, videoRef){

    return <video src={video1} ref={videoRef} controls loop />
}

export default forwardRef(ForwardRef)