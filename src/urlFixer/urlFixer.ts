const urlFixer = (url:string) => url.replace(/amp;/g, "").replace("cdn3.fs", "cdn113-fs2").replace("storage.filesrvcloud", "cdn.filesrvcloud").replace("soroush-hamrah", "splus").replace("sapp", "splus").replace(".filesrvcloud", "f.splus")

export default urlFixer