import test from "ava";
import Canvas from "canvas";
import detect from "./index.js";

const { createCanvas } = Canvas;

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

test("Tolerance", (t) => {
    const canvas = createCanvas(100, 200);
    const context = canvas.getContext("2d");

    context.globalAlpha = 0.1;
    context.fillRect(10, 20, 1, 1);
    context.globalAlpha = 0.2;
    context.fillRect(97, 194, 1, 1);

    const { top, right, bottom, left } = detect(canvas, {
        tolerance: 0.1,
    });

    t.is(top, 194);
    t.is(right, 2);
    t.is(bottom, 5);
    t.is(left, 97);
});

test("Transparent", (t) => {
    const canvas = createCanvas(100, 200);

    t.throws(() => detect(canvas), {
        message: "Can't detect edges.",
    });
});
