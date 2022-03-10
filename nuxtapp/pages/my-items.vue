<template>
    <div class="container">
        <NuxtLink to="/" class="link">Go Back</NuxtLink>
        <MyItem 
            v-for="rental in myRentals"
            :key="rental.id"
            :item="rental"
        />
    </div>    
</template>

<script>
import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState([
                'myRentals'
            ])
        }
    }
</script>

<style scoped>
    .container {
        padding: 5rem 0
    }
    .link:hover{
        text-decoration: none;
    }
</style>