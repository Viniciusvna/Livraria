<template>
<div>
  <v-row >
    <v-col v-for="post of posts" :key="post">
    <v-card  max-width="230"  height="192" outlined>
      <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4"><strong>{{post.id}} - {{post.titulo}}</strong></div>
        <v-list-item-subtitle>{{post.autor}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{post.cliente.nome}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="black"
      ></v-list-item-avatar>
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
  created() {
    HTTP.get('livros').then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    adicionar(){
      this.$router.push({ path: '/AddL' })
    },
    voltar(){
      this.$router.push({ path: '/Menu' })
    },
    alterar(id) {
      this.$router.push({ path: "/AltL/"+id });
    },
    deletar(id) {
      this.$router.push({ path: "/DelL/"+id });
    }
  }
}
</script>