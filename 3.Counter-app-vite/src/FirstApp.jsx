// //siempre y cuando haya un objeto va a funcionar
// export const FirstApp = () => { 
//     return (
//         <h1>{1+1}</h1>
//     );
// }

//se puede todo menos booleanos y null
// const newName = "Barbara";
// const newNumber = [1,2,3,4,5,6,7,8,9,10];
// export const FirstApp = () => {
//     return (
//         <>
//         <h1>{newName}</h1>
//         <p>Soy la mejor programadora</p>
//         </>
//     );
// }

const newName = {
    name: "Barbara",
    lastName: "Hermosa"
}
export const FirstApp = () => {
    return (
        <>
        <h1>{newName.name}{ newName.lastName}</h1>
        <p>Soy la mejor programadora</p>
        </>
    );
}