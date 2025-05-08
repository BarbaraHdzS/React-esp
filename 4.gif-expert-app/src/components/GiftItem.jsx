
//destructras la prop para que solo se pase el title y el url al componente GiftItem
export const GiftItem = ({title, url}) => {

    console.log({title, url});

  return (
    //estamos regresando un div donde a traves de la imagen se le pasa la url del prop y el titulo
  <div className ="card">
  <img src={url} alt={title}/>
    <p>{title}</p>
    </div>
  )
}
