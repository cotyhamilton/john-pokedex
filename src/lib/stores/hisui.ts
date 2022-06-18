import { browser } from "$app/env";
import { writable, derived } from "svelte/store";

// get store from local storage
const stored = browser && localStorage.getItem("hisui");

// set initial store value
export const hisuiDexStore = writable(stored ? JSON.parse(stored) : {});

// update local storage on store update
browser && hisuiDexStore.subscribe((value) => localStorage.setItem("hisui", JSON.stringify(value)));

// derive count on dex update
export const hisuiCountStore = derived(hisuiDexStore, ($dex) => {
	let count = 0;
	for (const pokemon in $dex) {
		if ($dex[pokemon]) {
			count++;
		}
	}
	return count;
});
