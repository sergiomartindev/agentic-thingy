import AgentType from '../enums/AgentType.enum';
import Icon from '../enums/Icon.enum';
import AgentIconBackgroundColor from '../enums/AgentIconBackgroundColor.enum';
import AgentBackgroundColor from '../enums/AgentBackgroundColor.enum';
import AgentColor from '../enums/AgentColor.enum';
import { computed } from 'vue';

export default function (agentType: AgentType | null) {
    const agentIcon = computed(() => {
        switch (agentType) {
            case AgentType.DataGuru:
                return Icon.DataGuru;
            case AgentType.ModellingChampion:
                return Icon.ModellingChampion;
            case AgentType.ReportingWizard:
                return Icon.ReportingWizard;
            case AgentType.Orchestration:
                return Icon.Orchestration;
            default:
                return null;
        }
    });

    const agentIconColor = computed(() => {
        switch (agentType) {
            case AgentType.DataGuru:
                return AgentColor.DataGuru;
            case AgentType.ModellingChampion:
                return AgentColor.ModellingChampion;
            case AgentType.ReportingWizard:
                return AgentColor.ReportingWizard;
            case AgentType.Orchestration:
                return AgentColor.Orchestration;
            default:
                return null;
        }
    });

    const agentIconBackgroundColor = computed(() => {
        switch (agentType) {
            case AgentType.DataGuru:
                return AgentIconBackgroundColor.DataGuru;
            case AgentType.ModellingChampion:
                return AgentIconBackgroundColor.ModellingChampion;
            case AgentType.ReportingWizard:
                return AgentIconBackgroundColor.ReportingWizard;
            case AgentType.Orchestration:
                return AgentIconBackgroundColor.Orchestration;
            default:
                return null;
        }
    });

    const agentBackgroundColor = computed(() => {
        switch (agentType) {
            case AgentType.DataGuru:
                return AgentBackgroundColor.DataGuru;
            case AgentType.ModellingChampion:
                return AgentBackgroundColor.ModellingChampion;
            case AgentType.ReportingWizard:
                return AgentBackgroundColor.ReportingWizard;
            case AgentType.Orchestration:
                return AgentBackgroundColor.Orchestration;
            default:
                return null;
        }
    });

    const agentName = computed(() => {
        switch (agentType) {
            case AgentType.DataGuru:
                return 'Data Guru';
            case AgentType.ModellingChampion:
                return 'Modellling Champion';
            case AgentType.ReportingWizard:
                return 'Reporting Wizard';
            case AgentType.Orchestration:
                return 'Orchestrator';
            default:
                return null;
        }
    });

    const agentDescription = computed(() => {
        switch (agentType) {
            case AgentType.DataGuru:
                return 'I meticulously gather, process, and analyze extensive market data, detailed property information, and key economic indicators.';
            case AgentType.ModellingChampion:
                return 'I expertly apply advanced statistical and machine learning techniques to construct precise and adaptable valuation models.';
            case AgentType.ReportingWizard:
                return 'I skillfully generate comprehensive, customized reports featuring clear visualizations and insightful analysis.';
            case AgentType.Orchestration:
                return 'I efficiently coordinate the activities of all agents, ensuring a seamless workflow and the best use of available resources.';
            default:
                return null;
        }
    });

    return {
        agentIcon,
        agentIconColor,
        agentIconBackgroundColor,
        agentBackgroundColor,
        agentName,
        agentDescription,
    };
}
