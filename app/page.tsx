import Head from 'next/head'
import dynamic from 'next/dynamic'

const Singed = dynamic(dynamicOptions: () => import('../app/ui'))

export default function Home() {
  return (
    <main>
      <div>
        Hello world
      </div>
    </main>
  );
}
