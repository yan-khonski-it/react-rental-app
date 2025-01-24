import { FlatService } from '../../src/service/FlatService';
import { FlatGenerator } from '../../src/service/FlatGenerator';
import { Flat } from '../../src/model/Flat';
import { FlatFilter } from '../../src/model/FlatFilter';
import { Coordinates } from '../../src/model/Coordinates';

describe('FlatService', () => {
    const flatService: FlatService = new FlatService(new FlatGenerator());

    beforeEach(() => {
        
    });

    it('should return all flats', () => {
        const result = flatService.getFlats();

        expect(result).toContainEqual(new Flat('7', 'Luxury Penthouse', 'Manhattan', 7000, 300, 4, '404 Birch St', ['image13', 'image14'], new Coordinates(49.9789, 14.3001)));
        expect(result.length > 10);
    });

    it('should return all the flats for empty filter', () => {
        const flatFilter = new FlatFilter();

        const emotyFilterResult = flatService.getFlatsFiltered(flatFilter);
        const allFlats = flatService.getFlats();

        expect(emotyFilterResult).toEqual(allFlats);
    });

    it('should return filtered flats by price', () => {
        const flatFilter = new FlatFilter();
        flatFilter.MinPrice = 1000;

        const result = flatService.getFlatsFiltered(flatFilter);

        for (const flat of result) {
            expect(flat.price).toBeGreaterThanOrEqual(1000);
        }
    });
});