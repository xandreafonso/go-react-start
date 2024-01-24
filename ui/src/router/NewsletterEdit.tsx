import { useParams } from "react-router-dom"

export function NewsletterEditPage() {

  const { code } = useParams()

  return <>Editando a newsletter {code}</>
}