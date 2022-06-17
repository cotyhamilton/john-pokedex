<script lang="ts">
	import { browser } from "$app/env";
	import type { Pokemon } from "../../types/pokemon";

	export let pokemon: Pokemon[] = [];

	function register(e: MouseEvent) {
		const target = e.target as HTMLInputElement;
		const id = "hisui-" + target.getAttribute("data-hisui-id");
		if (localStorage.getItem(id)) {
			localStorage.removeItem(id);
		} else {
			localStorage.setItem(id, "true");
		}
	}
</script>

<table>
	<thead>
		<th>Registered</th>
		<th>Image</th>
		<th>Hisui Dex</th>
		<th>National Dex</th>
		<th>Name</th>
		<th>Type</th>
		<!-- <th>Location</th> -->
		<th>Evolution</th>
		<!-- <th>Items Dropped</th> -->
	</thead>
	<tbody>
		{#each pokemon as p}
			<tr>
				<td
					><input
						data-hisui-id={p.HisuiDex}
						type="checkbox"
						on:click={register}
						checked={browser && !!localStorage.getItem("hisui-" + p.HisuiDex)}
					/></td
				>
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
				<!-- <td>{p.Location}</td> -->
				<td>{p.Evolution}</td>
				<!-- <td>{p['Items Dropped']}</td> -->
			</tr>
		{/each}
	</tbody>
</table>
