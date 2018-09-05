const store = {
    state: {
      log: 0
    },
    getters: {
        'GET_LOG': function (state) {
          return state.log
        }
    }
  }
  
  export default store