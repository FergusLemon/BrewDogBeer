import axios from 'axios'

class BrewDogApi {
  getBeers = () => {
    const MIN_ABV = 5
    const MAX_ABV = 12
    const MIN_DATE = '11-2015'
    return axios
      .get('https://api.punkapi.com/v2/beers/', {
        params: {
          abv_gt: MIN_ABV,
          abv_lt: MAX_ABV,
          brewed_after: MIN_DATE,
        },
        transformResponse: [
          data => {
            let rawResponse = JSON.parse(data)
            let formattedResponse = []
            const HIGH = 8
            const MEDIUM = 7
            for (let beer of rawResponse) {
              formattedResponse.push({
                abv: beer['abv'],
                name: beer['name'],
                image: beer['image_url'],
                id: beer['id'],
                ingredients: beer['ingredients'],
                strength:
                  beer['abv'] < MEDIUM
                    ? 'Low'
                    : beer['abv'] >= HIGH
                    ? 'High'
                    : 'Medium',
              })
            }
            return formattedResponse
          },
        ],
      })
      .then(res => res.data)
      .catch(err => {
        throw new Error(
          'Something went wrong when trying to get the information about beers, sorry, please try again later'
        )
      })
  }
}
export default new BrewDogApi()
