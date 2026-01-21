import {Component, input} from '@angular/core';
import {Button} from "primeng/button";
import {SocialMediaLink} from "@model/social-media-link";
import {Tooltip} from "primeng/tooltip";


@Component({
  selector: 'prb-social-media-links',
  imports: [
    Button,
    Tooltip
],
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.scss'
})
export class SocialMediaLinksComponent {
  links = input<SocialMediaLink[]>();
  size = input<'large' | 'small' | undefined>();
  column = input<boolean>(false);

  onClick(url: string) {
    console.log("clicked " + url + " link");
  }
}
