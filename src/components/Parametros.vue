<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>

    import { mapMutations } from 'vuex'

export default {
    computed:{
        quantidade:{
            get(){
                return this.$store.state.parametros.quantidade
            },
            set(valor){
                this.setQuantidade(valor)
                //this.$store.commit('setQuantidade',valor)
            }
        },
        preco:{
            get(){
                return this.$store.state.parametros.preco
            },
            set(valor){
                this.setPreco(valor)
                //this.$store.commit('setPreco',valor)
            }
        }
    },
    methods:{
        ...mapMutations('parametros',['setQuantidade','setPreco']),
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
