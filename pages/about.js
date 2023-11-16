import Head from 'next/head'
import About from './components/About'
import React, { Suspense } from 'react'
import Loading from './components/loading'

const about = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <Head>
          <title>About - ArjunCodess</title>
          <meta
            name="description"
            content="About: Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
          />
        </Head>
        <About />
      </Suspense>
    </>
  )
}

export default about