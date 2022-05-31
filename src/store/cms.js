export const state = () => ({
	config: [],
	routes: [],
	endpoints: [],
	labels: [],
	menus: [],
	rotators: []
})

export const mutations = {
	SET_CONFIG(state, data) {
		state.config = data;
	},
	SET_ROUTES(state, data) {
		state.routes = data;
	},
	SET_ENDPOINTS(state, data) {
		state.endpoints = data;
	},
	SET_LABELS(state, data) {
		state.labels = data;
	},
	SET_MENUS(state, data) {
		state.menus = data;
	},
	SET_ROTATORS(state, data) {
		state.rotators = data;
	}
}

export const actions = {
	async fetchData({commit}, config) {
		try {
			commit('SET_CONFIG', config);

			const endpoints = await this.$axios.$get(`${config.apiUrl}/endpoints`)
				.then(res => {
					commit('SET_ENDPOINTS', res.data);
					return res.data
				})
				.catch(err => {throw 'Fetch Endpoints -> ' + err});

			await this.$axios.$get(`${config.apiUrl}${endpoints['_get_route']}`)
				.then(res => commit('SET_ROUTES', res))
				.catch(err => {throw 'Fetch Routes -> ' + err});

			await this.$axios.$get(`${config.apiUrl}/${config.apiVersion}${endpoints['_get_label']}`)
				.then(res => commit('SET_LABELS', res.data))
				.catch(err => {throw 'Fetch Label -> ' + err});

			await this.$axios.$get(`${config.apiUrl}/${config.apiVersion}${endpoints['_get_menu']}`)
				.then(res => commit('SET_MENUS', res.data))
				.catch(err => {throw 'Fetch Menu -> ' + err});

			await this.$axios.$get(`${config.apiUrl}/${config.apiVersion}${endpoints['_get_rotator']}`)
				.then(res => commit('SET_ROTATORS', res.data))
				.catch(err => {throw 'Fetch Rotator -> ' + err});

		} catch(err) {
			throw 'CMS Store fetchData -> ' + err;
		}
	}
}

export const getters = {
	getRoutes: (state) => {
		return (state.routes) ? state.routes : console.log("Store: Routes not found");
	},
	getEndpoints: (state) => {
		return (state.endpoints) ? state.endpoints : console.log("Store: Endpoints not found");
	},
	getLabel: (state) => (code) => {
		const label = state.labels.find(el => el.code == code);
		return (label) ? label : console.log('Store: Label "' + code + '" not found');
	},
	getMenu: (state) => (code) => {
		const menu = state.menus.find(el => el.code == code);
		return (menu) ? menu.items : console.log('Store: Menu "' + code + '" not found');
	},
	getRotator: (state) => (code) => {
		const rotator = state.rotators.find(el => el.code == code);
		return (rotator) ? rotator.items : console.log('Store: Rotator "' + code + '" not found');
	}
}