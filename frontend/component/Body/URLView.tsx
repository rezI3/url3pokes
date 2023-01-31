import Link from "next/link";

type Props = {
  url: string,
}

const URLView = (props: Props) => {

  const url = props.url

  return (
    <div>
      {url === "" ? (
        <div>"ポケモンを3匹入力してね"</div>
      ) : url === "urlが存在してなかったよ" ? (
        <div>urlが紐づけられていません</div>
      ) : (
        <Link href={url} target="_blank">
          {url}
        </Link>
      )}
    </div>
  );
}

export default URLView;