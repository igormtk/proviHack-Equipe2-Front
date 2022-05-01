import { useState } from 'react'

const useFormHook = (initialState) => {
    const [form, setForm] = useState(initialState);

    const handleInputOnChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    const clear = () => {
      setForm(initialState);
    };

    return { form, handleInputOnChange, clear, setForm };
  };

  export default useFormHook;  