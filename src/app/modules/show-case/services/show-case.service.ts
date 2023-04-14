import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-700x860-1471088710.jpg"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
