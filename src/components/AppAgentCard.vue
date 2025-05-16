<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppIcon from '../components/AppIcon.vue';
import { computed } from 'vue';
import useAgentHook from '../hooks/agent.hook';

const props = defineProps<{
    agentType: AgentType;
}>();

const { agentIcon, agentIconColor, agentIconBackgroundColor, agentName, agentDescription, agentBackgroundColor } =
    useAgentHook(props.agentType);
</script>

<template>
    <div
        class="app-agent-card"
        :style="{ 'background-color': agentBackgroundColor }"
    >
        <div class="app-agent-card__icon">
            <app-icon-bubble :style="{ 'background-color': agentIconBackgroundColor }">
                <app-icon :style="{ color: agentIconColor }">{{ agentIcon }}</app-icon>
            </app-icon-bubble>
        </div>
        <div class="app-agent-card__info">
            <span class="app-agent-card__name app-text app-text--highlighted">{{ agentName }}</span>
            <div class="app-agent-card__description app-text--light">{{ agentDescription }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-agent-card {
    padding: var(--padding-large);
    background-color: var(--color-light-blue);
    min-width: 300px;
    border-radius: var(--border-radius-medium);

    display: flex;
    flex-direction: column;
    row-gap: var(--gap-small);

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
