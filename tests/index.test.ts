import { Main } from "../src/index";

test("Example", () => {
    const main = new Main();

    expect(main).toBeInstanceOf(Main);
});
