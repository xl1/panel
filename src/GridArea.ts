export interface IGridArea {
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export class GridArea implements IGridArea {
    top: string;
    bottom: string;
    left: string;
    right: string;

    constructor({ top, bottom, left, right }: IGridArea) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    getStyles() {
        return {
            'grid-area': `${this.top}/${this.left}/${this.bottom}/${this.right}`
        };
    }
}
