 
import {  uuid,pgTable, varchar } from "drizzle-orm/pg-core";


export const authorTable = pgTable("AUTHORS",{
    id: uuid().primaryKey().defaultRandom(),
    firstName : varchar({length:255}).notNull().unique(),
    lastName : varchar({length:255}),
    email : varchar({length:255}).notNull().unique()

})