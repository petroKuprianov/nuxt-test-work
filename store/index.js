import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';


Vue.use(Vuex)

const createStore = () =>{
    
  return new Vuex.Store({
    state:{
      searchValue:'Kyiv',
      city:[]
    },
    mutations: {
      SET_SEARCH_VALUE: (state, searchValue) => {
        state.searchValue = searchValue;
      },
      SET_CITY:(state,city) => {
        state.city.push(city);
      },
      DELETE_ELEMENT:(state,name) => {
        let arr =  state.city.findIndex(item => item.name === name);
        state.city.splice(arr,1);

      },
      UPDATE_FROM_STORAGE:(state) =>{
        let parseJson = JSON.parse(window.localStorage.getItem('arr'))
        if(parseJson){
        state.city = parseJson;
        }
      }
      
    },
    actions: {

      GET_ELEMENTS_TO_VUEX({ commit }, searchValue) {
        commit('SET_SEARCH_VALUE', searchValue);
      },
      DELETE_ELEMENT_FROM_VUEX({commit},name){
        commit('DELETE_ELEMENT',name);
      },
      SAVE_ELEMENTS(){
        const data = JSON.stringify(this.state.city);
        window.localStorage.setItem('arr', data);

      },
      
      UPLOAD_ELEMENTS({commit}){
         
        commit('UPDATE_FROM_STORAGE');
      },

      CLEAR_LOCAL_STR(){
        window.localStorage.clear();
      },
      
      GET_ELEMENTS_FROM_API ({ commit }) {
        return axios('http://api.openweathermap.org/data/2.5/weather?q='+this.state.searchValue +'&appid=f9d39011acd0d4b5209d1ffa3605ec53', {
          method: 'GET'
        })
          .then((city) => {
            let check = false;
            for(let i=0;i<this.state.city.length;i++){
              
              if(city.data.name.toLowerCase()===this.state.city[i].name.toLowerCase()){
                 check = true;
              }
            }
            if(check === true){
              return this.state.city;
            }
            else{
            commit('SET_CITY', city.data)
            return city.data;
            }
          })
          .catch((e) => {
            return e
          })
      }
      
    },
    modules: {
    },
    getters: {
      CITY(state) {
        return state.city;
      },
      SEARCH_VALUE(state){
        return state.searchValue;
      }
    }
  })
  }

  export default createStore;