<template>
  
  
  
  <div class="navbar">
  
      
    <nav>
      <div class="logo">
        <div class="glutenfree" >
          <img class="glutenf" src="../assets/img/logoglutenfree.jpg" alt="Logo de la empresa" />
        </div> 
         
      </div>
      <div class="navbar-items">
        <div class="navbar-item">
          <input class="buscar"  type="text" placeholder="Buscar producto" />
          <input class="buscar-logo"  type="img " placeholder="Buscar producto" />
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
   

} 
 
 .glutenf{
  width: 9rem;
  
}  

.logo{
  position:absolute;
  top:14%;
  left: 30px;
  border-radius: 20px;
} 
.navbar-item a{
  color: rgb(243, 243, 248);
  text-decoration: none;
}
   
.buscar{
  height: 2em;
  border-bottom-left-radius:2rem;
  border-top-left-radius: 2em;
  text-align: center;

}
.buscar-logo{
  border-bottom-right-radius:2rem;
  border-top-right-radius: 2em;
  height: 2em;
  width: 2rem;
}
.glutenf{
  border-radius: 70px;
}
.navbar-items {
      display: flex;
      align-items: center;
    }

    .navbar-item {
      margin: 0 10px;
    }

    input.buscar {
      padding: 1px;
      border: none;
      border-radius: 5px;
      margin-right: 5px;
    }

    /* Estilos para el enlace */
    a {
      color: #0c0b0b;
      text-decoration: none;
      /* padding: 6px; */
      border-radius: 5px;
      background-color: #5cf163;
      
    }
  </style>



