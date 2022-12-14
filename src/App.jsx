import './App.css';
import ContainerSeccionAllStartUp from './containers/ContainerSeccionAllStartUp';
import ContainerSeccionEmpowering from './containers/ContainerSeccionEmporing';
import ContainerSeccionServices from './containers/ContainerSeccionServices';

const App = ()=>{

  return (
    <div className="App">
      <ContainerSeccionEmpowering />
      <ContainerSeccionServices />
      <ContainerSeccionAllStartUp />
    </div>
  )
}

export default App
