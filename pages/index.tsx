import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
    </ul>
  )
}

export default Home