import { Component } from "@angular/core";

@Component({
  selector: "datepicker-filter-example",
  templateUrl: "datepicker-filter-example.html"
})
export class DatepickerFilterExample {
  dateDepart = new Date(2017, 0, 1);

  minDate = new Date(2017, 0, 1);
  maxDate = new Date(2017, 11, 31);

  monFiltre = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Attention 0 => Diamche. Empêche de sélectionner le week-end :
    return day !== 0 && day !== 6;
  };
}
