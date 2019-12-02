<template>
      <v-card >
        <v-card-title class="headline">Adicionar Livro</v-card-title>
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
        <p>{{select}}</p>
      </v-card>
</template>

<script>
import {HTTP} from '@/components/call.js';

  export default {
    data () {
      return {
        select: null,
        valid: '',
        posts: [],
        nomes: [],
        ids: [],
        errors: [],
        titulo:'',
        autor:'',
        cliente:'',
        nameRules: [
      v => !!v || 'Campo é obrigatorio!']
      }
    },
    created() {
    HTTP.get('livros').then(responseL => {
      this.posts = responseL.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    ,
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
        enviar(){
            HTTP.post('livro', {id: '0',autor: this.autor,cliente:{id:this.select},titulo: this.titulo});
            this.$router.push({ path: '/Livros' });
        },
        voltar(){
      this.$router.push({ path: '/Livros' });
    }
    }
  }
</script>

<style>
.borda{
  background-color: white;
  max-height: 96px;
}
</style>