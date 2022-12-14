import Header from "../components/Header";
import HeaderNav from "../components/HeaderNav";
import ola from '../assets/ola.svg';
import ola2 from '../assets/ola2.svg';
import '../styles/ContainerSeccionEmpowering.css';

const ContainerSeccionEmpowering = ()=>{
  return(
    <section className="containerSeccionEmpowering" >
        <div className="ContainerHeaders">
          <Header />
          <HeaderNav />
        </div>
      <div className="containerTextAndVideo">
        <h1>Empowering Startups</h1>
        <p>Providing our clients with the stategic to make the right technology and business decisions. we will help you develope the best operational procesess for you startup</p>
        <button type="button"><span className="material-symbols-outlined">play_arrow</span></button>
        <img className="ola" src={ola} alt="ola" />
      </div>
    </section>
  );
};

export default ContainerSeccionEmpowering;