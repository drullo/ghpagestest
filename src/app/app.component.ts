import { DialogComponent } from './dialog/dialog.component';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private popup: MatDialog, fs: AngularFirestore) {
    /*Observable.from(
      fs.collection('users').add({
        firstName: 'Laura'
      })
    )
    .subscribe(
      (docRef) => console.log('added', docRef.id),
      err => console.log(err)
    );*/

    Observable.from(
      fs.collection('users').ref.get()
    )
    .subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data().firstName);
      });
    });
  }

  showDialog() {
    this.popup.open(DialogComponent);
  }
}
