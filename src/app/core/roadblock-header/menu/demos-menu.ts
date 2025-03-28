import {demoInputMenu} from "@rootComponents/menu/demo-input-menu";
import {demoScrollingMenu} from "@rootComponents/menu/demo-scrolling-menu";
import {demoStylingMenu} from "@rootComponents/menu/demo-styling-menu";

export function demosMenu() {
    return {
        label: 'Demos',
        root: true,
        items: [
            [
                demoInputMenu(),
                demoScrollingMenu()
            ],
            [
                demoStylingMenu()
            ]
        ]
    }
}
