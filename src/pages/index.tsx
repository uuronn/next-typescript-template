import type { NextPage } from 'next'
import Card from '../components/shared/Card'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>
      <Card />
    </>
  )
}

export default Home
