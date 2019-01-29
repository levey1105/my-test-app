<template>
  <div id="app">
    <div>
      <table>
        <thead>

        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>zhaoye</td>
            <td>60</td>
          </tr>
          <tr>
            <td>2</td>
            <td>yongqing</td>
            <td>99</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
