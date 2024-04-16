import { IAlbum, IPhoto, IPhotoWithoutID, IPostForCreation, IUpdatedAfterCreation } from "../models/model";

export const expectedAlbum: IAlbum  = {
    title: "qwerty",
    body: "qwerty",
    userId: 2

};

export const expectedPhoto: IPhoto = {
    albumId: 1,
    id: 3,
    title: "voluptatem consequatur tot",
    url: "https://via.placeholder.com/600/5e0466",
    thumbnailUrl: "https://via.placeholder.com/150/5e0466"

};

export const expectedPhotoWithoutID: IPhotoWithoutID = {
    id: 3,
    title: "voluptatem consequatur qqq",
    url: "https://via.placeholder.com/600/5e0461",
    thumbnailUrl: "https://via.placeholder.com/150/5e0466"

};


export const expectedPostForCreation: IPostForCreation = {
    title: "foo",
    body: "boo",
    userId: 2,

};

export const expectedUpdatedAfterCreation: IUpdatedAfterCreation = {
    id: 3,
    title: "foo1",
    body: "foo2",
    userId: 2,

};




 

  