class Foo implements Foo {
    get bar(): number {
        return 42;
    }

    baz(): number {
        return this.bar;
    }
}
