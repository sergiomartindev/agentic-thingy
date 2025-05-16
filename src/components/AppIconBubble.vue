<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    clickable?: boolean;
}>();

const emit = defineEmits(['click']);

const tabindex = computed(() => (props.clickable ? '0' : '-1'));

function handleAppIconBubbleClick() {
    if (!props.clickable) return;

    emit('click');
}
</script>

<template>
    <div
        class="app-icon-bubble"
        :class="{ 'app-icon-bubble--clickable': props.clickable }"
        @click="handleAppIconBubbleClick"
        :tabindex="tabindex"
    >
        <slot />
    </div>
</template>

<style scoped lang="scss">
.app-icon-bubble {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: var(--padding-small);
    background-color: var(--color-light-blue-transparent);
    border-radius: 50%;

    width: 35px;
    height: 35px;

    &--clickable {
        cursor: pointer;
    }
}
</style>
