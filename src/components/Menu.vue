<template>
  <v-card
    class="mx-auto"
    max-width="500"
    min-height="200"
    outlined
  >
    <v-list-item >
      <v-list-item-content>
        <div class="overline mb-4">Sistema Bibliotécario</div>
        <v-list-item-title class="headline mb-1">Feito com Spring Boot Java e Vue.js</v-list-item-title>
        <v-list-item-subtitle>
          Equipe:<br/>
          Ícaro Ibernon<br/>
          Eliwelton<br/>
          Vinicíus<br/>
          Edigardo<br/>
          Péricles<br/>
          Daniel
          
          
        </v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="sair">Sair</v-btn>
      <v-btn text @click="clientes">Clientes</v-btn>
      <v-btn text @click="livros">Livros</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
  
</style>

<script>
export default {
  name: 'Menu',
   methods: {
       sair(){
           this.$router.push({ path: '/' })
       },
       clientes(){
           this.$router.push({ path: '/Clientes' })
       },
       livros(){
           this.$router.push({ path: '/Livros' })
       }
   }
}
</script>