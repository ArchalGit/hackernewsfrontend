import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  stories: any[] = [];
  selectedStories: any[] = [];
  searchQuery: string = '';

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories() {
    this.hackerNewsService.NewStories().subscribe((data: any[]) => {
      this.stories = data;
    });
  }

  storyFilter(event: any) {
    const selectedStoryIds = event.value.map((story: any) => story);
    this.selectedStories = [];
    selectedStoryIds.forEach((storyId: any) => {
      this.getStoryDetails(storyId);
    });
  }

  getStoryDetails(storyId: any) {
    this.hackerNewsService.newStoriesList(storyId).subscribe((story: any) => {
      this.selectedStories.push(story);
    });
  }
}
