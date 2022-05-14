import { useState, useEffect } from "react"

const useMoveObject= (object) => {

    // オブジェクトをオリジナルの座標から動かすベクトルを表す変数 XとYをkey、動かすピクセル数をvalueに取る
    const [ objectMoveVector, setObjectMoveVector ] = useState( {X: 0, Y: 0} )

    // ドラッグし始めた(MouseDownした)時のマウス座標 MouseDown時に保存し、MouseUp時にnullを入れてリセット
    const [ mouseMoveStartCoordinates, setMouseMoveStartCoordinates ] = useState( null )

    useEffect(()=>{

        if( !object )return // DOMのマウント前はobjectがnullなので
        if( !mouseMoveStartCoordinates ) return // ドラッグし始めてないので

        // ドラッグし始めたならMouseMoveをイベントリスナーに登録し、onMouseMoveでobjectを動かす用のベクトルを計算する
        document.addEventListener('mousemove', onMouseMove)

        // MouseUpしたらドラッグ開始座標をリセット かつ MouseMoveのイベントリスナーも解除
        document.addEventListener('mouseup', ()=>{ 
            setMouseMoveStartCoordinates( null ) 
            document.removeEventListener('mousemove', onMouseMove)
        })

    }, [ mouseMoveStartCoordinates ])

    const onMouseMove=(e)=>{

        // ドラッグ開始地点から現在のマウスまでのベクトルを計算し、最後にドラッグ終了した時のobjectが動いたベクトルに加算
        // イベントリスナーに登録したこの関数はクロージャなので、objectMoveVectorは、この中では常に最後にドラッグ終了した時のもの
        const vector = { 
            X : e.clientX - mouseMoveStartCoordinates.X + objectMoveVector.X, 
            Y : e.clientY - mouseMoveStartCoordinates.Y + objectMoveVector.Y
        }
        setObjectMoveVector(vector)
    }

    return {

        // MouseDownでドラッグ開始時の座標を保存
        onMouseDown : (e)=>setMouseMoveStartCoordinates( { X : e.clientX, Y : e.clientY } ),

        // MouseUp時にマウス位置をリセット
        onMouseUp : ()=>setMouseMoveStartCoordinates(null),

        // 動かすべきベクトルをstyleとして返す
        style: { transform:`translate3d(${objectMoveVector.X}px, ${objectMoveVector.Y}px, 0)` }
    }
}

export default useMoveObject
