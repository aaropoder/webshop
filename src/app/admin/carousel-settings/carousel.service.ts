import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  images = [
    {
      url: 'https://picsum.photos/id/567/1800/300',
      header: 'Osta ikka kõik ära',
      text: 'Mh',
      alt: 'Osta kõik ära',
      linkUrl: 'https://google.com',
      isInternal: false,
    },
    {
      url: 'https://picsum.photos/id/385/1800/300',
      header: 'Osta veel kõik ära',
      text: 'Mhmh',
      alt: 'Tere',
      linkUrl: 'https://google.com',
      isInternal: true,
    },
  ];

  interval = 5000;
  wrap = true;
  keyboard = false;
  pauseOnHover = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;

  constructor() {}
}
