<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import userAvatar from '../assets/images/user_avatar.jpg';
import AppUserAvatar from '../components/AppUserAvatar.vue';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppAgentCard from '../components/AppAgentCard.vue';
import AppIcon from '../components/AppIcon.vue';
import Icon from '../enums/Icon.enum';
import AgentBackgroundColor from '../enums/AgentBackgroundColor.enum';
import AgentColor from '../enums/AgentColor.enum';
import { useTemplateRef } from 'vue';

const agentsMenu = useTemplateRef('agents-menu');

function handleAgentsIconBubbleClick() {
    agentsMenu.value.open = !agentsMenu.value.open;
}
</script>

<template>
    <header class="app-header">
        <div class="app-header__title">
            <!-- <span class="app-subtitle">Valuation Assistant</span> -->
        </div>
        <div class="app-header__actions">
            <span style="position: relative">
                <app-icon-bubble
                    id="agents-menu-activator"
                    clickable
                    @click="handleAgentsIconBubbleClick"
                >
                    <app-icon>{{ Icon.Agents }}</app-icon>
                </app-icon-bubble>

                <md-menu
                    id="agents-menu-content"
                    anchor="agents-menu-activator"
                    ref="agents-menu"
                    anchor-corner="end-start"
                >
                    <div class="app-header__agents-menu-agents-menu-cnt">
                        <div class="app-header__agents-menu-agents">
                            <app-agent-card :agent-type="AgentType.DataGuru" />
                            <app-agent-card :agent-type="AgentType.ModellingChampion" />
                            <app-agent-card :agent-type="AgentType.ReportingWizard" />
                            <app-agent-card :agent-type="AgentType.Orchestration" />
                        </div>
                        <div class="app-header__agents-menu-actions">
                            <a
                                href="#"
                                class="app-text app-text--highlighted"
                            >
                                Add more agents
                            </a>
                        </div>
                    </div>
                </md-menu>
            </span>
        </div>
        <div class="app-header__avatar">
            <app-user-avatar :image-url="userAvatar" />
        </div>
    </header>
</template>

<style scoped lang="scss">
.app-header {
    grid-area: header;

    padding: var(--padding-medium) var(--padding-large);

    background-color: var(--color-white);

    border-radius: var(--border-radius-medium) var(--border-radius-medium) 0px 0px;

    display: flex;
    align-items: center;
    column-gap: var(--gap-large);

    &__title {
        flex: 1;
    }

    &__agents-menu-agents-menu-cnt {
        display: flex;
        flex-direction: column;
        row-gap: var(--gap-large);
        padding: 0px var(--padding-medium);
    }

    &__agents-menu-agents {
        // display: flex;
        // flex-direction: column;
        // row-gap: var(--gap-medium);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: var(--gap-medium);
    }

    &__agents-menu-actions {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
