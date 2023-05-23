<script>
// @ts-nocheck
    import { patients } from "../stores/patientStore";
    
    let newBox = '';
    const addPatient = () => {
        let newPatient = {
            nome: undefined,
            date: new Date(),
            highlight: false,
            alta: false,
            box: newBox,
            observation: undefined
        }
        patients.set([...$patients, newPatient])
        newBox = undefined;
    }

    
</script>

<div class="mainApp">
    <div class="titleBox">
        <h1>Pacientes na REPAI</h1>
        {$patients.length}/<input type="text" style="background-color: transparent;" value=52>
        <form on:submit|preventDefault={addPatient}>
            <input type="number" placeholder="box" bind:value={newBox} required>
            <button type="submit">+</button>
        </form>
    </div>
    <div class="patientsBlock">
        {#each $patients as patient, index}
            <div class={patient.alta ? 'singlePatient_deAlta' : 'singlePatient'}>
                {index + 1}. <input type="text" placeholder='nome do paciente' bind:value={patient.nome}>
                <input type='text' value={patient.date.toLocaleTimeString()}>
                <input type="text" bind:value={patient.box}>
                <input type="text" bind:value={patient.observation} placeholder="observações">
                {#if patient.alta}
                    <button on:click={() => patient.alta = !patient.alta}>↩️</button>
                {:else}
                    <button on:click={() => patient.alta = !patient.alta}>✅</button>
                {/if}
                <button on:click={() => {
                    let newP = $patients
                    newP = newP.filter((e) => {return e != patient})
                    patients.set(newP)
                    console.log(newP)
                }}>❌</button>
                <hr>
            </div>
        {/each}
    </div>
</div>

<style>
    .mainApp {
        width: 95%;
        margin: auto;
        width: 70rem;
    }

    .patientsBlock {
        margin-top: 3rem;
        color: rgb(136, 136, 136);
    }

    .patientsBlock input {
        background-color: transparent;
        border: 0px;
        color: white;
        text-align: center;
    }

    .singlePatient button {
        background: transparent;
        border: 0px;
        float: right;
    }
    .singlePatient_deAlta button {
        background: transparent;
        border: 0px;
        float: right;
    }

    .singlePatient_deAlta input {
        color: rgba(88, 88, 88, 0.161);
    }

    .titleBox button {
        margin-left: 1rem;
        background-color: transparent;
        color: white;
        padding: 1rem;
        border-radius: 5rem;
        border: solid 1px rgb(205, 205, 205);
    }
    .titleBox button:hover {
        background-color: rgba(120, 120, 120, 0.198);
    }

    .titleBox input {
        width: 5rem;
        background-color: rgba(166, 166, 166, 0.133);
        color: white;
        border: 0px;
        border-radius: 3px;
        padding: 3px;
    }

</style>