<script setup lang="ts">
import Icon from '../enums/Icon.enum';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppIcon from '../components/AppIcon.vue';
import { computed } from 'vue';
import useAgentHook from '../hooks/agent.hook';

const props = defineProps<{
    icon: Icon;
    title: string;
    description: string;
    clickable?: boolean;
}>();

const emit = defineEmits(['click']);

const tabindex = computed(() => (props.clickable ? '0' : '-1'));

function handleDataCardClick() {
    if (!props.clickable) return;

    emit('click');
}
</script>

<template>
    <div
        class="app-data-card"
        :class="{ 'app-data-card--clickable': props.clickable }"
        :tabindex="tabindex"
        @click="handleDataCardClick"
    >
        <div class="app-data-card__icon">
            <app-icon-bubble>
                <app-icon>{{ props.icon }}</app-icon>
            </app-icon-bubble>
        </div>
        <div class="app-data-card__info">
            <span class="app-data-card__name app-text app-text--highlighted">{{ props.title }}</span>
            <div class="app-data-card__description app-text--light">{{ props.description }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-data-card {
    padding: var(--padding-large);
    background-color: var(--color-light-blue);
    min-width: 300px;
    border-radius: var(--border-radius-medium);

    display: flex;
    flex-direction: column;
    row-gap: var(--gap-small);

    &--clickable {
        cursor: pointer;

        transition: background-color var(--background-transition);

        &:hover {
            background-color: var(--color-light-blue--hover);
        }
    }

    &__icon {
        display: flex;
        justify-content: flex-end;
    }

    &__info {
        display: flex;
        flex-direction: column;
        row-gap: var(--gap-medium);
    }

    &__description {
        color: var(--font-color-grey);
    }
}
</style>
