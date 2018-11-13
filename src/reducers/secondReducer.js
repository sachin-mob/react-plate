export default function secondReducer(state={}, action) {
    switch (action.type) {
        case 'ACTION2':
          return Object.assign({}, state, {
            firstActionSecondRedValue: action.value
          })
        default:
          return state
    }
}