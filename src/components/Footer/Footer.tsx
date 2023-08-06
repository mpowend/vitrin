import FooterIconLink from './FooterIconLink.tsx'


function Footer() {
  const sources:string[] = [
    "https://vitrin.splus.ir/static/media/twitterLogo.5e4849e398efbde9ebc5a4fa49356a96.svg",
    "https://vitrin.splus.ir/static/media/twitterLogo.5e4849e398efbde9ebc5a4fa49356a96.svg",
    "https://vitrin.splus.ir/static/media/instagramLogo.87a3f5b3e18e07af86e9b4ed53572941.svg",
    "https://vitrin.splus.ir/static/media/mailLogo.9262abbf1419951d7478406089d0f126.svg",  
  ]
  return (
    <footer
      className="flex w-full flex-row-reverse items-center bg-warm-gray px-3 py-5 max-md:flex-col"
    >
      <div
        className="flex h-full w-2/4 items-center justify-center gap-2 max-md:w-full"
      >
        {sources.map((source,index)=><FooterIconLink key={index} src={source}/>)}
      </div>
      <div
        className="flex h-full w-2/4 items-center justify-center text-lg text-slate-500 max-md:w-full max-md:text-sm"
      >
        تمامی حقوق مادی و معنوی این صفحه متعلق به پیام رسان سروش پلاس می‌باشد.
      </div>
    </footer>
  )
}

export default Footer