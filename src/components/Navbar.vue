<template>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between">
        <h1 class="text-2xl font-bold">Enigmatic Aura</h1>
        <ul class="flex space-x-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
  };
  </script>