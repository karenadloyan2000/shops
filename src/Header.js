import headerLogo from './images/icons/Logo.svg';
import submenu from './images/icons/usbmenu.svg';
import close from './images/icons/close.svg';
import { useState } from 'react';
function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <header className="">
      <div className="dasketop-menu flex  space-between margin-auto align-center max-width-576 w-full">
        <img src={headerLogo} />
        <ul className="list-none max-width-487 w-full margin-auto flex space-between align-center menu-dasketop">
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Marketplace</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Log in</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu  space-between align-center container">
        <img src={headerLogo} />
        <ul
          className={`menu-mobile list-none  flex-column ${
            open ? 'mobile-menu-active' : ''
          } `}
        >
          <div className="close-block w-full flex justify-end align-center">
            <img src={close} onClick={() => setOpen(!open)} />
          </div>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Marketplace</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Log in</a>
          </li>
        </ul>
        <img src={submenu} onClick={() => setOpen(!open)} />
      </div>
    </header>
  );
}
export default Header;
