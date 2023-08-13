import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {/* originalmente podria ser images.map((images)=>), y despues llamar el id o el title como iamges.id, pero se usa la desestructuracion de images y se usa {} con las propiedades de images para obtener su valor*/}
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
