<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Login</h5>
              <form @submit.prevent="verificarCampos">
                <div class="mb-3">
                  <label for="cpf" class="form-label">CPF</label>
                  <input type="text" class="form-control" id="cpf" v-model="cpf" placeholder="Digite seu CPF" v-mask="'###.###.###-##'">
                </div>
                <div class="mb-3">
                  <label for="senha" class="form-label">Senha</label>
                  <input type="password" class="form-control" id="senha" v-model="senha" placeholder="Digite sua senha">
                </div>
                <button type="submit" class="btn btn-primary">Entrar</button>
              </form>
              <div class="mt-3 text-center">
                <a href="#" @click="recuperacaoSenha">Esqueceu sua senha?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalAviso
      :id="'camposVazios'"
      :message="message"
    />

    <ModalAviso
      :id="'recSenha'"
      :message="message"
    />

</template>
  
<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Modal } from 'bootstrap';
    import VueMask from 'v-mask';
    import ModalAviso from "@/components/ModalAvisoComponent.vue";
  
    export default {

        components: {
            ModalAviso
        },

        data() {
            return {
                cpf: '',
                senha: '',

                message: ''
            };
        },

        methods: {
            logar() {
                this.$router.push('/');
            },

            verificarCampos() {
                if (this.cpf && this.senha) {
                  this.logar();
                } else {
                  this.message = "Por favor, preencha todos os campos!";
                  let modal = new Modal(document.getElementById("camposVazios"));
                  modal.show();
                }
            },

            recuperacaoSenha(){
              this.message = "Um link para criação de uma nova senha foi enviado para você por e-mail.";
              let modal = new Modal(document.getElementById("recSenha"));
              modal.show();
            }
        },

        directives: {
            mask: VueMask.directive
        }
    }
</script>
  
<style>

</style>
  