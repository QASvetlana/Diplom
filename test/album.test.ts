import superagent  from "superagent";
import { expectedAlbum, expectedPhoto, expectedPhotoWithoutID, expectedPostForCreation, expectedUpdatedAfterCreation } from "../data/testData/expectedData";

describe("albums", () => {
  test("Пользователь может получить все альбомы", async () => {
  const users = await superagent.get("https://jsonplaceholder.typicode.com/albums/");
  expect(users.text).toContain("quidem molestiae enim");
  expect(users.status).toBe(200);
  });

 test("Пользователь может получить альбом по его Id", async () => {
 const users = await superagent.get("https://jsonplaceholder.typicode.com/albums/4");
 expect(users.text).toContain("non esse culpa molestiae omnis sed optio");
 expect(users.status).toBe(200);
  });

 test("Пользователь может получить все альбомы конкретного пользователя по userId", async () => {
 const users = await superagent.get("https://jsonplaceholder.typicode.com/albums/4");
 expect(users.status).toBe(200);
 expect(users.body).toBeTruthy;
  });

 test("Пользователь может добавить новый альбом", async () => {
 const users = await superagent
   .post("https://jsonplaceholder.typicode.com/albums")
   .set("Content-Type", "application/json")
   .send(expectedAlbum)
    expect(users.status).toBe(201);
    expect(users.body.title).toEqual(expectedAlbum.title);
    expect(users.body.body).toEqual(expectedAlbum.body);
    expect(users.body.userId).toEqual(expectedAlbum.userId);
    });  
});
