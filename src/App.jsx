import Navbar from './components/NavBar/Navbar';
import AlumnoCard from './components/AlumnoCard';
import Contador from './components/Contador/Contador';

import './App.css';

function App() {
  return (
    <>
    
      <Navbar />

      
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>
        
        {/* Fila 1 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Daniel " 
            carrera="Desarrollo de Software" 
            estadoInicial="Matriculado" 
          />
          <AlumnoCard 
            nombre="Maria " 
            carrera="Diseño Grafico" 
            estadoInicial="Inactivo" 
          />
          <AlumnoCard 
            nombre="Carlos " 
            carrera="Administracion Industrial" 
            estadoInicial="Matriculado" 
          />
        </div>

        {/* Fila 2 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="enciso" 
            carrera="Ingenieria de Software con IA" 
            estadoInicial="Matriculado" 
          />
          <AlumnoCard 
            nombre="Luis " 
            carrera="Redes y Seguridad" 
            estadoInicial="Inactivo" 
          />
          <AlumnoCard 
            nombre="Ana " 
            carrera="Diseño y Desarrollo de Software" 
            estadoInicial="Matriculado" 
          />
        </div>

        {/* Fila 3 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Jorge " 
            carrera="Mecatronica Industrial" 
            estadoInicial="Matriculado" 
          />
          <AlumnoCard 
            nombre="Lucia " 
            carrera="Administracion de Empresas" 
            estadoInicial="Inactivo" 
          />
          <AlumnoCard 
            nombre="Pedro Castillo" 
            carrera="Soporte de TICs" 
            estadoInicial="Matriculado" 
          />
        </div>

        <Contador />
      </div>
    </>
  );
}

export default App;