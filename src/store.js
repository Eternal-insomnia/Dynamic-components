import { createStore } from 'vuex'
import localeRU from "@/data/locale/ru.json"
import localeEN from "@/data/locale/en.json"

export const store = createStore({
    state(){
        return{
            currentTab: 'Computed',
            locale: localeRU,
        }
    },
    mutations:{
        changeTab(state, event) {
            state.currentTab = event.target.value
        },
        changeLang(state, event) {
            switch(event.target.value) {
                case "RU":
                    state.locale = localeRU
                    break
                case "EN":
                    state.locale = localeEN
                    break
                default:
                    state.locale = localeRU
            }
        }
    }
})