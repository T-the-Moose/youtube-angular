import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

    private readonly sanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
