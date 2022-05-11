export class Renderer {
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;

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
    }
}
