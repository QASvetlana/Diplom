import superagent  from "superagent";
import { expectedAlbum, expectedPhoto, expectedPhotoWithoutID, expectedPostForCreation, expectedUpdatedAfterCreation } from "../data/testData/expectedData"; 

describe("posts", () => {
    test("Пользователь может получить все посты", async () => {
    const users = await superagent.get("https://jsonplaceholder.typicode.com/posts");
    expect(users.text).toContain("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(users.status).toBe(200);
    });

    test("Пользователь может получить пост по его Id", async () => {
    const users = await superagent.get("https://jsonplaceholder.typicode.com/posts/17");
    expect(users.status).toBe(200);
    expect(users.text).toContain("fugit voluptas sed molestias voluptatem provident");
    });

    test("Пользователь может получить все посты для конкретного пользователя по userId", async () => {
    const users = await superagent.get("https://jsonplaceholder.typicode.com/posts/17");
    expect(users.status).toBe(200);
    expect(users.body).toBeTruthy;
    });
              
    test("Пользователь может получить все комментарии к посту по его Id", async () => {
    const users = await superagent.get("https://jsonplaceholder.typicode.com/comments/5");
    expect(users.status).toBe(200);
    expect(users.body).toBeTruthy;
    });

    test("Пользователь может создать новый пост", async () => {
    const users = await superagent
    .post("https://jsonplaceholder.typicode.com/posts")
    .set("Content-Type", "application/json")
    .send(expectedPostForCreation)
    expect(users.status).toBe(201);
    expect(users.body.title).toEqual(expectedPostForCreation.title);
    expect(users.body.body).toEqual(expectedPostForCreation.body);
    expect(users.body.userId).toEqual(expectedPostForCreation.userId);
    });  

    test("Пользователь может обновить заголовок (title) существующего поста", async () => {
    const users = await superagent
    .put("https://jsonplaceholder.typicode.com/posts/1")
    .set("Content-Type", "application/json")
    .send(expectedUpdatedAfterCreation)
    expect(users.status).toBe(200);
    expect(users.body.title).toEqual(expectedUpdatedAfterCreation.title);
    });  

    test("Пользователь может удалить пост по Id", async () => {
    const users = await superagent
    .delete("https://jsonplaceholder.typicode.com/posts/10")
    expect(users.status).toBe(200);
    });  
});




