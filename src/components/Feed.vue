<template>
  <div>
    <div v-if="isLoading">Loading...</div>

    <div v-if="error">{{ error }}</div>

    <div v-if="feed">
        <div class="article-preview" v-for="(article, index) in feed.articles" :key="index">
            <div class="article-meta">
                <router-link 
                    :to="{name: 'userProfile', params: {slug: article.author.username}}" >
                    <img :src="article.author.image"/>
                </router-link>
                <div class="info">
                    <router-link 
                        :to="{name: 'userProfile', params: {slug: article.author.username}}" 
                        class="author"
                        >
                        {{ article.author.username }}
                    </router-link>    
                    <span class="date">{{ article.createdAt }}</span>
                </div>
                <div class="pull-xs-right">
                    ADD to Favorites
                </div>
            </div>             
            <router-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
                <h1>{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <span>Read more...</span>
                TAG LIST
            </router-link>            
        </div>
        <mcv-pagination
            :total="total"
            :limit="limit"
            :current-page="currentPage"
            :url="url"
        />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed' 
import McvPagination from '@/components/Pagination'

export default {
    name: 'McvFeed',
    props: {
        apiUrl: {
            type: String,
            required: true,
        }
    }, 
    components: {
        McvPagination
    },
    data() {
        return {
            total: 500,
            limit: 10,
            currentPage: 5,
            url: '/'
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        })
    },
    mounted() {
        console.log('init feed');
        this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
    },
}
</script>

<style>

</style>