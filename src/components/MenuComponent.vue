<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Prisma.edu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Página Inicial</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/convite" class="nav-link">Convidar Participante</router-link>
            </li>
          </ul>
          <!-- Botão de Logout -->
          <button class="btn btn-danger" @click="logout">Sair</button>
        </div>
      </div>
    </nav>
  </template>
  
<script>
  export default {
    name: 'Menu',
    methods: {
        logout() {
            this.$router.push('/login');
        }
    }
  }
</script>
  
<style scoped>

</style>
  