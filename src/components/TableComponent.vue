<template>
    <v-data-table
        :headers="cabecalho"
        :items="rows"
        :items-per-page="perpage"
        :hide-default-footer="false"
        class="elevation-1"
        :footer-props="{
            itemsPerPageOptions: [5, 10, 100, 500],
            showFirstLastPage: true,
            //firstIcon: 'mdi-arrow-collapse-left',
            //lastIcon: 'mdi-arrow-collapse-right',
            //prevIcon: 'mdi-minus',
            //nextIcon: 'mdi-plus'
        }"
    ></v-data-table>
</template>

<script>
export default {
    props: ['cabecalho', 'rows', 'perpage']
}
</script>

<style>

</style>