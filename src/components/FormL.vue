<template>
  <v-app max-height="36px">
    <v-btn
        text
      @click="dialog = true"
    >
      Adicionar
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
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
            <v-text-field
              v-model="cliente"
              :rules="nameRules"
              label="Cliente"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="dialog = false"
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
    </v-dialog>
  </v-app>
</template>

<script>
import {HTTP} from '@/components/call.js';
  export default {
    data () {
      return {
        dialog: false,
        titulo:'',
        autor:'',
        cliente:'',
        nameRules: [
      v => !!v || 'Campo é obrigatorio!']
      }
    },
    methods: {
        enviar(){
            HTTP.post('cliente', {id: '0',nome: this.nome});
            this.dialog = false;
        }
    }
  }
</script>