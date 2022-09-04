<template>
    <div class="container">
        <p>
            正在重定向至博客
        </p>
        <p>
            redirecting to blog...
        </p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const regex = new RegExp('\\/blog(\\/.*)', 'gm');
const match = regex.exec(route.fullPath);
if (match) {
    window.location.href = `https://blog.im0o.top${match[1]}`;
    // window.location.href = `https://blog.im0o.cn${match[1]}`;
} else {
    window.location.href = 'https://blog.im0o.top';
    // window.location.href = 'https://blog.im0o.cn';
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    font-size: 2rem;
}
</style>