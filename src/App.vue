<template>
	<div id="app">
		<div class="phone-viewport">
			<md-toolbar>
				<md-button 
					class="md-icon-button" 
					@click.native="toggleLeftSidenav">
					<md-icon>menu</md-icon>
				</md-button>
				<h2 class="md-title">Prognoznik</h2>
			</md-toolbar>
			<md-sidenav 
				ref="leftSidenav"
				class="md-left">
				<md-toolbar class="md-small">
					<div class="md-toolbar-container">
						<h3 class="md-title">Навигация</h3>
					</div>
				</md-toolbar>
				<md-list>
					<md-list-item 
						v-for="item in menu" 
						:key="item.state"
						@click="goToLink(item.link)">
						<md-ink-ripple />
						<md-icon>{{ item.icon }}</md-icon>
						<span>{{ item.title }}</span>
					</md-list-item>
				</md-list>
			</md-sidenav>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			menu: [
				{
					icon: "home",
					title: "Home",
					state: "home",
					link: 'home'
				},
				{
					icon: "check",
					title: "Saved",
					state: "saved",
					link: 'saved'
				}
			]
		};
	},
	methods: {
		toggleLeftSidenav() {
			this.$refs.leftSidenav.toggle();
		},

		goToLink(link) {
			this.$refs.leftSidenav.toggle();
			this.$router.push({ name: link })
		}
	}
};
</script>

<style>
#app {
	text-align: center;
	color: #2c3e50;
}
</style>
