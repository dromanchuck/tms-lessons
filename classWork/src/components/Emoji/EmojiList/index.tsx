import { ChangeEventHandler, useState } from "react";
import { Input } from "../../Input";
import { EmojiRow } from "../EmojiRow";

interface IEmoji {
  symbol: string;
  title: string;
  keywords: string;
}

interface IProps {
  emojies: IEmoji[];
}

export const EmojiList = ({ emojies }: IProps) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  const filteredEmojies = emojies.filter((item) => {
    if (
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.keywords.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return true;
    }

    return false;
  });

  return (
    <>
      <Input value={searchText} onChange={handleOnChange} />
      {filteredEmojies.map((item, index) => {
        return <EmojiRow key={index} title={item.title} symbol={item.symbol} />;
      })}
    </>
  );
};
