<template>
  <div>
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue';
import AppFooter from './components/Footer.vue';

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>
