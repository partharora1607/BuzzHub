import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

const generateRandomPosts = (numPosts) => {
  const posts = [];
  for (let i = 0; i < numPosts; i++) {
    posts.push({
      id: uuidv4(),
      title: faker.lorem.sentence(),
      src: faker.image.url(),
      time: faker.date.recent().toLocaleString(),
    });
  }
  return posts;
};

export const MYPOST = generateRandomPosts(20);
