import { useEffect, useState } from "react";

export default function App() {
  
  const [??,??] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
                    = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados =                ;
        setFotos(dados);
    }
    buscarUsuario();
  }, //complete o código);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {}
      </ul>
    </>
  );
}
