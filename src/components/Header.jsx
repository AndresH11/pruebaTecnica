import '../styles/Header.css';

const Header = () =>{
  return(
    <header className="headerPrimario">
      <div  className="headerOption">
        <p className='phone'>+1 2129462700</p>
        <p className='help'>Help Desk</p>
        <p className='why'>Why Sway</p>
      </div>
      <div className="headerSocial" >
        <div className='headerIconSocial facebook'><i className='bx bxl-facebook'></i></div>
        <div className='headerIconSocial twitter'><i className='bx bxl-twitter'></i></div>
        <div className='headerIconSocial instragram '><i className='bx bxl-instagram'></i></div>
        <div className='headerIcoSocial language'>
          <span className="material-symbols-outlined">language</span>
        </div>
      </div>
    </header>
  );
};

export default Header;