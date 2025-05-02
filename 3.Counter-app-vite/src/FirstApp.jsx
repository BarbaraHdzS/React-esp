

 //props es un objeto que contiene las propiedades que se le pasan al componente
 //Permite que del componente padre se le pasen propiedades al componente hijo
// export const FirstApp = ({title='hola, soy Goku'}) es el titulo por defecto que se le pasa al componente
    export const FirstApp = ({title, subTitle}) => {

    // console.log(title);

    return (
        <>
        <h1>{title}</h1>
        <p>{subTitle +1}</p>
        </>
    );
}

