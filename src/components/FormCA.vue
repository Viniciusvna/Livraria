<template>
<v-card>
    <v-card-title class="headline">Alterar Cliente - {{id}}</v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="nome"
              :rules="nameRules"
              label="Nome"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text @click="voltar">
        Cancelar
      </v-btn>

      <v-btn text @click="enviar">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { HTTP } from "@/components/call.js";
export default {
  data() {
    return {
      nome: '',
      id: this.$route.params.id,
      nameRules: [v => !!v || "Nome é obrigatorio"]
    };
  },
  created() {
    HTTP.get('cliente/'+this.$route.params.id).then(response => {
      this.post = response.data
      this.nome = this.post.nome
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    enviar() {
      HTTP.put("cliente", { id: this.id , nome: this.nome });
      this.$router.push({ path: "/Clientes" });
    },
    voltar() {
      this.$router.push({ path: "/Clientes" });
    }
  }
}
</script>
