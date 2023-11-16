import Head from 'next/head'
import Skills from './components/Skills'
import React, { Suspense } from 'react'
import Loading from './components/loading'

const skills = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <Head>
          <title>Skills - ArjunCodess</title>
          <meta
            name="description"
            content="Skills: Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
          />
        </Head>
        <Skills />
      </Suspense>
    </>
  )
}

export default skills