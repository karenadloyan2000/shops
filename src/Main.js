import close from './images/icons/close.svg';
import mainImg from './images/main-img.png';
function Main() {
  return (
    <div className="main container  flex relative flex-column w-full">
      <div class="main-content max-width-672 w-full">
        <img src={mainImg} alt="" class="main-img" />
        <h2>
          Data to enrich your <span>online business</span>{' '}
        </h2>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
          occaecat fugiat aliqua.
        </p>
        <div class="main-button flex space-between align-center max-width-364 w-full">
          <a href="">Get started</a>
          <a href="">Live demo</a>
        </div>
      </div>
    </div>
  );
}
export default Main;
