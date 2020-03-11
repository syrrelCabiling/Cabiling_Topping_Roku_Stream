export default {
	template: `
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="user-message">{{ message }}</h1>
			</div>
		</div>
	</div>
	`,

	created: function () {

	},

	data() {
		return {
			message: `Who's Using Roku?`,

			userList: []
		}
	}
}