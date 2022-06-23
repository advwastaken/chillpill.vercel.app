import type { NextPage } from 'next'
import Head from 'next/head'

const fourofour: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <Head>
        <title>This page could not be found.</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className="text-3xl text-[#00ffff] p-2">Oooops...</h1>
      <h1 className="text-xl text-[#00ffff] opacity-70">This page could not be found.</h1>
    </div>
  )
}

export default fourofour