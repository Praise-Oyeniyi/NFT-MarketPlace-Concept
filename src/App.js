import './App.css';
import { CollectionData } from './CollectionData/Collection';
import { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Logo from './Images/logo.svg'
import Footer from './Components/Footer';
import Collections from './Components/Collections';
import Header from './Components/Header';
import Discover from './Components/Discover';
import Slider from './Components/Slider';
import Loader from './Loader';


function App() {
  const [allCollect, selectedCollect] = useState(CollectionData);

  const [select, selected] = useState({
    activeState:0,
    objects: [{id:1, type: 'art'}, {id:2, type: 'collectibles'}, {id:3, type: 'metaverse'}, {id:4, type: 'virtual words'}, {id:5, type: 'music'}]
  });

  const styleActivePlanet = (pos)=>{
    if(pos === select.activeState){
      return 'bg-button border-button'
    }else{
      return ''
    }
  }

  const gallery = (artType)=>{
      const filtered = CollectionData.filter(e => e.type === artType);
      selectedCollect(filtered);
  }
  
  const [loading, setLoading] = useState(true);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 200, rotate:90, },
    show: {
      opacity: 1,
      y: 0,
      rotate:180,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
      },
    },
    exit:{
      rotate:360,
    }
  };


  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading?
        <Loader loading={loading} setLoading={setLoading} container={container} item={item} Logo={Logo}/>
        :
        (<div
          className='bg-dark-bg w-full text-white overflow-x-hidden max-w-[1600px] mx-auto relative'>
          <Header Logo={Logo}/>
          <Discover/>
          <Slider/>
          <Collections allCollect={allCollect} select={select} selected={selected} gallery={gallery} selectedCollect={selectedCollect} styleActivePlanet={styleActivePlanet}/>
          <Footer/>
        </div>)}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
