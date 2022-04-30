import toast from "react-hot-toast";

export const CustomToast = (missing_fields) => {
  toast.error(
    (t) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p>Por favor preencha os campos:</p>
          <ul>
            {missing_fields.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#7B61FF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => toast.dismiss(t.id)}
          >
            Fechar
          </button>
        </div>
      </div>
    ),
    { duration: 20000 }
  );
};
