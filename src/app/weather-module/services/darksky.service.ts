import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class DarkSkySearchService {

    // search(term: string) {
    //     const search = new URLSearchParams();
    //     search.set('action', 'opensearch');
    //     search.set('search', term);
    //     search.set('format', 'json');

    //     return this._jsonp.get('http://en.wikipedia.org/w/api.php?callback?=JSONP_CALLBACK', { search })
    //     .map(response => response.json()[1]);
    // }
}
