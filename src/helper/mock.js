const productos=[
  { id:"1", Foto:'./img/01.jpg', Precio:2000, Título:'Marca de los Illidari', Descripción:'', Stock:10, Categoría:"Diseños"},
  { id:"2", Foto:'./img/02.jpg', Precio:1500, Título:'Arthas sonriendo', Descripción:'', Stock:10, Categoría:"Memes"},
  { id:"3", Foto:'./img/03.jpg', Precio:1000, Título:'Frostmourne', Descripción:'', Stock:10, Categoría:"Diseños"}
  ]

  export const getFetch=new Promise ((resolve,reject)=>{

    if (true){
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }else{
        reject('error')
    }
})