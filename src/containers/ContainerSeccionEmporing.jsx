import Header from "../components/Header";
import HeaderNav from "../components/HeaderNav";
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
      </div>
    </section>
  );
};

export default ContainerSeccionEmpowering;