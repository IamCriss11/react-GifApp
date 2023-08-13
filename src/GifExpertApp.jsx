import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //al usarse el archivo barril o el indice, no se usa explicitamente el index ya que lo detecta automaticamente

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //valida que no se repita (pero si identifica una diferencia entre mayusculas, igual se agrega)
    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Buscar Gifs</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        //en ves de hacer como setCategories, se puede enviar como onNewCtaegory y asi es mas facil leerlo en el otro codigo
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* listado de gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* gif item */}
    </>
  );
};
