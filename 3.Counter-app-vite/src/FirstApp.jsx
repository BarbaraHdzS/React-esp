// //Fragment Se utiliza para agrupar varios elementos sin envolverlos en un div u otro elemento HTML.
// import { Fragment } from "react";

// export const FirstApp = () => {
//     return (
//         //si quieres meter varios elementos (parrafos) debes poner div o Fragment si no lo haces te dara error
//         <Fragment>
//         <h1>Barbara!</h1>
//         <p>La mejor programadora</p>
//         </Fragment>
//     );
//     }

//manera de no poner el Fragment <> </>
export const FirstApp = () => {
        return (
            <>
            <h1>Barbara!</h1>
            <p>La mejor programadora</p>
            </>
        );
        }