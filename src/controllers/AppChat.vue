<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import AppIcon from '../components/AppIcon.vue';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppInput from '../components/AppInput.vue';
import Icon from '../enums/Icon.enum';
import AppChatMessage from '../components/AppChatMessage.vue';
import AppDataCard from '../components/AppDataCard.vue';
import { ref } from 'vue';

const hasSelectedDataSource: ref<boolean> = ref(false);
const messages: ref<Message[]> = ref([]);

type Message = {
    id: string;
    content: string;
    agentType?: AgentType;
    own: boolean;
};

function handleDataCardClick() {
    hasSelectedDataSource.value = true;

    setTimeout(() => {
        messages.value.push({
            id: '6b841887-3d2e-429b-8eb4-ed15240ae44f',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda quibusdam laudantium itaque molestiae tenetur voluptates quas necessitatibus saepe, explicabo nam nobis ad. Sapiente aut exercitationem porro, eligendi nihil labore.',
            agentType: AgentType.DataGuru,
            own: false,
        });

        setTimeout(() => {
            messages.value.push({
                id: '25a03630-9bbb-409a-abb3-bb7a2bc13314',
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda quibusdam laudantium itaque molestiae tenetur voluptates quas necessitatibus saepe, explicabo nam nobis ad. Sapiente aut exercitationem porro, eligendi nihil labore.',
                agentType: null,
                own: true,
            });

            setTimeout(() => {
                messages.value.push({
                    id: 'a812d81e-92c5-4608-99b6-6e5a304db9d5',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda quibusdam laudantium itaque molestiae tenetur voluptates quas necessitatibus saepe, explicabo nam nobis ad. Sapiente aut exercitationem porro, eligendi nihil labore.',
                    agentType: AgentType.ModellingChampion,
                    own: false,
                });
            }, 3000);
        }, 2300);
    }, 1000);
}
</script>

<template>
    <main class="app-chat">
        <div class="app-chat__conversation-cnt">
            <div
                class="app-chat__data-source-selector-cnt"
                v-if="!hasSelectedDataSource"
                key="data-source-selector"
            >
                <div class="app-chat__data-source-selector-title">
                    <span class="app-title">Select a data source</span>
                </div>
                <div class="app-chat__data-sources">
                    <app-data-card
                        clickable
                        :icon="Icon.SharePoint"
                        title="SharePoint"
                        description="A web-based collaborative platform integrated with Microsoft 365."
                        @click="handleDataCardClick"
                    />
                    <app-data-card
                        clickable
                        :icon="Icon.OneDrive"
                        title="OneDrive"
                        description="Microsoft's cloud-based personal file hosting and synchronization service."
                        @click="handleDataCardClick"
                    />
                    <app-data-card
                        clickable
                        :icon="Icon.AzureStorage"
                        title="Azure Storage"
                        description="Microsoft's cloud storage solution for various data objects."
                        @click="handleDataCardClick"
                    />
                </div>
            </div>

            <div
                class="app-chat__conversation"
                v-else
                key="conversation"
            >
                <TransitionGroup name="chat-message">
                    <app-chat-message
                        v-for="message in messages"
                        :key="message.id"
                        :agent-type="message.agentType"
                        :own="message.own"
                    />
                </TransitionGroup>
            </div>
        </div>

        <div
            class="app-chat__input-cnt"
            v-if="hasSelectedDataSource"
        >
            <div class="app-chat__input-box">
                <app-input
                    class="app-chat__input"
                    type="text"
                />
                <div class="app-chat__input-actions">
                    <div class="app-chat__send-btn">
                        <app-icon-bubble
                            clickable
                            @click="handleSendBtnClick"
                        >
                            <app-icon size="small">{{ Icon.Send }}</app-icon>
                        </app-icon-bubble>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.app-chat {
    --chat-height: 150px;
    --chat-lateral-padding: 400px;
    --chat-messages-gap: 2rem;

    grid-area: chat;
    background-color: var(--color-white);
    border-radius: 0px 0px var(--border-radius-medium) var(--border-radius-medium);

    display: grid;
    grid-template-rows: 1fr var(--chat-height);
    grid-template-areas:
        'conversation'
        'input';

    overflow: hidden;

    &__conversation-cnt {
        overflow-y: auto;
    }

    &__conversation-cnt,
    &__input-cnt {
        padding-left: var(--chat-lateral-padding);
        padding-right: var(--chat-lateral-padding);
    }

    &__conversation {
        display: flex;
        flex-direction: column;
        row-gap: var(--chat-messages-gap);
    }

    &__input-box {
        border: solid 1px var(--color-dark-blue);
        border-radius: var(--border-radius-large);
        padding: var(--padding-large) var(--padding-medium);
        height: 80%;

        display: flex;
        flex-direction: column;
        row-gap: var(--gap-medium);
    }

    &__input {
        flex: 1;
        max-width: 100%;
    }

    &__input-actions {
        display: flex;
        flex-direction: row-reverse;
    }

    &__data-source-selector-cnt {
        display: flex;
        flex-direction: column;
        row-gap: var(--gap-large);
    }

    &__data-sources {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: var(--gap-medium);
    }
}
</style>
