import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'employeeGender'  
})  
export class EmployeeGenderPipe implements PipeTransform {  
    transform(value: string, row: any): string {  
        if (row["gender"] == false)  
            return "Male";  
        else  
            return "Female";  
    }  
}  