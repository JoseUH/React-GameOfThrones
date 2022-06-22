import React, { useContext, useState } from "react";
import { SWContext } from "../../context/context";
import "./Gallery.scss";
const Gallery = () => {
  const { characters } = useContext(SWContext);
  // const [Img, setImg] = useState();
  const [H2, setH2] = useState();

  return (
    <div className='characters'>
      {/* {Img ? <img className='imagen' src={Img} alt='img' /> : null} */}
      
      {characters.map((character) => (
        <>
        { (character._id !== "5cc0757c04e71a0010b8713e" &&
         character._id !=="5cc0757c04e71a0010b8714b" &&
          character._id !=="5cc0757c04e71a0010b8717b" &&
          character._id !=="5cc0757c04e71a0010b873d6" &&
          character._id !=="5cc0757c04e71a0010b875bc" &&
          character._id !=="5cc0757c04e71a0010b875cc"
          )&&
        <div
          onMouseOver={() => setH2(character.name)}
          // onClick={() => setImg(character.image)}
          key={character._id}
          class='carta'>
          <h2 className='hover'>{H2}</h2>
          <img src={character.image} alt={character.name}></img>
          
        </div>}

        </>
      ))}
    </div>
  );
};

export default Gallery;
