import React from 'react'
import Button from './Button';
import Wallet from '../Images/wallet.svg';
import Sale from '../Images/sale.svg';
import Upload from '../Images/upload.svg';
import { CollectionData } from '../CollectionData/Collection';

const Collections = ({allCollect, select, selected, gallery, selectedCollect, styleActivePlanet}) => {
  return (
    <div className="w-full relative bg-topp h-auto z-50 pointer-events-auto mb-24">
        <section className='w-[90%] mx-auto space-y-8 sm:space-y-5'>
            <h3 className='text-4xl extra text-center font-semibold tracking-wider bg-clip-text bg-gradient-to-r from-linear-left via-linear-mid to-linear-right sm:text-3xl'>Top Collections</h3>
          
            <div className='w-full text-center space-y-10 sm:space-y-5'>
              <div className="buttons w-5/6 mx-auto flex justify-evenly items-center small:overflow-scroll md:space-x-5 sm:w-full  sm:border-x-transparent sm:border-x-[1em] sm:pl-[8em] sm:space-x-3">
                {select.objects.map((element, pos)=>(
                      <Button Class={`px-8 capitalize py-2 font-semibold border-lwhite border sm:px-4 sm:text-xs hover:bg-button hover:border-button duration-150 ease-linear ${styleActivePlanet(pos)}`}  
                      key={pos} onClick={()=>{selected({...select, activeState: pos}); gallery(element.type)}} Text={element.type} />
                ))}
              </div>

              <div className={`gallery w-full flex ${allCollect.length<3?'justify-start':'justify-around'} items-center gap-y-8 sm:gap-x-1 flex-wrap sm:items-baseline`}>
                {allCollect.map((e, pos)=>(
                  <div key={pos} className='gall-box w-[23%] sm:w-[48%] flex flex-col justify-center items-center space-y-3 rounded-xl border-lwhite border p-3 bg-gradient-to-br from-[#ffffff0a] to-[#ffffff26]'>
                    <img src={e.display} alt="gallery-display" className='rounded-xl w-full' />

                    <div className='w-full space-y-4'>
                      <div className='block text-left space-y-1'>
                        <h3 className='text-base font-semibold tracking-wide'>{e.name}</h3>
                        <h6 className='text-[0.6rem]'>{e.collectorName}</h6>
                      </div>

                      <div className='w-full flex justify-between items-center'>
                        <div className='text-left space-y-1'>
                          <h5 className='text-sm font-semibold tracking-wider'>{e.tfloorPrice}</h5>
                          <h6 className='text-[0.6rem]'>Floor Price</h6>
                        </div>

                        <div className='text-right space-y-1'>
                          <h5 className='text-sm font-semibold tracking-wider'>{e.trfloorPrice}</h5>
                          <h6 className={`text-[0.6rem] ${e.rfloorprice.includes('-')?'text-price-down':'text-price'}`}>{e.rfloorprice}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                  
              </div>
            
              <Button Text={'See All'} 
                onClick={()=>selectedCollect(CollectionData)}
                Class={'px-8 py-2 font-semibold border-lwhite border duration-300  hover:bg-button hover:px-9 hover:duration-300 hover:border-button ease-in'}/>
            </div>
          </section>


          <section className='outer-border w-[95%] h-auto bg-gradient-to-r py-[0.0599rem] pl-[0.049em] from-[#ffffff35] to-[#ffffff13] mx-auto rounded-xl my-20'>
           
            <div className='h-full w-full rounded-xl bg-dark-bg'>
              <div
                className='bd-color h-full w-full m-auto  space-y-14 rounded-xl px-5 py-10 bg-gradient-to-br from-[#ffffff09] to-[#ffffff00] z-20'>
                
                <h3 className='text-3xl extra text-center font-semibold tracking-tight bg-clip-text bg-gradient-to-r from-linear-left via-linear-mid to-linear-right '>Create And Sell Your NFTs</h3>

                <div className='flex w-full justify-evenly items-center border-y-white rounded-xl space-x-5 small:space-x-2 small:items-stretch sm:flex-col sm:space-y-14 '>

                  <div className='text-center space-y-5 w-[30%] md:w-3/6 sm:w-full'>
                    <img src={Wallet} alt="wallet-icon" className='w-full h-14 flex justify-center items-center'/>
                    <h4 className='text-lg font-semibold'>
                      Set Up Your Wallet
                    </h4>
                    <p className='text-sm text-center px-8 md:px-0'>
                      Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon 
                      in the top right corner. Learn about the wallets we support.
                    </p>
                  </div>

                  <div className='text-center space-y-5 w-[30%] md:w-3/6 sm:w-full'>
                    <img src={Upload} alt="upload icon" className='w-full h-14 flex justify-center items-center'/>
                    <h4 className='text-lg font-semibold'>
                      Upload & Collect Collection
                    </h4>
                    <p className='text-sm px-8 md:px-0'>
                      Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon 
                      in the top right corner. Learn about the wallets we support.
                    </p>
                  </div>

                  <div className='text-center space-y-5 w-[30%] md:w-3/6 sm:w-full'>
                    <img src={Sale} alt="list-icon" className='w-full h-14 flex justify-center items-center'/>
                    <h4 className='text-lg font-semibold'>
                      Set Up Your Wallet
                    </h4>
                    <p className='text-sm px-8 md:px-0'>
                      Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon 
                      in the top right corner. Learn about the wallets we support.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

    </div>
  )
}

export default Collections