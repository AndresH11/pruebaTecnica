import '../styles/CardsGray.css';

const CardsGray = ({ sombra })=>{
  const estilo = {
    'boxShadow' : sombra
  }
  return(
    <div>
      <div className="card1" style={estilo} ></div>
    </div>
  );
};

export default CardsGray;