const firebase = require('firebase/app');
require('firebase/firestore');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCbEQ0X3_Gn9TkKxpqG95qDdCRQ4okpSDg",
    authDomain: "um6p-course-80ca4.firebaseapp.com",
    projectId: "um6p-course-80ca4",
    storageBucket: "um6p-course-80ca4.appspot.com",
    messagingSenderId: "1010908540209",
    appId: "1:1010908540209:web:8447f428912b07de071410"
  }

firebase.initializeApp(firebaseConfig);

// Access Firestore
const db = firebase.firestore();

// Data to add
const jobsData = [
  {
    "id": 1,
    "title": "The Art of Cooking",
    "body": "Discover the secrets of culinary excellence with this comprehensive guide to cooking techniques, recipes, and flavor combinations. From basic cooking skills to advanced culinary techniques, this book will elevate your cooking to new heights.",
    "tags": ["cooking", "recipes", "culinary"],
    "createdAt": "2024-05-10T08:30:00Z",
    "edited": ["2024-05-12T10:15:00Z", "2024-05-15T14:20:00Z"]
  },
  {
    "id": 2,
    "title": "The Joy of Gardening",
    "body": "Explore the wonders of gardening and cultivate your own paradise with this comprehensive guide. From choosing the right plants to nurturing your garden through all seasons, this book will inspire you to create beautiful outdoor spaces.",
    "tags": ["gardening", "plants", "landscaping"],
    "createdAt": "2024-06-05T09:45:00Z",
    "edited": ["2024-06-08T11:30:00Z", "2024-06-10T13:20:00Z"]
  },
  {
    "id": 3,
    "title": "The Science of Astronomy",
    "body": "Embark on a journey through the cosmos and uncover the mysteries of the universe with this captivating guide. From the birth of stars to the discovery of exoplanets, this book will expand your understanding of the cosmos.",
    "tags": ["astronomy", "space", "universe"],
    "createdAt": "2024-07-15T11:20:00Z",
    "edited": ["2024-07-18T14:10:00Z", "2024-07-20T16:30:00Z"]
  },
  {
    "id": 4,
    "title": "The Art of Photography",
    "body": "Capture the beauty of the world around you and express your creativity through photography. This comprehensive guide covers everything from basic camera settings to advanced composition techniques, helping you take stunning photos.",
    "tags": ["photography", "art", "creativity"],
    "createdAt": "2024-08-02T13:00:00Z",
    "edited": ["2024-08-05T10:45:00Z", "2024-08-07T12:15:00Z"]
  },
  {
    "id": 5,
    "title": "The History of Ancient Civilizations",
    "body": "Journey back in time and explore the rise and fall of ancient civilizations with this captivating history book. From the mighty empires of Egypt and Rome to the ancient cities of Mesopotamia, this book brings the past to life.",
    "tags": ["history", "civilizations", "ancient"],
    "createdAt": "2024-09-20T10:30:00Z",
    "edited": ["2024-09-23T09:15:00Z", "2024-09-25T11:20:00Z"]
  },
  {
    "id": 6,
    "title": "The Guide to Healthy Living",
    "body": "Take control of your health and well-being with this comprehensive guide to healthy living. From nutritious diet plans to effective exercise routines, this book will help you achieve a balanced and fulfilling lifestyle.",
    "tags": ["health", "wellness", "fitness"],
    "createdAt": "2024-10-12T08:15:00Z",
    "edited": ["2024-10-15T10:30:00Z", "2024-10-17T12:40:00Z"]
  },
  {
    "id": 7,
    "title": "The Art of Meditation",
    "body": "Discover inner peace and tranquility with this insightful guide to meditation. From mindfulness practices to guided visualization techniques, this book will help you cultivate a calm and centered mind.",
    "tags": ["meditation", "mindfulness", "spirituality"],
    "createdAt": "2024-11-01T09:00:00Z",
    "edited": ["2024-11-04T11:20:00Z", "2024-11-06T13:30:00Z"]
  },
  {
    "id": 8,
    "title": "The Essential Guide to Parenting",
    "body": "Navigate the challenges of parenthood and raise happy, healthy children with this indispensable guide. From newborn care to teenage discipline, this book provides practical advice for every stage of parenting.",
    "tags": ["parenting", "family", "children"],
    "createdAt": "2024-12-05T11:45:00Z",
    "edited": ["2024-12-08T13:30:00Z", "2024-12-10T15:40:00Z"]
  },
  {
    "id": 9,
    "title": "The Secrets of Successful Entrepreneurship",
    "body": "Unlock the secrets of successful entrepreneurship and build a thriving business with this insightful guide. From business planning to marketing strategies, this book offers practical advice for aspiring entrepreneurs.",
    "tags": ["entrepreneurship", "business", "success"],
    "createdAt": "2025-01-10T09:30:00Z",
    "edited": ["2025-01-13T11:45:00Z", "2025-01-15T13:50:00Z"]
  },
  {
    "id": 10,
    "title": "The Power of Positive Thinking",
    "body": "Harness the power of positive thinking and transform your life with this inspiring guide. From overcoming obstacles to achieving your goals, this book will help you cultivate a positive mindset and attract success.",
    "tags": ["positive thinking", "self-improvement", "success"],
    "createdAt": "2025-02-20T10:15:00Z",
    "edited": ["2025-02-23T12:20:00Z", "2025-02-25T14:30:00Z"]
  },
  {
    "id": 11,
    "title": "The Art of Public Speaking",
    "body": "Master the art of public speaking and captivate your audience with this comprehensive guide. From speech preparation to delivery techniques, this book will help you become a confident and effective speaker.",
    "tags": ["public speaking", "communication", "confidence"],
    "createdAt": "2025-03-15T08:45:00Z",
    "edited": ["2025-03-18T10:30:00Z", "2025-03-20T12:40:00Z"]
  },
  {
    "id": 12,
    "title": "The Guide to Financial Freedom",
    "body": "Take control of your finances and achieve financial freedom with this practical guide. From budgeting tips to investment strategies, this book will help you build wealth and secure your financial future.",
    "tags": ["finance", "money management", "investing"],
    "createdAt": "2025-04-10T09:00:00Z",
    "edited": ["2025-04-13T11:20:00Z", "2025-04-15T13:30:00Z"]
  },
  {
    "id": 13,
    "title": "The World of Fantasy Literature",
    "body": "Embark on a journey into the world of fantasy literature and explore magical realms, epic quests, and legendary creatures. From Tolkien to Rowling, this book celebrates the rich tradition of fantasy storytelling.",
    "tags": ["fantasy", "literature", "books"],
    "createdAt": "2025-05-05T10:30:00Z",
    "edited": ["2025-05-08T12:45:00Z", "2025-05-10T14:50:00Z"]
  },
  {
    "id": 14,
    "title": "The Guide to Healthy Relationships",
    "body": "Build strong and fulfilling relationships with this practical guide to healthy relationship dynamics. From communication skills to conflict resolution strategies, this book offers invaluable advice for maintaining happy and harmonious relationships.",
    "tags": ["relationships", "communication", "love"],
    "createdAt": "2025-06-15T11:00:00Z",
    "edited": ["2025-06-18T13:20:00Z", "2025-06-20T15:30:00Z"]
  },
  {
    "id": 15,
    "title": "The Art of Mindful Living",
    "body": "Embrace the present moment and cultivate a life of mindfulness with this insightful guide. From mindfulness exercises to meditation practices, this book will help you find peace and clarity in a hectic world.",
    "tags": ["mindfulness", "meditation", "well-being"],
    "createdAt": "2025-07-10T09:15:00Z",
    "edited": ["2025-07-13T11:30:00Z", "2025-07-15T13:40:00Z"]
  },
  {
    "id": 16,
    "title": "The Guide to Sustainable Living",
    "body": "Reduce your environmental footprint and live a more sustainable lifestyle with this practical guide. From eco-friendly tips to sustainable practices, this book will help you make positive changes for the planet.",
    "tags": ["sustainability", "environment", "green living"],
    "createdAt": "2025-08-20T10:45:00Z",
    "edited": ["2025-08-23T12:50:00Z", "2025-08-25T14:55:00Z"]
  },
  {
    "id": 17,
    "title": "The Science of Happiness",
    "body": "Unlock the secrets of happiness and lead a more fulfilling life with this insightful guide. From gratitude practices to positive psychology techniques, this book offers practical advice for cultivating happiness.",
    "tags": ["happiness", "well-being", "positive psychology"],
    "createdAt": "2025-09-05T11:30:00Z",
    "edited": ["2025-09-08T13:40:00Z", "2025-09-10T15:45:00Z"]
  },
  {
    "id": 18,
    "title": "The Guide to Effective Leadership",
    "body": "Develop your leadership skills and inspire others to greatness with this comprehensive guide. From vision casting to team building, this book offers practical strategies for becoming an effective and influential leader.",
    "tags": ["leadership", "management", "inspiration"],
    "createdAt": "2025-10-10T09:45:00Z",
    "edited": ["2025-10-13T11:50:00Z", "2025-10-15T13:55:00Z"]
  },
  {
    "id": 19,
    "title": "The Art of Time Management",
    "body": "Maximize your productivity and achieve your goals with this practical guide to time management. From prioritization techniques to productivity tools, this book will help you make the most of your time.",
    "tags": ["time management", "productivity", "efficiency"],
    "createdAt": "2025-11-15T10:00:00Z",
    "edited": ["2025-11-18T12:05:00Z", "2025-11-20T14:10:00Z"]
  },
  {
    "id": 20,
    "title": "The Guide to Creative Writing",
    "body": "Unlock your creativity and express yourself through writing with this comprehensive guide. From storytelling techniques to writing exercises, this book will help you unleash your imagination and become a better writer.",
    "tags": ["creative writing", "writing", "imagination"],
    "createdAt": "2025-12-05T11:15:00Z",
    "edited": ["2025-12-08T13:20:00Z", "2025-12-10T15:25:00Z"]
  }
]

 






// Function to add data to Firestore
const addJobsToFirestore = async (jobsData) => {
  try {
    // Loop through each job and add it to Firestore
    for (const job of jobsData) {
      // Use set with merge to add or update the document
      await db.collection('blogs').doc(job.id.toString()).set(job, { merge: true });
    }
    console.log("Jobs added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding jobs to Firestore: ", error);
  }
};

// Call the function to add jobs data to Firestore
addJobsToFirestore(jobsData);
