import Logo from 'assets/logo.svg'

const Nav = ({ items }: { items: string[] }) => {
  return (
    <nav className="w-full h-12 bg-lighterBlack">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <div className="ml-4 text-xl font-bold text-white">
            <img src={Logo} alt="logo" className="w-10 h-10 text-white" />
          </div>
        </div>
        <div className="flex items-center justify-between mr-4">
          {items.map(item => (
            <button key={item} className="h-full mr-2 w-fit">
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
