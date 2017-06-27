import dataReducer,{initialState} from '../src/reducers/dataReducer.js'
import * as actions from '../src/actions'
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../src/constants'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(dataReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle fetching data', () => {
    expect(dataReducer(initialState, actions.getData())).toEqual({
      ...initialState,
      data: [],
      isFetching: true
    })
  })

  it('should handle fetching data success', () => {
    expect(dataReducer(initialState, actions.getDataSuccess("data"))).toEqual({
      ...initialState,
      isFetching: false,
      data: "data"
    })
  })

  it('should handle fetching data failure', () => {
    expect(dataReducer(initialState, actions.getDataFailure())).toEqual({
      ...initialState,
      isFetching: false,
      error: true
    })
  })

  it('should ignore unknown actions', () => {
    expect(dataReducer(initialState, {type:'unknown'})).toEqual(initialState)
  })
})
