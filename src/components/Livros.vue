<template>
<div>
  <ul >
    <li>
       <v-card
    v-for="post of posts" :key="post"
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">LIVRO</div>
        <v-list-item-title class="headline mb-1">{{post.titulo}} - {{post.autor}}</v-list-item-title>
        <v-list-item-subtitle>{{post.cliente.nome}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Deletar</v-btn>
      <v-btn text>Alterar</v-btn>
    </v-card-actions>
  </v-card>
    </li>
  </ul>
  <div>
    <v-btn text @click="voltar">Voltar</v-btn>
    <v-btn text >Adicionar</v-btn>
    <FormL/>
  </div>
</div>
</template>


<script>
import {HTTP} from '@/components/call.js';
import FormL from "@/components/FormL.vue";
export default {
  components: {FormL},
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    HTTP.get('livros').then(response => {
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