interface User {
    id: string;
    name: string;
    age: number;
    email: string;
}

type updateProps = Pick<User, 'name' | 'age' | 'email'>

function sumOfAge(props: updateProps){
    // hi the db
}