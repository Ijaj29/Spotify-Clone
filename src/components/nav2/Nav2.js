import './Nav2.css';
import { useState, useEffect } from 'react';
// import spo from '../../assets/../../src/assets/spotify-1-logo.png';
// import menu from '../../assets/../../src/assets/mnf.jpg';
// import search from '../../assets/../../src/assets/search.png';






const Nav = () => {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <nav className='nav1'
      style={{
        backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',
      }}
    >
      <section>
        <div className='navs'>
          <div>
            <p>Artists</p>
          </div>
          <div>
            <p>New Releases</p>
          </div>
          <div>
            <p>Recent</p>
          </div>
          <div>
            <p>Playlists</p>
          </div>
          <div>
            <p>Top </p>
          </div>
          <div>
            <p>Trending </p>
          </div>
          <div>
            <p>Charts</p>
          </div>
          <div>
            <p>English</p>
          </div>
          <div>
            <p>Hindi</p>
          </div>
          <div>
            <p>Marathi</p>
          </div>
          <div>
            <p>Urdu</p>
          </div>
          <div>
            <p>Popular </p>
          </div>
          <div>
            <p>Latest</p>
          </div>
          <div>
            <p>Recommended</p>
          </div>
          <div>
            <p>Luis Fonsi</p>
          </div>
          <div>
            <p>Sia</p>
          </div>
          <div>
            <p></p>
          </div>
         
        
        </div>
      </section>
    </nav>
  );
};

export default Nav;
