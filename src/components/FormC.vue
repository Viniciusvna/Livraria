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
        <v-card-title class="headline">Adicionar cliente</v-card-title>
               <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
          >
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
        nome:'',
        nameRules: [
      v => !!v || 'Nome é obrigatorio']
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