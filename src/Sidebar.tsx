import React from 'react';
import CSS from 'csstype';
    
const Sidebar = () => {
    const verticalStyle: CSS.Properties = {
        'margin': '25px',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-start'
    }
    
      return (
        <div style={verticalStyle}>
          <button> test 1</button>
          <button> test 2 </button>
          <button> test 3</button>
        </div>
      )
}

export default Sidebar