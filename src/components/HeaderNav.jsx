import '../styles/HeaderNav.css';

const HeaderNav = () => {
  return (
    <div className="headerNav" >
      <div className="logo">
        <h1>Libel Academy</h1>
      </div>
      <div className="navbar">
        <ul>
          <div><li>Home</li><span className="material-symbols-outlined">expand_more</span></div>
          <div><li>About</li></div>
          <div><li>Services</li></div>
          <div><li>Pricing</li></div>
          <div><li>product</li></div>
          <div><li>News</li></div>
        </ul>
        <div className='containerSearch'>
          <i className='bx bx-cart'></i>
          <i className='bx bx-search-alt-2' ></i>
          <button type="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;