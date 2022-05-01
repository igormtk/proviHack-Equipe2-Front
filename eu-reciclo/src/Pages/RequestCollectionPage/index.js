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
import { useResiduesContext } from "../../Contexts/residuesContext";

const RequestCollection = () => {
  const [locationModal, setLocationModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [oldTargetProduct, setOldTargetProduct] = useState("");
  const [info, setInfo] = useState({
    cep: "",
    state: "",
    city: "",
    district: "",
    street: "",
    number: "",
    complement: "",
    date: "",
    type: "",
    quantity: 0,
  });
  const { registerResidues } = useResiduesContext();

  const handleProducts = (e) => {
    if (oldTargetProduct) {
      oldTargetProduct.style.border = "3px solid transparent";
    }

    let newProduct = e.currentTarget.getAttribute("name");

    e.currentTarget.style.border = "3px solid #7B61FF";

    setOldTargetProduct(e.currentTarget);
    setInfo({ ...info, type: newProduct });
  };

  const handleForm = (e) => {
    e.preventDefault();
    let missing_fields = missingFieldsFunction(info);

    if (!!missing_fields[0]) {
      CustomToast(missing_fields);
    } else {
      // fazer a requisição
      toast.success("Solicitação feita com sucesso!");

      let { date, type, quantity, ...address } = info;
      let data = { date, type, quantity, address };

      registerResidues(data);
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
                value={info.quantity}
                onChange={(e) => setInfo({ ...info, quantity: e.target.value })}
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
          {/* <GreenButton variant="contained" onClick={handleMyAddress}>
            Usar meu endereço
          </GreenButton> */}
          {/* <GreenButton
            variant="contained"
            onClick={() => setOtherAddress(true)}
          >
            Usar outro endereço
          </GreenButton> */}

          <div>
            <label>Preencha o endereço para coleta:</label>
            <CssTextField
              fullWidth
              label="cep"
              name="cep"
              onChange={(e) => setInfo({ ...info, cep: e.target.value })}
              placeholder="CEP*"
              value={info.cep}
              variant="outlined"
            />

            <CssTextField
              fullWidth
              label="state"
              name="state"
              onChange={(e) => setInfo({ ...info, state: e.target.value })}
              placeholder="Estado*"
              value={info.state}
              variant="outlined"
            />

            <CssTextField
              fullWidth
              label="city"
              name="city"
              onChange={(e) => setInfo({ ...info, city: e.target.value })}
              placeholder="Cidade*"
              value={info.city}
              variant="outlined"
            />

            <CssTextField
              fullWidth
              label="district"
              name="district"
              onChange={(e) => setInfo({ ...info, district: e.target.value })}
              placeholder="Bairro*"
              value={info.district}
              variant="outlined"
            />

            <CssTextField
              fullWidth
              label="street"
              name="street"
              onChange={(e) => setInfo({ ...info, street: e.target.value })}
              placeholder="Rua*"
              value={info.street}
              variant="outlined"
            />

            <CssTextField
              fullWidth
              label="number"
              name="number"
              onChange={(e) => setInfo({ ...info, number: e.target.value })}
              placeholder="Cidade*"
              value={info.number}
              variant="outlined"
            />

            <CssTextField
              fullWidth
              label="complement"
              name="complement"
              onChange={(e) => setInfo({ ...info, complement: e.target.value })}
              placeholder="Cidade*"
              value={info.complement}
              variant="outlined"
            />
          </div>
        </BaseModal>
      )}
      {dateModal && (
        <BaseModal open={dateModal} handleClose={() => setDateModal(false)}>
          <input
            type="datetime-local"
            value={info.date}
            onChange={(e) => setInfo({ ...info, date: e.target.value })}
          />
        </BaseModal>
      )}
      <Toaster />
    </Container>
  );
};

export default RequestCollection;
