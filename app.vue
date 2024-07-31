<script setup lang="ts">
	const layout = "default"
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout :name="layout">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
