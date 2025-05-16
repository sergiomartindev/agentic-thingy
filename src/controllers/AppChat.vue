<script setup lang="ts">
import AgentType from '../enums/AgentType.enum';
import AppIcon from '../components/AppIcon.vue';
import AppIconBubble from '../components/AppIconBubble.vue';
import AppInput from '../components/AppInput.vue';
import Icon from '../enums/Icon.enum';
import AppChatMessage from '../components/AppChatMessage.vue';
import AppDataCard from '../components/AppDataCard.vue';
import AppChatTypingMessage from '../components/AppChatTypingMessage.vue';
import { ref, Ref, useTemplateRef } from 'vue';
import Message from '../types/Message.type';

const hasSelectedDataSource: Ref<boolean> = ref(false);
const messages: Ref<Message[]> = ref([]);
const conversationCnt = useTemplateRef('conversation-cnt');
const agentTyping: Ref<AgentType | null> = ref(null);

function addMessage(message: Message): void {
    messages.value.push(message);

    // @ts-ignore
    conversationCnt.value.scrollTo({
        // @ts-ignore
        top: conversationCnt.value.scrollHeight - conversationCnt.value.clientHeight,
        behavior: 'smooth',
    });
}

function handleDataCardClick() {
    hasSelectedDataSource.value = true;

    setTimeout(() => {
        agentTyping.value = null;

        addMessage({
            id: 'user-upload-1',
            content: "I've uploaded property_data.csv and market_trends.xlsx. Please begin the valuation process.",
            own: true,
            files: [
                { id: 'property-data', title: 'property_data.csv' },
                { id: 'market-trends', title: 'market_trends.xlsx' },
            ],
        });

        setTimeout(() => {
            agentTyping.value = AgentType.Orchestration;

            setTimeout(() => {
                agentTyping.value = null;

                addMessage({
                    id: 'orchestration-to-data-guru',
                    content:
                        'Data Guru, the user has provided property_data.csv and market_trends.xlsx. Please ingest and process this data.',
                    agentType: AgentType.Orchestration,
                    own: false,
                });

                setTimeout(() => {
                    agentTyping.value = AgentType.DataGuru;

                    setTimeout(() => {
                        agentTyping.value = null;

                        addMessage({
                            id: 'data-guru-processed',
                            content:
                                'Processing complete. The property data contains sales records with features like size, location, and sale date. The market trends data includes regional price indices and interest rates. Data quality seems good, with minimal missing values.',
                            agentType: AgentType.DataGuru,
                            own: false,
                        });

                        setTimeout(() => {
                            agentTyping.value = AgentType.Orchestration;

                            setTimeout(() => {
                                agentTyping.value = null;

                                addMessage({
                                    id: 'orchestration-to-modelling',
                                    content:
                                        'Modelling Champion, the processed data is ready. Based on the property sales data (including size, location, sale date) and market trends (regional price indices, interest rates), which valuation model(s) do you recommend?',
                                    agentType: AgentType.Orchestration,
                                    own: false,
                                });

                                setTimeout(() => {
                                    agentTyping.value = AgentType.ModellingChampion;

                                    setTimeout(() => {
                                        agentTyping.value = null;

                                        addMessage({
                                            id: 'modelling-recommendation',
                                            content:
                                                'Considering the temporal nature of the sales data and the influence of market factors, I recommend using a Hedonic Regression model to capture feature-based pricing and a Time Series model (like ARIMA) to account for market trends.',
                                            agentType: AgentType.ModellingChampion,
                                            own: false,
                                            links: [
                                                {
                                                    id: 'link-2-id',
                                                    title: 'Capforce opportunity',
                                                    url: '/path/to/valuation_report.pdf',
                                                },
                                            ],
                                        });

                                        setTimeout(() => {
                                            agentTyping.value = AgentType.Orchestration;

                                            setTimeout(() => {
                                                agentTyping.value = null;
                                                addMessage({
                                                    id: 'orchestration-to-modelling-run',
                                                    content:
                                                        'Proceed with running the Hedonic Regression and ARIMA models on the processed data.',
                                                    agentType: AgentType.Orchestration,
                                                    own: false,
                                                });

                                                setTimeout(() => {
                                                    agentTyping.value = AgentType.ModellingChampion;
                                                    setTimeout(() => {
                                                        agentTyping.value = null;
                                                        addMessage({
                                                            id: 'modelling-complete',
                                                            content:
                                                                'Valuation complete. Hedonic Regression yielded an estimated value of €350,000 with a standard error of €15,000. The ARIMA model indicates a market appreciation of 3% year-over-year for comparable properties.',
                                                            agentType: AgentType.ModellingChampion,
                                                            own: false,
                                                        });

                                                        setTimeout(() => {
                                                            agentTyping.value = AgentType.Orchestration;
                                                            setTimeout(() => {
                                                                agentTyping.value = null;
                                                                addMessage({
                                                                    id: 'orchestration-to-reporting',
                                                                    content:
                                                                        'Reporting Wizard, the valuation results are in. Please generate a comprehensive report based on the hedonic regression (€350,000 ± €15,000) and the market trend analysis (3% annual appreciation), considering the initial property sales data and market indices.',
                                                                    agentType: AgentType.Orchestration,
                                                                    own: false,
                                                                });

                                                                setTimeout(() => {
                                                                    agentTyping.value = AgentType.ReportingWizard;
                                                                    setTimeout(() => {
                                                                        agentTyping.value = null;
                                                                        addMessage({
                                                                            id: 'reporting-complete',
                                                                            content:
                                                                                'Report generated. It includes a data summary, methodology explanation (Hedonic Regression and ARIMA), detailed valuation results with confidence intervals, visualizations of price trends, and key insights on market influences.',
                                                                            agentType: AgentType.ReportingWizard,
                                                                            own: false,
                                                                            links: [
                                                                                {
                                                                                    id: 'link-1-id',
                                                                                    title: 'ValuePlus valuation',
                                                                                    url: '/path/to/valuation_report.pdf',
                                                                                },
                                                                            ],
                                                                        });

                                                                        setTimeout(() => {
                                                                            agentTyping.value = AgentType.Orchestration;
                                                                            setTimeout(() => {
                                                                                agentTyping.value = null;

                                                                                addMessage({
                                                                                    id: 'orchestration-to-user-final',
                                                                                    content:
                                                                                        'The valuation report is ready. The estimated property value is €350,000, with market analysis indicating a 3% annual appreciation trend. You can find the full report here: [link to valuation_report.pdf].',
                                                                                    agentType: AgentType.Orchestration,
                                                                                    own: false,
                                                                                });
                                                                            }, 1800);
                                                                        }, 300);
                                                                    }, 1200);
                                                                }, 300);
                                                            }, 2000);
                                                        }, 300);
                                                    }, 2300);
                                                }, 300);
                                            }, 1600);
                                        }, 300);
                                    }, 800);
                                }, 300);
                            }, 2500);
                        }, 300);
                    }, 1500);
                }, 300);
            }, 2500);
        }, 300);
    }, 200);
}

