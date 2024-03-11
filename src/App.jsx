// import React, { useState } from 'react'
// import data from './data/emojiList[1].json'

// const App = () => {
//   const [emoji, setEmoji] = useState(data)
//   const [search, setSearch] = useState('')
//   const mySearch =(e)=>{
//     const myvalue = e.target.value.toLowerCase();
//     setSearch(myvalue)
//     console.log(myvalue)
//     const myfilterdata = data.filter(item => item.title.toLowerCase().includes(myvalue));

    
//     console.log(myfilterdata)
//     setEmoji(myfilterdata)
  

//   }
//   return (
//     <div>
//       <input type="text" value = {search} onChange={mySearch} />
//       {emoji.map((emo)=>{
//         const {title,keywords,symbol}=emo
//         return(
//           <>
//           <h1>{title}</h1>
//           <h2>{keywords}</h2>
//           <h3>{symbol}</h3>
//           </>
//         )

//       })}
  
      
//     </div>
   
//   )
// }

// export default App

import React, {useState} from 'react'
import data from './data/emojiList[1].json'

const App = () => {
  const [emoji, setEmoji] = useState(data)
  const [search, setSearch] = useState('')
      const mySearch = (e) =>{
        const myvalue = e.target.value.toLowerCase();
        setSearch(myvalue)
        console.log(myvalue)

        const myfilterdata = data.filter(item => item.title.toLowerCase().includes(myvalue));

    
    console.log(myfilterdata)
    setEmoji(myfilterdata)
    }
  return (
    <div>
      <nav>
      <div className='container'>
       <h1>⚔ Golden Icons ⚔</h1>
       <input placeholder="Search..."  type="text" value = {search} onChange={mySearch} />
       </div>
       </nav>
       <div className='main'>
      {emoji.map((emo)=>{
        const {keywords,symbol} = emo
        return(
          <>
          <div className='text'>
          
          <h2>{symbol}</h2>
          <h3>____________________________________________</h3>
          <p>{keywords}</p>
          </div>
          </>
        )
      })}
      </div>
    </div>
  )
}

export default App
