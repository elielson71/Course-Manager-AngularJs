import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Course} from './course';

@Component({
    selector:'app-course',
    templateUrl:'./list-course.component.html'
})
//classe de lista de cursos
 export class ListCourseComponent implements OnInit{
     _courses: Course[] = [];
     ngOnInit(): void {
        // ao iniciar o componente
        this.retrieveAll();
     }
     //recuperar todos os cursos
     retrieveAll():void{
         this._courses=[
         {
            id: 1,
            name:'Mat',
            imageurl:'',
            price:99.99,
            code: 'MAT-1234',
            duration: 120,
            rating: 4.5,
            releaseDate: 'janeiro,22,2021',
            description:'',
         },
         {
            id: 2,
            name:'POR',
            imageurl:'',
            price:55.99,
            code: 'POR-1234',
            duration: 200,
            rating: 4,
            releaseDate: 'janeiro,22,2021',
            description:'',
         }]
     }
 }
