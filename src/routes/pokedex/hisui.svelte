<script lang="ts">
	import type { Pokemon } from "$lib/types/pokemon";
	import { hisuiDexStore, hisuiCountStore } from "$lib/stores/hisui";
	import Floating from "$lib/components/Floating.svelte";

	export let pokemon: Pokemon[] = [];
</script>

<Floating>
	<p>{`${$hisuiCountStore} / ${pokemon.length}`}</p>
</Floating>

<table>
	<thead>
		<th>Registered</th>
		<th>Image</th>
		<th>Hisui Dex</th>
		<th>National Dex</th>
		<th>Name</th>
		<th>Type</th>
		<th>Location</th>
		<th>Evolution</th>
		<!-- <th>Items Dropped</th> -->
	</thead>
	<tbody>
		{#each pokemon as p}
			<tr>
				<td><input type="checkbox" bind:checked={$hisuiDexStore[p.HisuiDex]} /></td>
				<td
					><img
						src={`https://raw.githubusercontent.com/cotyhamilton/pokemon/master/img/detail/${p.NationalDex}.png`}
						alt={p.Pokemon}
						width="100"
					/></td
				>
				<td>{p.HisuiDex}</td>
				<td>{p.NationalDex}</td>
				<td>{p.Pokemon}</td>
				<td>{p.Type}</td>
				<td>{p.Location}</td>
				<td>{p.Evolution}</td>
				<!-- <td>{p['Items Dropped']}</td> -->
			</tr>
		{/each}
	</tbody>
</table>
