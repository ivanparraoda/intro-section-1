import { useState } from 'react'

const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false)
  const [showCompany, setShowCompany] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='relative justify-between'>
      <div
        className={`fixed inset-0 bg-gray-700 bg-opacity-50 z-10 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div className='flex gap-8 md:p-4 m-6 justify-between md:items-center relative z-20'>
        <img
          className='h-6 cursor-pointer'
          src='/public/media/images/logo.svg'
          alt='Logo'
        />
        <button
          className='md:hidden block text-gray-500 hover:text-gray-700'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src='/public/media/images/icon-menu.svg' alt='Menu' />
        </button>
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row grow  md:justify-between items-start md:items-center w-3/5 h-screen md:h-auto bg-white  fixed top-0 right-0 md:relative p-6 md:p-0 z-20 transition-transform duration-300 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <div className='flex flex-col md:flex-row gap-8 mt-8 md:mt-0 items-center'>
            <img
              className='h-6 cursor-pointer md:hidden absolute top-4 right-4'
              src='/public/media/images/icon-close-menu.svg'
              alt='close'
            />
            <div className='relative'>
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className='flex items-center gap-2 text-gray-500 hover:text-gray-700'
              >
                Features
                <img
                  src={`${
                    showFeatures
                      ? '/public/media/images/icon-arrow-up.svg'
                      : '/public/media/images/icon-arrow-down.svg'
                  }`}
                  alt='Arrow'
                />
              </button>
              <div
                className={`${
                  showFeatures ? 'flex' : 'hidden'
                } flex-col md:absolute md:-left-14 md:w-36 bg-white md:shadow-2xl md:rounded-lg p-4 transition-all duration-300 ${
                  showFeatures ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <a
                  href='#'
                  className='py-1 flex items-center gap-4 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  <img
                    src='/public/media/images/icon-todo.svg'
                    alt='Todo List'
                  />
                  Todo List
                </a>
                <a
                  href='#'
                  className='py-1 flex items-center gap-4 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  <img
                    src='/public/media/images/icon-calendar.svg'
                    alt='Calendar'
                  />
                  Calendar
                </a>
                <a
                  href='#'
                  className='py-1 flex items-center gap-4 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  <img
                    src='/public/media/images/icon-reminders.svg'
                    alt='Reminders'
                  />
                  Reminders
                </a>
                <a
                  href='#'
                  className='py-1 flex items-center gap-4 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  <img
                    src='/public/media/images/icon-planning.svg'
                    alt='Planning'
                  />
                  Planning
                </a>
              </div>
            </div>

            <div className='relative text-left'>
              <button
                onClick={() => setShowCompany(!showCompany)}
                className='flex items-center gap-2 text-gray-500 hover:text-gray-700'
              >
                Company
                <img
                  src={`${
                    showCompany
                      ? '/public/media/images/icon-arrow-up.svg'
                      : '/public/media/images/icon-arrow-down.svg'
                  }`}
                  alt='Arrow'
                />
              </button>
              <div
                className={`${
                  showCompany ? 'flex' : 'hidden'
                } flex-col md:absolute bg-white md:shadow-2xl md:rounded-lg p-4 transition-all duration-300 ${
                  showCompany ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <a
                  href='#'
                  className='py-1 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  About
                </a>
                <a
                  href='#'
                  className='py-1 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  Customers
                </a>
                <a
                  href='#'
                  className='py-1 text-gray-500 hover:text-gray-700 transition-all duration-200'
                >
                  Blog
                </a>
              </div>
            </div>
            <a
              href='#'
              className='py-1 text-gray-500 hover:text-gray-700 self-baseline'
            >
              Careers
            </a>
            <a
              href='#'
              className='py-1 text-gray-500 hover:text-gray-700 self-baseline '
            >
              About
            </a>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 w-full md:w-auto'>
            <a href='#' className='py-1 text-gray-500 hover:text-gray-700'>
              Login
            </a>
            <button className='py-1 px-4 bg-transparent text-gray-400 border border-gray-400 rounded-xl hover:border-gray-700 hover:text-gray-700 transition-all duration-200 w-full md:w-auto'>
              Register
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
