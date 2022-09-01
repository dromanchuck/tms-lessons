interface IProps {
  symbol: string;
  title: string;
}

export const EmojiRow = ({ symbol, title }: IProps) => {
  return (
    <li>
      {symbol} {title}
    </li>
  );
};