function handleSendBtnClick() {
    alert('TBD');
}
</script>

<template>
    <main class="app-chat">
        <div
            class="app-chat__conversation-cnt"
            ref="conversation-cnt"
        >
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
                        :content="message.content"
                        :files="message.files"
                        :links="message.links"
                    />
                </TransitionGroup>

                <app-chat-typing-message
                    v-if="agentTyping"
                    :agent-type="agentTyping"
                />
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
                            <app-icon>{{ Icon.Send }}</app-icon>
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
    --chat-lateral-padding: 350px;

    @media (max-width: var(--breakpoint-small)) {
        & {
            --chat-lateral-padding: 50px;
        }
    }

    @media (max-width: var(--breakpoint-medium)) {
        & {
            --chat-lateral-padding: 100px;
        }
    }

    & {
        --chat-messages-gap: 2rem;
        --chat-cnt-padding-bottom: 300px;

        grid-area: chat;
        background-color: var(--color-white);
        border-radius: 0px 0px var(--border-radius-medium) var(--border-radius-medium);

        display: grid;
        grid-template-rows: 1fr var(--chat-height);
        grid-template-areas:
            'conversation'
            'input';

        overflow: hidden;
    }

    &__conversation-cnt {
        overflow-y: auto;
        padding-bottom: var(--chat-cnt-padding-bottom);
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
        grid-template-columns: repeat(3, auto-fit);
        gap: var(--gap-medium);
    }
}
</style>
