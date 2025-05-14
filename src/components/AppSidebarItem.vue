<script setup lang="ts">
import AppIcon from './AppIcon.vue';

const props = defineProps<{
    icon: string;
    label: string;
}>();
</script>

<template>
    <div
        class="app-sidebar-item"
        tabindex="0"
    >
        <div class="app-sidebar-item__icon app-text">
            <app-icon>{{ props.icon }}</app-icon>
        </div>

        <div class="app-sidebar-item__label app-text">
            {{ props.label }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-sidebar-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    border-radius: var(--border-radius-large);
    padding: var(--padding-medium);

    transition: background-color var(--background-transition);

    &:hover {
        background-color: var(--color-dark-blue);
    }
}
</style>
