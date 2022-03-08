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

  return (
    <div className="App">
      <button onClick={() => interact.enable()}>有効化</button>
      <button onClick={() => interact.disable()}>無効化</button>
      <div css={hoge}>

      <input css={hoge} type="text" value="fdfdf" ref={interact.ref}
        style={{
          ...interact.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5'
        }}
        />
        </div>
    </div>
  )
}

export default App