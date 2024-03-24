'use client'

const WaitlistForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 w-full items-center'
    >
      <h3 className='font-semibold'>Join the waitlist</h3>
      <input
        type='email'
        name='email'
        id='email '
        placeholder='Enter your Email'
        className='max-w-96 w-full h-11 bg-white border-4 border-black px-2 rounded-none'
      />
      <button className='max-w-96 w-full h-11 bg-yellow-500 border-4 border-black justify-center items-center uppercase lg:text-xl font-semibold'>
        Submit
      </button>
    </form>
  )
}

export default WaitlistForm
