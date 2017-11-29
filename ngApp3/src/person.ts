class Person {

    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    clone() {
      return new Person(this.id, this.name);
    }

}
