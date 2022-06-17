import pokemon from "../../lib/data/pokemon.json";

export async function get() {
	return {
		body: { pokemon }
	};
}
