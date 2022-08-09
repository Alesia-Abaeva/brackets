module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) {
    return false
  }

  const reversedBracketsConfig = bracketsConfig.map((brackets) =>
    [...brackets].reverse()
  )
  const bracketsMap = Object.fromEntries(reversedBracketsConfig)

  const prevBracketsArray = []

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i]

    if (!prevBracketsArray.length) {
      prevBracketsArray.push(currentBracket)
      continue
    }

    const [prevBracket] = prevBracketsArray.slice(-1)

    if (prevBracket === bracketsMap[currentBracket]) {
      prevBracketsArray.pop()
      continue
    }

    prevBracketsArray.push(currentBracket)
  }

  return !prevBracketsArray.length
}

