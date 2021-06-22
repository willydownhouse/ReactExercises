import React from 'react';
import youtube from '../api/youtube';
import SearchInput from './SearchInput';
import VideoList from './VideoList';
import VideoScreen from './VideoScreen';
import '../css/style.css';

//

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  getVideos = async term => {
    const data = await youtube.get(`/search?q=${term}`);
    console.log(data);
    this.setState({ videos: data.data.items });
  };

  onVideoSelect = video => {
    console.log(video);
    this.setState({ selectedVideo: video });
    console.log('current state of selected video:', this.state.selectedVideo);
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="title">
            <i className="fab fa-youtube fa-2x"></i>
            <h1>Premium</h1>
          </div>
          <SearchInput search={this.getVideos} />
        </header>
        <section className="section">
          <VideoScreen video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </section>
      </div>
    );
  }
}

export default App;
