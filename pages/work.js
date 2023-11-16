import Head from 'next/head'
import Work from './components/Work'
import React, { Suspense } from 'react'
import Loading from './components/loading'

const work = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <Head>
          <title>Work - ArjunCodess</title>
          <meta
            name="description"
            content="Work: Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
          />
        </Head>
        <Work />
      </Suspense>
    </>
  )
}

export default work