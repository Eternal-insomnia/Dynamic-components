import { createStore } from 'vuex'
import localeRU from "@/data/locale/ru.json"

export const store = createStore({
    state(){
        return{
            currentTab: 'Computed',
            currentLang: 'RU',
            locale: localeRU,
        }
    },
    mutations:{
        changeTab(state, event) {
            state.currentTab = event.target.value
        }
    }
})