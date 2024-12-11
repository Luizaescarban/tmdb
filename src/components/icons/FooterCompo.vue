<template>
  <header>
    <div><img src="../assets/logo.png" alt="" /></div>
    <div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/filmes">Filmes</router-link></li>
          <li><router-link to="/tv">Programas de TV</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  align-items: center;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
  justify-content: space-between;
}
img{
  width: 100px;
  height: 100px;
}

nav ul {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  margin-bottom: 0;
  align-items: center;
}
li{
  list-style-type: none;
}
nav a {
  text-decoration: none;
  color: #fff;
}
</style>
