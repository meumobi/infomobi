import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@models/item.interface';
import { ApiService } from '@providers/api';

@Injectable()
export class ItemsService  {

  constructor(
    public http: HttpClient,
    public apiService: ApiService,
  ) {}

  fetchById(id: string): Promise<Item> {
    return this.apiService.fetchItemById(id);
  }

  fetchAll(): Promise<Item[]> {
    return this.apiService.fetchLatestItems();
  }

  fetchByCategory(id: number): Promise<Item[]> {
    return this.apiService.fetchItemsByCategory(id);
  }
}
