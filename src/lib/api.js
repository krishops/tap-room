export const getBeers = async () => {
  const beers = window.localStorage.getItem('beers') || '[]'
  return JSON.parse(beers)
}

export const updateBeers = async (beers) => {
  window.localStorage.setItem('beers', JSON.stringify(beers))
  return beers
}