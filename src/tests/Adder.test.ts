import Adder from "../Adder";

test('1 +2 =3', async () => {
    const adder = new Adder(1, 2);
    expect(adder.getAns()).toBe(3);
})