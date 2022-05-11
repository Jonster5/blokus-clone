import { Frame } from '@utils/Frame';
import { Material } from '@utils/Material';

export class Entity<F extends Frame, M extends Material> {
    private _frame: F;
    private _material: M;

    constructor(frame: F, material: M) {
        this._frame = frame;
        this._material = material;
    }
}
