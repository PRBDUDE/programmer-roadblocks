import {documentationPrimengMenu} from "./documentation-primeng-menu";
import {documentationGettingStartedMenu} from "./documentation-getting-started-menu";
import {documentationTypescriptMenu} from "./documentation-typescript-menu";
import {documentationNodeMenu} from "./documentation-node-menu";
import {documentationReactiveFormsMenu} from "./documentation-reactive-forms-menu";

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
