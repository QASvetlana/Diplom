import superagent  from "superagent";
import { expectedAlbum, expectedPhoto, expectedPhotoWithoutID, expectedPostForCreation, expectedUpdatedAfterCreation } from "../data/testData/expectedData";

describe("photos", () => {
  test("Пользователь может получить все фото в альбоме по его Id", async () => {
  const users = await superagent.get("https://jsonplaceholder.typicode.com/albums/1/photos");
  expect(users.text).toContain("https://via.placeholder.com/600/");
  expect(users.status).toBe(200);
  });

 test("Пользователь может получить конкретное фото по его Id", async () => {
 const users = await superagent.get("https://jsonplaceholder.typicode.com/albums/2/photos");
 expect(users.text).toContain("https://via.placeholder.com/");
 expect(users.status).toBe(200);
  });

test("Пользователь может загрузить новое фото", async () => {
const users = await superagent
    .post("https://jsonplaceholder.typicode.com/albums/3/photos")
    .set("Content-Type", "application/json")
    .send(expectedPhoto)
     expect(users.status).toBe(201);
     expect(users.body.title).toEqual(expectedPhoto.title);
     expect(users.body.url).toEqual(expectedPhoto.url);
     expect(users.body.thumbnailUrl).toEqual(expectedPhoto.thumbnailUrl);
     });

test("Пользователь может загрузить новое фото, не указав albumId.", async () => {
const users = await superagent
    .post("https://jsonplaceholder.typicode.com/albums/3/photos")
    .set("Content-Type", "application/json")
    .send(expectedPhotoWithoutID)
    expect(users.status).toBe(201);
    expect(users.body.title).toEqual(expectedPhotoWithoutID.title);
    expect(users.body.url).toEqual(expectedPhotoWithoutID.url);
    expect(users.body.thumbnailUrl).toEqual(expectedPhotoWithoutID.thumbnailUrl);
    });
});
