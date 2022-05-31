
export const state = () => ({
	data: ''
})

export const mutations = {
	setData(state, data) {
		state.data = data;
	}
}

export const actions = {
	async nuxtServerInit({dispatch, commit}, context) {
		await dispatch('cms/fetchData', context.$config);
		await dispatch('webshop/fetchData', context.$config);
	}
}

export const getters = {
	getData: (state) => {
		return state.data;
	}
}