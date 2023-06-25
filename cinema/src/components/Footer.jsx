import React from 'react'

const Footer = () => {
  return (
    <footer style={{
        backgroundColor:'#778899',
        height:'150px'
        }}>
      <div className="footer-content">
        <h5 style={{color: '#ffffff'}}>Movie Management App</h5>
        <p class='paragraph'>Copyright @ 2023 Movies, Inc.</p>
        {/* <button onClick={handleClick}>Click me</button> */}
      </div>
    </footer>
  )
}

export default Footer
