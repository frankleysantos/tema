<template>
         <v-container fluid fill-height>
            <vue-snotify></vue-snotify>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <form @submit.prevent="login">
                           <v-text-field
                              prepend-icon="person"
                              label="Login"
                              type="text"
                              v-model="user.username"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              label="Password"
                              type="password"
                              v-model="user.password"
                           ></v-text-field>
                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" type="submit">Login</v-btn>
                           </v-card-actions>
                        </form>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
</template>

<script>

export default {
   data() {
      return {
         user: {
            username: null,
            password: null
         }
      }
   },
   methods: {
      login: function() {
         this.$store.dispatch('loginUsuario', this._data.user)
                     .then((resp) => {
                        if (resp.headers['Authorization']) {
                           this.$snotify.async('Realizando login, você será redirecionado.', 'Aguarde!', () => new Promise((resolve) => {
                              setTimeout(() => resolve({
                                 mounted: this.$router.push('/user')
                              }), 2000);
                           }));
                        }else if(resp.status === 401){
                           alert(resp.data['resp']);
                        }
                     })
      },
   }
   
};
</script>

<style></style>