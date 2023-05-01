interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

//la interface no sirve para crear instancias de clases

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: {
      pais: 'Argentina',
      casaNo: 615,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
