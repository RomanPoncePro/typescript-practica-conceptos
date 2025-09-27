import fotoPerfil from "../assets/foto-perfil.png";

const PresentacionSeccion = () => {
  return (
    <div className="presentacion-seccion seccion">
      <div className="presentacion-card">
        <h1>Fullstack developer</h1>
        <h2>Roman Ponce</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus
          voluptate, delectus ex harum id expedita adipisci libero cum optio
          distinctio dolorum perspiciatis quia, aliquam temporibus animi nobis
          culpa ab.
        </p>
        <div>
          <img src={fotoPerfil} alt="foto perfil" />
        </div>
      </div>

      <button>Proyectos</button>
    </div>
  );
};

export default PresentacionSeccion;
