export class Program {
    private _program: WebGLProgram;
    private _shaders: WebGLShader[] = [];
    private _attributes: string[] = [];
    private _uniforms: string[] = [];
    private _uniformLocations: { [key: string]: WebGLUniformLocation } = {};
    private _attributeLocations: { [key: string]: number } = {};

    constructor(gl: WebGL2RenderingContext, vertexShaderSource: string, fragmentShaderSource: string) {
        this._program = gl.createProgram();
        this._shaders.push(gl.createShader(gl.VERTEX_SHADER));
        this._shaders.push(gl.createShader(gl.FRAGMENT_SHADER));
        gl.shaderSource(this._shaders[0], vertexShaderSource);
        gl.shaderSource(this._shaders[1], fragmentShaderSource);
        gl.compileShader(this._shaders[0]);
        gl.compileShader(this._shaders[1]);
        gl.attachShader(this._program, this._shaders[0]);
        gl.attachShader(this._program, this._shaders[1]);
        gl.linkProgram(this._program);
        this._attributes = gl.getProgramParameter(this._program, gl.ACTIVE_ATTRIBUTES);
        this._uniforms = gl.getProgramParameter(this._program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < this._attributes.length; i++) {
            this._attributeLocations[this._attributes[i]] = gl.getAttribLocation(this._program, this._attributes[i]);
        }
        for (let i = 0; i < this._uniforms.length; i++) {
            this._uniformLocations[this._uniforms[i]] = gl.getUniformLocation(this._program, this._uniforms[i]);
        }
    }
}