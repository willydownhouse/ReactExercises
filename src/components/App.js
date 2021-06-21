import React from 'react';
import youtube from '../api/youtube';
import SearchInput from './SearchInput';
import VideoList from './VideoList';
import '../css/style.css';

//

class App extends React.Component {
  state = { videos: [] };

  getVideos = async term => {
    const data = await youtube.get(`/search?q=${term}`);
    this.setState({ videos: data.data.items });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>My Youtube</h1>
          <SearchInput search={this.getVideos} />
        </header>
        <section className="section">
          <div className="screen"></div>
          <div className="list-container">
            <VideoList videos={this.state.videos} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
