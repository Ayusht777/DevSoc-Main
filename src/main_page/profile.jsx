import React ,{useState} from 'react';
import meow from './pics/meow.png';
import backgroundImage1 from './pics/273400317-fe0a38ce-9504-41b0-b8d6-4ac6eb557998.png';
import RecentEvents from './tabsdata/RecentEvents';
import RegisteredEvents from './tabsdata/RegisteredEvents';

function Profile(){
    const tabs = [ {Tab:<RecentEvents/>, label:"Recent Events"} , {Tab:<RegisteredEvents/>, label:"Registered Events"} ]
    const [tab,setTab] = useState(0)
    const switchTab=(tabIdx)=>setTab(tabIdx)
    
    return (
        <div className='font-bold bg-black text-white bg-fixed bg-cover bg-center pb-40 ' style={{backgroundImage:`url(${backgroundImage1})`}}>

            <div class="relative pt-10">
                <img src={meow} alt="Cover Photo" class="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 sm:w-full mx-auto rounded-3xl h-40 object-cover"/>   
                <img src={meow} alt="Profile Photo" class="w-32 lg:w-40 md:w-40 sm:w-32 h-32 lg:h-40 md:h-40 sm:h-32 rounded-full border-4 border-black absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2"/>       
                <div class="w-6 h-6 rounded-full absolute bottom-0 left-1/3 transform translate-x-7 lg:translate-x-12 md:translate-x-12 sm:translate-x-8 translate-y-16 bg-green-600"></div>
                <div class="flex justify-center mt-20 absolute bottom-0 left-1/3 transform -translate-x-16 lg:translate-x-24 md:translate-x-24 sm:-translate-x-16 translate-y-36 lg:translate-y-20 md:translate-y-20 sm:translate-y-36">
                <div class="grid">
                    <div >Smooth Operator</div>
                    <div>Full Stack Developer</div>
                    <div>⭐ 4.2</div>
                </div>
            </div>
            </div>

            <div className='flex justify-center mt-40 pt-2'>
                <div className='w-full lg:w-1/2 md:w-1/2 sm:w-full flex justify-center lg:justify-start md:justify-start sm:justify-center gap-10'>
                {tabs.map(({Tab,label},idx)=>
                <div>
                <button onClick={()=>switchTab(idx)}> {label} </button>
                <div className={tab==idx?'h-1 w-28  bg-orange-700':'h-1 w-28 bg-black'}></div>
                </div>
                )}   
                </div>
            </div>

            {tabs[tab].Tab}

        </div>
    )
}
export default Profile;