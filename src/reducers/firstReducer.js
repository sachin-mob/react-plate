export default function firstReducer(state={}, action) {
    switch (action.type) {
        case 'ACTION1':
          let newState = Object.assign({}, state);
          newState.firstActionFirstRedValue = action.text + new Date().getTime();
          console.log("in reducer",newState)
          return newState;
          // return Object.assign({}, state, {
          //   firstActionFirstRedValue: action.value
          // })
        default:
          return state
    }
}