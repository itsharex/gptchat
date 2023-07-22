import {PromptTable} from "@/model/prompt";
import {createKysely} from '@vercel/postgres-kysely';
import {UserTable} from "@/model/user";
import {TokenTable} from "@/model/token";

// https://github.com/vercel/storage/tree/main/packages/postgres-kysely
// https://kysely-org.github.io/kysely/classes/Kysely.html
interface Database {
    prompts: PromptTable;
    users:UserTable;
    tokens:TokenTable;
}

export const db = createKysely<Database>();
