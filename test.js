import test from "ava";
import { createCanvas } from "canvas";
import detect from ".";

test("Main", (t) => {
    const canvas = createCanvas(100, 200);
    const context = canvas.getContext("2d");

    context.fillRect(10, 20, 1, 1);
    context.fillRect(97, 194, 1, 1);

    const { top, right, bottom, left } = detect(canvas);

    t.is(top, 20);
    t.is(right, 2);
    t.is(bottom, 5);
    t.is(left, 10);
});

test("Transparent", (t) => {
    const canvas = createCanvas(100, 200);

    t.throws(() => detect(canvas), {
        message: "Can't detect edges.",
    });
});
