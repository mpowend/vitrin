function Nav() {
  return (
    <nav className="rtl flex h-full flex-row items-center gap-4 max-sm:hidden">
      <div className="flex h-full flex-col pb-2">
        <img
          className="h-0 w-full grow rounded-full object-contain object-bottom"
          src="https://vitrin.splus.ir/static/media/logo.703f80be4dc089978e16.png"
        />
        <span className="text-xs">سروش پلاس</span>
      </div>
      <a href="#">صفحه اصلی</a>
      <a href="#">بلاگ</a>
      <a href="#">دریافت برنامه</a>
    </nav>
  )
}

export default Nav
