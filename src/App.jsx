import Navbar from './components/NavBar/Navbar';
import AlumnoCard from './components/AlumnoCard';

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
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Maria " 
            carrera="Diseño Grafico" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Carlos " 
            carrera="Administracion Industrial" 
            estado="Matriculado" 
          />
        </div>

        {/* Fila 2 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="enciso" 
            carrera="Ingenieria de Software con IA" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Luis " 
            carrera="Redes y Seguridad" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Ana " 
            carrera="Diseño y Desarrollo de Software" 
            estado="Matriculado" 
          />
        </div>

        {/* Fila 3 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Jorge " 
            carrera="Mecatronica Industrial" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Lucia " 
            carrera="Administracion de Empresas" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Pedro Castillo" 
            carrera="Soporte de TICs" 
            estado="Matriculado" 
          />
        </div>

      </div>
    </>
  );
}

export default App;