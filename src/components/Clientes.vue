<template>
<div>
  <v-row >
    <v-col v-for="post of posts" :key="post">
      <v-card  max-width="180" outlined>

          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">CLIENTE - {{post.id}}</div>
              <v-list-item-title class="headline mb-1">{{post.nome}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn text @click="deletar(post.id)">Deletar</v-btn>
            <v-btn text @click="alterar(post.id)">Alterar</v-btn>
          </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <div>
    <v-row>
      <v-btn text @click="voltar">Voltar</v-btn>
      <v-btn text @click="adicionar">Adicionar</v-btn>
    </v-row>
    </div>
</div>
</template>


<script>
import {HTTP} from '@/components/call.js';
export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  //procedimentos feitos antes do carregar da pagina
  created() {
    HTTP.get('clientes').then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  // Funcões acionadas por botões e que são as rotas da aplicação
  methods: {
    voltar(){
      this.$router.push({ path: '/Menu' })
    },
    adicionar(){
      this.$router.push({ path: '/AddC' })
    },
    alterar(id) {
      this.$router.push({ path: "/AltC/"+id });
    },
    deletar(id) {
      this.$router.push({ path: "/DelC/"+id });
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
