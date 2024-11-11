import "./Nav2.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);
  const Navlist = [
    "Artists",
    "New Releases",
    "Recent",
    "Playlists",
    "Top",
    "Trending",
    "Most Played",
    // "English",
    // "Hindi",
    // "Marathi",
    // "Urdu",
    // "Popular",
    // "Latest",
    // "Recommended",
    // "Luis Fonsi",
    // "Sia",
  ];

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className="nav1 container-fluid"
      style={{
        backgroundColor: show ? "rgb(20,20,20)" : "transparent",
      }}
    >
      <section>
        <div className="navs ">
          {Navlist &&
            Navlist.map((data) => {
              return <div key={data} onClick={() => handleScroll(data)} className="px-5">{data}</div>;
            })}
        </div>
      </section>
    </nav>
  );
};

export default Nav;
