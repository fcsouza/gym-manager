import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import {
  Container,
  FormBox,
  ButtonCancel,
  ButtonCreate,
} from '../../styles/global';
import Filter from '../../components/Filter';
import api from '../../services/api';
import Input from '../../components/Form/input';
import start from '../../assets/images/start.png';
import { Plans } from './styles';

export default function Plano() {
  const formRef = useRef(null);

  const [plans, setPlans] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editionForm, setEditionForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [initialData, setInitialData] = useState({});

  async function loadPlans() {
    const response = await api.get('plans');
    setPlans(response.data);

    const res = await api.get('registrations');
    setRegistrations(res.data);
  }

  useEffect(() => {
    loadPlans();
  }, []);

  async function handleSubmit(data) {
    if (editionForm) {
      try {
        await api.put(`plans/${initialData.id}`, data);

        loadPlans();
        setShowForm(false);
        setEditionForm(false);
        setInitialData({});
        return toast.success('Sucesso: Plano alterado com sucesso');
      } catch (error) {
        return toast.error('Error: Erro ao alterar plano!');
      }
    }

    try {
      await api.post('plans', data);

      loadPlans();
      setShowForm(false);
      setEditionForm(false);
      setInitialData({});
      return toast.success('Sucesso: Cadastro realizado com sucesso');
    } catch (error) {
      return toast.error('Error: Erro ao cadastrar plano!');
    }
  }

  function handleTotalPrice() {
    const duration = formRef.current.getFieldValue('duration');
    const price = formRef.current.getFieldValue('price');
    setTotalPrice(duration * price);
  }

  function handleExitForm() {
    setShowForm(false);
    setEditionForm(false);
    setInitialData({});
  }

  async function removePlan(id) {
    try {
      await api.delete(`plans/${id}`);
      loadPlans();
      toast.success('Sucesso: Plano apagado com sucesso');
    } catch (error) {
      toast.error('Error: Error ao apagar plano!');
    }
  }

  async function editPlan(id) {
    const response = await api.get(`plans/${id}`);
    setInitialData(response.data);
    setShowForm(true);
    setEditionForm(true);
  }

  return (
    <Container>
      <h2>Gerenciando Planos</h2>

      {/* Content */}
      {!showForm ? (
        <>
          <Filter options handleShowForm={setShowForm} />

          <Plans>
            {plans.map(plan => (
              <li key={plan.id}>
                <span>
                  {`${
                    registrations.filter(r => r.plan.title === plan.title)
                      .length
                  } `}
                  Alunos
                </span>

                <div>
                  <div>
                    <img src={start} alt="plan" />
                  </div>
                  <strong>{plan.title}</strong>
                  <span>{`R$ ${plan.price},00`}</span>
                  <p>{`${plan.duration} ${
                    plan.duration === 1 ? 'Mês' : 'Meses'
                  }`}</p>
                </div>

                <div>
                  <button onClick={() => editPlan(plan.id)} type="button">
                    Editar
                  </button>
                  <button onClick={() => removePlan(plan.id)} type="button">
                    Apagar
                  </button>
                </div>
              </li>
            ))}
          </Plans>
        </>
      ) : (
        <FormBox>
          <h2>{editionForm ? 'Alterar Plano' : 'Cadastro de Plano'} </h2>
          <Form initialData={initialData} ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Título do Plano</label>
              <Input name="title" type="text" placeholder="Título do plano" />
            </div>

            <div className="col-3">
              <label htmlFor="">Duração (em meses)</label>
              <Input
                name="duration"
                type="number"
                placeholder="Duração do plano"
                onChange={handleTotalPrice}
              />
            </div>

            <div className="col-3">
              <label htmlFor="">Preço Mensal</label>
              <Input
                name="price"
                type="number"
                placeholder="Preço mensal"
                onChange={handleTotalPrice}
              />
            </div>

            <div className="col-3">
              <label htmlFor="">Preço total</label>
              <input
                name="price_total"
                type="text"
                disabled
                value={`R$ ${
                  editionForm
                    ? initialData.duration * initialData.price
                    : totalPrice
                },00`}
              />
            </div>

            <div>
              <ButtonCancel type="button" onClick={() => handleExitForm()}>
                Cancelar
              </ButtonCancel>
              <ButtonCreate type="submit">Salvar</ButtonCreate>
            </div>
          </Form>
        </FormBox>
      )}
    </Container>
  );
}
