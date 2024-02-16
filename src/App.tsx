import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import ThemeButton from './ThemeButton.tsx';
import CSS from 'csstype';

const horizontalStyle: CSS.Properties = {
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'flex-end'
}

export default function App() {
  return (
  <div>
    <ThemeButton />
    {/* <h1>Tamagotchi App</h1> */}
    <div style={horizontalStyle}>
      <Sidebar />
    </div>
  </div>
  )
}