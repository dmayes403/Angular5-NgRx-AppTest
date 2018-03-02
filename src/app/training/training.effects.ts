import { Effect, Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

import * as Training from './training.actions';
import * as fromTraining from './training.reducer';
import { Exercise } from './exercise.model';


export class TrainingEffects {
    @Effect()
    fetchTrainings = this.actions$
        .ofType(Training.FETCH_TRAININGS)
        .switchMap((action: Training.FetchTrainings) => {
            return this.httpClient.get<Exercise[]>('https://ng-fitness-tracker-e3f9b.firebaseio.com/availableExercises.json', {
                observe: 'body',
                responseType: 'json'
            });
        })
        .map(availableExercises => {
            console.log(availableExercises);
            return new Training.FetchTrainingsTest(availableExercises);
        });


    constructor(
        private actions$: Actions,
        private httpClient: HttpClient
    ) {}
}


// return [
//     {
//         id: '123',
//     name: 'test',
//     duration: 10,
//     calories: 5,
//     state: 'completed'
//     }
// ];
