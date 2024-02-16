import React from "react";

// document.body.style.backgroundColor = "green";
var darkMode = false

function switchTheme() {
  darkMode = !darkMode
  if (darkMode) {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  } else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
}

const ThemeButton = () => {
  return (
    <button onClick={() => switchTheme()}>
      {darkMode ? "Dark Mode" : "Light mode"}
    </button>
  )
}

export default function App() {
  return (
  <div>
    <h1>Tamagotchi App</h1>
    <ThemeButton />
  </div>
  )
}