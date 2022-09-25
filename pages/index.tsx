import { useRecoilState } from 'recoil'

import BigText from 'components/BigText'
import Container from 'components/Container'
import { dialogState } from 'state'

export default function Home() {
  const [openDialog, setOpenDialog] = useRecoilState(dialogState)
  return (
    <Container>
      <div className='inset-0 flex flex-col items-center justify-center'>
        <BigText slides={['Efficient.', 'Blob.', 'Creation.']} />
      </div>
      <div className=''>
        <div className='mx-3 py-24 md:mx-0'>
          <div className='grid items-start justify-center gap-8'>
            <div className='group relative'>
              <div className='animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200'></div>
              <button
                className='relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none'
                onClick={() => setOpenDialog(true)}
              >
                <span className='flex items-center space-x-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-6 w-6 -rotate-6 text-pink-600'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                  </svg>

                  <span className='pr-6 font-semibold text-gray-100'>
                    Ready to Sway ?
                  </span>
                </span>
                <span className='group-hover:text-primary pl-6 text-indigo-400 transition duration-200'>
                  Sign in &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
