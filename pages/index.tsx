/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import Head from 'next/head'
import { LandingBackground } from '@/styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PlayLife</title>
      </Head>

      <LandingBackground />
    </>
  )
}

export default Home
