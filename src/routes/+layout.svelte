<script>
    /**
     * @param {BeforeUnloadEvent & { currentTarget: EventTarget & Window; }} event
     */
    function beforeunload(event) {
        event.preventDefault();
        return event.returnValue = '';
    }
</script>

<nav>
    <a href="/">início</a>
    <a href="/reservas">reservas</a>
    <a href="/consultas">consultas pré</a>
    <hr>
</nav>

<slot/>
<svelte:window on:beforeunload={(event) => beforeunload(event)}/>
<style>
    :global(body) {
        background-color: rgb(25, 25, 25);
        color: rgb(245, 255, 207);
    }

    nav {
        padding: 1rem;
        text-align: center;
    }

    nav a {
        margin-left: 1rem;
    }
</style>