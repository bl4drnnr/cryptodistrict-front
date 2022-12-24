import { LoadingBackground, LoadingSpinner } from "@styles/Loader.style";
import { LoaderProps } from "@components/Loader/Loader.interface";

export const Loader = ({ loading }: LoaderProps) => {
  return (
    <>
      {loading ? (
        <LoadingBackground>
          <LoadingSpinner />
        </LoadingBackground>
      ): (<></>)}
    </>
  )
}
