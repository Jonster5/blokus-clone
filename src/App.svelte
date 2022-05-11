<script lang="ts">
    import { writable, Writable } from 'svelte/store';
    import Game from '@pages/Game.svelte';
    import Title from '@pages/Title.svelte';
    import { PageState } from '@utils/ui';

    const page: Writable<PageState> = writable(PageState.Title);
</script>

{#if $page === PageState.Title}
    <Title />
{:else if $page === PageState.Game}
    <Game />
{/if}
