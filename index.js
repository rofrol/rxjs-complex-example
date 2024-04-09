import { timer, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const localObservable = timer(0, 5000).pipe(map(
    val => 'local'+val
));
const globalObservable = timer(0, 1000).pipe(map(
 val => 'global'+val
));

const subscribe = combineLatest([localObservable, globalObservable]).pipe(
    map(([localData, globalData]) => `${localData} ${globalData}`)
).subscribe(console.log);
