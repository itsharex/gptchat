import {cookies} from "next/headers";
import {jsonData} from "@/app/api/check-auth";
import {findTokenById} from "@/model/token";

export async function GET(req: Request): Promise<Response> {
    const uid = cookies().get('uid')?.value || '-1';
    const token = cookies().get('token')?.value || '';
    const t = await findTokenById(parseInt(uid));
    if (!t ||t.token !== token) {
        return jsonData(undefined, 401, 'logout failed')
    }
    const resp = jsonData(undefined, 200, 'logout success')
    cookies().getAll().forEach(v => {
        resp.cookies.delete(v.name)
    });
    return resp
}
