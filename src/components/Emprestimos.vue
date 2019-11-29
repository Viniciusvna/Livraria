<template>
<div>
  <v-row >
    <v-col v-for="post of posts" :key="post">
       <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">EMPRESTIMOS</div>
        <v-list-item-title class="headline mb-1">{{post.nome}}</v-list-item-title>
        <v-list-item-subtitle>{{post.livros}}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-avatar
        tile
        size="80"
        color="grey"
    ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Deletar</v-btn>
      <v-btn text>Alterar</v-btn>
    </v-card-actions>
  </v-card>
   </v-col>
  </v-row>
  <div>
    <v-btn text @click="voltar">Voltar</v-btn>
    <v-btn text >Adicionar</v-btn>
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

  created() {
    HTTP.get('exibir').then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    voltar(){
      this.$router.push({ path: '/Menu' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
