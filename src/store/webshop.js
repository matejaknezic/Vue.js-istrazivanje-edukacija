export const state = () => ({
	cartItems: [],
	totals: {}
})

export const mutations = {
	SET_CART_ITEMS(state, data) {
		state.cartItems = data.items;
		state.totals = data.totals;
	}
}

export const actions = {
	async fetchData({rootState, commit}) {
		try {
			const config = rootState.cms.config;
			const cartEndpoint = rootState.cms.endpoints['_get_cart'];
			const cartData = await this.$axios.$get(`${config.apiUrl}/${config.apiVersion}${cartEndpoint}`);

			const data = {
				items: cartData.data.lines,
				totals: cartData.data.total
			}
			console.log('cart data fetched');
			commit('SET_CART_ITEMS', data);
		} catch (err) {
			throw 'Webshop Store fetchData -> ' + err;
		}
	},
	updateQty({dispatch}, payload) {
		console.log('Update qty ' + payload.shopping_cart_code);
		dispatch('fetchData');
	},
	removeProduct({dispatch}, payload) {
		console.log('Removed product ' + payload.shopping_cart_code);
		dispatch('fetchData');
	}
}

export const getters = {
	getCartItems: (state) => {
		return state.cartItems;
	},
	getCartTotals: (state) => {
		return state.totals;
	},
	getCartCounter: (state) => {
		return state.cartItemsCounter;
	}
}