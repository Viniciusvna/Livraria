<template>
<v-card>
    <v-card-title class="headline">Deseja mesmo deletar Cliente:<br>{{id}}-{{post.nome}}</v-card-title>
    
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
      post:'',
      id: this.$route.params.id
    };
  },
  created() {
    HTTP.get('cliente/'+this.$route.params.id).then(response => {
      this.post = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deletar() {
      HTTP.delete('cliente', { data:  this.post  });
      this.$router.push({ path: "/Clientes" });
    },
    voltar() {
      this.$router.push({ path: "/Clientes" });
    }
  }
}
</script>
