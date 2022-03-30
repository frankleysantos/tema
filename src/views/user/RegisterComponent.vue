<template>
   <v-container class="py-2">
       
       <Breadcrumb :breadcrumb="breadcrumb" class="px-0"/>
        <v-card elevation="4" class="py-5">
            <form method="POST" @submit.prevent="registrar" class="mx-5" >
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="user.name"
                            label="Nome"
                            placeholder="Nome Completo"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="user.username"
                            label="Username"
                            placeholder="Usuário"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="user.perfil"
                            :items="items"
                            item-text="state"
                            label="Perfil"
                            return-object
                            outlined
                        ></v-select>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="user.email"
                            label="E-mail"
                            required
                            placeholder="Email"
                            outlined
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field
                            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.password]"
                            :type="show4 ? 'text' : 'password'"
                            label="Password"
                            :error="!rules.password"
                            @click:append="show4 = !show4"
                            v-model="user.password"
                            placeholder="Senha"
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col>
                        <v-btn 
                            type="submit"
                        >
                        Enviar
                        </v-btn>
                    </v-col>
                </v-row>
            </form>
        </v-card>
   </v-container>
</template>

<script>
import Breadcrumb from '../../components/BreadcrumbsComponent.vue'
export default {
    components: {
        Breadcrumb
    },
    data() {
        return {
            show4: false,
            select: { state: 'Usuario', permissao_id: '2' },
            items: [
                { state: 'Usuário', permissao_id: '2' },
                { state: 'Administrador', permissao_id: '1' },
            ],
            rules: {
                password: (p) => (p.length >= 8) || 'Senha deve ter o Minímo de 8 caracteres',
            },
            user: {
                name: '',
                username: '',
                password: '',
                perfil: ''
            },
            breadcrumb: [
                {
                text: 'Usuários',
                disabled: false,
                href: '/user',
                },
                {
                text: 'Cadastro de Usuário',
                disabled: true,
                href: 'registro',
                },
            ],
        }
    },
    methods: {
        registrar: function() {
            if(this.rules.password(this.user.password) != true)
                return true;

            this.$store.dispatch('salvarUsuario', this.user)
                        .then(() => {
                            
                        })
        }
    },
    computed: {
    }
}
</script>

<style>

</style>