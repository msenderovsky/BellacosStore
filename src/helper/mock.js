const productos=[
  { id:1, foto:'./img/01.jpg', precio:2000, titulo:'Marca de los Illidari', descripcion:'', stock:10, categoria:"diseños"},
  { id:2, foto:'./img/02.jpg', precio:1500, titulo:'Arthas sonriendo', descripcion:'', stock:10, categoria:"memes"},
  { id:3, foto:'./img/02.jpg', precio:1000, titulo:'', descripcion:'', stock:10, categoria:"diseños"}
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