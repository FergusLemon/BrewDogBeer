'use strict'
'use esversion: 6'

const mock = {
  get: () => {
    return new Promise.resolve({
      data: [1, 2],
    })
  },
}
export default mock
