import { filter, from, map, of, switchMap, tap } from "rxjs";
import teachers from "./teachers";
import students from "./students";

const teachers$ = from(teachers);
const students$ = (id: number) =>
  of(students.filter((student) => student.teacherId === id));

const subscription = teachers$
  .pipe(
    switchMap((teacher) =>
      of(teacher).pipe(
        filter((teacher) => teacher.age > 60),
        switchMap((teacher) => students$(teacher.id)),
        map((students) => ({ students: students.length, teacher }))
      )
    )
  )
  .subscribe((t) => console.log(t));
