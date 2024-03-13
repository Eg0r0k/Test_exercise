<script setup lang="ts">
import EmployerCard from './components/EmployerCard.vue';
import PopUp from './components/PopUp.vue';
import SearchFild from './components/SearchFild.vue';
import type { UserData } from '@/types'
import { onMounted, ref } from 'vue'
import { api } from './api';
const isPopShow = ref(false)
const selectedUser = ref({})
const isLoading = ref(true)

const users = ref<UserData[]>([])
const openPop = (user: UserData): void => {
  selectedUser.value = user
  isPopShow.value = true
}
const closePop = (): void => {
  isPopShow.value = false
}
const updateUsers = (foundUsers: UserData[]) => {
  users.value = foundUsers;
};
onMounted(async () => {
  users.value = await api.getUsers()
  isLoading.value = false
})
</script>

<template>
  <main class="wrapper">
    <SearchFild @users-found="updateUsers" />
    <div v-if="isLoading" class="wrapper__loader"><span class="loader"></span></div>
    <div v-else-if="users.length == 0" class="employers__not-found">Users notfound!</div>

    <section class="employers" v-else>
      <EmployerCard v-for="user in users" :key="user.email" @click="openPop(user)" :user="user" />

    </section>
    <PopUp v-if="isPopShow" @close="closePop" :user="selectedUser" />
  </main>
</template>

<style scoped lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: var(--purple-icon);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.wrapper {
  max-width: 1151px;
  margin: 0 auto;
  padding: 64px 15px 0 15px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh
  }
}

.employers {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 357px);
  justify-content: center;
  gap: 25px;

  &__not-found {
    text-align: center;
    font-size: 21px;
  }
}
</style>
