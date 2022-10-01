import { useState } from "react";
import Card from "./Card";
import "./BizAd.css";
import Title from "./Title";
import Search from "./Search";

function BizAd() {
  const cards = [
    {
      id: 1,
      name: "Playground",
      description: "Playground for children",
      adNumber: "100025",
      phoneNumber: "03-5550000",
      address: "Some street 5, Tel-Aviv",
      imageUrl:
        "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    },
    {
      id: 2,
      name: "Pet Store",
      description: "Agreat place to find a friend",
      adNumber: "100026",
      phoneNumber: "02-2200555",
      address: "Somewhere 10, Jerusalem",
      imageUrl:
        "https://images.unsplash.com/photo-1582068955580-dcc6c0812b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      name: "Sport Land",
      description: "Any sport aquipment",
      adNumber: "100027",
      phoneNumber: "04-7781000",
      address: "Another place 22/4, Haifa",
      imageUrl:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const [display, setDisplay] = useState("grid");

  const [offers, setOffers] = useState(cards);

  function searchOffers(value) {
    let filtered = cards.filter((o) =>
      o.name.toLowerCase().includes(value.toLowerCase())
    );
    setOffers(filtered);
  }

  return (
    <>
      <Title mainTxt="BizAd">
        <p className="fs-4">Advertising yourbusiness</p>
      </Title>

      <div className="row justify-content-between">
        <Search search={searchOffers} />

        <div className="d-flex justify-content-between flex-row-reverse px-1 pt-2 col-5 my-5 me-4">
          <div>
            <button
              onClick={(e) => setDisplay("list")}
              className="btn btn-default bg-primary m-2"
            >
              <i className="bi-list-ul text-white"></i>
            </button>
            <button
              onClick={(e) => setDisplay("grid")}
              className="btn btn-default bg-primary m-2"
            >
              <i className="bi-grid-3x3-gap-fill text-white"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={display}>
        {offers.map((card) => (
          <Card key={card.id} data={card} list={offers} />
        ))}
      </div>
    </>
  );
}

export default BizAd;
