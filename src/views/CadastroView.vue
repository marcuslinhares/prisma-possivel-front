<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Cadastro</h5>
              <form @submit.prevent="verificarCampos">

                <div class="mb-3">
                    <label for="nome" class="form-label">Nome Completo</label>
                    <input type="text" class="form-control" id="nome" v-model="nome" placeholder="Digite seu nome completo">
                </div>

                <div class="mb-3">
                  <label for="cpf" class="form-label">CPF</label>
                  <input type="text" class="form-control" id="cpf" v-model="cpf" placeholder="Digite seu CPF"  v-mask="'###.###.###-##'">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">E-mail</label>
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Digite seu e-mail">
                </div>

                <div class="mb-3">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input type="text" class="form-control" id="telefone" v-model="telefone" placeholder="Digite seu telefone de contato">
                </div>

                <div class="mb-3">
                    <label for="endereço" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="endereco" v-model="endereco" placeholder="Digite seu endereço">
                </div>

                <div class="mb-3">
                    <label for="senha" class="form-label">Senha</label>
                    <input type="text" class="form-control" id="senha" v-model="senha" placeholder="Digite sua senha">
                </div>

                <div class="mb-3">
                    <label for="confirmaSenha" class="form-label">Confirmar Senha</label>
                    <input type="text" class="form-control" id="confirmaSenha" v-model="confirmaSenha" placeholder="Confirme sua senha">
                </div>

                <button type="submit" class="btn btn-primary">Finalizar cadastro</button>
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

<style>

</style>

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
                nome: '',
                cpf: '',
                email: '',
                telefone: '',
                endereco: '',
                senha: '',
                confirmaSenha: '',

                message: ''
            };
        },

        methods: {
            verificarCampos() {
                if (this.nome && this.cpf && this.email 
                    && this.telefone && this.endereco
                    && this.senha && this.confirmaSenha
                ) {
                    this.cadastrar();
                } else {
                    this.message = "Por favor, preencha todos os campos!";
                    let modal = new Modal(document.getElementById("camposVazios"));
                    modal.show();
                }
            },

            cadastrar() {
                this.$router.push('/login');
            }
        },

        directives: {
        mask: VueMask.directive
        }
    };
</script>