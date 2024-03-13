<template>
    <form role="search" @submit.prevent="searchUser" class="search">
        <input v-model="searchQuery" type="text" id="searchInput" name="term" s class="search__fild">
        <button type="submit" class="search__btn">
            <SearchIcon />
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import SearchIcon from './icons/SearchIcon.vue';
import { api } from '@/api';
const emit = defineEmits(['users-found'])
const foundUsers = ref()
const searchQuery = ref('');

const searchUser = async () => {
    try {
        foundUsers.value = await api.searchUsers(searchQuery.value);
        emit('users-found', foundUsers.value)
    } catch (error) {
        console.error('Error searching users:', error);
    }
}

</script>
<style scoped lang="scss">
.search {
    width: 100%;
    position: relative;
    height: 48px;


    &__fild {
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        border-radius: 24px;
        border: 1px solid var(--blueberry);
        padding: 0 24px;


    }

    &__btn {
        cursor: pointer;
        background-color: transparent;
        border: none;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
    }
}
</style>