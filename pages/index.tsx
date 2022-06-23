import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const Home: NextPage = () => {
  const chillpill = 'return <ChillPill/>';
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Link href="/api/about">
      <SyntaxHighlighter language="javascript" style={nightOwl}>
      {chillpill}
      </SyntaxHighlighter>
      </Link>
    </div>
  )
}

export default Home
