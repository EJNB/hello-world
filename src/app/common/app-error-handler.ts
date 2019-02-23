import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
  /* En el futuro en vez de este alert podemos mostrar un notificacion toast.
    Y en lugar de imprimir en consola, podemos logear el error message en el servidor */
  handleError(error){
    alert('An unexpected error occurred.');
    console.log(error);
  }
  //Ahora necesitamos registrarlo como una dependencia o como un provider in appModule
}