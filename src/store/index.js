import Vue from 'vue'
import Vuex from 'vuex'

import weather from './modules/weather'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	// state:{
	// 	books: []
	// },

	// mutations:{
	// 	SET_BOOK_LIST(state, { books }) {
	// 		state.books = books;
	// 	}
	// },

	// actions:{
	// 	loadBookList: ({ commit }) => {
	// 		Vue.http.get('http://fakerestapi.azurewebsites.net/api/Books').then(response => {
	// 			commit('SET_BOOK_LIST', { books: response.body })
	// 		}, response => {
	// 			// error callback
	// 		});
	// 	}
	// },

	// getters:{
	// 	allBooks: state => state.books,
	// 	searchByTitle: (state) => (title) => {
	// 		if(!title.length) { return state.books; }
	// 		return state.books.filter(x => x.Title.toLowerCase().indexOf(title.toLowerCase()) > -1);
	// 	}
	// },

	modules:{
		weather
	}
})
