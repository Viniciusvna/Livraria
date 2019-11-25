<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login - Sistema Bliblotecário</v-toolbar-title>
                <v-spacer />
                
              </v-toolbar>
              <v-card-text>
                <v-form
                ref="form"
                >
                  <v-text-field
                    v-model="user"
                    label="Usuário"
                    name="login"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="auth" >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
    data: () => ({
      user: '',
      password: '',
      resul: ''
    }),

    methods: {
      auth(){
        if(this.user == "admin" && this.password == "quero10"){
          this.$router.push({ path: '/Menu' })
        }else{
          this.user = "Dados Errados"
        }
      }
    }
}
</script>