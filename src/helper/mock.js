const remeras=[
  { id:1, foto:'./img/01.jpg', precio:2000, titulo:'Marca de los Illidari', descripcion:'', stock:10},
  { id:2, foto:'./img/02.jpg', precio:1500, titulo:'Arthas sonriendo', descripcion:'', stock:10},
  { id:3, foto:'', precio:1000, titulo:'', descripcion:'', stock:10}
  ]

  export const getFetch=new Promise ((resolve,reject)=>{

    if (true){
        setTimeout(()=>{
            resolve(remeras)
        }, 2000)
    }else{
        reject('error')
    }
})