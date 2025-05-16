<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppFileCard from '../components/AppFileCard.vue';
import AppLinkCard from '../components/AppLinkCard.vue';
import AppIcon from '../components/AppIcon.vue';
import useAgentHook from '../hooks/agent.hook';
import type File from '../types/File.type';
import type Link from '../types/Link.type';

const props = defineProps<{
    own: boolean;
    agentType?: AgentType;
    content: string;
    files?: File[];
    links?: Link[];
}>();

const { agentIcon, agentIconColor, agentIconBackgroundColor, agentName, agentBackgroundColor } = useAgentHook(
    props.agentType ?? null
);
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
                :style="{ 'background-color': agentBackgroundColor ?? '' }"
            >
                <div class="app-chat-message__message-text app-text">
                    {{ props.content }}
                </div>
            </div>

            <div
                class="app-chat-message__files-cnt"
                v-if="props.files?.length"
            >
                <div
                    class="app-chat-message__file"
                    v-for="file in props.files"
                    :key="file.id"
                >
                    <app-file-card :title="file.title" />
                </div>
            </div>

            <div
                class="app-chat-message__links-cnt"
                v-if="props.links?.length"
            >
                <div
                    class="app-chat-message__link"
                    v-for="link in props.links"
                    :key="link.id"
                >
                    <app-link-card :title="link.title" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-chat-message {
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
        // padding-top: var(--chat-body-padding-top);
    }

    &__message-content {
        background-color: var(--color-light-blue);
        padding: var(--padding-medium) var(--padding-large);
        padding-bottom: var(--padding-large);
        border-radius: 0px var(--border-radius-large) var(--border-radius-large) var(--border-radius-large);

        &--own {
            background-color: var(--color-light-blue);
            border-radius: var(--border-radius-large) 0px var(--border-radius-large) var(--border-radius-large);
        }
    }

    &__files-cnt,
    &__links-cnt {
        display: flex;
        gap: var(--gap-large);

        padding-top: var(--padding-medium);
    }
}
</style>
