import { Flat } from '../model/Flat';
import { Coordinates } from '../model/Coordinates';
import { FlatFilter } from '../model/FlatFilter';

export class GeneratedFlatsService {

  private readonly flats: Flat[];

  constructor() {
    this.flats = this.initFlats();
  }

  public getFlats(): Flat[] {
    return this.flats;
  }

  public getFlatsFiltered(filter: FlatFilter): Flat[] {
    return this.flats.filter(flat => {
      return (!filter.MinPrice || flat.price >= filter.MinPrice) &&
        (!filter.MaxPrice || flat.price <= filter.MaxPrice) &&
        (!filter.MinSize || flat.size >= filter.MinSize) &&
        (!filter.MaxSize || flat.size <= filter.MaxSize) &&
        (!filter.MinRooms || flat.rooms >= filter.MinRooms) &&
        (!filter.MaxRooms || flat.rooms <= filter.MaxRooms) &&
        (!filter.TopRight || (flat.coordinates.latitude <= filter.TopRight.latitude && flat.coordinates.longitude <= filter.TopRight.longitude)) &&
        (!filter.BottomLeft || (flat.coordinates.latitude >= filter.BottomLeft.latitude && flat.coordinates.longitude >= filter.BottomLeft.longitude));
    });
  }

  private initFlats(): Flat[] {
    const randomFlats = [
      new Flat('1', 'Cozy Studio', 'Downtown', 800, 40, 1, '123 Main St', ['image1', 'image2'], new Coordinates(49.9123, 14.2345)),
      new Flat('2', 'Spacious Loft', 'Uptown', 1200, 60, 2, '456 Elm St', ['image3', 'image4'], new Coordinates(49.9234, 14.2456)),
      new Flat('3', 'Modern Condo', 'Midtown', 2000, 80, 3, '789 Maple St', ['image5', 'image6'], new Coordinates(49.9345, 14.2567)),
      new Flat('4', 'Charming Brownstone', 'Brooklyn', 1500, 70, 2, '101 Pine St', ['image7', 'image8'], new Coordinates(49.9456, 14.2678)),
      new Flat('5', 'Rustic Farmhouse', 'Queens', 1000, 50, 1, '202 Oak St', ['image9', 'image10'], new Coordinates(49.9567, 14.2789)),
      new Flat('6', 'Beachfront Villa', 'The Hamptons', 5000, 200, 5, '303 Cedar St', ['image11', 'image12'], new Coordinates(49.9678, 14.2890)),
      new Flat('7', 'Luxury Penthouse', 'Manhattan', 7000, 300, 4, '404 Birch St', ['image13', 'image14'], new Coordinates(49.9789, 14.3001)),
      new Flat('8', 'Urban Apartment', 'Harlem', 900, 45, 1, '505 Spruce St', ['image15', 'image16'], new Coordinates(49.9900, 14.3112)),
      new Flat('9', 'Suburban House', 'Staten Island', 2500, 150, 3, '606 Willow St', ['image17', 'image18'], new Coordinates(50.0011, 14.3223)),
      new Flat('10', 'Downtown Loft', 'Downtown', 1800, 70, 2, '707 Maple St', ['image19', 'image20'], new Coordinates(50.0122, 14.3334)),
      new Flat('11', 'Historic Townhouse', 'Greenwich Village', 3000, 120, 3, '808 Oak St', ['image21', 'image22'], new Coordinates(50.0233, 14.3445)),
      new Flat('12', 'Modern Studio', 'Chelsea', 1100, 50, 1, '909 Cedar St', ['image23', 'image24'], new Coordinates(50.0344, 14.3556)),
      new Flat('13', 'Classic Brownstone', 'Brooklyn Heights', 1600, 75, 2, '1010 Pine St', ['image25', 'image26'], new Coordinates(50.0455, 14.3667)),
      new Flat('14', 'Contemporary Condo', 'Tribeca', 2200, 90, 3, '1111 Elm St', ['image27', 'image28'], new Coordinates(50.0566, 14.3778)),
      new Flat('15', 'Elegant Apartment', 'Upper East Side', 2500, 100, 2, '1212 Birch St', ['image29', 'image30'], new Coordinates(50.0677, 14.3889)),
      new Flat('16', 'Stylish Loft', 'SoHo', 2000, 85, 2, '1313 Spruce St', ['image31', 'image32'], new Coordinates(50.0788, 14.4000)),
      new Flat('17', 'Chic Studio', 'West Village', 1300, 55, 1, '1414 Willow St', ['image33', 'image34'], new Coordinates(50.0899, 14.4111)),
      new Flat('18', 'Spacious Duplex', 'East Village', 2700, 110, 3, '1515 Maple St', ['image35', 'image36'], new Coordinates(50.1010, 14.4222)),
      new Flat('19', 'Cozy Cottage', 'Astoria', 900, 40, 1, '1616 Oak St', ['image37', 'image38'], new Coordinates(50.1121, 14.4333)),
      new Flat('20', 'Luxury Villa', 'Long Island', 8000, 400, 6, '1717 Cedar St', ['image39', 'image40'], new Coordinates(50.1232, 14.4444))
    ];

    return randomFlats;
  }
}
