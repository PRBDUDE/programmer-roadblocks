import Material from "@primeuix/themes/material";
import {definePreset} from "@primeuix/themes";
import {Primitive} from "../primitive";
import {Semantic} from "./semantic";
import {ButtonPreset} from "./components/button-preset";
import {MegamenuPreset} from "./components/megamenu-preset";

export const MaterialPreset = definePreset(Material, Primitive, {
  semantic: Semantic,
  components: {
    button: ButtonPreset,
    megamenu: MegamenuPreset
  }
});
