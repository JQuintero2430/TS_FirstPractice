let mensaje: string = "Hello World";

mensaje = "Happy piggy";

console.log(mensaje);

mensaje = "Bye World";

let extioncionDinosaurios: number = 76_000_00;
let dinosaurioFavorito: string = "T-Rex";
let extincion = true;

function happypiggy(config: any) {
    return config
};

let animals: string[] = ['piggy', 'happy', 'felipe'];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// nums.map(x => x.) el autocompletado sugiere metodos*/

let tupla: [number, string[]] = [1, ['try', 'second try']];

const small = 's';
const medium = 'm';
const large = 'l';
const extraLarge = 'xl';

enum Talla { Small = 's', Medium = 'm', Large = 'l', ExtraLarge = 'xl' };

const variable1 = Talla.Large;
console.log(variable1);

const enum LoadingState { Idle, Loading, Succes, Error };

const state = LoadingState.Succes;


type Address = {
    number: number,
    street: string,
    country: string
}
type Persona =
{
    readonly id: number,
    name: string,
    talla: Talla,
    address: Address
};

const object: Persona =
{
    id: 1,
    name: 'Jorge',
    talla: Talla.Small,
    address: {
    number: 18,
    street: 'Maple',
    country: 'USA'
    }
};

object.name = 'Jorgito';

console.log(object);