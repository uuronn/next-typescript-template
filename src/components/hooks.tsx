import { useEffect, useState, useRef, CSSProperties } from 'react'
import interact from 'interactjs'

type Partial<T> = {
  [P in keyof T]?: T[P];
};

const initPosition = {
  width: 100,
  height: 100,
  x: 0,
  y: 0
}

export function useInteractJS(position: Partial<typeof initPosition> = initPosition) {
  // 引数で指定したpositionを初期値として、Stateを作る
  const [_position, setPosition] = useState({
    ...initPosition,
    ...position
  })
  const [isEnabled, setEnable] = useState(true)

  const interactRef = useRef(null)   // <= HTML ELEMENTを取得
  let { x, y, width, height } = _position

  // interactJSを有効化する
  const enable = () => {
    interact((interactRef.current as unknown) as HTMLElement)
    // ドラッグでコンポーネントを動かすための処理を追加
      .draggable({
        inertia: false
      })
      .on('dragmove', event => {
        x += event.dx
        y += event.dy
        // ドラッグ後の座標をstateに保存する
        setPosition({
          width,
          height,
          x,
          y
        })
      })
      // リサイズで要素の大きさを変えるための処理を追加
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },
        preserveAspectRatio: false,
        inertia: false
      })
      .on('resizemove', event => {
        width = event.rect.width
        height = event.rect.height
        x += event.deltaRect.left
        y += event.deltaRect.top
        // 大きさの変化をstateに反映する
        setPosition({
          x,
          y,
          width,
          height
        })
      })
  }

  // interactJSを無効化する
  const disable = () => {
    interact((interactRef.current as unknown) as HTMLElement).unset()
  }

  useEffect(() => {
    if (isEnabled) {
      enable()
    } else {
      disable()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled])

  // マウント時にRefで取得した要素にinteractJSを作用させる。アンマウント時にはunsetする
  useEffect(() => {
    // enable() ここわからん
    return disable
  }, [])

  return {
    ref: interactRef,
    // 返り値にCSSのスタイルを追加する。このスタイルを動かしたいコンポーネントに適用することで、コンポーネントが実際に動くようになる
    style: {
      transform: `translate3D(${_position.x}px, ${_position.y}px, 0)`,
      position: 'absolute' as CSSProperties['position'],
      width: _position.width + 'px', // <= 大きさを要素に適用するためにスタイルを追加
      height: _position.height + 'px', // <= 大きさを要素に適用するためにスタイルを追加
    },
    position: _position,
    isEnabled,
    enable: () => setEnable(true),
    disable: () => setEnable(false)
  }
}
