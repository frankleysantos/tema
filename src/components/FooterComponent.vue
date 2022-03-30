<template>
  <v-footer
    dark
    padless
    app
    inset
    
  >
    <v-card
      class="flex"
      flat
      tile
      :elevation="20"
    >

      <v-card-text class="py-2 white--text text-center">
        {{ moment().format('DD/MM/YYYY') }} @<strong>Frankley Santos</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
