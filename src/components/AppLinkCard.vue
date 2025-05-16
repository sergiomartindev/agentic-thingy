<script setup lang="ts">
import AppIcon from './AppIcon.vue';
import Icon from '../enums/Icon.enum';

const props = defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="app-file-card">
        <div class="app-file-card__icon">
            <app-icon>
                {{ Icon.Link }}
            </app-icon>
        </div>

        <div class="app-file-card__information">
            <div class="app-file-card__title">
                <span class="app-text">{{ props.title }} </span>
            </div>
        </div>
    </div>
</template>

<style scoped land="scss">
.app-file-card {
    display: flex;
    align-items: center;
    column-gap: var(--gap-medium);

    border: solid 1px var(--color-light-blue);
    border-radius: var(--border-radius-medium);

    padding: var(--padding-medium);

    cursor: pointer;

    transition: background-color var(--background-transition);

    &:hover {
        background-color: var(--color-light-blue);
    }
}
</style>
