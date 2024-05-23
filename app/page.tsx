import Head from 'next/head'
import dynamic from 'next/dynamic'

const Singed = dynamic(() => import('../app/Singed'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export default function Home() {
  return (
    <main>
      <div>
        <Head>
          <title> El cientifico loco </title>
        </Head>
        <Singed />
      </div>
    </main>
  );
}
