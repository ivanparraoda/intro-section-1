const Main = () => {
  return (
    <main className='flex flex-col-reverse md:flex-row gap-8 md:gap-32 md:m-12 h-4/5 items-center md:items-start'>
      <section className='text-center md:text-left flex flex-col gap-8 flex-1 m-2'>
        <h1 className='text-5xl md:text-7xl font-bold leading-9'>
          <span className='md:block'>Make</span>
          <span className='md:block'> remote work</span>
        </h1>
        <p className='text-gray-600 tracking-wide'>
          <span className='inline'>
            Get your team in sync, no matter your location.
          </span>
          <span className='inline md:block'>
            {' '}
            Streamline processes, create team rituals, and
          </span>
          <span className='md:inline'> watch productivity soar.</span>
        </p>
        <button className='py-2 px-6 bg-black text-white rounded-lg border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-200 w-36 self-center md:self-start'>
          Learn more
        </button>

        {/* Mover el div de imágenes aquí con mt-40 */}
        <div className='flex gap-2 md:gap-8 justify-center md:justify-start m-2 mb-8 md:mb-0 md:mt-32'>
          <img
            className='h-4 md:h-6 w-auto'
            src='/public/media/images/client-databiz.svg'
            alt='Client Databiz'
          />
          <img
            className='h-4 md:h-6 w-auto'
            src='/public/media/images/client-audiophile.svg'
            alt='Client Audiophile'
          />
          <img
            className='h-4 md:h-6 w-auto'
            src='/public/media/images/client-meet.svg'
            alt='Client Meet'
          />
          <img
            className='h-4 md:h-6 w-auto'
            src='/public/media/images/client-maker.svg'
            alt='Client Maker'
          />
        </div>
      </section>
      <section className='flex-1 mt-8 md:mt-0'>
        {/* Imagen para dispositivos móviles */}
        <img
          className='block md:hidden w-full object-cover'
          src='/public/media/images/image-hero-mobile.png'
          alt='Hero Mobile'
        />
        {/* Imagen para dispositivos de escritorio */}
        <img
          className='hidden md:block max-w-sm object-cover'
          src='/public/media/images/image-hero-desktop.png'
          alt='Hero Desktop'
        />
      </section>
    </main>
  )
}

export default Main
