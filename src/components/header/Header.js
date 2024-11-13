import './Header.css';




function Header() {
  return (
    <header>
      <div className='header_inner_shadow'></div>
      <div className='header_content'>
        <div className='content'>
          <h1><b>Get Premium</b></h1>
          <p><b>Take Control of your listening with ad-free music.</b></p>
          <p><b>Cancel anytime.</b></p>


          <button className='get'>Get Premium</button>
          <button className='get'>Continue With Ads</button>
        </div>
      </div>
    </header >
  );
}

export default Header;