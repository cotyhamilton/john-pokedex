<div class="floating">
	<slot />
</div>

<style>
	.floating {
		background-color: white;
		border-radius: 6px;
		box-shadow: 2px 2px 6px #9d9d9d;
		padding: 0.5rem 1rem;
		position: fixed;
		right: 3rem;
		text-align: center;
		top: 3rem;
		z-index: 1000;
	}
</style>
