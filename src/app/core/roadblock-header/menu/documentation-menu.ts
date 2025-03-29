import {documentationPrimengMenu} from "@rootComponents/menu/documentation-primeng-menu";
import {documentationGettingStartedMenu} from "@rootComponents/menu/documentation-getting-started-menu";
import {documentationTypescriptMenu} from "@rootComponents/menu/documentation-typescript-menu";
import {documentationNodeMenu} from "@rootComponents/menu/documentation-node-menu";
import {documentationReactiveFormsMenu} from "@rootComponents/menu/documentation-reactive-forms-menu";

export function documentationMenu() {
    return {
        label: 'Documentation',
        root: true,
        items: [
            [
                documentationPrimengMenu(),
                documentationGettingStartedMenu()
            ],
            [
                documentationTypescriptMenu(),
                documentationNodeMenu()
            ],
            [
                documentationReactiveFormsMenu()
            ]
        ]
    }
}
