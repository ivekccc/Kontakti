import { Injectable } from '@angular/core';

import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc, 
  addDoc
  } from '@angular/fire/firestore';

  export interface Kontakt {
    id?: number;
    date: string;
    done: boolean;
    name: string;
    category: string;
    }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
