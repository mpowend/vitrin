function FooterIconLink({ src }: { src: string }) {
  return (
    <div className="flex w-12 items-center justify-center ">
      <a href="#">
        <img src={src} />
      </a>
    </div>
  )
}

export default FooterIconLink
