<template>
<v-card>
    <v-card-title class="headline">Deseja mesmo deletar Cliente:<br>
    {{id}}-{{post.nome}}<br> Todos os livros ligados a esse cliente precisam ser apagados antes de deletar o cliente!
    </v-card-title>
    
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text @click="voltar">
        Cancelar
      </v-btn>

      <v-btn text @click="deletar">Confirmar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { HTTP } from "@/components/call.js";
export default {
  data() {
    return {
      livros:'',
      post:'',
      di:'',
      item:'',
      id: this.$route.params.id
    };
  },
  created() {
    HTTP.get('cliente/'+this.$route.params.id).then(response => {
      this.post = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }),
    //manipulação de dados para ver se o cliente ainda esta ligado a livros
    HTTP.get('livros').then(responseL => {
      this.di = parseInt(this.$route.params.id);
      const myData = responseL.data
      var temp = myData.map(x => [x.cliente.id , x.id]);
      temp = temp.filter(d => d[0]===this.di);
      this.livros = temp.map(d => d[1]);
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  //deleta apenas se não tiver livros no nome do cliente
  methods: {
    deletar() {
      if(this.livros.length == 0){
      HTTP.delete('cliente', { data:  this.post  });
      this.$router.push({ path: "/Clientes" });
      }
    },
    voltar() {
      this.$router.push({ path: "/Clientes" });
    }
  }
}
</script>
