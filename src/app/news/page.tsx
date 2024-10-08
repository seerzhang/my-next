import './index.scss'
import type { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: '新闻中心',
  description: '新闻描述内容',
  keywords: '新闻关键字',
  authors: { url: 'www', name: 'jack' }
}

export default async function Page() {

  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  console.log(posts)


  return <div>
    <p className="title">Hello, Next.js!</p>
    <Header/>
  </div>
}