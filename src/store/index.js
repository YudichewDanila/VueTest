import { createStore } from 'vuex'

export default createStore({
    state: {
        users:[],
        mainPageContend:{},
        isLoading:false,
    },
    getters: {
        getUsers(state){
                return state.users;
        },
        getLoading(state){
            return state.isLoading;
        },
        getPageContend(state){
            return state.mainPageContend;
        }

    },
    mutations: {
        SAVEDATA:(state, payload)=>{
            state.users = payload;
        },
        ADDPAGE:(state, payload)=>{
            state.mainPageContend = payload;
        }
    },
    actions: {
        async getUser({ commit, state }, payload){
            state.isLoading = true;
            let result;
            if( payload.length != 0){
            await fetch(`https://jsonplaceholder.typicode.com/users?name_like=^${payload}`)
                .then((data) => {
                    if(data.status == 200){
                    result = data.json()
                } 
                else{
                   result = [{erorText: data.statusText}];
                }})
                .catch((eror) => {
                    result = [{erorText: eror}];
                })
                .finally(() => {state.isLoading  = false})
                commit("SAVEDATA", await result);
            }
            else if ( payload.length == 0){
                commit("SAVEDATA", []);
                state.isLoading = false;
            }
        },

        addPageContend({commit}, payload){
            commit("ADDPAGE", payload);
        }
         
    }
  })