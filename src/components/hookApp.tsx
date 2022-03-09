import React from 'react'
// import './App.css'
import { useInteractJS } from './hooks'
import { css, SerializedStyles } from '@emotion/react'
const hoge = css`
  margin: 100px;
  background: red;
  &:hover {
    color: red;
  }
`

const App: React.FC = () => {
  const interact = useInteractJS()
  // console.log(interact)
  // console.log(interact.position.width)
  // interact.position.width = 300
  // console.log(interact.position.width)
  // interact.position.x = 300
//   const cardRote = css`
//     box-sizing: border-box;
//     position: relative;
//     z-index: 0;
//     width: 400px;
//     height: 300px;
//     margin:5px auto;
//     border-radius: 10px;
//     overflow: hidden;
//     padding: 2rem;

//     @-webkit-keyframes rotate {
//     100% {
//       -webkit-transform: rotate(1turn);
//       transform: rotate(1turn);
//     }
// }
//   @keyframes rotate {
//     100% {
//       -webkit-transform: rotate(1turn);
//       transform: rotate(1turn);
//     }
// }

//     .rainbow::before {
//     content: '';
//     position: absolute;
//     z-index: -2;
//     left: -50%;
//     top: -50%;
//     width: 200%;
//     height: 200%;
//     background-color: #399953;
//     background-repeat: no-repeat;
//     background-size: 50% 50%, 50% 50%;
//     background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//     background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
//     -webkit-animation: rotate 4s linear infinite;
//     animation: rotate 4s linear infinite;
// }
// .rainbow::after {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     left: 6px;
//     top: 6px;
//     width: calc(100% - 12px);
//     height: calc(100% - 12px);
//     background: white;
//     border-radius: 5px;
// // }
//   `
  
//   const card = css`
//     background: red;
//     border: solid 1px red;
//     &:hover {
//       border: solid 1px blue;
//     }
//   `
  
//   const input = css`
//     color: blue;
//     border: medium #c0c0c0 dotted;
//     &:hover {
//       color: red;
//       border: solid 1px red;
//     }

  return (
    <div className="App">
      <button onClick={() => interact.enable()}>有効化</button>
      <button onClick={() => interact.disable()}>無効化</button>
      <input css={hoge}
        type="text"
        // value="fdfdf"
        ref={interact.ref}
        style={{
          ...interact.style,
          border: '2px solid red',
          backgroundColor: '#A9D0F5'
        }}
      />
    </div>
  )
}

export default App
