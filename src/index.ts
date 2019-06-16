import { GridLayout } from "./GridLayout";

const layout = new GridLayout();

function createArea(top: number, bottom: number, left: number, right: number) {
    return layout.addArea({
        top: layout.row(top),
        bottom: layout.row(bottom),
        left: layout.column(left),
        right: layout.column(right)
    });
}

function main() {
    const areas = {
        header: createArea(0, 20, 0, 100),
        side: createArea(20, 100, 0, 30),
        content: createArea(20, 80, 30, 100),
        footer: createArea(80, 100, 30, 100),
    };
    const app = document.getElementById('app')!;
    for (const [key, value] of Object.entries(layout.getStyles())) {
        app.style.setProperty(key, value);
    }
    for (const [className, area] of Object.entries(areas)) {
        const div = document.createElement('div');
        div.classList.add(className);
        for (const [key, value] of Object.entries(area.getStyles())) {
            div.style.setProperty(key, value);
        }
        app.append(div);
    }
}

main();
