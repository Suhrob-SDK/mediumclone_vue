<template>
  <ul class="pagination">
    <li 
        v-for="page in pages" 
        :key="page" 
        class="page-item"
        :class="{active: currentPage === page}"
    >
        <router-link :to="{path: url, query: {page: page}}" class="page-link" >
            {{ page }}
        </router-link>        
    </li>
  </ul>
</template>

<script>
import {range} from '@/helpers/utils'

export default {
    name: 'McvPagination',
    props: {
        total: {
            type: Number,
            requred: true
        },
        limit: {
            type: Number,
            requred: true
        },
        currentPage: {
            type: Number,
            requred: true
        },
        url: {
            type: String,
            requred: true
        },
        computed: {
            pages() {
                const pagesCount = Math.ceil(this.total / this.limit)
                return range(1, pagesCount)
            }
        }
    }
}
</script>

<style>

</style>