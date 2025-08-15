import Nora from "@primeuix/themes/nora";
import {definePreset} from "@primeuix/themes";
import {Primitive} from "../primitive";
import {Semantic} from "./semantic";
import {MegamenuPreset} from "./components/megamenu-preset";
import {TooltipPreset} from "./components/tooltip-preset";
import {TimelinePreset} from "./components/timeline-preset";

const NoraPreset = definePreset(Nora, Primitive, Semantic, {
  components: {
    megamenu: MegamenuPreset,
    timeline: TimelinePreset,
    tooltip: TooltipPreset
  }
});
