import { Bodies, Body, World } from 'matter-js';
import { engine, P5Instance } from '..';
export class Box {

    private p: P5Instance;
    private body: Body
    private w: number;
    private h: number;
    constructor(p: P5Instance, x: number, y: number, w: number, h: number, isStatic: boolean = false) {
        this.p = p
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h, { isStatic: isStatic })
        World.add(engine.world, [this.body]);
    }

    show() {
        this.p.push();
        this.p.fill(255)
        this.p.translate(this.body.position.x, this.body.position.y)
        this.p.rotate(this.body.angle)
        this.p.rectMode(this.p.CENTER)
        this.p.rect(0, 0, this.w, this.h);
        this.p.pop();
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