<template>
<div>
  <p>{{response}}</p>
  <ul style="list-style-type:none">
    <li >
      <md-card v-for="post of posts" :key="post">
        <md-card-header>
          <div class="md-title"><p><strong>{{post.nome}}</strong></p></div>
        </md-card-header>
        <md-card-content><p>{{post.body}}</p></md-card-content>
        <md-card-actions>
          <md-button >Alterar</md-button>
          <md-button>Deletar</md-button>
        </md-card-actions>
      </md-card>
    </li>
  </ul>
  <div>
    <md-button class="md-raised" @click="voltar">Voltar</md-button>
    <md-button class="md-raised">Adicionar</md-button>
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
    HTTP.get('api/exibir').then(response => {
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
  .md-card {
    width: 400px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
