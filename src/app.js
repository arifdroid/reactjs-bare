import { of, fromEvent, from, Observable, observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

//example test 1
// of(1, 2, 3).pipe(
//     map(x => x * x)
// ).subscribe(data => console.log(data));

//example test 2
// fromEvent(document, 'click').pipe(
//     scan(count => count +1, 0)

// ).subscribe(count=>{
//     console.log(`Clicked ${count} times`)
// })

//example test 3
// const arraySource = from([1,2,3,4,5,6]);
// arraySource.subscribe(val=>console.log('val', val))

//example test 4
// const observable = new Observable(subscriber => {
//     subscriber.next(1);
//     subscriber.next(2);
//     // throw 'this is an error'
//     subscriber.next(3);
//     setTimeout(() => {
//         subscriber.next(4);
//         subscriber.complete;
//     }, 1000);
// })

// observable.subscribe(val => console.log(val),
//     err => console.log('err', err),
//     () => {
//         console.log('completed')
//     }

// )

// example
document.body.innerHTML = '<p>Loading...</p>';

//mimick get request 
const myPromise = new Promise((resolve, reject) => {
    console.log('Creating Promise');
    setTimeout(() => {
            resolve({
                title:'Web Demo RXJS',
                message:'hello there',            
            })
    }, 3300);
})

const observableFromPromise = from(myPromise);

observableFromPromise.subscribe(data =>{
    document.body.innerHTML = '';

    for(let key in data){
        document.body.insertAdjacentHTML('beforebegin' , '<p>'+data[key]+'</p>');
    }
})