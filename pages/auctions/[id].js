import React from "react";
import Auction from "../../components/auctions/Auction";
import { getApi } from "../../api/Api";

const AuctionPage = (props) => {
  return <Auction {...props} />;
};

AuctionPage.getInitialProps = async (ctx) => {
  const { id } = await ctx.query;
  const auctionData = await getApi().get(`auctions/${await id}`);
  const { id_barang, id_user } = await auctionData.data;
  const itemData = await getApi().get(`items/${id_barang}`);
  const ownerData = await getApi().get(`users/${id_user}`);
  return {
    itemData: itemData.data,
    auctionData: auctionData.data,
    ownerData: ownerData.data,
  };
};
export default AuctionPage;
