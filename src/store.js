import { createStore } from 'vuex'

export const store = createStore({
    state(){
        return{
            currentTab: 'Computed'
        }
    },
    mutations:{
        changeTab(state, event) {
            state.currentTab = event.target.value
        }
    }
})