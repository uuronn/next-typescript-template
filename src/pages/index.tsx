import type { NextPage } from 'next'
import Card from '../components/shared/Card'
import App from '../components/hookApp'
// import Timer from '../components/timer'

const window = {
  width: "100vw",
  height: "100vh"
}

const Home: NextPage = () => {
  return (
    <div style={window}>
      <h1>Hello Next.js</h1>
      <Card />
      
      <App/>
      {/* <App/> */}
      {/* <Timer/> */}
    </div>
  )
}

export default Home
