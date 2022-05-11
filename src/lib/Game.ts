import { Board } from '@lib/Board';
import { Player } from '@lib/Player';
import { Renderer } from '@utils/renderer';

export class Game {
    player: Player;
    board: Board;

    renderer: Renderer;

    constructor(target: HTMLElement) {
        this.player = new Player();
        this.board = new Board();

        this.renderer = new Renderer(target);

        this.renderer.onUpdate(this.update.bind(this));
    }

    update() {}
}
