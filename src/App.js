import "./App.css";

import Nav from "./components/nav/Nav";
import Nav2 from "./components/nav2/Nav2";
import Header from "./components/header/Header";
import Header2 from "./components/header2/Header2";
import Content from "./components/content/Content";
import Content2 from "./components/content2/Content2";
import Content3 from "./components/content3/Content3";
import Content4 from "./components/content4/Content4";
import Content5 from "./components/content5/Content5";
import Content6 from "./components/content6/Content6";
import axios from "axios";
import { ContextProvider } from "./context/ContextProvider";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "", // ! Add your API key here
};

const App = () => {
  return (
    <div className="container-fluid">
      <ContextProvider>
        {/* Nav */}
        <Nav />

        {/* Main Header With Buttons Premium and all */}
        <Header />
        <Nav2 />

        {/* Artists  */}
        <div id="Artists">
          <Content />
        </div>

        {/* Recently Played Hindi  */}
        <div id="Recent">
          <Content2 />
        </div>

        {/*Your Playlists  English */}
        <div id="Playlists">
          <Content4 />
        </div>

        {/*Top Album with Big Size of Card  */}
        <div id="Top">
          <Content3 />
        </div>

        {/* Together 2 and 4 for better look */}
        <div id="Trending">
          <Content6 />
        </div>

        {/* Header 2 with only image  */}
        <div id="New Releases">
          <Content2 />
        </div>

        {/* All Content together and many more for increasing content */}
        <div id="Most Played">
          <Content5 />
        </div>
      </ContextProvider>
    </div>
  );
};

export default App;
