<script>
// @ts-nocheck

    import { reservoir } from "../../stores/patientStore";
    let newPatient;
    let newComponent;
    let newRoom;

    function addReservoir() {
        let newReservoir = 
        {
            patient: newPatient,
            component: newComponent,
            room: newRoom,
            done: false
        }
        reservoir.set([...$reservoir, newReservoir])
        newPatient = undefined;
        newComponent = undefined;
        newRoom = undefined;
    }
    

</script>


<div class="mainApp">
    <h1>Reservas</h1>
    <br>
    <form on:submit|preventDefault={addReservoir}>
        <input type="text" placeholder="nome do paciente" bind:value={newPatient} required>
        <input type="text" placeholder="componente" bind:value={newComponent} required>
        <input type="text" placeholder="quarto" bind:value={newRoom} required>
        <button type="submit">💾</button>
    </form>
    <div class="reservations">
        {#each $reservoir as reservation, index}
             <div class={reservation.done ? 'done': ''}>
                {index+1}. 
                <input type="text" bind:value={reservation.patient}>
                <input type="text" bind:value={reservation.room}>
                <input type="text" bind:value={reservation.component}>
                {#if reservation.done}
                    <button on:click={() => reservation.done = !reservation.done}>↩️</button>
                {:else}
                    <button on:click={() => reservation.done = !reservation.done}>✅</button>
                {/if}
             </div>
             <hr>
        {/each}
    </div>
</div>

<style>
    .mainApp {
        width: 95%;
        margin: auto;
        width: 70rem;
    }
    input {
        text-align: center;
    }
    button {
        background-color: transparent;
        border: 0px;
    }
    .reservations {
        margin-top: 3rem;
        width: 50rem;
    }
    .reservations input {
        background-color: transparent;
        border: 0px;
        color: white;
    }
    .done input{
        color: rgba(128, 128, 128, 0.125);
    }
</style>