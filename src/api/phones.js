import http from "@utils/http.js"
//书籍列表
export const goosList = ()=>http.get("/app/mock/226738/goods/gooslist")