import { useState } from 'react';
import { useUser } from '../context/userContext';

export const FormLogin = () => {
  const [formValues, setFormValues] = useState({ name: '', password: '' });
  const [formErrors, setFormErros] = useState({ name: '', password: '', form: '' });
  const { handleLogin } = useUser();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((values) => ({ ...values, [name]: value }));
    setFormErros((values) => ({ ...values, [name]: !value ? 'Campo obrigatório' : '', form: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formValues.name || !formValues.password) {
      const nameMessageError = !formValues.name ? 'Campo obrigatório' : '';
      const passwordMessageError = !formValues.password ? 'Campo obrigatório' : '';

      setFormErros({ name: nameMessageError, password: passwordMessageError });

      return;
    }

    const login = handleLogin(formValues);

    if (login) {
      alert('Login Efetuado com sucesso!');
      return;
    }

    setFormErros((values) => ({ ...values, form: 'Falha ao efetuar o login.' }));
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input id='name' name='name' value={formValues.name} onChange={handleChange} />
          {formErrors.name && <p>{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor='password'>Senha:</label>
          <input
            id='password'
            name='password'
            type='password'
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <p>{formErrors.password}</p>}
        </div>

        {formErrors.form && <p>{formErrors.form}</p>}

        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};
