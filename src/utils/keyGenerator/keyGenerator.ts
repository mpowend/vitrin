export default function generateRandomKey(): string {
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomString = ''
    const length = 6
    for (let i = 0; i < length; i+=1) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      randomString += charset.charAt(randomIndex)
    }
  
    return randomString
  }