
//estado inicial, es un arreglo de la lista de tareas por hacer
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

//Un reducer solo es una funcion pura que regresa un state
//recibe dos argumetos. El primero es el estado inicial y el segundo es una accion (como quiero que cambie el estado)
//lo qu eme aparece en la consola es el inicial state
//en el action debemos mandar un objeto vacio para que no de error, porque el action es un objeto
const todoReducer = ( state = initialState, action = {} ) => {
//regreso del nuevo estado. Si la accion es (lo que tenemo en la accion), vamos a regresar un nuevo estado, el nuevo estado es la desestructuracion del estado anterior y a;adimos lo que viene en el payload (la nueva tarea)
    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    //regresa un estado basado en la accion
    return state;
}

//vamos a llamar la funcion todoReducer 
let todos = todoReducer();

//no recomendable usar push porque se hace una mutacion del estado

//un nuevo elemento o todo a la lista de tareas
//se lo debemos mandar a todoReducer para que produzca un nuevo estado y ese nuevo estado debe tener las dos tareas (se debe mandar como accion)
const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}

//se cera la accion, que es un objeto
//Aqui como accion le pasamos el valor que queremos pasarle al estado
const addTodoAction = {
    //es una propiedad que se llama type y es un string para que sepamos que se disparo una accion
    type: '[TODO] add todo',
    //newTodo:newTodo  poruqe es lo que queremos pasarle al estado
    payload: newTodo, //es como cargando...y no siempre tiene que ir, depende de la accion
}

//se llama la funcion todoReducer y se le pasa el estado inicial y la accion
todos = todoReducer( todos, addTodoAction );


console.log({state: todos})