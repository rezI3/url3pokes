import Button from '@mui/material/Button';

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
        <Button href={url} target="_blank" variant="contained" color="primary">
          "URLに飛ぶ"
        </Button>
      )}
    </div>
  );
}

export default URLView;