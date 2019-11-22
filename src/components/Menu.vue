<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Sistema bibliotecário</div>
      </md-card-header>

      <md-card-content>
          Equipe:
          <ul>
              <li>Ícaro Ibernon</li>
              <li>Eliwelton</li>
              <li>Vinicíus</li>
              <li>Edigardo</li>
          </ul>
          Descrição: Sistema simples para manter salvo em um banco de dados clientes e livros que esses clientes possuem.
     </md-card-content>

      <md-card-actions>
        <md-button @click="sair">Sair</md-button>
        <md-button @click="clientes">Clientes</md-button>
        <md-button @click="livros">Livros</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    margin: 20px;
    display: inline-block;
    vertical-align: top;
  }
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