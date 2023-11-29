export interface Hotel {
  hotelName: string;
  hotelImageUrl: string;
  hotelMapImageUrl: string;
  mapUrl: string;
  YoutubeUrl: string;
  access: string;
  position: {
    latitude: number;
    longitude: number;
  };
  [key: string]: any;
}
