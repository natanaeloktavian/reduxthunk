import * as actions from '../src/actions'
import * as types from '../src/constants'

describe('actions', () => {
  it('should create an action to get data', () => {
    const expectedAction = {
      type: types.FETCHING_DATA,
    }
    expect(actions.getData()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to get data success', () => {
    const expectedAction = {
      type: types.FETCHING_DATA_SUCCESS,
    }
    expect(actions.getDataSuccess()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to get data failure', () => {
    const expectedAction = {
      type: types.FETCHING_DATA_FAILURE,
    }
    expect(actions.getDataFailure()).toEqual(expectedAction)
  })
})
