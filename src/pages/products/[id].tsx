import type { NextPage } from 'next'
import { useRouter } from "next/router"
// useRouterフックを利用することでアクセスしてきたURLによって動的にページの内容を変更することができます。

const Test: NextPage = () => {
  const router = useRouter();
  console.log(router.query)
  return <h1>商品{router.query.id}のページです</h1>;
}

export default Test
