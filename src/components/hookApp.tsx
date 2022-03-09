import { useEffect, useState } from 'react'
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
  const [time, setTime] = useState(0);
  const random = Math.floor(Math.random());
  console.log(random)

    useEffect(() => {
      const id = setInterval(() => {
        setTime(time + 1);
        interact.position.x++
        // interact.position.y++
        // console.log(`x座標${interact.position.x}`)
      }, 80);
      return () => clearInterval(id);
    }, [time]);

    // console.log(time)

  return (
    <div className="App">
      <button onClick={() => interact.enable()}>有効化</button>
      <button onClick={() => interact.disable()}>無効化</button>
      <input css={hoge}
        type="text"
        value="動いていくー"
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
