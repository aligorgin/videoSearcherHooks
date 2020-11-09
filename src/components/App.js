import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onFormSubmit('books');
    }

    onFormSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        // imp: if u use `` or + for showing video object
        // with string you will get a nasty [object , object] bug, so be aware!
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}