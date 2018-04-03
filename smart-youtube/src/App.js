import React, {Component} from 'react';
import SearchBar from './components/search.bar';
import VideoList from './components/video.list';
import VideoDetail from './components/video.detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDyPl-YqhqDwEHEAdSapsJCZgQbD9NFoGs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};
        YTSearch({key: API_KEY, term: 'harun bukeniya'}, videos => this.setState({videos:videos, selectedVideo: videos[0]}));
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
