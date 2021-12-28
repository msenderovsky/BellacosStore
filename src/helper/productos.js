const remeras=[
  { id:1, foto:'../../assets/01.jpg', precio:2000, descripcion:''},
  { id:2, foto:'../../assets/02.jpg', precio:1500, descripcion:''},
  { id:3, foto:'', precio:1000, descripcion:''}
  ]

  export const getFetch=new Promise ((resolve,reject)=>{

    let condicion=true
    if (condicion){
        setTimeout(()=>{
            resolve(remeras)
        }, 2000)
    }else{
        reject('error')
    }
})