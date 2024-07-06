import './App.css';

import Nav from './components/nav/Nav';
import Nav2 from './components/nav2/Nav2';
import Header from './components/header/Header';
import Header2 from './components/header2/Header2';
import Content from './components/content/Content';
import Content2 from './components/content2/Content2';
import Content3 from './components/content3/Content3';
import Content4 from './components/content4/Content4';
import Content5 from './components/content5/Content5';
import Content6 from './components/content6/Content6';
import axios from 'axios';
import { ContextProvider } from './context/ContextProvider';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '', // ! Add your API key here
};

const App = () => {
  return (
    <div>
      <ContextProvider>
        {/* Nav */}
        <Nav />

        {/* Main Header With Buttons Premium and all */}
        <Header />
        <Nav2 />

        {/* Artists */}
        <Content />

        {/* Recently Played Hindi  */}
        <Content2 />

        {/*Your Playlists  English */}
        <Content4 />

        {/*Top Album with Big Size of Card  */}
        <Content3 />

        {/* Together 2 and 4 for better look */}
        {/* <Content2 />
        <Content4 /> */}
        <Content6 />

        {/* Header 2 with only image  */}
        <Header2 />

        {/* All Content together and many more for increasing content */}
        <Content5 />
      </ContextProvider>

    </div>
  );
};

export default App;
