import Head from 'next/head'

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>streamm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="/api/login">Login</a>
        <a href="/api/logout">Logout</a>
      </main>

      <footer>
      </footer>

    </div>
  )
}
