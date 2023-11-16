import Main from './components/Main'
import React, { Suspense } from 'react'
import Head from 'next/head'
import Loading from './components/loading'

export default function Home() {
  return (
    <>
      <Suspense fallback={Loading}>
        <Head>
          <title>Home - ArjunCodess</title>
          <meta
            name="description"
            content="Home: Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
          />
        </Head>
        <Main />
      </Suspense>
    </>
  )
}