import type { NextPage } from 'next'
import Card from '../components/shared/Card'
import App from '../components/hookApp'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>
      <Card />
      
      <App/>
      <App/>
      
    </>
  )
}

export default Home
