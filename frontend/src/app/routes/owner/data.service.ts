import { Injectable } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  status: number;
  create_at: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Owner1',
    status: 0,
    create_at: '23/12/2020'
  },
  {
    id: 2,
    name: 'Owner2',
    status: 0,
    create_at: '23/12/2020'
  },
  {
    id: 3,
    name: 'Owner3',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 4,
    name: 'Owner4',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 5,
    name: 'Owner5',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 6,
    name: 'Owner6',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 7,
    name: 'Owner7',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 8,
    name: 'Owner8',
    status: 1,
    create_at: '23/12/2020'
  },
 
];

@Injectable()
export class OwnerDataService {
  getData() {
    return ELEMENT_DATA;
  }
}
