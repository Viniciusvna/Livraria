<template>
  <v-app>
      <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    data.app>
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Adicionar</v-card-title>

        <v-card-text>
           <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nome"
            required
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="postar"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-app>
</template>

<script>
import {HTTP} from '@/components/call.js';

  export default {
    data () {
      return {
        name: "",
        dialog: false,
        nameRules: [
        v => !!v || 'Nome obrigatório']
      }
    },
    methods: {
      postar(){
        if(this.name.length > 0){
          this.dialog = false
          HTTP.post('cliente',{id: 0,nome: this.name})
        }
      }
    }
  }

</script> 