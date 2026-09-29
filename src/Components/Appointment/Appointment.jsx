import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import SectionHeading from '../SectionHeading/SectionHeading';

const emptyForm = { name: '', email: '', phone: '', date: '', reason: '', msg: '' };

const Appointment = ({ data, brand }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'error' | null
  const [formData, setFormData] = useState(emptyForm);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    const body = JSON.stringify({
      access_key: data.web3formsKey,
      subject: `Nueva solicitud de cita — ${brand.name}`,
      from_name: brand.name,
      ...formData,
    });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body,
      }).then((r) => r.json());
      if (res.success) {
        setFormData(emptyForm);
        setStatus('ok');
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="st-shape-wrap st-gray-bg">
      <div className="st-shape4">
        <img src="/shape/section_shape.png" alt="" />
      </div>
      <div className="st-shape6">
        <img src="/shape/contact-shape3.svg" alt="" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title={data.heading} subTitle={data.headingSub} />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <form className="st-appointment-form" id="appointment-form" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Nombre completo</label>
                    <input type="text" name="name" placeholder="María Pérez" onChange={handleInputChange} value={formData.name} required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Correo electrónico</label>
                    <input type="email" name="email" placeholder="maria@ejemplo.com" onChange={handleInputChange} value={formData.email} required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Teléfono</label>
                    <input type="tel" name="phone" placeholder="+52 55 0000 0000" onChange={handleInputChange} value={formData.phone} required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Fecha preferida</label>
                    <input type="date" name="date" onChange={handleInputChange} value={formData.date} required />
                    <div className="form-field-icon">
                      <Icon icon="fa:calendar" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="st-form-field st-style1">
                    <label>Motivo de consulta</label>
                    <select name="reason" onChange={handleInputChange} value={formData.reason} required>
                      <option value="">Selecciona una opción</option>
                      {data.reasons.map((reason, index) => (
                        <option value={reason} key={index}>{reason}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="st-form-field st-style1">
                    <label>Mensaje (opcional)</label>
                    <textarea cols={30} rows={6} name="msg" placeholder="Cuéntanos brevemente tus síntomas o dudas..." onChange={handleInputChange} value={formData.msg} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center">
                    {status === 'ok' && (
                      <p style={{ color: '#0cb8b6', fontWeight: 600 }}>¡Solicitud enviada! Te contactaremos pronto para confirmar tu cita.</p>
                    )}
                    {status === 'error' && (
                      <p style={{ color: '#e6492d', fontWeight: 600 }}>No pudimos enviar tu solicitud. Intenta de nuevo o llámanos directamente.</p>
                    )}
                    <div className="st-height-b10 st-height-lg-b10" />
                    <button className="st-btn st-style1 st-color1 st-size-medium" type="submit" disabled={loading}>
                      {loading ? 'Enviando...' : 'Solicitar cita'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default Appointment;
