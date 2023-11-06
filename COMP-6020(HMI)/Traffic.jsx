import React from 'react'

const Traffic = ({ color, isOn,}) => {
  const styles = {backgroundColor: color,filter: `brightness(${isOn ?'1.5': '0.2'})`, width: '100px',height: '100px',borderRadius: '50%'}
 

  return (
    <>
    <div style={{
    backgroundColor: 'black',
    fontSize: '20px',
    padding: '10px',
  }}>
    <div style={styles}></div>
    </div>    
    </>
  )
}

export default Traffic