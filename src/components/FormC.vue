<template>
  <v-card>
    <v-card-title class="headline">Adicionar cliente</v-card-title>
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
      nome: "",
      nameRules: [v => !!v || "Nome é obrigatorio"]
    };
  },
  //metodo para fazer o post do cliente
  methods: {
    enviar() {
      HTTP.post("cliente", { id: "0", nome: this.nome });
      this.$router.push({ path: "/Clientes" });
    },
    voltar() {
      this.$router.push({ path: "/Clientes" });
    }
  }
};
</script>
