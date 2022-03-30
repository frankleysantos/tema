<template>
    <v-container >
      <Navbar/>
      <v-layout row wrap>
       Teste 2
      </v-layout>
      <Footer/>
    </v-container>
</template>

<script>

import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'
export default {
 components: {
   Navbar,
   Footer
 }
}
</script>
