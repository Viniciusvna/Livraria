<template>
      <v-card>
        <v-card-title class="headline">Alterar Livro - {{id}}</v-card-title>
               <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="titulo"
              :rules="nameRules"
              label="Titulo"
              required
            ></v-text-field>
          </v-col>
        </v-row>
          <v-col>
            <v-text-field
              v-model="autor"
              :rules="nameRules"
              label="Autor"
              required
            ></v-text-field>
          </v-col>
        <v-row>
          <v-col>
            <v-app class="borda">
              <v-content class="borda">
                <v-container>
            <v-select
                v-model="select"
                :items="ids"
                :rules="[v => !!v || 'Campo Obrigatório']"
                label="Cliente"
                required
              ></v-select>
              </v-container>
                </v-content>
            </v-app>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="voltar"
          >
            Cancelar
          </v-btn>

          <v-btn
            text
            @click="enviar"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
import { HTTP } from "@/components/call.js";
export default {
  data() {
    return {
      post: '',
      titulo: '',
      autor: '',
      ids: '',
      id: this.$route.params.id,
      select: '',
      nameRules: [v => !!v || "Nome é obrigatorio"]
    };
  },
  created() {
    HTTP.get('livro/'+this.$route.params.id).then(response => {
      this.post = response.data
      this.titulo = this.post.titulo
      this.autor = this.post.autor
      this.select = this.post.cliente.id
    })
    .catch(e => {
      this.errors.push(e)
    }),
    HTTP.get('clientes').then(responseC => {
      this.nomes = responseC.data
      const myData = this.nomes
      const parsedData = myData.map(d => d.id)
      this.ids = parsedData
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    enviar() {
      HTTP.put('livro', {id: this.id ,autor: this.autor,cliente:{id:this.select},titulo: this.titulo});
            this.$router.push({ path: '/Livros' });
    },
    voltar() {
      this.$router.push({ path: "/Livros" });
    }
  }
}
</script>

<style  scoped>
.borda{
  background-color: white;
  max-height: 96px;
}
</style>
