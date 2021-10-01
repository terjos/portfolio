import './Header.css';
import { ReactComponent as IconImail } from '../images/icon-email.svg';
import { useEffect } from 'react';

let prevScrollpos = window.pageYOffset

const handleScroll = function () {
  const currentScrollPos = window.pageYOffset
  const header = document.querySelector('#header')

  if (prevScrollpos >= currentScrollPos) {
    header.classList.remove('is-hidden')
    if (currentScrollPos < 50) {
      header.classList.remove('is-scrolled')
    }
  } else {
    if (currentScrollPos > 100) {
      header.classList.add('is-hidden')
      header.classList.add('is-scrolled')
    } else {
      header.classList.add('is-scrolled')
    }
  }
  prevScrollpos = window.pageYOffset
}

function Header() {

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="header" className="header">
      <div className="header-container">
        <div className="header-logo">J</div>
        <div>
          <div className="header-title">Développeur web</div>
          <div className="header-name"><strong>Josselin</strong> Terrien</div>
        </div>
        <div className="header-contact">
          <a href="#contact" ><IconImail />Contact
        </a></div>
      </div>
    </div >
  );
}

export default Header;