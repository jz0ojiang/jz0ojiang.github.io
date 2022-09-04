<template>
    <div class="container">
        <img :src="fslow" />
        <span>404 Not Found ?!</span>
        <p>页面被吃掉啦！</p>
        <div class="link">
            <router-link :to="{name: 'home'}">{{ second }} 秒后返回主页（点击直接跳转）</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import fslow from '../assets/fslow.gif'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const second = ref(6);
const router = useRouter();

setInterval(() => {
    second.value--;
    if (second.value <= 0) {
        router.push({name: 'home'});
    }
}, 1000);
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    font-size: 1.8rem;
    img {
        width: 100%;
        max-width: 300px;
    }
    .link {
        font-size: 1.5rem;
    }

}
</style>