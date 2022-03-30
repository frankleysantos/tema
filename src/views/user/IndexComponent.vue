<template>
  <v-container>
      <Breadcrumb :breadcrumb="breadcrumb" class="px-0"/>
      <Xlsx :columns="headers.xlsx" :filename="'export-user'" :rows="rows" :btnname="'xlsx'" :btncor="'success'"/>
      <CSV :rows="rows" :btnname="'csv'" :filename="'usuarios-cadastrados'" :btncor="'warning'" :header="headers.csv"/>

      <Table :cabecalho="headers.table" :perpage="3" :rows="rows"/>
  </v-container>
</template>

<script>
import Breadcrumb from '../../components/BreadcrumbsComponent.vue'
import CSV from '../../components/export/CsvComponent.vue'
import Xlsx from '../../components/export/XlsxComponent.vue'
import Table from '../../components/TableComponent.vue'

export default {
  components: {
    Breadcrumb,
    Xlsx,
    CSV,
    Table,
  },
  created() {
    this.usuarios()
  },
  data() {
    return {
      breadcrumb: [
          {
            text: 'Usuários',
            disabled: false,
            href: '/user',
          },
          {
            text: 'Cadastrados',
            disabled: true,
          },
      ],
      rows: [],

      headers: {
        xlsx: [
          {
              label: "Nome",
              field: "name",
          },
          {
              label: "Usuário",
              field: "username",
          },
          {
              label: "Email",
              field: "email",
          },
        ],
        csv: {
            name: { title: 'Nome Completo' },
            email: { title: 'Email do Usuário' } 
        }
        ,
        table: [
          {
              text: 'Nome',
              align: 'start',
              value: 'name',
          },
          {
              text: 'Usuário',
              align: 'start',
              value: 'username',
          },
          {
              text: 'Email',
              align: 'start',
              value: 'email',
          },
        ]
      }
    }
  },
  methods: {
    usuarios: function () {
          if(!localStorage.getItem('token'))
            this.$router.push('/login')
            
          this.$store.dispatch('showUsuarios')
              .then(() => {
                this.rows = this.$store.state.usuario.user
              })
    },
  },
  props: {
    
  }
}
</script>

<style>

</style>