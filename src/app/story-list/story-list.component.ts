import { Component, OnInit, ViewChild } from '@angular/core';
import { HackerNewsService } from '../services/story.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  title: any;
  url: any;
}

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  stories: any[] = [];
  selectedStories: any[] = [];
  searchQuery: string = '';

  displayedColumns: string[] = ['title', 'url'];
  dataSource: MatTableDataSource<PeriodicElement>
  story: any = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {

    this.story = [
      {
        "id": 41153892,
        "title": "Written by a 16 year old, a book on how computers work",
        "url": null
      },
      {
        "id": 41150095,
        "title": "Open Source Farming Robot",
        "url": "https://farm.bot/"
      },
      {
        "id": 41120789,
        "title": "I miss Lorina Bulwer: A hand-stitched letter of note",
        "url": "https://news.lettersofnote.com/p/i-miss-lorina-bulwer"
      },
      {
        "id": 41147074,
        "title": "Antidepressants sexual side-effects, SSRI sexual dysfunction, serotonin syndrome",
        "url": "https://www.britishjournalofnursing.com/content/professional/a-clinical-review-of-antidepressants-their-sexual-side-effects-post-ssri-sexual-dysfunction-and-serotonin-syndrome/"
      },
      {
        "id": 41150249,
        "title": "Evaluating a class of infinite sums in closed form",
        "url": "https://www.johndcook.com/blog/2024/08/03/polylog/"
      },
      {
        "id": 41146239,
        "title": "\"We ran out of columns\"",
        "url": "https://jimmyhmiller.github.io/ugliest-beautiful-codebase"
      },
      {
        "id": 41111129,
        "title": "Swift Homomorphic Encryption",
        "url": "https://www.swift.org/blog/announcing-swift-homomorphic-encryption/"
      },
      {
        "id": 41153532,
        "title": "Not Another Technical Debt Article",
        "url": "https://jimmyhmiller.github.io/not-another-technical-debt-article"
      },
      {
        "id": 41117005,
        "title": "The Hype Around Photobiomodulation",
        "url": "https://www.mcgill.ca/oss/article/medical-critical-thinking/hype-around-photobiomodulation"
      },
      {
        "id": 41134485,
        "title": "Show HN: Using AI to Generate Custom Sounds from Text",
        "url": "https://www.image-effects.com"
      },
      {
        "id": 41153158,
        "title": "Belenios: A Verifiable Online Voting System",
        "url": "https://www.belenios.org/"
      },
      {
        "id": 41153093,
        "title": "The Untold Story of How US Spies Sabotaged Soviet Technology",
        "url": "https://www.politico.com/news/magazine/2024/08/04/us-spies-soviet-technology-00164126"
      },
      {
        "id": 41152559,
        "title": "Organic maps: Experimental feed based public transport mapping",
        "url": "https://github.com/organicmaps/organicmaps/blob/master/docs/EXPERIMENTAL_PUBLIC_TRANSPORT_SUPPORT.md"
      },
      {
        "id": 41142420,
        "title": "Show HN: I built a solcial-media-inspired fitness App",
        "url": "https://www.my-gainplan.com"
      },
      {
        "id": 41151476,
        "title": "USB Sniffer Lite for RP2040",
        "url": "https://github.com/ataradov/usb-sniffer-lite"
      },
      {
        "id": 41152375,
        "title": "You can contribute to KDE with non-C++ code",
        "url": "https://rabbitictranslator.com/contribute-to-kde-without-cpp/"
      },
      {
        "id": 41130693,
        "title": "Univariate Coppersmith Algorithm",
        "url": "https://boogiemath.org/notes/misc/notes-3.html"
      },
      {
        "id": 41149974,
        "title": "Can reading make you happier? (2015)",
        "url": "https://www.newyorker.com/culture/cultural-comment/can-reading-make-you-happier"
      },
      {
        "id": 41152249,
        "title": "So Who Is Building That 100k GPU Cluster for XAI?",
        "url": "https://www.nextplatform.com/2024/07/30/so-who-is-building-that-100000-gpu-cluster-for-xai/"
      },
      {
        "id": 41152198,
        "title": "HamClock – a real time space weather dashboard",
        "url": "https://www.clearskyinstitute.com/ham/HamClock/"
      },
      {
        "id": 41153039,
        "title": "Self-Compressing Neural Networks",
        "url": "https://arxiv.org/abs/2301.13142"
      },
      {
        "id": 41147643,
        "title": "Reverse engineering the 59-pound printer onboard the Space Shuttle",
        "url": "http://www.righto.com/2024/08/space-shuttle-interim-teleprinter.html"
      },
      {
        "id": 41111115,
        "title": "The Truth About Linear Regression (2015)",
        "url": "https://www.stat.cmu.edu/~cshalizi/TALR/"
      },
      {
        "id": 41146860,
        "title": "Clang vs. Clang",
        "url": "https://blog.cr.yp.to/20240803-clang.html"
      },
      {
        "id": 41137737,
        "title": "Mapping the Misuse of Generative AI",
        "url": "https://deepmind.google/discover/blog/mapping-the-misuse-of-generative-ai/"
      },
    ];
    this.loadStories();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadStories() {
    this.hackerNewsService.NewStories().subscribe((data: any[]) => {
    this.stories = data;
    console.log('22222222222222222', this.stories);

    this.dataSource = new MatTableDataSource<PeriodicElement>(this.stories)
    this.dataSource.paginator = this.paginator;
    });
  }

  // storyFilter(event: any) {
  //   const selectedStoryIds = event.value.map((story: any) => story);
  //   this.selectedStories = [];
  //   selectedStoryIds.forEach((storyId: any) => {
  //     this.getStoryDetails(storyId);
  //   });
  // }

  // getStoryDetails(storyId: any) {
  //   this.hackerNewsService.newStoriesList(storyId).subscribe((story: any) => {
  //     this.selectedStories.push(story);
  //   });
  // }
}
