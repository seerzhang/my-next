import './index.scss'
import type { Metadata } from 'next'
import { Button } from 'antd'
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

  const primary = () => {
    console.log(123)
  }

  return <div>
    <p className="title">Hello, Next.js!</p>
    <Header/>
    <Button type="primary" onClick={ primary() }>Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
}