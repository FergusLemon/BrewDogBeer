import React from 'react'
import App from './App.js'
import axiosMock from './communications/brewDogApi'
import './setupEnzyme.js'
import { shallow } from 'enzyme'
jest.mock('./communications/brewDogApi')

beforeEach(() => {
  axiosMock.getBeers.mockReturnValue([1, 2])
})

afterEach(() => {
  jest.clearAllMocks()
})

test('renders without crashing', () => {
  shallow(<App />)
})

test('calls the brewDog API on loading', async () => {
  const getBeersSpy = jest.spyOn(axiosMock, 'getBeers')
  shallow(<App />)
  expect(getBeersSpy).toHaveBeenCalledTimes(1)
})

test('sets beers on state with object returned from the API', async () => {
  const wrapper = shallow(<App />)
  await wrapper.instance().componentDidMount()
  expect(wrapper.state().beers.length).toBe(2)
})
