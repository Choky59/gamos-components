import { Bodies, Body, World } from 'matter-js';
import { Image } from 'p5';
import { engine, P5Instance } from '..';


interface Options {
    isStatic?: boolean;
    imgUrl?: string;
}
export class Circle {

    private p: P5Instance;
    private body: Body;
    private r: number;
    private img: Image | undefined;
    constructor(p: P5Instance, x: number, y: number, r: number, options: Options = { isStatic: false, imgUrl: undefined }) {
        this.p = p
        this.r = r
        this.img = this.preload(options.imgUrl);
        this.body = Bodies.circle(x, y, r / 2, { isStatic: options.isStatic })
        World.add(engine.world, [this.body]);
    }

    preload(imgUrl: string | undefined) {
        if (imgUrl) {
            const img = this.p.loadImage(imgUrl)
            return img;
        }
    }

    show() {
        this.p.push();
        this.p.fill(255)
        this.p.translate(this.body.position.x, this.body.position.y)
        this.p.rotate(this.body.angle)
        this.p.circle(0, 0, this.r);
        this.p.pop();
    }

    showImg() {
        if (this.img) {
            this.p.image(this.img, this.body.position.x, this.body.position.y, this.r, this.r)
        }
    }

    rotate(degrees: number) {
        const rotation = this.p.radians(degrees)
        Body.rotate(this.body, rotation)
    }

    goToMouse() {
        const x = this.p.mouseX - this.body.position.x;
        const y = this.p.mouseY - this.body.position.y
        Body.translate(this.body, { x: x, y: y })

        this.body.position.x = this.p.mouseX;
        this.body.position.y = this.p.mouseY;
    }
}