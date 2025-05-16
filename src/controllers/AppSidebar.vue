<script setup lang="ts">
import AppSidebarItem from '../components/AppSidebarItem.vue';
import AppSidebarValuation from '../components/AppSidebarValuation.vue';
import Icon from '../enums/Icon.enum';
import jllLogo from '../assets/images/logo.svg';
</script>

<template>
    <nav class="app-sidebar">
        <div class="app-sidebar__logo-cnt">
            <img
                class="app-sidebar__jll-logo"
                :src="jllLogo"
                alt="JLL Logo"
            />
        </div>

        <div class="app-sidebar__actions">
            <app-sidebar-item
                :icon="Icon.Add"
                label="New valuation"
            />
        </div>

        <div class="app-sidebar__valuations">
            <div class="app-sidebar__title">
                <span class="app-text app-text--highlighted">Recent valuations</span>
            </div>
            <app-sidebar-valuation label="AB Sagax" />
        </div>

        <div class="app-sidebar__tools">
            <app-sidebar-item
                :icon="Icon.Settings"
                label="Settings"
            />
        </div>
    </nav>
</template>

<style scoped lang="scss">
.app-sidebar {
    grid-area: sidebar;

    display: flex;
    flex-direction: column;
    row-gap: var(--gap-large);

    padding: var(--padding-large) var(--padding-medium);
    background-color: var(--color-light-blue);

    &__logo-cnt {
        flex: 0 0 50px;
    }

    &__logo-cnt,
    &__jll-logo {
        max-width: 70px;
    }

    &__valuations {
        flex: 1;

        display: flex;
        flex-direction: column;
        row-gap: var(--gap-large);
    }
}
</style>
