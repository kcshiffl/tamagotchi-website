import React from 'react';
import CSS from 'csstype';
    
const Sidebar = () => {
    const verticalStyle: CSS.Properties = {
        'margin': '25px',
        'padding': '7px',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-start',
        'backgroundColor': 'rgba(104, 111, 118, 0.408)',
        'borderRadius': '15px'
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