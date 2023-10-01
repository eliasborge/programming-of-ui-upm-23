import { Pipe, PipeTransform } from '@angular/core';
import Email from '../interfaces/Email';
import { PatternValidator } from '@angular/forms';
import { ParseTreeResult } from '@angular/compiler';

@Pipe({
  name: 'filterEmails',
})
export class FilterEmailsPipe implements PipeTransform {
  transform(emails: Email[], filterText: string, showEmptyBody: boolean): Email[] {
    if (!emails) return [];

    // Filter emails based on the provided filterText and showEmptyBody option
    return emails.filter((email) => {
      const containsFilterText =
        email.to.toLowerCase().includes(filterText.toLowerCase()) ||
        email.subject.toLowerCase().includes(filterText.toLowerCase());

      const hasEmptyBody = !email.body;

      if (!showEmptyBody) {
        return containsFilterText && !hasEmptyBody;
      } else {
        return containsFilterText;
      }
    });
  }
}
