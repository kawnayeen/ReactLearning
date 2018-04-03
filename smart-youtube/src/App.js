import _ from 'lodash';
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
        this.videoSearch('harun bukeniya');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({videos});
            if(this.state.selectedVideo === null){
                this.setState({selectedVideo: videos[0]});
            }
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
