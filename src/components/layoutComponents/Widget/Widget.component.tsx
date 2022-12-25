import { Container } from "@styles/Widget.style";
import { useRouter } from "next/router";
import { WidgetProps } from "@components/Widget/Widget.interface";

export const Widget = ({}: WidgetProps) => {
  const router = useRouter()

  const handleRedirect = async (path: string) => {
    await router.push(path)
  }

  return (
    <Container>
    </Container>
  )
}
