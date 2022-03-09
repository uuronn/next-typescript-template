import { useEffect, useState } from "react";
import { useInteractJS } from './hooks'

// const Timer: React.FC = () => {
//   const interact = useInteractJS()
//   console.log(interact)
//   // let xx = interact.position.x
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     const xCount= () => {
//   //       xx++
//   //     };
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <>
//   <div>count</div>
//   {/* <button onClick={() => interact.enable()}>有効化</button>
//       <button onClick={() => interact.disable()}>無効化</button> */}
//       <input
//         type="text"
//         // value="fdfdf"
//         ref={interact.ref}
//         style={{
//           ...interact.style,
//           border: '2px solid red',
//           backgroundColor: '#A9D0F5'
//         }}
//         />
//     </>
//   );
// }

// export default Timer
