export interface IAlbum  {
    title: string,
    body: string,
    userId: number

};

export interface IPhoto  {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string

};

export interface IPhotoWithoutID  {
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string

};


export interface IPostForCreation  {
    title: string,
    body: string,
    userId: number,
  }

  export interface IUpdatedAfterCreation  {
    id: number,
    title: string,
    body: string,
    userId: number,
  }
