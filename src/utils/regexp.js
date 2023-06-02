export function urlValidator (value) {
  const strRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g
  const regex = new RegExp(strRegex)
  return regex.test(value)
}
