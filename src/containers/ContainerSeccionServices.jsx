import '../styles/ContainerSeccionServices.css'
import ServicesCard from "../components/ServicesCard";

const ContainerSeccionServices = () =>{
  return(
    <section className="containerSeccionServices">
      <p>WE HELP INOVATIVE STARTUPS TO FIND AND FIX WEAK POINTS AND THE PRODUCT</p>
      <h1>Special outstanding service for startups</h1>
      <div className='containerCards'>
      <ServicesCard
      icon={ <i className='bx bx-user'></i> }
      title={'Entrepreneurs'}
      description = {'wi work with ecosystem leaders, corporations and startups worldwide.'}
      />
      <ServicesCard
      icon={ <span className="material-symbols-outlined">monitoring</span> }
      title={'Entrepreneurs'}
      description = {'wi work with ecosystem leaders, corporations and startups worldwide.'}
      />
      <ServicesCard
      icon={ <span className="material-symbols-outlined">paid</span> }
      title={'Entrepreneurs'}
      description = {'wi work with ecosystem leaders, corporations and startups worldwide.'}
      />
      <ServicesCard
      icon={ <span className="material-symbols-outlined">emoji_objects</span> }
      title={'Entrepreneurs'}
      description = {'wi work with ecosystem leaders, corporations and startups worldwide.'}
      />
      </div>
    </section>
  );
};

export default ContainerSeccionServices;