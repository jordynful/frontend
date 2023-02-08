
import { useEffect } from 'react';
import './style/home.css';
import React, { useState} from 'react';
import MovieCard from '../components/MovieCard';
import Layout from '../components/Layout';
const BREAKFAST = [
  {
    title: 'The Avengers',
    description: 'A movie that shows some super heros doing some stuff',
    imageUrl:
      'https://flxt.tmsimg.com/assets/p8815512_p_v8_ax.jpg',
  
  },
  {
    title: 'The Texas Chainsaw Massacre',
    description: 'Great film',
    imageUrl:
      'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTgxMjk3MDYzNTM1NzQx/the-texas-chain-saw-massacre.webp',
     
  },
  {
    title: 'Parasite',
    description: 'scury film',
    imageUrl: 'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_750/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.webp'
  },
  {
    title: 'The Little Mermaid',
    description: 'good movie',
    imageUrl: 'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1000/MTkwNTgxMjk3MDY1NTY3MzU3/usa-the-little-mermaid---in-studio-preview.webp'
  },

  {
    title: 'The Avengers',
    description: 'A movie that shows some super heros doing some stuff',
    imageUrl:
      'https://flxt.tmsimg.com/assets/p8815512_p_v8_ax.jpg',
  
  },
  {
    title: 'The Texas Chainsaw Massacre',
    description: 'Great film',
    imageUrl:
      'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTgxMjk3MDYzNTM1NzQx/the-texas-chain-saw-massacre.webp',
     
  },
  {
    title: 'Parasite',
    description: 'scury film',
    imageUrl: 'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_750/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.webp'
  },
  {
    title: 'The Little Mermaid',
    description: 'good movie',
    imageUrl: 'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1000/MTkwNTgxMjk3MDY1NTY3MzU3/usa-the-little-mermaid---in-studio-preview.webp'
  },

];
function Home(props) {
  // if (props.items.length === 0) {
  //   return (
  //     <div className="place-list center">

  //       <h2>No items found. Maybe create one?</h2>


  //     </div>
  //   );
  // }


  // const [movie, setMovie] = useState(BREAKFAST);
  // const [movie2, setMovie2] = useState(movie[0]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMovie2(movie[1]);
  //   }, 100000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <h1>Movies</h1>
      <Layout items={BREAKFAST}/>
    </>
  );
}

export default Home;
