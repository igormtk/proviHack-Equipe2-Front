import React, { useState } from "react";
import SelectButton from "../../Components/SelectButton";
import ping from "../../Assets/Icons/ping.png";
import calendar from "../../Assets/Icons/calendar.png";
import glass from "../../Assets/Icons/glass.png";
import paper from "../../Assets/Icons/paper.png";
import union from "../../Assets/Icons/union.png";
import house from "../../Assets/Icons/house.png";
import { PageBox, Container, CssTextField, QuestionBox } from "./style.js";
import BaseModal from "../../Components/Modal";
import { toast, Toaster } from "react-hot-toast";
import { CustomToast } from "../../Helpers/Toast";
import Header from "../../Components/Header/Header";
import { missingFieldsFunction } from "../../Helpers/HelperFunctions";
import { useResiduesContext } from "../../Contexts/residuesContext";
import Footer from "../../Components/Footer";
import SecondaryButton from "../../Components/SecondaryButton";
import { ViaCep } from "../../Services";

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
      let { date, type, quantity, ...address } = info;
      let data = { date, type, quantity, address };

      registerResidues(data);
    }
  };

  const handleCep = (e) => {
    setInfo({ ...info, cep: e.target.value });
    let validCep = e.target.value;

    if (validCep.length >= 8) {
      validCep = validCep.replace("-", "");

      if (validCep.length === 8) {
        ViaCep.get(`/${validCep}/json/`)
          .then((res) => {
            setInfo({
              ...info,
              cep: res.data["cep"],
              state: res.data["uf"],
              city: res.data["localidade"],
              district: res.data["bairro"],
              street: res.data["logradouro"],
              complement: res.data["complemento"],
            });
          })
          .catch((e) => console.log(e));
      }
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
                text="Vidro / Plástico "
                name="vidro ou plastico"
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
                IconPicture={house}
                customColor="pink"
                text="Alumínio"
                name="alumínio"
                onClick={(e) => handleProducts(e)}
              />
              <SelectButton
                IconPicture={union}
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
            <h2>3 - Quantidade de Sacos Pláticos</h2>
            <div className="cards__box box3">
              <input
                type="number"
                className="input_quantity"
                value={info.quantity}
                onChange={(e) => setInfo({ ...info, quantity: e.target.value })}
              />
              <SecondaryButton children="Enviar" onClick={handleForm} />
            </div>
          </QuestionBox>
        </div>
      </PageBox>

      {locationModal && (
        <BaseModal
          open={locationModal}
          handleClose={() => setLocationModal(false)}
        >
          <div>
            <label>Preencha o endereço para coleta:</label>
            <CssTextField
              fullWidth
              label="cep"
              name="cep"
              // onChange={(e) => setInfo({ ...info, cep: e.target.value })}
              onChange={(e) => handleCep(e)}
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
      <Footer />
    </Container>
  );
};

export default RequestCollection;
