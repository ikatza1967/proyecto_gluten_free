<template>
  <div class="navbar">
  
      
    <nav>
      <div class="logo">
        <div class="glutenfree" >
          <img class="glutenf" src="../assets/img/glutenfree.jpg" alt="Logo de la empresa" />
        </div> 
         
      </div>
      <div class="navbar-items">
        <div class="navbar-item">
          <input class="buscar"  type="text" placeholder="Buscar producto" />
        </div>
      </div>
      <div class="navbar-item">
          <a href="#">Iniciar sesión</a>        
      </div>

    </nav>
  </div>
</template>
<style scoped>

 .navbar{
   background-image: url(../assets/img/imgnavbar.jpg);
   width: 100%;
   height:300px;
    background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
/* display: flex; */
/* align-items: center; */

} 
 
 .glutenf{
  width: 9rem;
  
}  

.logo{
  position:absolute;
  top:14%;
  left: 30px;
} 
.navbar-item a{
  color: white;
  text-decoration: none;
}
 .logo {
  order: 1;
  margin-right: 20px;
  height: 550px;
  width: 600px; 
  
}  
.buscar{
  height: 2em;
  border-radius: 2rem;
  
}

</style>
