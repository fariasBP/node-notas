/* UTIL
	TEMAS:
		- inspect(obj) >>> Este metodo devuelve una representacion de cadena de una objecto.
			- obj >>> cualquier <object> a representar.
	SINTAXIS:
		- <util>.inspect(<object obj>):<string>
*/

class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

const mi_obj = {
	nombre: 'frank',
	edad: 21,
	intereses: ['programacion', 'ciencias puras', 'ingenieria', 'innovacion', 'justicia']
}

util.inspect(new Foo()); // devuelve: 'Foo [bar] {}'
util.inspect(new Bar()); // devuelve: 'Bar {}'
util.inspect(baz);       // devuelve: '[foo] {}'

console.log(mi_obj); // devuelve: [object object]
console.log(util.inspect(mi_obj)); // devuelve: {nombre: 'frank', edad: 21, intereses: ['programacion', 'ciencias puras', 'ingenieria', 'innovacion', 'justicia']}