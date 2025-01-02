import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {


    await db.insert(Clients).values([
        { id: 1, name: "Kasim", age: 25, isActive: true },
        { id: 2, name: "Boris", age: 40, isActive: true },
        { id: 3, name: "Pame", age: 38, isActive: true },
        { id: 4, name: "Mate", age: 19, isActive: true },
        { id: 5, name: "Criss", age: 32, isActive: false },
    ]);

    console.log('Seeding database...');
}
