import { Sorted } from "./Sorted";
import { GridArea, IGridArea } from "./GridArea";

function buildGridTemplateString(list: Sorted<string>) {
    const len = list.keys.length;
    if (len === 0) return '';

    let offset = list.keys[0];
    let result = `[${list.values[0]}]`;
    for (let i = 1; i < len; i++) {
        const size = list.keys[i] - offset;
        offset = list.keys[i];
        result += ` ${size}fr [${list.values[i]}]`;
    }
    return result;
}

export class GridLayout {
    rows = new Sorted<string>();
    columns = new Sorted<string>();
    areas: GridArea[] = [];

    addArea(area: IGridArea): GridArea {
        const gridArea = new GridArea(area);
        this.areas.push(gridArea);
        return gridArea;
    }

    row(offset: number) {
        let name = this.rows.get(offset);
        if (name) return name;
        this.rows.add(offset, name = `_${offset}`);
        return name;
    }

    column(offset: number) {
        let name = this.columns.get(offset);
        if (name) return name;
        this.columns.add(offset, name = `_${offset}`);
        return name;
    }

    normalize(): void {
        // area からの参照のない line を削除
    }

    getStyles() {
        return {
            display: 'grid',
            'grid-template-rows': buildGridTemplateString(this.rows),
            'grid-template-columns': buildGridTemplateString(this.columns)
        } as const;
    }
}
