import { writable } from "svelte/store";

export let patients = writable([])
export let reservoir = writable([])
export let consultations = writable([])