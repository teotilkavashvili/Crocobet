import { Component, OnInit } from '@angular/core';
import { SlotCategoryService } from 'src/app/_services/slotCategory.service';
import { SlotproviderService } from 'src/app/_services/slotprovider.service';

@Component({
  selector: 'app-bannerContainer',
  templateUrl: './bannerContainer.component.html',
  styleUrls: ['./bannerContainer.component.scss'],
})
export class BannerContainerComponent implements OnInit {
  categories: any;
  providers: any;
  seeMoreLess: boolean = false;
  action = 'See More';

  category = 'desktop';
  constructor(
    private categoryService: SlotCategoryService,
    private providerService: SlotproviderService
  ) {}

  ngOnInit() {
    this.fillSlotCategoryGrid();
    this.getSlotPrividers();
  }

  fillSlotCategoryGrid() {
    this.categoryService.getSlotCategories().subscribe((categories: any) => {
      console.log(categories.data);
      this.categories = categories.data.filter(
        (el) => this.category == el?.platform
      );
      console.log(this.categories);
    });
  }

  getSlotPrividers() {
    this.providerService.getSlotProviders().subscribe((providers: any) => {
      this.providers = providers.data;
      console.log(this.providers);
    });
  }

  seeMore() {
    this.seeMoreLess = !this.seeMoreLess;
  }

  styleObject(): Object {
    if (this.seeMoreLess) {
      this.action = 'See Less';
      return { height: 'auto', overflow: 'auto' };
    } else {
      this.action = 'See More';
    }
    return [];
  }
}
