import Axios from "axios";
import token from "../../token/token"

export default {

    state: {
        user: [],
    },

    mutations:{
       SHOW_USER(state, show_user){
            state.user = show_user;
       },
       NOVO_USER(state, novo_usuario){
        state.user.push(novo_usuario);  
       },
    
       DEL_USER(state, id){
        let index = state.user.findIndex(p => p.id == id)
        state.user.splice(index, 1)
       },
    },

    actions:{
        loginUsuario(context, parametros) {
            return Axios.post('http://localhost/laravel-api/public/api/auth/login', parametros)
                        .then(response => {
                            if (response.status === 200) {
                                localStorage.setItem( 'token', response.data.token);
                                return token;
                            }
                        })
                        .catch((error) => {
                            return error.response;               
                        })
        },
        salvarUsuario(context, parametros) {
            return Axios.post('http://localhost/laravel-api/public/api/auth/registro', parametros)
                        .then(response => context.commit('NOVO_USER', response.data))
        },
        showUsuarios(context) {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            };
            return Axios.get('http://localhost/laravel-api/public/api/auth/usuarios/cadastrados', config)
                        .then(response => context.commit('SHOW_USER', response.data))
        }
    },

    getters:{
       
    }
}