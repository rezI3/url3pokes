import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import Header from '@/component/Header'
import Body from '@/component/Body'
import Footer from '@/component/Footer'

// const inter = Inter({ subsets: ['latin'] })

// TODO:たまにエラーが吐かれる -> Bodyをコメントアウトすると治る？？
export default function Home() {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}
