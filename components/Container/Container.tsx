import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import cn from 'lib/classNames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'Template name',
    description: 'Template description',
    image:
      'https://cdn.discordapp.com/attachments/797485737272541250/893912493255176192/UnicornVectorGradient_7.png',
    type: 'website',
    ...customMeta
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'dots motion-reduce:transform-none motion-reduce:transition-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://template.cretu.dev/${router.asPath}`}
          />
          <link
            rel='canonical'
            href={`https://template.cretu.dev/${router.asPath}`}
          />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Cristian Crețu' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@cristicrtu' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <nav className='filter-blur py- sticky top-2 z-[1] mx-auto flex w-full max-w-4xl items-center justify-between rounded-md px-4 md:top-3'>
          <div className='text-tertiary'>
            <Link href='/'>
              <p className='hover:text-primary flex cursor-pointer items-center text-base font-semibold transition-all'>
                <Image
                  src='/images/sway.png'
                  height={60}
                  width={85}
                  alt='Logo'
                />
                <span>Sway</span>
              </p>
            </Link>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <button
              type='button'
              className='mr-2 mb-2 rounded bg-blue-600 px-7 py-2.5 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-800'
            >
              Demo
            </button>
            <a
              href='https://github.com/lucky-chap/sway'
              className='visible'
              target='_blank'
              rel='noreferrer'
              aria-label='Github'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                className='fill-current text-white text-opacity-40 transition-all duration-500 hover:text-opacity-100'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
          </div>
        </nav>

        <main
          className={cn(
            'mt-12 px-4',
            'max-w-2xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-900',
            'rounded-lg'
          )}
        >
          <div className='mt-20'>{children}</div>
          {/* <footer>
            <Footer />
          </footer> */}
        </main>
      </div>
    </>
  )
}
