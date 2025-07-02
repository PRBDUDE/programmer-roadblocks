import {Component} from '@angular/core';
import {SocialMediaLinksComponent} from "../social-media-links/social-media-links.component";
import {SocialMediaLink} from "@model/social-media-link";
import {CopyrightComponent} from "@rootComponents/copyright/copyright.component";
import {NgClass} from "@angular/common";
import {isPrbMode, prbModes} from "@utility/is-prb-mode";

@Component({
  selector: 'prb-roadblock-footer',
  imports: [
    SocialMediaLinksComponent,
    CopyrightComponent,
    NgClass
  ],
  templateUrl: './roadblock-footer.component.html',
  styleUrl: './roadblock-footer.component.scss'
})
export class RoadblockFooterComponent {
  readonly socialMediaLinks = [
    {
      icon: 'pi pi-discord',
      url: 'https://discord.gg/programmerroadblocks',
      tooltip: 'Discord link',
      message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
      icon: 'pi pi-facebook',
      url: 'https://www.facebook.com/ProgrammerRoadblocks',
      tooltip: 'Facebook link',
      message: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'pi pi-tiktok',
      url: 'https://www.tiktok.com/@programmerroadblocks',
      tooltip: 'TikTok link',
      message: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'pi pi-twitch',
      url: 'https://www.twitch.tv/programmerroadblocks',
      tooltip: 'Twitch link',
      message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
    },
    {
      icon: 'pi pi-twitter',
      url: 'https://twitter.com/ProgrammerRoadb',
      tooltip: 'Twitter link',
      message: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'pi pi-youtube',
      url: 'https://www.youtube.com/channel/UC-9559999-9999',
      tooltip: 'YouTube link',
      message: 'lorem ipsum dolor sit amet'
    }
  ] as SocialMediaLink[];
  protected readonly isMode = isPrbMode;
  protected readonly prbModes = prbModes;
}
