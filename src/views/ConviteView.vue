<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Convite de Participante</h5>
              <form @submit.prevent="verificarCampos">
                <div class="mb-3">
                  <label for="cpf" class="form-label">CPF do Convidado</label>
                  <input type="text" class="form-control" id="cpf" v-model="cpf" placeholder="Digite o CPF"  v-mask="'###.###.###-##'">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">E-mail do Convidado</label>
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Digite o e-mail">
                </div>
                <button type="submit" class="btn btn-primary">Enviar Convite</button>
                <p v-if="conviteEnviado" class="mt-3 text-success">Convite enviado com sucesso!</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalAviso
      :id="'camposVazios'"
      :message="message"
    />
</template>
  
<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Modal } from 'bootstrap';
  import VueMask from 'v-mask';
  import ModalAviso from "@/components/ModalAvisoComponent.vue";

  export default {
    name: "CadastroView",
    components: {
      ModalAviso
    },

    data() {
      return {
        cpf: '',
        email: '',
        conviteEnviado: false,
        message: ''
      };
    },

    methods: {
      verificarCampos() {
        if (this.cpf && this.email) {
          this.enviarConvite();
        } else {
          this.message = "Por favor, preencha todos os campos!";
          let modal = new Modal(document.getElementById("camposVazios"));
          modal.show();
        }
      },

      enviarConvite() {
        this.conviteEnviado = true;
        this.cpf = '';
        this.email = '';
        setTimeout(() => {
          this.conviteEnviado = false;
        }, 3000);
      }
    },
    directives: {
      mask: VueMask.directive
    }
  }
  </script>
  
  <style>

  </style>
  