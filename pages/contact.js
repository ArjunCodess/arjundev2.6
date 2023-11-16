import Head from "next/head"
import Contact from "./components/Contact"
import React, { Suspense } from 'react'
import Loading from './components/loading'

const contact = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <Head>
          <title>Contact - ArjunCodess</title>
          <meta
            name="description"
            content="Contact: Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
          />
        </Head>
        <Contact />
      </Suspense>
    </>
  )
}

export default contact