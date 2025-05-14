<script setup lang="ts">
import AppSidebar from './AppSidebar.vue';
import AppHeader from './AppHeader.vue';
import AppChat from './AppChat.vue';
import { ref, provide } from 'vue';

const layoutIsCollapsed = ref(false);

provide('layoutIsCollapsed', layoutIsCollapsed);
</script>

<template>
    <div
        class="app-layout"
        :class="{ 'app-layout--collapsed': layoutIsCollapsed }"
    >
        <app-sidebar />

        <app-header />

        <app-chat />
    </div>
</template>

<style scoped lang="scss">
.app-layout {
    --sidebar-width: 250px;
    --header-height: 60px;

    height: 100vh;
    background: var(--color-light-blue);
    padding: var(--padding-large);

    &--collapsed {
        --sidebar-width: 100px;
    }

    & {
        display: grid;
        grid-template-columns: var(--sidebar-width) auto;
        grid-template-rows: var(--header-height) auto;
        grid-template-areas:
            'sidebar header'
            'sidebar chat';
    }
}
</style>
