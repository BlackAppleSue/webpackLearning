const state = {
    count: 0
};

const actions = {
    addOne: function ({ commit, state }, {count=0}) {
        console.log(count)
        commit('addOne',count)
    }
}

const mutations = {
    addOne: function (state,count) {
        state.count++
        console.log(count)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}