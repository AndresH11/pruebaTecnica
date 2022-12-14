import CardsGray from '../components/CardsGray';
import CuadroPunto from '../components/CuadroPunto';
import '../styles/ContainerSeccionAllStartUp.css'

const ContainerSeccionAllStartUp = ()=>{
  return(
    <section className="containerSeccionAllStartUp">
      <div className='containerTitle'>
        <div className='containerTitle-texto'>
          <h1>All startups need to make their business work</h1>
          <p>We work with a huge pool of investors,venture capital firms and business angels</p>
        </div>
        <div className='containerTitle-button'>
          <div className='buttonGetStarted'>
            <p>Get Started</p>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
      </div>
      <div className='containerBody'>
        <div className='containerCardView'>
          <div className='card11'>
            <CardsGray />
          </div>
          <div className='card22'>
            <CardsGray sombra={'-2px 4px 5px 3px rgb(0 0 0 / 35%)'} />
          </div>
          <div className="puntos1">
            <CuadroPunto />
          </div>
          <div className='puntos2'>
            <CuadroPunto puntos={50} />
          </div>
        </div>
        <div className='containerPlanBusiness'>
          <h1>Design business model and write abusiness plan</h1>
          <p className='containerPlanBusiness-description'>We designed special services for startups, focused on the most important issues needed to be solved:</p>
          <div className='financiero'>
            <div className='financieroIcon'><span className="material-symbols-outlined">volunteer_activism</span></div>
            <div className='financieroText'>
              <p className='titleFinaciero'>Find an investor</p>
              <p className='contenidoFinanciero'>Access to financial resource is essentially important for many startups</p>
            </div>
          </div>
          <div className='financiero'>
            <div className='financieroIcon'><span className="material-symbols-outlined">note_alt</span></div>
            <div className='financieroText'>
              <p className='titleFinaciero'>Build a strategy</p>
              <p className='contenidoFinanciero'>Access to financial resource is essentially important for many startups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContainerSeccionAllStartUp;