import { faker } from "@faker-js/faker"
import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data"
import { nanoid } from "@reduxjs/toolkit"

const NUM_USERS = 3
const POSTS_PER_USER = 3
const RECENT_NOTIFICATIONS_DAYS = 7

const ARTIFICIAL_DELAY_MS = 2000

function delay(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}

let useSeededRNG = true;

if (useSeededRNG) {
    let randomSeededString = localStorage.getItem('randomTimestampSeed')
    let seedDate;
    if (randomSeededString) {
        seedDate = new Date(randomSeededString)
    } else {
        seedDate = new Date()
        randomSeededString = seedDate.toISOString()
        localStorage.setItem('randomTimestampSeed', randomSeededString)
    }
    faker.seed(seedDate.getTime())
}

function getRandomInt(min, max) {
    return faker.number.int({ min, max })
}

const randomFromArray = (array) => {
    const index = getRandomInt(0, array.length - 1)
    return array[index]
}

export const db = factory({
    user: {
        id: primaryKey(nanoid),
        firstName: String,
        lastName: String,
        name: String,
        username: String,
        posts: manyOf('post')
    },
    post: {
        id: primaryKey(nanoid),
        title: String,
        date: String,
        content: String,
        reactions: oneOf('reaction'),
        comments: manyOf('comment'),
        user: oneOf('user')
    },
    comment: {
        id: primaryKey(String),
        date: String,
        text: String,
        post: oneOf('post')
    },
    reaction: {
        id: primaryKey(nanoid),
        thumbsUp: Number,
        hooray: Number,
        heart: Number,
        rocket: Number,
        eyes: Number,
        post: oneOf('post'),
    },
})