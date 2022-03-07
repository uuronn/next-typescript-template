import { rejects } from 'assert';
import type { NextPage } from 'next'

const getRectFunc = () => {
  const getRect = document.getElementById("card");
  const rect = getRect!.getBoundingClientRect();
  console.log(getRect!.getBoundingClientRect());
  rect.width = 500
  console.log(rect.width)
  // rect.background = "blue"
};

const card = {
  // background: "red"
}

const Card: NextPage = () => {
  return (
    <>


      <h1>カード</h1>
      <button id="card" onClick={getRectFunc} style={card}>
        button
      </button>
    </>
  )
}

export default Card
