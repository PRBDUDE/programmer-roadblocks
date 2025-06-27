import {Component, input, Input} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'prb-social-media-links',
    imports: [
        Button
    ],
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.scss'
})
export class SocialMediaLinksComponent {
  size = input<'large' | 'small' | undefined>();

  onClickTikTok() {
    console.log("clicked TikTok link")
  }

  onClickTwitch() {
    console.log("clicked Twitch link")
  }

  onClickTwitter() {
    console.log("clicked Twitter link")
  }

  onClickYoutube() {
    console.log("clicked YouTube link")
  }
}
