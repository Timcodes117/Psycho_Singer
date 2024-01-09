import './globals.css'


export const metadata = {
  title: 'PsychoSinger',
  description: 'PsychoSinger music portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9976753474067424"
     crossOrigin="anonymous"></script>
       <meta property="og:title" content="psychosinger" />
  <meta property="og:description" content="psycho singer music portfolio website" />
  <meta property="og:image" content="https://github.com/Timcodes117/CAFE_SITE/blob/main/psychOG.PNG?raw=true" />
  <meta property="og:url" content="https://psychosinger.vercel.app" />
  <meta property="Keywords" content="psycho, psycho singer, music website, psycho-singer" />
  <meta name="Keywords" content="psycho, psycho singer, music website, psycho-singer" />
      </head>
      <body>{children}</body>
    </html>
  )
}
