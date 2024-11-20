export const queries = {
    readAll:
        `SELECT * FROM pokemon`,
    readById:
        `SELECT * FROM pokemon WHERE id = ?`,
    create:
        `INSERT INTO \`pokemon\` (\`id\`, \`name\`, \`height\`, \`weight\`, \`type1\`, \`type2\`, \`image\`)
        VALUES (null, ?, ?, ?, ?, ?, ?)`,
    update:
        `UPDATE pokemon
        SET name = ?, height = ?, weight = ?, type1 = ?, type2 = ?, image = ?
        WHERE id = ?`,
    delete:
        `DELETE FROM pokemon WHERE id = ?`,
}