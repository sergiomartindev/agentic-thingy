<script setup lang="ts">
const props = defineProps<{
    icon: string;
}>();
</script>

<template>
    <span class="app-icon material-symbols-outlined">
        <slot />
    </span>
</template>

<style scoped lang="scss">
.app-icon {
    user-select: none;
    color: #5a7884;
}
</style>
