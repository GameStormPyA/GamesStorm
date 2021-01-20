import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
     const resultPosts=[];
     
     if(arg == ""  ||  arg.length < 3 ) return value;

  
    
     for(const post of value){
      if(typeof post.Nombre_User !== "undefined"){
        if(post.Nombre_User.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultPosts.push(post);
        }
      }
      if(typeof post.Nombre_Accesorio !== "undefined"){
        if(post.Nombre_Accesorio.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultPosts.push(post);
        }
      }
      if(typeof post.Nombre_Accesorios !== "undefined"){
        if(post.Nombre_Accesorios.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultPosts.push(post);
        }
      }
      if(typeof post.Nombre_Juego !== "undefined"){
          if(post.Nombre_Juego.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPosts.push(post);
            
          }
      }
      if(typeof post.Nombre !== "undefined"){
        if(post.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultPosts.push(post);
        }
    }

      

     }

     return resultPosts;
  }

}
