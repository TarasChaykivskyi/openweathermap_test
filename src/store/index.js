import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from './../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        foundPlaces: null,
        currentWhether: null,
        weekWhether: null,
        otherOptionsCurrentWhether: null,
        savedPlaces: ['kiev', 'london']
    },
    getters: {
        FOUND_PLACES: state => state.foundPlaces,
        CURRENT_WHETHER: state => state.currentWhether,
        WEEK_WHETHER: state => state.weekWhether,
        OTHER_OPTIONS_CURRENT_WHETHER: state => state.otherOptionsCurrentWhether,
        SAVED_PLACES: state => state.savedPlaces
    },
    mutations: {
        setFoundPlace(state, obj) {
            state.foundPlaces = obj;
        },
        setCurrentWhether(state, obj) {
            state.currentWhether = {
                name: obj.name,
                temp: Math.round(obj.main.temp - 273),
                temp_max: Math.round(obj.main.temp_max - 273),
                temp_min: Math.round(obj.main.temp_min - 273),
                icon: obj.weather[0].icon
            }
        },
        addPlace(state, value) {
            if(state.savedPlaces.length) {
                let isDouble = false;
                state.savedPlaces.filter(item => {
                    if(item.toLowerCase() === value.toLowerCase()) {
                        isDouble = true;
                    }
                })
                if(!isDouble) state.savedPlaces.push(value)
            }else state.savedPlaces.push(value)
        },
        setOtherOptionsCurrentWhether(state, obj) {
            state.otherOptionsCurrentWhether = {
                pressure: obj.main.pressure,
                humidity: obj.main.humidity,
                speed: obj.wind.speed,
                sunrise: new Date(obj.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(obj.sys.sunset * 1000).toLocaleTimeString()
            }
        },
        setWeekWhether(state, arr) {
            state.weekWhether = arr.list.filter(item => {
                let dt = new Date(item.dt * 1000).getHours();
                return dt >= 12 && dt <= 15;
            })
        }
    },
    actions: {
        SEARCH_PLACE({commit}, value) {
            if (value.length > 2) {
                axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=6&appid=1bbf9e15ae12ac260807c1f51926467b`)
                    .then(response => {
                        commit('setFoundPlace', response.data)
                    }).catch(() => {
                    commit('setFoundPlace', null)
                })
            } else commit('setFoundPlace', null)
        },
        GET_CURRENT_WHETHER({commit}, value) {
            // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=1bbf9e15ae12ac260807c1f51926467b`)
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=1bbf9e15ae12ac260807c1f51926467b`)
                .then(response => {
                    commit('setCurrentWhether', response.data)
                    commit('setOtherOptionsCurrentWhether', response.data)
                    commit('addPlace', value)
                }).catch(() => {
                    router.push({name: 'Home'});
                })
        },
        GET_WEEK_WHETHER({commit}) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=kiev&appid=1bbf9e15ae12ac260807c1f51926467b`)
                .then(response => {
                    commit('setWeekWhether', response.data)
                })
        }
    },
    modules: {}
})
