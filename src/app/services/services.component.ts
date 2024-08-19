import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface IServicePricelist {
  service: string;
  priceMin: boolean;
  price: number;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  @ViewChild('dateInput', { static: true }) dateInput:
    | ElementRef<HTMLInputElement>
    | undefined;

  // private readonly holidays: Date[] = [
  //   new Date(2023, 11, 25),
  //   new Date(2023, 11, 26),
  // ];

  // holidays: string[] = ['25.12.2023', '26.12.2023'];

  activeTabIndex = 0;

  displayedColumns: string[] = ['service', 'price'];

  selectedService = '';

  enteredName = '';

  selectedDate: string | undefined = '';

  data: IServicePricelist[] = [
    {
      service: 'Außenwäsche',
      price: 5.3,
      priceMin: false,
      description: 'Außernwäsche per Hand',
    },
    {
      service: 'Schleifpolitur (Ultimate Cut)',
      price: 10,
      priceMin: false,
      description: '',
    },
    {
      service: 'Anti-Hologramm-Politur',
      price: 5,
      priceMin: false,
      description: '',
    },
    {
      service: 'Versiegelung mit Swisswax',
      price: 1,
      priceMin: false,
      description: '',
    },
    {
      service: 'Chrompolitur',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Tankpolitur',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Schutzblechpolitur',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Handvorwäsche',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Kunststoffreinigung',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Innenraumreinigung',
      price: 120,
      priceMin: true,
      description:
        'Saugen, Bodensäuberung per Tornado, Kunststoffreinigung sowie -pflege, Fensterreinigung, Himmelreinigung',
    },
    {
      service: 'Polsterreinigung (Fahrersitz)',
      price: 29.99,
      priceMin: false,
      description: '',
    },
    {
      service: 'Polsterreinigung (Beifahrersitz)',
      price: 29.99,
      priceMin: false,
      description: '',
    },
    {
      service: 'Polsterreinigung (Rückbank)',
      price: 39.99,
      priceMin: false,
      description: '',
    },
    {
      service: 'Teppichreinigung',
      price: 9.99,
      priceMin: false,
      description: '',
    },
    {
      service: 'Fußmattenreinigung',
      price: 9.99,
      priceMin: false,
      description: '',
    },
    {
      service: 'Fensterreinigung',
      price: 9.99,
      priceMin: false,
      description: '',
    },
    {
      service: 'Lackaufbereitung',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Lackpflege',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Lackreinigung',
      price: 0,
      priceMin: false,
      description: '',
    },
    {
      service: 'Kratzerentfernung',
      price: 0,
      priceMin: false,
      description: '',
    },
  ];

  currentDate: string;

  today = new Date();

  // slides = [
  //   { img: '/assets/img/reviews/review_1.png' },
  //   { img: 'http://placehold.it/350x150/111111' },
  //   { img: 'http://placehold.it/350x150/333333' },
  //   { img: 'http://placehold.it/350x150/666666' },
  // ];

  slides = [
    {
      title: 'Empfehlung',
      name: 'dro',
      rating: 5,
      description:
        'Ich habe gestern mein Auto bei Mark abgegeben und bin sehr begeistert. Ich wurde super beraten und der Preis ist auch angemessen. Ich kann es nur weiterempfehlen.',
      services: '',
      // images: ['/assets/img/reviews/review_1.png'],
    },
    {
      title: 'BEGEISTERT',
      name: 'anonym',
      rating: 4,
      description:
        'Ich bin sehr zufrieden mit dem Ergebnis und würde es jedem weiterempfehlen!',
      services: '',
    },
    {
      title: '',
      name: 'Florian',
      rating: 5,
      description:
        'Das Ergebnis sagt mehr als tausend Worte.....\nKomme auf jeden Fall mit meinem Privatwagen auch nochmal vorbei.\nKann ich echt nur empfehlen (Y)(Y)(Y)',
      services: '',
    },
    {
      title: '',
      name: 'kev',
      rating: 5,
      description:
        'Ich kam in der Hoffnung zu Mark, das er meinen Audi A3 wieder im Innenraum gänzen lässt. Nach drei Wochen Urlaub waren überall Verfärbungen in den Sitzen zu erkennen und hinten war etwas ausgelaufen. Ich gab das Auto bei ihm ab und ein paar Stunden später konnte ich meinen Augen nicht trauen! Es sah alles aus wie neu! Die Sitze waren wieder tip top und alles ausgelaufene war einfach weg! Mark gibt sich unglaublich viel Mühe und hat sichtlich Spaß an seiner Arbeit! Ich danke ihn dafür!\n\nPREIS LEISTUNG  TOP',
      services:
        'Shampoonieren von Sitzen, Autoaufbereitung, Staubsaugen des Fahrzeuginnenbereichs',
      // images: ['/assets/img/reviews/review_1.png'],
    },
  ];

  currentSlideIndex = 0;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor() {
    this.currentDate = this.today.toLocaleDateString();
  }
  // addSlide() {
  //   this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  slickInit(e: Event) {
    console.log('slick initialized', e);
  }

  breakpoint(e: Event) {
    console.log('breakpoint', e);
  }

  afterChange(e: Event) {
    console.log('afterChange', e);
  }

  beforeChange(e: Event) {
    console.log('beforeChange', e);
  }

  public isSelected(index: number) {
    if (this.activeTabIndex === index) {
      return true;
    } else {
      return false;
    }
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value?.toLocaleDateString());
    this.selectedDate = event.value?.toLocaleDateString();
  }

  sendEmail() {
    const emailTo = 'farks@markzeugspflege.com';
    let dateSubject = '';
    let dateBody = 'Wann ist der nächstmögliche Termin dafür?';
    if (this.selectedDate) {
      dateSubject = `für den ${this.selectedDate} `;
      dateBody = `Ist ein Termin am ${this.selectedDate} möglich?`;
    }
    let subject = encodeURIComponent(`Anfrage ${dateSubject}`);
    if (this.enteredName) {
      subject = encodeURIComponent(
        `Anfrage von ${this.enteredName} ${dateSubject}`
      );
    }
    let body = '';
    if (this.selectedService) {
      body = encodeURIComponent(
        `Guten Tag,\n\nich möchte eine Anfrage für Folgendes stellen:\n${this.selectedService}\n\n${dateBody}\n\nMit freundlichen Grüßen\n`
      );
    }
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }

  // getCurrentSlideUrl() {
  //   return `url('${this.slides[this.currentSlideIndex].img}')`;
  // }

  goToNextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  goToPreviousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.slides.length - 1;
    }
  }

  generateArrayFromNumber(n: number): number[] {
    return Array(n).fill(0);
  }
}
