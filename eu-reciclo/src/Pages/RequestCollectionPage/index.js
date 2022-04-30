import React, { useState } from "react";
import SelectButton from "../../Components/SelectButton";
import ping from "../../Assets/Icons/ping.png";
import calendar from "../../Assets/Icons/calendar.png";
import glass from "../../Assets/Icons/glass.png";
import paper from "../../Assets/Icons/paper.png";
import game from "../../Assets/Icons/game.png";
import house from "../../Assets/Icons/house.png";
import send from "../../Assets/Icons/send.png";
import {
  PageBox,
  Container,
  CssTextField,
  GreenButton,
  QuestionBox,
} from "./style.js";
import BaseModal from "../../Components/Modal";
import { toast, Toaster } from "react-hot-toast";
import { CustomToast } from "../../Helpers/Toast";
import Header from "../../Components/Header/Header";
import { missingFieldsFunction } from "../../Helpers/HelperFunctions";

const RequestCollection = () => {
  const [locationModal, setLocationModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [otherAddress, setOtherAddress] = useState(false);
  const [info, setInfo] = useState({
    address: "",
    dateTime: "",
    products: [],
    sacas: 0,
  });

  const handleMyAddress = () => {
    setOtherAddress(false);
    setInfo({ ...info, address: "address from api" });
    setLocationModal(false);
  };

  const handleProducts = (e) => {
    let product = e.currentTarget.getAttribute("name");
    let new_products = [...info.products];

    if (info.products.includes(product)) {
      new_products = new_products.filter((e) => e !== product);
      e.currentTarget.style.border = "3px solid transparent";
    } else {
      new_products.push(product);
      e.currentTarget.style.border = "3px solid #7B61FF";
    }

    setInfo({ ...info, products: new_products });
  };

  const handleForm = (e) => {
    e.preventDefault();
    let missing_fields = missingFieldsFunction(info);

    if (!!missing_fields[0]) {
      CustomToast(missing_fields);
    } else {
      // fazer a requisição
      toast.success("Solicitação feita com sucesso!");
      // console.log(info);
    }
  };

  return (
    <Container>
      <Header />
      <PageBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <QuestionBox>
            <h2>1 - Solicitar Coleta</h2>
            <div className="cards__box">
              <SelectButton
                IconPicture={ping}
                customColor="green"
                text="Local"
                onClick={() => setLocationModal(true)}
              />
              <SelectButton
                IconPicture={calendar}
                customColor="blue"
                text="Data e Hora"
                onClick={() => setDateModal(true)}
              />
            </div>
          </QuestionBox>
          <QuestionBox>
            <h2>2 - Qual Produto deseja reciclar?</h2>
            <div className="cards__box">
              <SelectButton
                IconPicture={glass}
                customColor="green"
                text="Vidro"
                name="vidro"
                onClick={(e) => handleProducts(e)}
              />
              <SelectButton
                IconPicture={paper}
                customColor="blue"
                text="Papel"
                name="papel"
                onClick={(e) => handleProducts(e)}
              />
              <SelectButton
                IconPicture={game}
                customColor="pink"
                text="Eletrônicos"
                name="eletrônicos"
                onClick={(e) => handleProducts(e)}
              />
              <SelectButton
                IconPicture={house}
                customColor="green"
                text="Entulho"
                name="entulho"
                onClick={(e) => handleProducts(e)}
              />
            </div>
          </QuestionBox>
        </div>
        <div>
          <QuestionBox>
            <h2>3 - Quantidade de Sacas</h2>
            <div className="cards__box box3">
              <input
                className="input_quantity"
                value={info.sacas}
                onChange={(e) => setInfo({ ...info, sacas: e.target.value })}
              />
              <SelectButton
                IconPicture={send}
                customColor="pink"
                text="Enviar"
                onClick={handleForm}
              />
            </div>
          </QuestionBox>
        </div>
      </PageBox>

      {locationModal && (
        <BaseModal
          open={locationModal}
          handleClose={() => setLocationModal(false)}
        >
          <GreenButton variant="contained" onClick={handleMyAddress}>
            Usar meu endereço
          </GreenButton>
          <GreenButton
            variant="contained"
            onClick={() => setOtherAddress(true)}
          >
            Usar outro endereço
          </GreenButton>

          {otherAddress && (
            <div>
              <label>Usar outro endereço:</label>
              <CssTextField
                fullWidth
                label="Endereço"
                name="address"
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
                placeholder="Endereço*"
                value={info.address}
                variant="outlined"
              />
            </div>
          )}
        </BaseModal>
      )}
      {dateModal && (
        <BaseModal open={dateModal} handleClose={() => setDateModal(false)}>
          <input
            type="datetime-local"
            value={info.dateTime}
            onChange={(e) => setInfo({ ...info, dateTime: e.target.value })}
          />
        </BaseModal>
      )}
      <Toaster />
    </Container>
  );
};

export default RequestCollection;
