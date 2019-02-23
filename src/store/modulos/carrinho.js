export default {
    namespaced: true,
    state:{
        produtos: [],
    },
    getters:{
        valorTotal(state, getters, rootState){
            return state.produtos
                .map( p => p.quantidade * p.preco)
                .reduce( (total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, produto){
            state.produtos.push(produto)
        }
    },
    actions:{
        adicionarProduto(context, produto, rootState){
            setTimeout(() => {
                /*
                Idica qual mutation vai manipular
                 */
                context.commit('adicionarProduto',produto)
            },1000)
        }
    }
}