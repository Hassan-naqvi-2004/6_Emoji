import React from 'react'

const Filter = () => {
    const arr = ['maria','amna','mona']
    const data = arr.filter ((err)=>{
        return err.includes('ma')
    }
    )
    console.log(data)
  return (
    <div>
        filter
      
    </div>
  )
}

export default Filter
