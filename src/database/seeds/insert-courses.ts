import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "TypeScript" },
        { name: "Express.js" },
        { name: "Banco de Dados" },
        { name: "Query Builder" },
    ]);
}
