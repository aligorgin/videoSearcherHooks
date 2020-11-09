import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title='youtube video' src={youtubeSrc}/>
            </div>

            <div className='ui segment'>
                <div className='ui header'>
                    {video.snippet.title}
                </div>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}


export default VideoDetail;