
import { pgTable, PgTable ,text, varchar, uuid } from "drizzle-orm/pg-core";
import type { InferSelectModel,InferInsertModel } from "drizzle-orm";
import { authorTable } from "./author.model.js";


export const bookstable = pgTable("BOOKS",{
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length:255}).notNull(),
    description: text(),
    authodID : uuid()
    .references(()=> authorTable.id)
    .notNull()

})

export type selectBook = InferSelectModel<typeof bookstable>
export type insertBook = InferInsertModel<typeof bookstable>