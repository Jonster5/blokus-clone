import { Entity } from '@utils/Entity';

export class Renderer {
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;

    root: Entity;

    private _update: (updateCount: number, frameCount: number) => void;

    private _animater: number | null;

    constructor(target: HTMLElement) {
        this.canvas = document.createElement('canvas');
        this.gl = this.canvas.getContext('webgl2');
        target.appendChild(this.canvas);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

        this.root = new Entity(null, null);
    }

    resize(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    start() {
        if (this._animater) return;

        this._animater = requestAnimationFrame(this.render.bind(this));
    }

    stop() {
        if (!this._animater) return;

        cancelAnimationFrame(this._animater);
        this._animater = null;
    }

    onUpdate(
        cb: (updateCount: number, frameCount: number) => void,
        thisArg?: any
    ) {
        if (this._update) return;

        this._update = cb.bind(thisArg);
    }

    private render(timestamp?: number) {}
}
