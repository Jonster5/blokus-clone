import { Frame } from '@utils/Frame';
import { Material } from '@utils/Material';

export class Entity<F extends Frame = null, M extends Material = null> {
    private _frame: F;
    private _material: M;

    children: Entity<any, any>[] = [];

    constructor(frame: F, material: M) {
        this._frame = frame;
        this._material = material;
    }
}
