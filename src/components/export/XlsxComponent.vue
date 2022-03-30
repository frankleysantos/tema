<template>
  <vue-excel-xlsx
        :data="rows"
        :columns="columns"
        :file-name="filename"
        :file-type="'xlsx'"
        :sheet-name="'sheetname'"
        >
        <v-btn :color="btncor" class="mr-2 px-0" small>
          <i class="mdi mdi-microsoft-excel" aria-hidden="true">{{btnname}}</i>
        </v-btn>
      </vue-excel-xlsx>
</template>

<script>
export default {
    props: ['rows', 'columns', 'filename', 'btnname', 'btncor']
}
</script>

<style>

</style>