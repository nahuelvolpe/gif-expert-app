import React, {useState} from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'One Piece']);

  const handleAdd = () => {
    setCategories([...categories, 'Sakura']);
  }

    return ( 
      <>
        <h2>GifExpertApp</h2>
        <AddCategory />
        <hr />

      <button onClick={ handleAdd }>Agregar</button>

        <ol>
          {
            categories.map(category => {
              return <li key={category}> {category} </li>
            })
          }
        </ol>
      </>
     );
  }
   
  export default GifExpertApp;  