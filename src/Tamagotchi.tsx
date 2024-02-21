import React, { useState,  useRef, useEffect } from 'react'
import CSS from 'csstype'
import { IoIosBody } from 'react-icons/io'

var posX, posY
const moveSpeed = 25

const Tamagotchi = () => {

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window
        return {
            width,
            height
        }
    }
    
    var { height, width} = useWindowDimensions()
    const [time, setTime] = useState(Date.now())

    useEffect(() => {
      const interval = setInterval(() => setTime(Date.now()), 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    const style : CSS.Properties = {
        'position': 'absolute',
        'top': posY + 'px',
        'left': posX + 'px',
    }

    useEffect(() => {
        if (posX == null) {
            posX = Math.floor(Math.random() * (width - 1))
        } else if (posX > width || posX < 0) {
            posX = Math.floor(Math.random() * (width - 1))
        } else {
            posX = posX + moveSpeed * (Math.floor(Math.random() * 3) - 1)
        }

        if (posY == null) {
            posY = Math.floor(Math.random() * (height - 1))
        } else if (posY < 0 || posY > height) {
            posY = Math.floor(Math.random() * (height - 1))
        } else {
            posY = posY + moveSpeed * (Math.floor(Math.random() * 3) - 1)
        }
    }, [time]);

    return (
        <div style = {style}>
            <IoIosBody className ="tamagotchi" />
        </div>
    )
}

export default Tamagotchi
