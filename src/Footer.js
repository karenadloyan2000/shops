import facebook from './images/icons/facebook.svg';
import instagram from './images/icons/instagram.svg';
import twwiter from './images/icons/twwiter.svg';
import github from './images/icons/githum.svg';

function Footer() {
  return (
    <footer className="container flex space-between align-center flex-wrap">
      <p>© 2020 Workflow, Inc. All rights reserved.</p>
      <div className="footer-socsite max-width-216 w-full flex space-between align-center">
        <a href="">
          <img src={facebook} className="footer-site-logo" />
        </a>
        <a href="">
          <img src={instagram} className="footer-site-logo" />
        </a>
        <a href="">
          <img src={twwiter} className="footer-site-logo" />
        </a>
        <a href="">
          <img src={github} className="footer-site-logo" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
