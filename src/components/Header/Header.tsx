import Nav from '../Navigation/Nav.tsx'

function Header() {
  return (
    <header className="fixed z-10 flex h-[60px] w-full flex-row justify-around bg-white p-1">
      <div className="my-auto flex flex-row rounded-full border-[1px]">
        <button className="ml-3 w-6">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className=""
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            ></path>
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            ></path>
          </svg>
        </button>
        <input
          type="text"
          className="rtl flex w-64 flex-row items-center rounded-r-full p-2 leading-6"
          placeholder="جست و جو در ویترین"
        />
      </div>
      <Nav />
    </header>
  )
}

export default Header
