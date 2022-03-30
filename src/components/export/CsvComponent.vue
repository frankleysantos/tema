<template>
    <vue-json-to-csv
          :json-data="rows"
          :csv-title="filename"
          :labels="header"
      >
          <v-btn :color="btncor" class="mr-2 px-0" small>
                <i class="mdi mdi-file-delimited" aria-hidden="true">{{btnname}}</i>
          </v-btn>
    </vue-json-to-csv>
</template>

<script>
import VueJsonToCsv from 'vue-json-to-csv'
export default {
    components: {
        VueJsonToCsv
    },
    props: ['rows', 'btnname', 'filename', 'btncor', 'header']
}
</script>

<style>

</style>