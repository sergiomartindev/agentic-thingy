<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppIcon from '../components/AppIcon.vue';
import useAgentHook from '../hooks/agent.hook';

const props = defineProps<{
    agentType: AgentType;
}>();

const { agentIcon, agentIconColor, agentIconBackgroundColor, agentName, agentDescription, agentBackgroundColor } =
    useAgentHook(props.agentType);
</script>

<template>
    <div class="app-chat-typing-message">
        <div class="app-chat-typing-message__avatar">
            <span
                class="app-chat-typing-message__loader"
                :style="`--agent-color: ${agentIconBackgroundColor}`"
            />
            <app-icon-bubble :style="{ 'background-color': agentIconBackgroundColor }">
                <app-icon :style="{ color: agentIconColor }">{{ agentIcon }}</app-icon>
            </app-icon-bubble>
        </div>

        <div class="app-chat-typing-message__typing-message">
            <span class="app-text"> {{ agentName }} is typing... </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-chat-typing-message {
    display: flex;
    align-items: flex-end;

    column-gap: var(--gap-large);

    &__avatar {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }

    &__loader {
        width: 48px;
        height: 48px;
        border: 5px solid var(--agent-color);
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        position: absolute;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    &__typing-message {
        display: inline-block;
        animation: bounce 1.6s infinite ease-in-out;
    }

    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-4px);
        }
    }
}
</style>
