import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Context } from "../../App";
import { loadAppPosts } from "../../redux/actions/posts";
import { AllPosts } from "../AllPosts";
import { Button } from "../Button";
import { LikedPosts } from "../LikedPosts";
import { MarkedPosts } from "../MarkedPosts";

type Tabs = "all" | "liked" | "marked";

export const getTabList = (tab: Tabs) => {
  if (tab === "all") {
    return <AllPosts />;
  }

  if (tab === "liked") {
    return <LikedPosts />;
  }

  return <MarkedPosts />;
};

export const PostsTabs = () => {
  const { user } = useContext(Context);
  const [selectedTab, setSelectedTab] = useState<Tabs>("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAppPosts("") as any);
  }, []);

  if (!user) {
    return <AllPosts />;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button
          type={selectedTab === "all" ? "secondary2" : "primary"}
          onClick={() => {
            setSelectedTab("all");
          }}
          text="All"
        />
        <Button
          type={selectedTab === "liked" ? "secondary2" : "primary"}
          onClick={() => {
            setSelectedTab("liked");
          }}
          text="Liked"
        />
        <Button
          type={selectedTab === "marked" ? "secondary2" : "primary"}
          onClick={() => {
            setSelectedTab("marked");
          }}
          text="Marked"
        />
      </div>
      {getTabList(selectedTab)}
    </>
  );
};
