import './App.css';
import { CollectionData } from './CollectionData/Collection';
import { useState } from 'react';
import Footer from './Components/Footer';
import Collections from './Components/Collections';
import Header from './Components/Header';
import Discover from './Components/Discover';
import Slider from './Components/Slider';


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



  return (
    <div>
      {window.innerWidth<500?(<h3 className='w-screen h-screen flex justify-center items-center text-lg text-center p-4'>Sorry, Page Is Unresponsive yet. View Page On A More Larger Screen</h3>)
      :
      <div className='bg-dark-bg w-full text-white overflow-x-hidden max-w-[1600px] mx-auto relative'>
        <Header/>
        <Discover/>
        <Slider/>
        <Collections allCollect={allCollect} select={select} selected={selected} gallery={gallery} selectedCollect={selectedCollect} styleActivePlanet={styleActivePlanet}/>
        <Footer/>

      </div>
}
    </div>
  );
}

export default App;
