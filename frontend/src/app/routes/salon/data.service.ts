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
    name: 'Salon1',
    status: 0,
    create_at: '23/12/2020'
  },
  {
    id: 2,
    name: 'Salon2',
    status: 0,
    create_at: '23/12/2020'
  },
  {
    id: 3,
    name: 'Salon3',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 4,
    name: 'Salon4',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 5,
    name: 'Salon5',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 6,
    name: 'Salon6',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 7,
    name: 'Salon7',
    status: 1,
    create_at: '23/12/2020'
  },
  {
    id: 8,
    name: 'Salon8',
    status: 1,
    create_at: '23/12/2020'
  },
 
];

@Injectable()
export class SalonDataService {
  getData() {
    return ELEMENT_DATA;
  }
}
