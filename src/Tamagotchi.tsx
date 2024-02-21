import React, { useState,  useRef, useEffect } from 'react';
import CSS from 'csstype';
import { IoIosBody } from 'react-icons/io';

var posX = getRandomNum()
var posY = getRandomNum()
const moveSpeed = 25

function getRandomNum() {
    return Math.floor(Math.random() * (1080 - 1) + 1)
}

const Tamagotchi = () => {
    const [time, setTime] = useState(Date.now());

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
        posX = posX == null ? getRandomNum() : posX + moveSpeed * (Math.floor(Math.random() * 3) - 1)
        posY = posY == null ? getRandomNum() : posY + moveSpeed * (Math.floor(Math.random() * 3) - 1)
    }, [time]);

    return (
        <div style = {style}>
            <IoIosBody className ="tamagotchi" />
        </div>
    )
}

export default Tamagotchi
