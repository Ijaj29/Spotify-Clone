import './Nav.css';
import { useState, useEffect } from 'react';
import spo from '../../assets/../../src/assets/spotify-1-logo.png';
import menu from '../../assets/../../src/assets/mnf.jpg';
import search from '../../assets/../../src/assets/search.png';






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
    <nav
      style={{
        backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',
      }}
    >
      <section>
        <div className='nav_left'>

          <img
            className='nav_logo'
            alt='logo'
            src={spo}
          />
        </div>
        <img
          className='search'
          src={search}
        />





        <div className='nav_right'>
          <div className=''>
            <button className='buttonapp'>
              <b>Open App</b>
            </button>
          </div>
          <img
            className='menu'
            src={menu}
          />
        </div>
      </section>
    </nav>
  );
};

export default Nav;
