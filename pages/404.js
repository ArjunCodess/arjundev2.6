import React, { Suspense } from 'react'
import Head from 'next/head'
import Custom404component from './components/Custom404component'
import Loading from './components/loading'

const custom404 = () => {
    return (
        <>
            <Suspense fallback={Loading}>
                <Head>
                    <title>404 - ArjunCodess</title>
                    <meta
                        name="description"
                        content="404 - Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
                    />
                </Head>
                <Custom404component />
            </Suspense>
        </>
    )
}

export default custom404