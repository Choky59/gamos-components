import { Engine } from 'matter-js';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { Box } from '../components/box';
import { Circle } from '../components/circle';
import { engine, P5Instance } from '../index';

const Sketch = (p: P5Instance) => {

    var boxes: Box[] = [];
    var circles: Circle[] = []
    var ground: Box;
    var ground2: Box;
    p.setup = () => {
        p.createCanvas(800, 800);
        ground = new Box(p, 400, 650, 1000, 100, true)
        ground2 = new Box(p, 400, 650, 1000, 100, true)
        ground.rotate(45)
    };

    p.draw = () => {
        Engine.update(engine);

        p.background(51);
        boxes.forEach(box => {
            box.show()
        })
        circles.forEach(circles => {
            circles.show()
            circles.showImg()
        })
        ground.show()
        ground2.show()
    };

    p.mouseClicked = () => {

        const randomNum = Math.random();
        if (randomNum < .5) {
            const box = new Box(p, p.mouseX, p.mouseY, Math.random() * 100, Math.random() * 100)
            boxes.push(box)
        } else {
            const circle = new Circle(p, p.mouseX, p.mouseY, Math.random() * 100, {imgUrl: "../assets/barrels.png"})
            circles.push(circle)
        }


    }
    return <div />;
};

const Barrels = () => {
    return <ReactP5Wrapper sketch={Sketch} />;
};

export default Barrels;
