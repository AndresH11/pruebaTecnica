import '../styles/ServicesCard.css';

const ServicesCard = ({ icon, title, description }) =>{
  return(
    <div className='serviceCard'>
      { icon }
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;