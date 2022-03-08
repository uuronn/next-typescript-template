import { jsx } from '@emotion/react'
import type { NextPage } from 'next'
import React, { useRef } from 'react'
import useMoveObject from "../../useMoveObject"

const Card = () => {
  const boxRef = useRef(null)
  const mouseEventAndStyle = useMoveObject(boxRef.current)

  return (
    <div>
      <div {...mouseEventAndStyle}>
        <div style={{backgroundColor:"red", width:30, height:30}} ref={boxRef}>
        </div>
      </div>
    </div>
  );
}

export default Card
