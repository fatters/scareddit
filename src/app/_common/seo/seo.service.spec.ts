import { SeoService } from './seo.service';
import { Meta, Title } from '@angular/platform-browser';

describe('SeoService', () => {
  let testSubject: SeoService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    titleService = new Title({});
    metaService = new Meta({});
    testSubject = new SeoService(titleService, metaService);
  });

  describe('#setTitleAndDescription()', () => {

    beforeEach(() => {
      spyOn(titleService, 'setTitle').and.callFake(() => null);
      spyOn(metaService, 'updateTag').and.callFake(() => null);
    });

    it('calls Angular title service with the given title', () => {
      // Given
      const someTitle = 'some title';

      // When
      testSubject.setTitleAndDescription(someTitle, '');

      // Then
      expect(titleService.setTitle).toHaveBeenCalledWith(someTitle);
    });

    it('calls Angular meta service to build a description tag with given description', () => {
      // Given
      const someDescription = 'some description';

      // When
      testSubject.setTitleAndDescription('', someDescription);

      // Then
      expect(metaService.updateTag).toHaveBeenCalledWith({
        name: 'description',
        content: someDescription
      });
    });
  });
});
