<script>
// @ts-nocheck

    import { consultations } from "../../stores/patientStore";

    let newPatient;
    let newRoom;
    let newProcedureName;

    function addConsultation() {
        const newConsultation = {
            patient: newPatient,
            room: newRoom,
            procedure: newProcedureName,
            done: false
        }
        consultations.set([...$consultations, newConsultation])
        newPatient = undefined;
        newRoom = undefined;
        newProcedureName = undefined
    }
</script>

<div class="mainApp">
    <h1>Consultas pré</h1>
    <br>
    <form on:submit|preventDefault={addConsultation}>
        <input type="text" placeholder="nome do paciente" bind:value={newPatient}>
        <input type="text" placeholder="quarto" bind:value={newRoom}>
        <input type="text" placeholder="nome do procedimento" bind:value={newProcedureName}>
        <button type="submit">💾</button>
    </form>
    <div class="consultations">
        {#each $consultations as consultation}
            <div class={consultation.done ? 'done': ''}>
                <input type="text" bind:value={consultation.patient} required>
                <input type="text" bind:value={consultation.room} required>
                <input type="text" bind:value={consultation.procedure} required>
                {#if consultation.done}
                    <button on:click={() => consultation.done = !consultation.done}>↩️</button>
                {:else}
                    <button on:click={() => consultation.done = !consultation.done}>✅</button>
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

    button {
        background-color: transparent;
        border: 0px;
    }
    .consultations {
        margin-top: 3rem;
        width: 50rem;
    }
    .consultations input {
        background-color: transparent;
        border: 0px;
        color: white;
        text-align: center;
    }
    .done input {
        color: rgba(128, 128, 128, 0.147);
    }
</style>