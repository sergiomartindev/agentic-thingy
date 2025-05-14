<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppIcon from '../components/AppIcon.vue';
import Icon from '../enums/Icon.enum';
import AgentBackgroundColor from '../enums/AgentBackgroundColor.enum';
import AgentColor from '../enums/AgentColor.enum';
import useAgentHook from '../hooks/agent.hook';

const props = defineProps<{
    own: boolean;
    agentType?: AgentType;
    content: string;
}>();

const { agentIcon, agentIconColor, agentIconBackgroundColor, agentName } = useAgentHook(props.agentType);
</script>

<template>
    <div class="app-chat-message">
        <div
            class="app-chat-message__user-info"
            v-if="!props.own"
        >
            <div class="app-chat-message__avatar">
                <app-icon-bubble :style="{ 'background-color': agentIconBackgroundColor }">
                    <app-icon :style="{ color: agentIconColor }">{{ agentIcon }}</app-icon>
                </app-icon-bubble>
            </div>
        </div>
        <div class="app-chat-message__message-body">
            <span class="app-chat-message__nickname app-text">{{ agentName }}</span>

            <div
                class="app-chat-message__message-content"
                :class="{ 'app-chat-message__message-content--own': props.own }"
            >
                <span class="app-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda quibusdam laudantium
                    itaque molestiae tenetur voluptates quas necessitatibus saepe, explicabo nam nobis ad. Sapiente aut
                    exercitationem porro, eligendi nihil labore.
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-chat-message {
    --chat-body-padding-top: 14px;

    display: flex;
    column-gap: var(--gap-large);

    &__user-info {
        display: flex;
        align-items: flex-start;
        column-gap: var(--gap-medium);
    }

    &__message-body {
        display: flex;
        flex-direction: column;
        row-gap: var(--padding-small);
        padding-top: var(--chat-body-padding-top);
    }

    &__message-content {
        background-color: var(--color-light-blue);
        padding: var(--padding-medium) var(--padding-large);
        padding-bottom: var(--padding-large);
        border-radius: 0px var(--border-radius-large) var(--border-radius-large) var(--border-radius-large);

        &--own {
            background-color: transparent;
        }
    }
}
</style>
