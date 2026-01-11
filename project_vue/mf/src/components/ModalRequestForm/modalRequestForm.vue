<template>
	<modalWindow :is-open="open">
		<div class="modalOverlay">
			<div class="modalCard">
				<div class="modalHeader">
					<h2>Booking request</h2>

					<div class="modalChosenLocation">
						<p>{{ hotel?.name }}</p>
						<p>{{ hotel?.location }}</p>

						<div class="inputOverview">
							<p v-if = "form.name?.trim() || form.famName?.trim()">
								For: <em>{{form.name}} {{form.famName}}</em>
							</p>
							<p v-if = "form.email?.trim()">
								E-Mail: <em>{{form.email}}</em>
							</p>
							<p v-if = "form.nationality?.trim()">
								From: <em>{{form.nationality}}</em>
							</p>
							<p v-if = "form.arrDate?.trim() && form.depDate?.trim()">
								From: <em>{{form.arrDate}}</em><br/>
								Till: <em>{{form.depDate}}</em>
							</p>
						</div>
					</div>
				</div>

				<form class="modalForm" @submit.prevent="handleSubmit">
					<div class="field">
						<label for="name">Name</label>
						<input 
							id="name" 
							v-model="form.name" 
						/>
					</div>

					<div class="field">
						<label for="famName">Family Name</label>
						<input 
							id="famName" 
							v-model="form.famName" 
						/>
					</div>

					<div class="field">
						<label for="email">E-Mail</label>
						<input 
							type="email" 
							id="email" 
							pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" 
							v-model="form.email" 
						/>
					</div>

					<div class="field">
						<label for="nationality">Country</label>
						<input 
							id="nationality" 
							v-model="form.nationality" 
						/>
					</div>

					<div class="grid2">
						<div class="field">
							<label for="start">Arrival date</label>
							<input 
								type="date" 
								id="start" 
								:min="today"
								v-model="form.arrDate" 
							/>
						</div>
						<div class="field">
							<label for="end">Departure date</label>
							<input 
								type="date" 
								id="end"
								max="2026-12-31"
								:min="form.arrDate || today"
								v-model="form.depDate" 
							/>
						</div>
					</div>

					<div class="modalActions">
						<button 
							class="btnGhost" 
							type="button" 
							@click="emit('update:open', false)">
						Cancel
						</button>

						<button 
							class="btnPrimary" 
							type="submit">
						Send Request
						</button>
					</div>
				</form>
			</div>
		</div>
	</modalWindow>
</template>

<script setup>
import modalWindow from "../modalWindow/modalWindow.vue"

const form = defineModel(); 

const props = defineProps({
  	open: Boolean,
  	hotel: Object,
})

const emit = defineEmits(["update:open", "submitted"]);

const today = new Date().toISOString().slice(0, 10);

function handleSubmit() {
	emit("submitted", { ...form.value, hotel: props.hotel })
  	emit("update:open", false);
}
</script>
