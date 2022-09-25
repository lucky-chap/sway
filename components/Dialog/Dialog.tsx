import * as Dialog from '@radix-ui/react-dialog'
import { useRecoilState } from 'recoil'

import { dialogState } from 'state'

export default function SignInDialog() {
  const [isOpen, setIsOpen] = useRecoilState(dialogState)
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-40 animate-overlayShow bg-black bg-opacity-60 backdrop-blur-sm backdrop-filter' />
        <Dialog.Content className='animate-contentShow dark:bg-mauveDark1 fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-[#080808] px-5 py-10 shadow-2xl'>
          <Dialog.Description>
            <p className='font-semibold'>Sign in to</p>
            <div className='mt-5 grid grid-cols-2 gap-5 text-center'>
              <p className='grid place-items-center rounded-md bg-gray-1000 p-6 font-semibold'>
                {/* <HeartFillIcon
                size={24}
                aria-hidden
                className="mb-2 text-slate11 dark:text-slateDark11"
              /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mb-2 h-6 w-6'
                >
                  <path d='M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z' />
                </svg>
                Save your blobs
              </p>
              <p className='grid place-items-center rounded-md bg-gray-1000 p-6 font-semibold'>
                {/* <GuestbookIcon
                size={24}
                aria-hidden
                className="mb-2 text-slate11 dark:text-slateDark11"
              /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mb-2 h-6 w-6'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z'
                    clip-rule='evenodd'
                  />
                </svg>
                Bookmark your blobs
              </p>
            </div>
          </Dialog.Description>
          <div className='mt-7 space-y-5'>
            <button className='flex w-full items-center justify-center gap-3 rounded-md bg-gray-1000 py-3 font-semibold'>
              {/* <GitbubIcon aria-hidden /> */}
              Continue WIth GitHub
            </button>
            <button className='flex w-full items-center justify-center gap-3 rounded-md bg-gray-1000 py-3 font-semibold'>
              {/* <TwitterIcon aria-hidden /> */}
              Continue WIth Google
            </button>
          </div>

          <Dialog.Close asChild>
            <button
              className='absolute top-3 right-3 rounded-md bg-gray-900 bg-opacity-0 p-2 transition duration-200 hover:bg-opacity-100 dark:bg-opacity-0 dark:hover:bg-opacity-100'
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-4 w-4 font-bold'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
