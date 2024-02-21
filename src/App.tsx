import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import ThemeButton from './ThemeButton.tsx';
import Tamagotchi from './Tamagotchi.tsx';
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
    <Tamagotchi />
    <div style={horizontalStyle}>
      <Sidebar />
    </div>
  </div>
  )
}