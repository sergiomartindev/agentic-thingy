<script setup lang="ts">
const props = defineProps<{
    imageUrl: string;
}>();
</script>

<template>
    <div class="app-user-avatar">
        <img
            class="app-user-avatar__avatar"
            :src="props.imageUrl"
            alt="User avatar"
        />
    </div>
</template>

<style scoped lang="scss">
.app-user-avatar {
    height: 35px;
    width: 35px;
    border-radius: 100%;
    overflow: hidden;

    user-select: none;

    &__avatar {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
