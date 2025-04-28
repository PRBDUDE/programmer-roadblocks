import Aura from "@primeng/themes/aura";
import {definePreset} from "@primeng/themes";
import {Primitive} from "./primitive";
import {Semantic} from "./semantic";
import {ButtonPreset} from "./components/button-preset";
import {DatatablePreset} from "./components/datatable-preset";
import {MegamenuPreset} from "./components/megamenu-preset";
import {MessagePreset} from "./components/message-preset";
import {TimelinePreset} from "./components/timeline-preset";
import {TooltipPreset} from "./components/tooltip-preset";

export const AuraPreset = definePreset(Aura, Primitive, Semantic, {
    components: {
        button: ButtonPreset,
        datatable: DatatablePreset,
        megamenu: MegamenuPreset,
        message: MessagePreset,
        timeline: TimelinePreset,
        tooltip: TooltipPreset
    }
});
