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
            <v-btn text >Deletar</v-btn>
            <v-btn text >Alterar</v-btn>
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
      alt: false,
      del: false,
      posts: [],
      errors: []
    }
  },

  created() {
    HTTP.get('clientes').then(response => {
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
