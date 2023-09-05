
export const getRandomNumberZeroToThree = async () => {
  const random = await fetch('https://codechallenge.boohma.com/random')
    .then(response => response.json())
    .then(data => data.random_number)

  return random % 4
}